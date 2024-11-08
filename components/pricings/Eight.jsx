import React from 'react'
import Image from 'next/image'
import dev from '../../public/dev.png'
import dw from '../../public/dw.png'


const Eight = () => {
  return (
    <>
        <div className="w-[1160px] gap-[50px] h-[770px] bg-[black] border-[4px] border-[#AA00FA] rounded-[50px] flex justify-center items-center hover:shadow-[grey] duration-300 hover:translate-x-[10px]  hover:translate-y-[-10px] hover:shadow-[-15px_15px_0_0_rgba(0,0,0,0.3)] mb-[20px]">
        <div className="left pt-[43px] pl-[50px]">
          <Image src={dev} className='w-[500px] h-[750px]'/>
        </div>
        <div className="right">
            <p className='text-[#AA00FA] font-bold text-[60px]'>PREMIUM CARD</p>
            <p className='text-white font-bold text-[20px] w-[550px] mb-[40px]'>Не знаешь с чего начать? Мы рекомендуем пакет «Start”. Это идеальное сочетание тренировок и совместных игр по самой выгодной цене.</p>
            <div className="bg-[white] w-[500px] mb-[25px] justify-between h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white]">
                <div className="">
                <p className='font-bold text-[25px]'>1) Вводная тренировка!</p>
                <p className='text-[17px] mt-[5px]'>Знакомство с тренером / анализ трекера / просмотр и корректировка твоих настроек и др.</p>
                </div>
                <Image src={dw} className='w-[50px] h-[30px] mt-[70px]'/>
            </div>
            <div className="bg-[white] w-[500px] justify-between mb-[25px] h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white]">
                <div className="">
                <p className='font-bold text-[25px]'>2) Совместная игра с PRO</p>
                <p className='text-[17px] mt-[5px]'>Учись у PRO прямо в игре</p>
                </div>
                <Image src={dw} className='w-[30px] h-[30px] mt-[70px]'/>
            </div>
            <div className="bg-[white] w-[500px] mb-[25px] justify-between h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white]">
                <div className="">
                <p className='font-bold text-[25px]'>3) Разбор реплея совместной игры</p>
                <p className='text-[17px] mt-[5px]'>Выявишь свои ошибки и построишь план по улучшению с коучем</p>
                </div>
                <Image src={dw} className='w-[30px] h-[30px] mt-[70px]'/>
            </div>
            <div className="flex items-center justify-between pr-[50px]">
              <p className='text-[#AA00FA] font-bold text-[50px]'>300$</p>
              <button className='bg-[#AA00FA] font-bold text-[20px] w-[200px] h-[60px] rounded-[50px] hover:bg-[white] duration-300'>GO НАЧНЁМ</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Eight