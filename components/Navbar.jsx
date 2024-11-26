"use client"
import Image from "next/image"
import logo from '../public/bb.png'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="bg-black bg-opacity-90 h-[90px] w-full flex items-center justify-between px-4 lg:justify-center fixed z-50" data-aos="fade-down">
        <Link href="/">
          <Image 
            src={logo} 
            className="w-[180px] h-[52px] lg:w-[260px] lg:h-[75px] lg:mr-[50px]"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[30px] mr-[40px]">
          <li><a href="#cards" className="text-white text-[13px] font-bold hover:text-[#BDBDBD] duration-300">ПАКЕТ "START"</a></li>
          <li><a href="#train" className="text-white text-[13px] font-bold hover:text-[#BDBDBD] duration-300">ТРЕНЕРЫ</a></li>
          <li><a href="#predi" className="text-white text-[13px] font-bold hover:text-[#BDBDBD] duration-300">ПРЕДЛОЖЕНИЯ</a></li>
          <li><Link href="NewTrainers" className="text-white text-[13px] font-bold hover:text-[#BDBDBD] duration-300">НОВЫЕ ТРЕНЕРЫ</Link></li>
          <li><Link href="Event" className="text-white text-[13px] font-bold hover:text-[#BDBDBD] duration-300">EVENTS</Link></li>
        </ul>

        <Link href="Fueture" className="hidden lg:block">
          <button className="bg-white w-[240px] h-[50px] rounded-[500px] font-bold hover:bg-[#AA00FA] hover:text-white duration-300">
            ХОЧУ СТАТЬ ТРЕНЕРОМ
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-90 pt-[90px]">
          <ul className="flex flex-col items-center gap-6 p-4">
            <li><a href="#" className="text-white text-[16px] font-bold hover:text-[#BDBDBD] duration-300">ПАКЕТ "START"</a></li>
            <li><a href="#" className="text-white text-[16px] font-bold hover:text-[#BDBDBD] duration-300">ТРЕНЕРЫ</a></li>
            <li><a href="#" className="text-white text-[16px] font-bold hover:text-[#BDBDBD] duration-300">ОТЗЫВЫ</a></li>
            <li><Link href="NewTrainers" className="text-white text-[16px] font-bold hover:text-[#BDBDBD] duration-300">НОВЫЕ ТРЕНЕРЫ</Link></li>
            <li><a href="#" className="text-white text-[16px] font-bold hover:text-[#BDBDBD] duration-300">НОВОСТИ</a></li>
            <li>
              <Link href="Fueture">
                <button className="bg-white w-[240px] h-[50px] rounded-[500px] font-bold hover:bg-[#AA00FA] hover:text-white duration-300 mt-4">
                  ХОЧУ СТАТЬ ТРЕНЕРОМ
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar