import Image from "next/image"
import logo from '../public/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="bg-[black] bg-opacity-90 h-[100px] w-[100%] flex items-center">
            <Image src={logo} className="w-[280px] h-[55px] "/>
            <ul>
                <li><a href="" className="text-white">ПАКЕТ "START"</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar