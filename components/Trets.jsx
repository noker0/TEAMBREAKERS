'use client'
import React, { useState } from 'react';
import fortniteImg from '../public/fortnite-bg.jpg';
import dota from '../public/dot.png';
import fort from '../public/fort.png'
import br from '../public/rb.png'
import cs from '../public/sc.png'
import Image from 'next/image';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import rub from '../public/rubb.png'
import fortt from '../public/fortt.jpeg'

const Trets = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  const levelContent = {
    beginner: [
      'Базовое понимание механики игры',
      'Знание основных приемов строительства',
      'Минимум 100 часов игрового времени'
    ],
    intermediate: [
      'Уверенное владение механикой строительства',
      'K/D соотношение выше 1.5',
      'Минимум 500 часов игрового времени'
    ],
    pro: [
      'Мастерское владение всеми игровыми механиками',
      'K/D соотношение выше 3.0',
      'Опыт участия в турнирах'
    ]
  };

  return (
    <>
      <div className="mt-[200px]">
        <p className="font-bold text-white text-5xl uppercase pl-24 mb-[100px]">
          Требования к тренерам
        </p>
        <div className="flex justify-center">

        
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${fortniteImg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
          
        </div>
        </div>



        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${dota.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>


        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${cs.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>


        <div className="flex justify-center mt-[100px]">
        <div data-aos="fade-up" className="fortnite  bg-cover bg-center min-h-[400px] relative w-[90%] flex items-center rounded-[50px] " style={{
  backgroundImage: `url(${br.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
          <div className="left pl-[20px] mt-2 bg-black py-[30px] pr-[50px]">
          
            <p className="text-white uppercase font-bold text-2xl my-[20px]">Уровень игры:</p>
            <div className="flex gap-4 mb-[20px]">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'beginner'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Начинающий тренер
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'intermediate'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Продвинутый
              </button>
              <button
                onClick={() => setSelectedLevel('pro')}
                className={`px-4 py-2 rounded ${
                  selectedLevel === 'pro'
                    ? 'bg-[#AA00FA] text-white uppercase'
                    : 'bg-gray-700 text-gray-200 uppercase'
                }`}
              >
                Профессионал
              </button>
            </div>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][0]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][1]}</p>
            <p className="text-white text-xl mt-[20px]">{levelContent[selectedLevel][2]}</p>
          </div>
         
        </div>
        </div>
      </div>


      <div className="mt-[200px]">
              <p className='text-white uppercase font-bold text-[40px] ml-[90px]'>КАК стать Профессиональным <span className='text-[#AA00FA]'>тренером</span>?</p>
              <p className='text-white uppercase font-bold text-[20px] ml-[90px]'>сначала нужно бы освоить пару важных фишек игр <span className='text-[#AA00FA]'>таких как:</span></p>
              <div className="pl-[90px] mt-[50px] flex">
                <Image src={rub}  className='w-[750px] rounded-[10px]'/>
                <div className="ml-[30px]">
                  <p className='text-[white] uppercase font-bold text-[30px]'>Dota2</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Допустим, у вас 1000 ХП. Но с учетом брони и магического сопротивления вы впитаете больше тысячи. Все это зависит от типа урона и процентного резиста вашего героя. И порой проценты намного эффективней, чем простые цифры. Поэтому если вы за секунду умираете от Фантомки, лучше взять Кирасу или Шиву, чем Тараску или Блинк на силу.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Не раз авантюрный поход в трон моей команды заканчивался вражеским глифом. До недавних дней. Теперь в каждой игре я всегда говорю, что туалет у трона разрушать противопоказано. Простая истина, на которую всем плевать.Дело в том, что радиус атаки башен не достает до дальников или катапульт, которые атакуют постройку у Древнего. И если враги укрепят строения, то крипы все равно останутся у башен соперника. Тогда бэкдор не включится, и вы продолжите пушить базу. Особенно важно, когда против вас есть персонажи, которые легко перемещаются по карте и быстро скипают пачки.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>амая банальная вещь из этого списка, но такая же редкость. Будто после лайн-стадии люди выходят из фокуса или банально устают от игры. Ты сам можешь сделать отвод на керри. Ты сам можешь стакнуть большой или маленький кемп, если пачка под вражеским тавером. Но делают это единицы. Даже в мидгейме, когда твоя тир-1 упала и дальше идти опасно, – сделай отвод. Подтяни вражескую пачку поближе к базе, отбери у врага 250 золота. Если сильно не увлекаться и не лишать себя безопасного (!) фарма, то отводы всегда будут полезны. Иногда – даже на 20-й.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Дота настолько разноплановая игра, что любое изменения циферки, покупка предмета, прокачка способности в два или один приводят к абсолютно разным последствиям. Тем более – в другой последовательности.</p>
                </div>
              </div>

              <div className="pl-[90px] mt-[100px] flex">
                <div className="mr-[30px]">
                  <p className='text-[white] uppercase font-bold text-[30px]'>Fortnite</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Epic Games не проектируют хитбокс вокруг разных кустов, которые украшают пейзаж, а если присесть за многими из них, можно полностью спрятаться со всех сторон.Но это касается не всех «сферических», потому что вы сразу же подпрыгнете, ищите кустарник, состоящий из листьев или высокой травы, и вы сможете спрятаться там.Самое главное, когда поворачиваетесь, делайте это медленно. Если будете двигаться слишком быстро, ваш персонаж поднимет голову и спалится. Играя осторожно и перемещаясь от куста к кусту, я ощутил даже феноменально напряженные моменты, когда несколько игроков сражались прямо передо мной, что давало мне шанс бросить вызов тому, кто выжил.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Как в любом хорошем зомби плане, нужно подумать о других игроках, которые будут преследовать вас.Здесь это: двери и оставленные следы.Как и в PUBG, двери всегда должны закрываться за вами. Эту простую вещь нужно принять к сведению, потому что в жару выживания или бега с места на место многие игроки будут нырять в любую дверь, чтобы избежать огня — идеальный вариант для создания засады или сделать вид, что дом незанят.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Никогда не прекратятся дискуссии относительно «оптимального» времени для пике с боевого автобуса. Если поспешить, вы попадете в безумную схватку за начальную волну добычи, а если опоздать, остальные уже наберут хорошие вещи.Если вы в бывшем лагере, обратите внимание: ваш планер разворачивается только на определенной высоте над сушей — он не срабатывает, даже если вы ведете своего персонажа над морем.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Еще кое-что пригодится, когда вы продумываете план по выживанию — прятаться в игре можно почти так же, как в реальной жизни.Используйте тени, деревья с большими нависающими листьями и углы, чтобы спрятать персонажа от остальных. Значок становится красным, только когда случается выстрел — так вы не спалитесь, когда другой игрок просто бродит рядом.Таким образом, вы можете стоять или присесть прямо перед кем-то, но все равно иметь возможность выстрелить первым. Они не будут знать, что их поразило, а вы почувствуете себя обученным королевским морским пехотинцем.</p>
                </div>
                <Image src={fortt}  className='w-[750px] rounded-[10px]'/>
              </div>

              <div className="pl-[90px] mt-[100px] flex">
                <Image src={cs}  className='w-[750px] rounded-[10px]'/>
                <div className="ml-[30px]">
                  <p className='text-[white] uppercase font-bold text-[30px]'>CS2</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>В Counter-Strike 2 на всех картах был увеличен радиус взрыва С4. Теперь чтобы не умереть от взрыва приходится убегать на большое расстояние. В этом поможет музыка десятисекундного отсчета. Ее было удобно использовать и в CS:GO, но там даже с низким уровнем громкости она была хорошо слышна. В Counter-Strike 2 ее слышно хуже, поэтому поставь громкость десятисекундного отсчета на 30-40% от максимума. Так и отсчет будет слышно, и другие звуки он заглушать не будет.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>В тех же аудио-настройках советуем отключить гимн MVP. Послушать забойную музыку в конце раунда прикольно, но не когда она заглушает шаги выживших противников. К счастью, именно в таких ситуациях можно отключить воспроизведения гимна MVP при помощи соответствующей настройки.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Картинка Counter-Strike 2 выглядит высветленной и очень яркой. Особенно это заметно на контрасте с CS:GO. Чтобы вернуть картинке насыщенные цветы следует использовать консольную команду и настройку дисплея. В видео-настройках следует установить отображение на весь экран.В консоль нужно ввести команду r_fullscreen_gamma 3. Это сделает картинку более насыщенной. Если же хочется привыкать к новому виду карт, гамму можно откатить до заводских настроек командой r_fullscreen_gamma 2.2.</p>
                  <p className='text-white text-[20px] overflow-scroll h-[100px] w-[600px] border-[2px] border-[#AA00FA] p-[10px] rounded-[10px] mb-[10px] mt-[10px]'><span className='text-[#AA00FA]'>* </span>Игроки в Counter-Strike 2 будут занижать все настройки. Это ведь простой способ получить больше кадров в секунду. Тем не менее, Блог CS.MONEY рекомендует держать качество теней на максимально комфортном значении. Дело в том, что чем выше эта настройка тем больше разных теней будет отрисовываться. Благодаря этому можно будет заметить тень выходящего из-за угла противника и быть готовым к его пику. А это – соревновательное преимущество.</p>
                </div>
              </div>
              <p className='text-white uppercase font-bold text-[30px] justify-center mt-[100px] flex'>ТАКЖЕ вам могут помочь обучающие видео из Youtube</p>
              <p className='text-[#AA00FA] uppercase font-bold text-[30px] justify-center  flex'>Такие как</p>
      </div>
    </>
  );
};

export default Trets;