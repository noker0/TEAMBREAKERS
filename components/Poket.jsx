"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState, useRef } from "react"  // Добавляем useRef
import Image from "next/image"
import gold from '../public/ne.png'

const Poket = () => {
    const [isRotating, setIsRotating] = useState(false)
    const rotationRef = useRef(0)  // Для отслеживания текущего угла
    const elementRef = useRef(null)  // Для ссылки на элемент

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })

        // Отслеживаем анимацию
        const element = elementRef.current
        let startTime = null
        let animationFrame

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsedTime = currentTime - startTime

            if (isRotating) {
                rotationRef.current = (elapsedTime / 20) % 360  // Скорость вращения
                element.style.transform = `rotate(${rotationRef.current}deg)`
                animationFrame = requestAnimationFrame(animate)
            }
        }

        if (isRotating) {
            animationFrame = requestAnimationFrame(animate)
        } else {
            // Плавная остановка
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
        <>
            <div className="flex pr-[50px] justify-center  mt-[200px] items-center mb-[50px]" data-aos="fade-down">
            <Image ref={elementRef} src={gold} alt="gold" onMouseEnter={handleMouseEnter} className="w-[250px] h-[250px] " />
                <div className="">
                    <p className="text-[#AA00FA] text-end font-bold uppercase text-[30px] w-[900px] mb-[30px] ">Подарочные сертификаты <span className="text-[white]"> Порадуй геймера дополнительной тренировкой!</span></p>
                    <div className="flex justify-end">
                    <button className="bg-[#AA00FA] text-[black] font-bold upprcase text-[22px] w-[350px] h-[60px] rounded-[50px] hover:w-[600px] duration-300 hover:text-[#AA00FA] hover:bg-white">ПОДАРИТЬ</button>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default Poket