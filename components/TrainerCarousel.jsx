'use client';

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TrainerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const trainers = [
    {
      image: "/ch.png", 
      game: "VALORANT",
      title: "ТИТУЛЬНЫЙ ТРЕНЕР",
      name: "SheN",
      stats: ["RADIANT", "ОПЫТ 2 ГОДА"],
      achievements: [
        "Мейн роль - Дуэлант",
        "Опыт игры с PRO, VCT Contenders",
        "Более 5000 часов игры на Jett"
      ]
    },
    {
      image: "/f.png", 
      game: "DOTA 2",
      title: "ТИТУЛЬНЫЙ ТРЕНЕР",
      name: "FlareRu",
      stats: ["11500 MMR", "ОПЫТ БОЛЕЕ 3.5 ЛЕТ"],
      achievements: [
        "Ключевые роли - 3/4/5. Выиграл 6 турниров от ВК Плей на авг 8-9К mmr",
        "Имеет первый спортивный разряд по киберспорту",
        "Очень много часов игры"
      ]
    },
    {
      image: "/j.png", 
      game: "CS2",
      title: "ТИТУЛЬНЫЙ ТРЕНЕР",
      name: "JIuTuYm",
      stats: ["3000 ELO CS2", "4200 ELO CSGO", "ОПЫТ 3 ГОДА"],
      achievements: [
        "Ex-капитан Meta4pro",
        "Действующий командный тренер и аналитик",
        "Опыт прохода с Open до Main ESEA League"
      ]
    },
  ];

  const totalSlides = trainers.length;

  useEffect(() => {
    AOS.init({});

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const TrainerCard = ({ trainer }) => (
    <div className="w-full min-w-[300px] flex-shrink-0 px-4 mt-[50px]" data-aos="fade-right">
      <div className="bg-black border border-[#AA00FA] rounded-lg p-6 relative overflow-hidden h-[580px]">
        <div className="flex flex-col h-full space-y-4">
          <div className="flex space-x-2 justify-between">
            <span className="px-3 py-1 bg-transparent border border-white rounded-full text-white text-sm">
              {trainer.game}
            </span>
            <span className="px-3 py-1 bg-transparent border border-white rounded-full text-white text-sm">
              {trainer.title}
            </span>
          </div>

          <div className="relative w-48 h-48 mx-auto rounded-full border-2 border-[#AA00FA] overflow-hidden hover:w-[250px] duration-300 cursor-pointer">
            <Image
              src={trainer.image}
              alt={`Тренер ${trainer.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h3 className="text-2xl font-bold text-white text-center hover:bg-[#AA00FA] duration-300">
            {trainer.name}
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {trainer.stats.map((stat, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-transparent border border-white rounded-full text-white text-sm"
              >
                {stat}
              </span>
            ))}
          </div>

          <ul className="text-white space-y-2">
            {trainer.achievements.map((achievement, idx) => (
              <li 
                className="hover:text-[#AA00FA] duration-300 font-bold cursor-pointer hover:bg-white p-[5px]" 
                key={idx}
              >
                {achievement}
              </li>
            ))}
          </ul>

          <button className="w-full px-6 py-2 bg-transparent border-2 border-[#AA00FA] text-[#AA00FA] rounded-full hover:bg-[#AA00FA] font-bold hover:text-black transition-all duration-300">
            ЗАПИСАТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 mb-[50px]">
      {!isMobile ? (
        <div className="flex items-center">
          <button 
            onClick={prevSlide} 
            className="p-2 text-white hover:text-[#AA00FA] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="flex overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${totalSlides * 100}%` }}
            >
              {trainers.map((trainer, index) => (
                <TrainerCard key={index} trainer={trainer} />
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide} 
            className="p-2 text-white hover:text-[#AA00FA] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>
      )}

      {!isMobile && (
        <div className="flex justify-center space-x-2 mt-4">
          {trainers.map((_, index) => (
            <button
              key={index}
              className={`w-6 h-4 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#AA00FA]' : 'bg-white'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainerCarousel;