"use client"
import Image from "next/image"
import logo from '../public/bb.png'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
  useEffect (() =>{
    AOS.init({
      duration: 1000
    })
  },[])

  return (
    <>
        <nav className="bg-[black] bg-opacity-90 h-[90px] w-[100%] flex items-center justify-center fixed z-50" data-aos="fade-down">
           <Link href="/"> <Image src={logo} className="w-[260px] h-[75px] mr-[50px] "/></Link>
            <ul className="flex items-center gap-[30px] mr-[40px]">
                <li ><a href=""    className="text-white text-[13px] font-bold  duration-300 hover:text-[#BDBDBD] duration-300" >ПАКЕТ "START"</a></li>
                <li><a href="" className="text-white text-[13px] font-bold duration-300 hover:text-[#BDBDBD] duration-300 ">ТРЕНЕРЫ</a></li>
                <li><a href="" className="text-white text-[13px] font-boldpx] font-bold duration-300 hover:text-[#BDBDBD] duration-300 ">ОТЗЫВЫ</a></li>
                <li><a href="" className="text-white text-[13px] font-boldpx] font-bold duration-300 hover:text-[#BDBDBD] duration-300 ">ТАРИФЫ</a></li>
                <li><a href="" className="text-white text-[13te text-[13px] font-bold duration-300 hover:text-[#BDBDBD] duration-300 ">НОВОСТИ</a></li>
            </ul>
           <Link href="Fueture"> <button className="bg-[white] w-[240px] h-[50px] rounded-[500px] font-bold duration-300 hover:bg-[#AA00FA] text-black">ХОЧУ СТАТЬ ТРЕНЕРОМ</button></Link>
        </nav>
    </>
  )
}

export default Navbar