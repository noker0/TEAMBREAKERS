'use client'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AOS from "aos";
import "aos/dist/aos.css";

const NewTrainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const loadTrainers = () => {
            const savedTrainers = JSON.parse(localStorage.getItem('trainers') || '[]');
            setTrainers(savedTrainers);
        };

        loadTrainers();

        const handleStorageChange = (e) => {
            if (e.key === 'trainers') {
                loadTrainers();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleDelete = (index) => {
        Swal.fire({
            title: 'Подтверждение',
            text: 'Вы уверены, что хотите удалить этого тренера?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#AA00FA',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, удалить',
            cancelButtonText: 'Отмена'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedTrainers = trainers.filter((_, i) => i !== index);
                setTrainers(updatedTrainers);
                localStorage.setItem('trainers', JSON.stringify(updatedTrainers));
                
                Swal.fire({
                    title: 'Удалено!',
                    text: 'Тренер был успешно удален.',
                    icon: 'success',
                    confirmButtonColor: '#AA00FA'
                });
            }
        });
    };

    if (!trainers.length) {
        return (
          <>
            <div data-aos="fade-up" className="min-h-[400px] bg-black flex items-center justify-center pt-[150px]">
                <div className="text-center text-gray-500 p-8">
                    <h2 className="text-2xl font-bold mb-4">Пока нет зарегистрированных тренеров</h2>
                    <p>Станьте первым тренером на нашей платформе!</p>
                </div>
            </div>
            </>
        );
    }

    return (
      <>
        <div className="bg-black text-white py-12 font-bold uppercase pt-[150px]" >
            <div className="container mx-auto px-4" >
                <h2 className="text-3xl font-bold mb-8 text-center uppercase hover:text-[#AA00FA] duration-300">
                    Наши тренеры
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trainers.map((trainer, index) => (
                        <div 
                            key={index}
                            className="bg-zinc-900 rounded-lg p-6 border border-[#AA00FA] 
                                     transition-all duration-300 
                                     relative group"
                        >
                            {/* Кнопка удаления */}
                            <button
                                onClick={() => handleDelete(index)}
                                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100
                                         transition-opacity duration-300 bg-red-500 hover:bg-red-600
                                         text-white rounded-full w-8 h-8 flex items-center justify-center
                                         transform hover:scale-110"
                                title="Удалить тренера"
                            >
                                ✕
                            </button>

                            <h3 className="text-xl font-bold mb-4 text-[#AA00FA]">{trainer.name}</h3>
                            <div className="space-y-2">
                                <p className='hover:bg-[white] hover:text-[#AA00FA] duration-300'><span className="text-[#AA00FA]">Игра:</span> {trainer.game}</p>
                                <p className='hover:bg-[white] hover:text-[#AA00FA] duration-300'><span className="text-[#AA00FA]">Уровень:</span> {trainer.level}</p>
                                <p className='hover:bg-[white] hover:text-[#AA00FA] duration-300'><span className="text-[#AA00FA]">Возраст:</span> {trainer.age}</p>
                                <p className='hover:bg-[white] hover:text-[#AA00FA] duration-300'><span className="text-[#AA00FA]">Город:</span> {trainer.city}</p>
                                <p className='hover:bg-[white] hover:text-[#AA00FA] duration-300'><span className="text-[#AA00FA]">Контакты:</span> {trainer.social}</p>
                                {trainer.comment && (
                                    <p><span className="text-[#AA00FA]">О себе:</span> {trainer.comment}</p>
                                )}
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#AA00FA]/30">
                                <p><span className="text-[#AA00FA]">Связаться:</span></p>
                                <p className="text-sm">{trainer.email}</p>
                                <p className="text-sm">{trainer.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default NewTrainers; 