import React from 'react'
import Image from 'next/image'
import dev from '../../public/dev.png'

const Startt = () => {
  return (
    <>
        <div className="w-[1160px] gap-[50px] h-[770px] bg-[black] border-[4px] border-[#AA00FA] rounded-[50px] flex justify-center items-center hover:shadow-[grey] duration-300 hover:translate-x-[10px]  hover:translate-y-[-10px] hover:shadow-[-15px_15px_0_0_rgba(0,0,0,0.3)] mb-[20px]">
        <div className="left pt-[43px] pl-[50px]">
          <Image src={dev} className='w-[530px] h-[750px]'/>
        </div>
        <div className="right">
            <p className='text-[#AA00FA] font-bold text-[60px]'>ПАКЕТ START</p>
            <p className='text-white font-bold text-[20px] w-[550px]'>Не знаешь с чего начать? Мы рекомендуем пакет «Start”. Это идеальное сочетание тренировок и совместных игр по самой выгодной цене.</p>
            <div className="">
                <div className="">
                <p className=''>1) Вводная тренировка!</p>
                <p>Знакомство с тренером / анализ трекера / просмотр и корректировка твоих настроек и др.</p>
                </div>
                <Image/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Startt