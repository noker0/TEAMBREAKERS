'use client'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import one from '../public/one.png';
import two from '../public/three.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
    const showAlert = () => {
        Swal.fire({
          title: 'Успех!',
          text: 'Ваше действие выполнено.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        city: '',
        social: '',
        game: '',
        level: '',
        comment: '',
        policy: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const existingTrainers = JSON.parse(localStorage.getItem('trainers') || '[]');
        
        const updatedTrainers = [...existingTrainers, formData];
        
        localStorage.setItem('trainers', JSON.stringify(updatedTrainers));
        
        showAlert();
        
        setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            city: '',
            social: '',
            game: '',
            level: '',
            comment: '',
            policy: false
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    useEffect (() =>{
        AOS.init({
          duration: 1000
        })
    },[])

    return (
        <>
        <div className="pt-[100px] md:pt-[100px] bg-black flex flex-col md:flex-row justify-center items-center relative" data-aos="fade-up">
            {/* Мобильная адаптация изображений */}
            <Image 
                data-aos-delay="950" 
                data-aos="fade-right" 
                src={one} 
                alt="Left Image"
                className='hidden md:block w-[200px] md:w-[430px] h-auto absolute z-40 left-[-50px] top-[110px]'
            />
            
            <div className="w-full max-w-5xl text-white py-4 md:py-8 px-4 md:px-0">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <p className='font-bold text-center text-2xl md:text-[40px] uppercase hover:text-[#AA00FA] hover:bg-[white] duration-300'>
                            тренеруй как pro
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Все поля со схожими изменениями для мобильных */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Имя"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-mail"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            {/* Остальные поля с аналогичными изменениями */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+998 (999) 999-99-99"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Возраст"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            {/* Остальные поля формы аналогично адаптируются */}
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Город"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="social"
                                    value={formData.social}
                                    onChange={handleChange}
                                    placeholder="Telegram / Discord"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>

                            <div>
                                <select
                                    name="game"
                                    value={formData.game}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              text-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                >
                                    <option value="" disabled>Игра</option>
                                    <option value="dota2">Dota 2</option>
                                    <option value="csgo">CS:GO</option>
                                    <option value="valorant">Valorant</option>
                                    <option value="Fortnite">Fortnite</option>
                                    <option value="LOL">LOL</option>
                                    <option value="Brawl Stars">Brawl Stars</option>
                                    <option value="другая игра">другая игра</option>
                                </select>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    placeholder="Уровень игры"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200 text-sm md:text-base"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                placeholder="Комментарий"
                                rows={4}
                                className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 md:px-4 md:py-3 
                                          placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                          transition-colors duration-200 text-sm md:text-base"
                            />
                        </div>

                        <div className="flex items-center space-x-2 md:space-x-3">
                            <input
                                type="checkbox"
                                name="policy"
                                id="policy"
                                checked={formData.policy}
                                onChange={handleChange}
                                className="h-3 w-3 md:h-4 md:w-4 border-neutral-800 rounded focus:ring-[#AA00FA]
                                          text-[#AA00FA] transition duration-200"
                                required
                            />
                            <label htmlFor="policy" className="text-xs md:text-sm text-neutral-400">
                                Я согласен(а) с условиями{' '}
                                <a href="#" className="text-[#AA00FA] hover:text-[#AA00FA] transition-colors duration-200">
                                    политики конфиденциальности
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-transparent border-2 border-[#AA00FA] text-[#AA00FA]
                                     rounded-full py-2 md:py-3 px-4 md:px-6 hover:bg-[#AA00FA] hover:text-black
                                     transition-all duration-200 font-medium text-sm md:text-base"
                        >
                            Стать тренером
                        </button>
                    </form>
                </div>
            </div>
            
            <Image 
                data-aos-delay="800" 
                data-aos="fade-right" 
                src={two} 
                alt="Right Image"
                className="hidden md:block absolute z-40 w-[200px] md:w-[390px] h-auto right-0 top-[110px]" 
            />
        </div>
        </>
    )
}

export default Form;