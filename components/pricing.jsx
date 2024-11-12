"use client"
import React from 'react'
import Image from 'next/image'
import fg from '../public/fg.png'
import There from './pricings/There'
import Startt from './pricings/Startt'
import { useState } from 'react'
import Two from './pricings/two'
import Three from './pricings/Three'
import Four from './pricings/Four'
import Five from './pricings/five'
import Six from './pricings/six'
import Seven from './pricings/seven'
import Eight from './pricings/Eight'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Pricing = () => {
    const [showThere, setShowThere] = useState(true);
    const [showStart, setShowStart] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [showSix, setShowSix] = useState(false);
    const [showSeven, setShowSeven] = useState(false);
    const [showEight, setShowEight] = useState(false);
  
    const handlePremiumCardClick = () => {
      setShowThere(false);
      setShowStart(true);
      setShowTwo(false);
      setShowThree(false);
      setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowSeven(false);
    setShowEight(false);
    };
    const two = () => {
        setShowThere(false);
      setShowStart(false);
      setShowTwo(true);
      setShowThree(false);
      setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowSeven(false);
    setShowEight(false);
    }
    const three = () => {
        setShowThere(false);
      setShowStart(false);
      setShowThree(true);
      setShowTwo(false)
      setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowSeven(false);
    setShowEight(false);
    }
    const four = () => {
        setShowThere(false);
      setShowStart(false);
      setShowFour(true);
      setShowTwo(false)
      setShowThree(false);
    setShowFive(false);
    setShowSix(false);
    setShowSeven(false);
    setShowEight(false);
    }
    const five = () => {
        setShowThere(false);
      setShowStart(false);
      setShowFive(true);
      setShowThree(false);
      setShowTwo(false)
      setShowFour(false);
    setShowSix(false);
    setShowSeven(false);
    setShowEight(false);
    }
    const six = () => {
        setShowThere(false);
      setShowStart(false);
      setShowSix(true);
      setShowThree(false);
      setShowFour(false);
      setShowTwo(false)
    setShowFive(false);
    setShowSeven(false);
    setShowEight(false);
    }
    const seven = () => {
        setShowThere(false);
      setShowStart(false);
      setShowSeven(true);
      setShowTwo(false)
      setShowThree(false);
      setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowEight(false);
    }
    const eight = () => {
        setShowThere(false);
      setShowStart(false);
      setShowEight(true);
      setShowTwo(false)
      setShowThree(false);
      setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowSeven(false);
    }


    useEffect (() =>{
      AOS.init({})
    },[])
    return (
        <>
      
        <div className="flex justify-center my-[50px] mt-[150px]" data-aos="zoom-in">
            <p className='text-[white] text-[50px]'>НАБОРЫ✌</p>
        </div>
            <div className="" data-aos="zoom-in">
                <div className="top flex items-center justify-center gap-[20px]">
                    <div className="left flex flex-col gap-[15px]">
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ START</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] '>от 35$</p>
                        <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer' onClick={handlePremiumCardClick}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ VAVILION</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] '>от 45$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer' onClick={two}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ MEDIUM</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>75$</span>50$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[50px] pb-[3px] cursor-pointer'  onClick={three}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ SENIOR</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>130$</span>95$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[63px] pb-[3px] cursor-pointer'  onClick={four}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[white] w-[3px] h-[460px] rounded-[50px]">  </div>
                    <div className="right flex flex-col items-center justify-center gap-[20px]">
                    <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>КОМПЛЕКТ ГЕЙМЕР</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] '>от 65$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer'  onClick={five}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>КОМПЛЕКТ PRO</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>250$</span>150$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[73px] pb-[3px] cursor-pointer'  onClick={six}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ ZXORY</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] '>от 35$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer'  onClick={seven}/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>PREMIUM CARD</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>325$</span>300$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[75px] pb-[3px] cursor-pointer'  onClick={eight}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>

            <div className="mt-[100px] flex justify-center"  >
            {showThere && <There />}
            {showStart && <Startt />}
            {showTwo && <Two />}
            {showThree && <Three />}
            {showFour && <Four />}
            {showFive && <Five />}
            {showSix && <Six />}
            {showSeven && <Seven />}
            {showEight && <Eight />}
            </div>
           
        </>
    )
}

export default Pricing