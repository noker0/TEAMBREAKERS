import React from 'react'
import Image from "next/image"
import dw from '../public/wd.png'

const Cards = () => {
  return (
    <>
        <div className="flex justify-center m-[50px]">
            <div className="w-[1160px] h-[370px] bg-[black] text-white rounded-[50px] border-[white] border-[5px] pl-[40px] pt-[30px] cursor-pointer duration-300 hover:translate-x-[10px] hover:translate-y-[-10px] hover:border-b-[15px] hover:border-l-[15px]  ">
                <p className='font-bold text-[50px] '>О нас в цифрах:</p>
                <p className='font-bold text-[25px] leading-[20px]'>Мы тренировочная платформа №1 во всём мире!</p>
                <div className="flex mt-[20px] items-center gap-[50px] justify-center">
                    <div className="">
                        <p className='text-[#AA00FA] font-bold text-[55px]'>{'>5500'}</p>
                        <p className='w-[175px] text-[20px]'>геймеров прошли тренировки на платформе</p>
                    </div>
                    <div className="w-[2px] h-[140px] bg-[white] rounded-[50px]"></div>
                    <div className="">
                        <p className='text-[#AA00FA] font-bold text-[55px]'>{'>31 000'}</p>
                        <p className='w-[175px] text-[20px]'>тренировок и игр проведено на платформе</p>
                    </div>
                    <div className="w-[2px] h-[140px] bg-[white] rounded-[50px]"></div>
                    <div>
                        <p className='text-[#AA00FA] font-bold text-[55px] flex justify-center'>{'>60'}</p>
                        <p className='w-[175px] text-[20px] flex justify-center mb-[60px]'>тренеров</p>
                    </div>
                    <div className="w-[2px] h-[140px] bg-[white] rounded-[50px]"></div>
                    <div className="">
                        <p className='text-[#AA00FA] font-bold text-[55px]'>{'<75%'}</p>
                        <p className='w-[175px] text-[20px]'>геймеров проходят более 5 тренировок</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-[50px] justify-center mt-[120px] mb-[50px]">
            <div className="bg-[black] w-[272px] h-[183px] rounded-[25px] border-[1px] border-[white] p-[15px] pt-[15px] flex shadow-lg shadow-solid duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop">
                <div className="">
                <p className='text-[white] text-[23px] font-bold w-[200px]'>Результат гарантирован</p>
                <p className='text-[white] font-bold text-[13px] mt-[10px]'>Гарантированно повысь свой ранг после прохождения плана тренировок от коуча</p>
                </div>
                <div className="flex items-end">
                    <Image src={dw} className='w-[70px] h-[30px]'/>
                </div>
            </div>
            <div className="bg-[black] w-[272px] h-[183px] rounded-[25px] border-[1px] border-[white] p-[15px] pt-[15px] flex shadow-lg shadow-solid duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop">
                <div className="">
                <p className='text-[white] text-[23px] font-bold w-[200px]'>Только опытные тренеры</p>
                <p className='text-[white] font-bold text-[13px] mt-[10px]'>Наши тренеры - топ 1-2% лучших игроков в мире</p>
                </div>
                <div className="flex items-end">
                    <Image src={dw} className='w-[70px] h-[30px]'/>
                </div>
            </div>
            <div className="bg-[black] w-[272px] h-[183px] rounded-[25px] border-[1px] border-[white] p-[15px] pt-[15px] flex shadow-lg shadow-solid duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop">
                <div className="">
                <p className='text-[white] text-[18px] font-bold w-[200px]'>Эффективные форматы тренировок</p>
                <p className='text-[white] font-bold text-[13px] mt-[10px]'>Разрабатываем индивидуальный план занятий для каждого ученика</p>
                </div>
                <div className="flex items-end">
                    <Image src={dw} className='w-[70px] h-[30px]'/>
                </div>
            </div>
            <div className="bg-[black] w-[272px] h-[183px] rounded-[25px] border-[1px] border-[white] p-[15px] pt-[15px] flex shadow-lg shadow-solid duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop">
                <div className="">
                <p className='text-[white] text-[23px] font-bold w-[200px]'>Научись зарабатывать на игре</p>
                <p className='text-[white] font-bold text-[13px] mt-[10px]'>Стань стримером, тренером, профессиональным игроком </p>
                </div>
                <div className="flex items-end">
                    <Image src={dw} className='w-[70px] h-[30px]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards