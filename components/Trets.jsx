'use client'
import React, { useState } from 'react';
import fortniteImg from '../public/fortnite-bg.jpg';
import dota from '../public/dot.png';
import fort from '../public/fort.png'
import br from '../public/rb.png'
import cs from '../public/sc.png'
import Image from 'next/image';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Trets = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  const levelContent = {
    beginner: [
      'Базовое понимание механики игры',
      'Знание основных приемов строительства',
      'Минимум 100 часов игрового времени'
    ],
    intermediate: [
      'Уверенное владение механикой строительства',
      'K/D соотношение выше 1.5',
      'Минимум 500 часов игрового времени'
    ],
    pro: [
      'Мастерское владение всеми игровыми механиками',
      'K/D соотношение выше 3.0',
      'Опыт участия в турнирах'
    ]
  };

  return (
    <>
      <div className="mt-[200px]">
        <p className="font-bold text-white text-5xl uppercase pl-24 mb-[100px]">
          Требования к тренерам
        </p>
        <div className="flex justify-center">

        
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${fortniteImg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
          <div className="right bg-[#AA00FA] ml-[300px]">
            <Image src={fort} className=' w-[400px] '/>
          </div>
        </div>
        </div>



        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${dota.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>


        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${cs.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>


        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${br.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>
      </div>
    </>
  );
};

export default Trets;