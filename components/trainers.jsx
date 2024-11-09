
const Trainers = () => {
  return (
    <>
        <div className="mt-[100px] hover:p-color-[#AA00FA] group h-[300px] ">
            <p className="text-white font-bold text-[55px] flex justify-center group-hover:text-[#AA00FA] transition-colors duration-300">НАШИ ТРЕНЕРЫ</p>
            <div className="flex justify-center">
            <div className="bg-[#AA00FA] h-[10px] w-[40%] group-hover:bg-[white] duration-300 group-hover:w-[50%]"></div>
            </div>
            <div className="flex justify-center text-center  h-[100px]">
            <p className=" text-white mt-[10px]  text-[20px] text-center w-[40%]  duration-300 group-hover:text-[#AA00FA]">Подберем тренера под твои уровень игры и задачи. Строгий отбор и огромный опыт работы. Так ты добьешься результата в несколько раз быстрее.</p>
        </div>
        <div className="mt-[20px] flex justify-center gap-[30px]">
        <button className="bg-[black] w-[240px] h-[50px] rounded-[500px] text-[#AA00FA] border-[2px] border-[#AA00FA] font-bold duration-300 hover:w-[300px] hover:text-[white] hover:border-[white]">ВСЕ ТРЕНЕРЫ</button>
        <button className="bg-[black] w-[240px] h-[50px] rounded-[500px] text-[#AA00FA] border-[2px] border-[#AA00FA]  font-bold duration-300 hover:w-[300px] hover:text-[white] hover:border-[white] ">ХОЧУ СТАТЬ ТРЕНЕРОМ</button>
        </div>
     </div>
     </>
  )
}

export default Trainers