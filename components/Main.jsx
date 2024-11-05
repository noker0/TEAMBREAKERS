import Image from "next/image"
import dw from '../public/dw.png'
import nor from '../public/noroott.png'
import GameCarousel from "./Carousel"
import apex from '../public/apex.png'
import cs from '../public/cs.png'
import dota from '../public/dota.png'
import forr from '../public/for.png'
import lol from '../public/lol.png'

const Main = () => {
  return (
    <>
    <div className="pt-[150px]  w-[100%]">
        <div className="top flex">
        <div className="right pl-[12%]">
            <p className="text-[60px] font-bold w-[552px] leading-[60px] uppercase text-[white] mb-[5px]">персональные тренировки с PRO-геймерами </p>
            <p className="text-[70px] font-bold w-[552px] leading-[80px] uppercase text-[#AA00FA]">с гарантией результата</p>
            <button className="bg-[#AA00FA] w-[350px] h-[60px] rounded-[50px] font-bold text-[20px] hover:bg-white duration-300 flex items-center justify-center gap-[20px] mt-[40px]">GO ТРЕНИРОВАТЬСЯ <Image src={dw} className="w-[30px] h-[30px]"/></button>
            <button className="bg-[black] text-[#AA00FA] border-[2px] border-[#AA00FA] w-[350px] h-[60px] rounded-[50px] font-bold text-[20px] hover:bg-[#AA00FA] hover:border-black hover:border-[10px] hover:text-[black] duration-300 flex items-center justify-center gap-[20px] mt-[20px]">НАПИСАТЬ В TG </button>
            <p className="text-white text-[23px] font-bold w-[450px] mt-[10px] hover:text-[#BDBDBD] duration-300">Делаем тренировки и без Discord! Приходи.</p>
        </div>
        <div className="left">
            <Image src={nor}/>
        </div>
        </div>
        <div className="bottom">
            <GameCarousel/>
        </div>
    </div>
    </>
  )
}

export default Main