"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import gold from '../public/ne.png'

const Poket = () => {
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
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mt-[50px] md:mt-[200px] mb-[50px]" data-aos="fade-down">
                {/* Image - Centered on mobile, positioned on desktop */}
                <div className="flex justify-center">
                    <Image 
                        ref={elementRef} 
                        src={gold} 
                        alt="gold" 
                        onMouseEnter={handleMouseEnter} 
                        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]" 
                    />
                </div>

                {/* Text Content - Centered on mobile, right-aligned on desktop */}
                <div className="text-center md:text-right md:order-1 w-full md:w-auto">
                    <p className="text-[#AA00FA] font-bold uppercase text-[20px] md:text-[30px] mb-[20px] md:mb-[30px] md:w-[900px]">
                        Подарочные сертификаты 
                        <span className="block text-white md:inline"> Порадуй геймера дополнительной тренировкой!</span>
                    </p>
                    
                    <div className="flex justify-center md:justify-end">
                        <button 
                            className="bg-[#AA00FA] text-black font-bold uppercase 
                            text-[18px] md:text-[22px] 
                            w-[250px] md:w-[350px] 
                            h-[50px] md:h-[60px] 
                            rounded-[50px] 
                            hover:w-[300px] md:hover:w-[600px] 
                            duration-300 
                            hover:text-[#AA00FA] 
                            hover:bg-white"
                        >
                            ПОДАРИТЬ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poket