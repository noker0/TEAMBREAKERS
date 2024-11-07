import React from 'react'
import Image from 'next/image'
import dev from '../../public/dev.png'

const There = () => {
  return (
    <>
      <div className="w-[1160px] h-[770px] bg-[black] border-[4px] border-[#AA00FA] rounded-[50px] flex justify-center items-center    hover:shadow-[grey] duration-300 hover:translate-x-[10px]  hover:translate-y-[-10px] hover:shadow-[-15px_15px_0_0_rgba(0,0,0,0.3)] mb-[20px]">
        <p className='text-[white] text-[70px] font-bold w-[400px] text-center leading-[70px] cursor-pointer hover:text-[#AA00FA] duration-300'>There Is <span className='text-[#AA00FA] duration-300 hover:text-[white]'>Your Pricing</span></p>
      </div>
    </>
  )
}

export default There