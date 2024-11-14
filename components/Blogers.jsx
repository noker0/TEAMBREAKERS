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
    <div className="mt-[200px] flex justify-center mb-[50px] " data-aos="fade-up">
        <div className="w-[80%] h-[500px] flex bg-[black]">
            <div className="left pl-[30px] pb-[30px] pt-[50px] text-white">
            <p className='font-bold text-[60px] leading-[80px] uppercase w-[700px]'>Тренируйся и играй с <span className='text-[#AA00FA]'> блогерами и стримерами</span></p>
            <p className='text-[19px] w-[600px] mt-[10px]'>На тренировках ты узнаешь много нового об игре, прокачаешь свои скиллы, сможешь задать вопросы о медийной карьере любимых блогеров/стримеров и классно проведешь время!</p>
            <button className='font-bold text-[20px] border-[2px] border-[#AA00FA] bg-[black] rounded-[50px] w-[400px] py-[10px] mt-[20px] hover:text-[black] hover:bg-[white] hover:border-black duration-300'>Я В ДЕЛЕ</button>
            </div>
            <div className="right">
                <Image src={blogi} className='w-[650px] h-[400px] mt-[100px]'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogers