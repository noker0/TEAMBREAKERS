"use client"
import React from 'react'
import Image from 'next/image'
import blogi from '../public/oni.jpg'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Blogers = () => {
  useEffect (() =>{
    AOS.init({})
  },[])
  return (
    <>
    <div className="mt-[50px] md:mt-[200px] flex justify-center mb-[50px] px-4" data-aos="fade-up">
        <div className="w-full md:w-[80%] flex flex-col md:flex-row bg-black rounded-lg overflow-hidden">
            <div className="left w-full md:w-1/2 px-4 md:pl-[30px] py-8 md:pb-[30px] md:pt-[50px] text-white flex flex-col justify-center">
              <p className='font-bold text-3xl md:text-[60px] leading-tight md:leading-[80px] uppercase md:w-[700px] text-center md:text-left'>
                Тренируйся и играй с <span className='text-[#AA00FA]'> блогерами и стримерами</span>
              </p>
              <p className='text-base md:text-[19px] md:w-[600px] mt-4 text-center md:text-left'>
                На тренировках ты узнаешь много нового об игре, прокачаешь свои скиллы, сможешь задать вопросы о медийной карьере любимых блогеров/стримеров и классно проведешь время!
              </p>
              <div className='flex justify-center md:justify-start mt-6'>
                <button className='font-bold text-base md:text-[20px] border-[2px] border-[#AA00FA] bg-black rounded-[50px] w-[280px] md:w-[400px] py-3 hover:text-black hover:bg-white hover:border-black duration-300'>
                  Я В ДЕЛЕ
                </button>
              </div>
            </div>
            <div className="right w-full md:w-1/2 flex justify-center items-center md:mt-[100px] p-4">
                <Image 
                  src={blogi} 
                  alt="Блогеры и стримеры" 
                  className='w-full md:w-[650px] h-auto md:h-[400px] object-cover rounded-lg'
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogers