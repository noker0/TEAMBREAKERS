import React from 'react';
import apex from '../public/apex.png';
import cs from '../public/cs.png';
import dota from '../public/dota.png';
import forr from '../public/for.png';
import lol from '../public/lol.png';
import val from '../public/val.png';
import Image from 'next/image';

const GameCarousel = () => {
  const games = [
    { name: 'VALORANT', img: val},
    { name: 'APEX', img: apex },
    { name: 'DOTA 2', img: dota },
    { name: 'FORTNITE', img: forr },
    { name: 'CS2', img: cs },
    { name: 'LOL', img: lol }
  ];

  const CarouselContent = () => (
    <div className="flex items-center shrink-0 cursor-pointer">
      {games.map((game, index) => (
        <React.Fragment key={index}>
          <div className="px-2 lg:px-3">
            <Image 
              src={game.img} 
              alt={game.name} 
              width={60} 
              height={60} 
              className="w-[80px] h-[20px]"
            />
          </div>
          <div className="text-white mx-1 lg:mx-2 text-[20px] lg:text-[30px]">•</div>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-black py-3 lg:py-5 overflow-hidden">
      <div className="flex relative animate-scroll">
        <CarouselContent />
        <CarouselContent />
        <CarouselContent />
        <CarouselContent />
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default GameCarousel;
