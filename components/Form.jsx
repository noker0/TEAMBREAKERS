'use client'
import styles from '../styles/Form.module.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import one from '../public/one.png';
import two from '../public/three.png';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

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
        console.log(formData);
        // Здесь добавьте логику отправки формы, например, запрос на сервер
        // После успешной обработки показываем уведомление
        showAlert();
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
        <div className="pt-[100px] bg-black flex justify-center items-center" data-aos="fade-up">
        <Image  data-aos-delay="950" data-aos="fade-right" src={one} className='w-[430px] h-[650px] absolute z-40 mr-[1210px] mt-[60px]'/>
        <div className=" w-full max-w-5xl text-white py-8 ">
                <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <p className='font-bold flex justify-center text-[40px] uppercase hover:text-[#AA00FA] hover:bg-[white] duration-300'>тренеруй как pro</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Имя */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Имя"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-mail"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>

                            {/* Телефон */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+998 (999) 999-99-99"
                                        className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                                  placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                                  transition-colors duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Возраст */}
                            <div>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Возраст"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>

                            {/* Город */}
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Город"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>

                            {/* Telegram/Discord */}
                            <div>
                                <input
                                    type="text"
                                    name="social"
                                    value={formData.social}
                                    onChange={handleChange}
                                    placeholder="Telegram / Discord"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>

                            {/* Игра */}
                            <div>
                                <select
                                    name="game"
                                    value={formData.game}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              text-neutral-500 focus:border-[#AA00FA]  focus:outline-none
                                              transition-colors duration-200"
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

                            {/* Уровень игры */}
                            <div>
                                <input
                                    type="text"
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    placeholder="Уровень игры"
                                    className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                              placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                              transition-colors duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Комментарий */}
                        <div>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                placeholder="Комментарий"
                                rows="4"
                                className="w-full bg-transparent border border-neutral-800 rounded-md px-4 py-3 
                                          placeholder-neutral-500 focus:border-[#AA00FA] focus:outline-none
                                          transition-colors duration-200"
                            />
                        </div>

                        {/* Согласие с политикой */}
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                name="policy"
                                id="policy"
                                checked={formData.policy}
                                onChange={handleChange}
                                className="h-4 w-4 border-neutral-800 rounded focus:ring-[#AA00FA]
                                          text-[#AA00FA] transition duration-200"
                                required
                            />
                            <label htmlFor="policy" className="text-sm text-neutral-400">
                                Я согласен(а) с условиями{' '}
                                <a href="#" className="text-[#AA00FA] hover:text-[#AA00FA] transition-colors duration-200">
                                    политики конфиденциальности
                                </a>
                            </label>
                        </div>

                        {/* Кнопка отправки */}
                        <button
                            type="submit"
                            className="w-full bg-transparent border-2 border-[#AA00FA] text-[#AA00FA]
                                     rounded-full py-3 px-6 hover:bg-[#AA00FA] hover:text-black
                                     transition-all duration-200 font-medium"
                        >
                            Стать тренером
                        </button>
                    </form>
                </div>
            </div>
            <Image data-aos-delay="800" data-aos="fade-right" src={two} className="absolute z-40 w-[390px] h-[600px] right-0 top-[188px] " />
            </div>
        </>
    )
}

export default Form;
