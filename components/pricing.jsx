import React from 'react'
import Image from 'next/image'
import fg from '../public/fg.png'
import There from './pricings/There'
import Link from 'next/link'
import Startt from './pricings/Startt'
import { useState } from 'react'


const Pricing = () => {
    const [showThere, setShowThere] = useState(true);
    const [showStart, setShowStart] = useState(false);
  
    const handlePremiumCardClick = () => {
      setShowThere(false);
      setShowStart(true);
    };
    return (
        <>
      
        <div className="flex justify-center my-[50px] mt-[150px]">
            <p className='text-[white] text-[50px]'>НАБОРЫ✌</p>
        </div>
            <div className="">
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
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ MEDIUM</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>75$</span>50$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[50px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ SENIOR</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>130$</span>95$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[63px] pb-[3px] cursor-pointer'/>
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
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>КОМПЛЕКТ PRO</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>250$</span>150$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[73px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>ПАКЕТ ZXORY</p>
                            <div className="">
                              <p className='text-[white] font-bold text-[23px] '>от 35$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[45px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[black] w-[400px] h-[100px] rounded-[25px] border-[2px] border-[#AA00FA] pulse-glow">
                            <div className="top flex items-center justify-between px-[20px] h-[100px]">
                            <p className='text-[white] font-bold text-[28px]'>PREMIUM CARD</p>
                            <div className="">
                            <p className='text-[white] font-bold text-[23px] flex items-center gap-[5px]'><span className='text-[grey] text-[19px] pt-[1px] line-through'>325$</span>300$</p>
                             <Image src={fg} className='w-[30px] h-[30px] absolute ml-[75px] pb-[3px] cursor-pointer'/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>

            <div className="mt-[100px] flex justify-center">
            {showThere && <There />}
            {showStart && <Startt />}
            </div>
           
        </>
    )
}

export default Pricing