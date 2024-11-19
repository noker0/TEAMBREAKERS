import Image from "next/image"
import logo from '../public/bb.png'
import vk from '../public/vk.png'
import tw from '../public/tw.png'
import tg from '../public/tg.png'

const Footer = () => {
  return (
    <>
      <div className="mt-[200px]">
        <div className="px-[150px] ">
          <div className="side-1 flex justify-between items-center w-[100%]">
            <Image src={logo} className="w-[250px] h-[89px]" />
            <div className="flex items-center gap-[5px]">
              <div className="hover:bg-[white] rounded-[50px] duration-300 p-[5px]">
                <Image src={vk} className="w-[45px] h-[45px] cursor-pointer hover:w-[60px] hover:h-[60px] duration-300" />
              </div>
              <div className="hover:bg-[white] rounded-[50px] duration-300 p-[5px]">
                <Image src={tg} className="w-[35px] h-[35px] cursor-pointer hover:w-[50px] hover:h-[50px] duration-300" />
              </div>
              <div className="hover:bg-[white] rounded-[50px] duration-300 p-[5px]">
                <Image src={tw} className="w-[35px] h-[35px] cursor-pointer hover:w-[50px] hover:h-[50px] duration-300" />
              </div>
            </div>
          </div>
          <div className="side-2">
            <div className="cards">
              <div className="card">
                <div className="top">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer