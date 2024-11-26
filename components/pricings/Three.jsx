"use client";
import React from 'react'
import Image from 'next/image'
import dev from '../../public/dev.png'
import dw from '../../public/dw.png'


const Three = () => {
  return (
    <>
    <div className="w-[1160px] gap-[50px] h-[770px] bg-[black] border-[4px] border-[#AA00FA] rounded-[50px] flex justify-center items-center hover:shadow-[grey] duration-300 hover:translate-x-[10px] hover:translate-y-[-10px] hover:shadow-[-15px_15px_0_0_rgba(0,0,0,0.3)] mb-[20px] 
      phone:flex-col phone:w-full phone:h-auto phone:gap-[20px] phone:rounded-[20px]">
      <div className="left pt-[43px] pl-[50px] phone:p-0 phone:flex phone:justify-center">
        <Image
          src={dev}
          className="w-[500px] h-[750px] phone:w-[300px] phone:h-[450px]"
        />
      </div>
      <div className="right phone:px-[10px] phone:w-full">
        <p className="text-[#AA00FA] font-bold text-[60px] phone:text-[30px] text-center">
        ПАКЕТ MEDIUM
        </p>
        <p className="text-white font-bold text-[20px] w-[550px] mb-[40px] phone:w-full phone:text-[15px] text-center">
          Не знаешь с чего начать? Мы рекомендуем пакет «Start”. Это идеальное
          сочетание тренировок и совместных игр по самой выгодной цене.
        </p>
        <div className="bg-[white] w-[500px] mb-[25px] justify-between h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white] phone:w-full">
          <div>
            <p className="font-bold text-[25px] phone:text-[18px]">
              1) Вводная тренировка!
            </p>
            <p className="text-[17px] mt-[5px] phone:text-[13px]">
              Знакомство с тренером / анализ трекера / просмотр и корректировка
              твоих настроек и др.
            </p>
          </div>
          <Image
            src={dw}
            className="w-[50px] h-[30px] mt-[70px] phone:w-[30px] phone:h-[20px] phone:mt-[auto]"
          />
        </div>
        <div className="bg-[white] w-[500px] mb-[25px] justify-between h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white] phone:w-full">
          <div>
            <p className="font-bold text-[25px] phone:text-[18px]">
              2) Совместная игра с PRO
            </p>
            <p className="text-[17px] mt-[5px] phone:text-[13px]">
              Учись у PRO прямо в игре
            </p>
          </div>
          <Image
            src={dw}
            className="w-[30px] h-[30px] mt-[70px] phone:w-[30px] phone:h-[20px] phone:mt-[auto]"
          />
        </div>
        <div className="bg-[white] w-[500px] mb-[25px] justify-between h-[120px] rounded-[20px] p-[10px] flex shadow-lg shadow-solidy duration-300 hover:translate-x-[5px] cursor-pointer hover:translate-y-[5px] hover:shadow-solid-dop hover:bg-[#AA00FA] hover:text-[white] phone:w-full">
          <div>
            <p className="font-bold text-[25px] phone:text-[18px]">
              3) Разбор реплея совместной игры
            </p>
            <p className="text-[17px] mt-[5px] phone:text-[13px]">
              Выявишь свои ошибки и построишь план по улучшению с коучем
            </p>
          </div>
          <Image
            src={dw}
            className="w-[30px] h-[30px] mt-[70px] phone:w-[30px] phone:h-[20px] phone:mt-[auto]"
          />
        </div>
        <div className="flex items-center justify-between pr-[50px] phone:pr-0 phone:flex-col phone:gap-[10px]">
          <p className="text-[#AA00FA] font-bold text-[50px] phone:text-[30px]">
            от 50$
          </p>
          <button className="bg-[#AA00FA] font-bold text-[20px] w-[200px] h-[60px] rounded-[50px] hover:bg-[white] duration-300 phone:w-[150px] phone:h-[50px] phone:text-[15px]">
            GO НАЧНЁМ
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Three