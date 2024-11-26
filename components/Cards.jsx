"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from 'react'
import Image from "next/image"
import dw from '../public/wd.png'

const Cards = () => {
    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <>
            {/* Статистика */}
            <div className="flex justify-center mx-4 lg:m-[50px]" data-aos="fade-up-right">
                <div className="w-full lg:w-[1160px] min-h-[370px] lg:h-[370px] bg-black text-white rounded-[25px] lg:rounded-[50px] border-white border-[3px] lg:border-[5px] p-4 lg:pl-[40px] lg:pt-[30px] cursor-pointer duration-300 hover:translate-x-[10px] hover:translate-y-[-10px] hover:border-b-[15px] hover:border-l-[15px]">
                    <p className='font-bold text-[30px] lg:text-[50px] text-center lg:text-left'>О нас в цифрах:</p>
                    <p className='font-bold text-[18px] lg:text-[25px] leading-[20px] text-center lg:text-left mt-2 lg:mt-0'>Мы тренировочная платформа №1 во всём мире!</p>
                    
                    <div className="flex flex-col lg:flex-row mt-[20px] items-center gap-[30px] lg:gap-[50px] justify-center">
                        <StatBlock number=">5500" text="геймеров прошли тренировки на платформе" />
                        <Divider />
                        <StatBlock number=">31 000" text="тренировок и игр проведено на платформе" />
                        <Divider />
                        <StatBlock number=">60" text="тренеров" center />
                        <Divider />
                        <StatBlock number="<75%" text="геймеров проходят более 5 тренировок" />
                    </div>
                </div>
            </div>

            {/* Карточки преимуществ */}
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] justify-center mt-[60px] lg:mt-[120px] mb-[30px] lg:mb-[50px] px-4 lg:px-0" data-aos="fade-up-right">
                <FeatureCard
                    title="Результат гарантирован"
                    description="Гарантированно повысь свой ранг после прохождения плана тренировок от коуча"
                    iconWidth="70px"
                />
                <FeatureCard
                    title="Только опытные тренеры"
                    description="Наши тренеры - топ 1-2% лучших игроков в мире"
                    iconWidth="50px"
                />
                <FeatureCard
                    title="Эффективные форматы тренировок"
                    description="Разрабатываем индивидуальный план занятий для каждого "
                    iconWidth="70px"
                />
                <FeatureCard
                    title="Научись зарабатывать на игре"
                    description="Стань стримером, тренером, профессиональным игроком"
                    iconWidth="50px"
                />
            </div>
        </>
    )
}

// Компонент для статистического блока
const StatBlock = ({ number, text, center = false }) => (
    <div className={center ? "text-center" : ""}>
        <p className='text-[#AA00FA] font-bold text-[40px] lg:text-[55px]'>{number}</p>
        <p className='w-[175px] text-[16px] lg:text-[20px] text-center lg:text-left'>{text}</p>
    </div>
)

// Компонент разделителя
const Divider = () => (
    <div className="w-[140px] h-[2px] lg:w-[2px] lg:h-[140px] bg-white rounded-[50px]"></div>
)

// Компонент карточки преимущества
const FeatureCard = ({ title, description, iconWidth }) => (
    <div className="bg-black w-full lg:w-[272px] h-[183px] rounded-[25px] border-[1px] border-white p-[15px] flex shadow-lg shadow-solid duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop">
        <div>
            <p className='text-white text-[20px] lg:text-[23px] font-bold w-[200px]'>{title}</p>
            <p className='text-white font-bold text-[13px] mt-[10px]'>{description}</p>
        </div>
        <div className="flex items-end">
            <Image src={dw} className={`w-[${iconWidth}] h-[30px]`} alt="Icon" />
        </div>
    </div>
)

export default Cards