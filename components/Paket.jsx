"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import gold from '../public/gold.png'

const Paket = () => {
    const [isRotating, setIsRotating] = useState(false)
    const rotationRef = useRef(0)
    const elementRef = useRef(null)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })

        const element = elementRef.current
        let startTime = null
        let animationFrame

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsedTime = currentTime - startTime

            if (isRotating) {
                rotationRef.current = (elapsedTime / 20) % 360
                element.style.transform = `rotate(${rotationRef.current}deg)`
                animationFrame = requestAnimationFrame(animate)
            }
        }

        if (isRotating) {
            animationFrame = requestAnimationFrame(animate)
        } else {
            element.style.transition = 'transform 0.5s ease-out'
            element.style.transform = `rotate(${Math.round(rotationRef.current / 360) * 360}deg)`
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isRotating])

    const handleMouseEnter = () => {
        const element = elementRef.current
        element.style.transition = isRotating ? 'transform 0.5s ease-out' : 'none'
        setIsRotating(!isRotating)
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row pr-0 md:pr-[50px] justify-center items-center gap-0 md:gap-[150px] mt-[50px] md:mt-[200px] mb-[50px]" id="predi" data-aos="fade-up">
                <div className="text-center md:text-left mb-8 md:mb-0 w-full md:w-auto">
                    <p className="text-white font-bold uppercase text-[30px] md:text-[50px] w-full md:w-[700px] mb-[20px] md:mb-[30px] px-4 md:px-0">
                        <span className="text-[#AA00FA]">Сформируй</span> выгодный пакет под свой бюджет
                    </p>
                    <div className="flex justify-center md:justify-start px-4 md:px-0">
                        <button className="bg-[#AA00FA] text-black font-bold uppercase text-[18px] md:text-[22px] w-[250px] md:w-[350px] h-[50px] md:h-[60px] rounded-[50px] hover:w-[300px] md:hover:w-[600px] duration-300 hover:text-[#AA00FA] hover:bg-white">
                            СФОРМИРОВАТЬ
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image 
                        ref={elementRef} 
                        src={gold} 
                        alt="gold" 
                        onMouseEnter={handleMouseEnter} 
                        className="w-[150px] h-[200px] md:w-[200px] md:h-[250px]" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Paket