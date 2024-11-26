"use client"
import Image from "next/image"
import dw from '../public/dw.png'
import nor from '../public/noroott.png'
import GameCarousel from "./Carousel"
import apex from '../public/apex.png'
import cs from '../public/cs.png'
import dota from '../public/dota.png'
import forr from '../public/for.png'
import lol from '../public/lol.png'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <div className="pt-[90px] lg:pt-[150px] w-full px-4 lg:px-0" data-aos="fade-right">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:pl-[12%] text-center lg:text-left">
            <p className="text-[32px] lg:text-[60px] font-bold lg:w-[552px] leading-tight lg:leading-[60px] uppercase text-white mb-[5px]">
              персональные тренировки с PRO-геймерами
            </p>
            <p className="text-[40px] lg:text-[70px] font-bold lg:w-[552px] leading-tight lg:leading-[80px] uppercase text-[#AA00FA]">
              с гарантией результата
            </p>
            
            <div className="flex flex-col items-center lg:items-start">
              <button className="bg-[#AA00FA] w-full lg:w-[350px] h-[60px] rounded-[50px] font-bold text-[18px] lg:text-[20px] hover:bg-white duration-300 flex items-center justify-center gap-[20px] mt-[40px]">
                GO ТРЕНИРОВАТЬСЯ <Image src={dw} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" alt="Download icon"/>
              </button>
              
              <button className="bg-black text-[#AA00FA] border-[2px] border-[#AA00FA] w-full lg:w-[350px] h-[60px] rounded-[50px] font-bold text-[18px] lg:text-[20px] hover:bg-[#AA00FA] hover:border-black hover:border-[10px] hover:text-black duration-300 flex items-center justify-center gap-[20px] mt-[20px]">
                НАПИСАТЬ В TG
              </button>
              
              <p className="text-white text-[18px] lg:text-[23px] font-bold lg:w-[450px] mt-[10px] hover:text-[#BDBDBD] duration-300 text-center lg:text-left">
                Делаем тренировки и без Discord! Приходи.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 flex justify-center lg:block">
            <Image 
              src={nor} 
              className="w-[300px] lg:w-auto h-auto"
              alt="Hero image"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <GameCarousel />
        </div>
      </div>
    </>
  )
}

export default Main