import Image from "next/image"
import logo from '../public/bb.png'
import vk from '../public/vk.png'
import tw from '../public/tw.png'
import tg from '../public/tg.png'
import styles from '../styles/FooterCard.module.css'
import qq from '../public/qq.png'
import qr from '../public/qr.png'

const Footer = () => {
  return (
    <>
      <div className="mt-[200px]">
        <div className="px-[100px] ">
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
          <div className="side-2 flex mt-[50px] mb-[100px]">
            <div className="cards">
              <div className="loader mb-[30px]">
                <div data-glitch="Top Trainers..." className={styles.glitch}>Top Trainers...</div>
              </div>
              <div className="flex gap-[50px]">
                <div className={styles.card}>
                  <div className={styles.firstcontent}>

                  </div>
                  <div className={styles.secondcontent}>
                    <div className="flex flex-col gap-[10px]">
                      <p className="flex justify-center">ChaPPi</p>
                      <button className="bg-[#AA00FA] p-[10px] rounded-[50px] hover:bg-[black] duration-300 hover:text-[white]">2часа - 5$</button>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.firstcontent}>

                  </div>
                  <div className={styles.secondcontent}>
                    <div className="flex flex-col gap-[10px]">
                      <p className="flex justify-center">AcunoSai</p>
                      <button className="bg-[#AA00FA] p-[10px] rounded-[50px] hover:bg-[black] duration-300 hover:text-[white]">2часа - 13$</button>
                    </div>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.firstcontent}>

                  </div>
                  <div className={styles.secondcontent}>
                    <div className="flex flex-col gap-[10px]">
                      <p className="flex justify-center">FFerm</p>
                      <button className="bg-[#AA00FA] p-[10px] rounded-[50px] hover:bg-[black] duration-300 hover:text-[white]">2часа - 20$</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[50px] justify-center w-[100%] items-center mt-[50px] ml-[50px]">
              <div className="text-white">
                <p className="text-[35px]">Trainers</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">ChaPPi</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">AmiRacle</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">KAPRZ</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">ISKA</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Shadow</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">FFerm</a></li>
                </ul>
              </div>
              <div className="text-white">
                <p className="text-[35px]">Complects</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">ПАКЕТ START</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">ПАКЕТ VAVILION</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">ПАКЕТ MEDIUM</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">ПАКЕТ SENIOR</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">КОМПЛЕКТ ГЕЙМЕР</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">КОМПЛЕКТ PRO</a></li>
                </ul>
              </div>
              <div className="text-white">
                <p className="text-[35px]">Contact Us</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">Instagram</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">FaceBook</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Telegram</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Watsup</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Twitch</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="side-3 flex items-center">
            <div className="flex gap-[50px] justify-center w-[100%] items-center mr-[50px]">
              <div className="text-white">
                <p className="text-[35px]">Our Students</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">Satanic</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Larl</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Collpaxe</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">SereGGa</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Stariy_bog</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Rostislav_999</a></li>
                </ul>
              </div>
              <div className="text-white">
                <p className="text-[35px]">Our Games</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">Fortnite</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Valorant</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Dota 2</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">CS 2</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Apex Legends</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Legue Of Legends</a></li>
                </ul>
              </div>
              <div className="text-white">
                <p className="text-[35px]">About Us</p>
                <ul className="text-[20px] text-center">
                  <li className="hover:text-[#AA00FA]"><a href="">Creators</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Programmers</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Trainers</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Designers</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Email</a></li>
                  <li className="hover:text-[#AA00FA]"><a href="">Author</a></li>
                </ul>
              </div>
            </div>
            <div className="">
            <div className="loader mb-[30px]">
                <div data-glitch="Примеры про игроков" className={styles.glitch}>Примеры про игроков</div>
              </div>
              <iframe
              className="w-[600px] h-[300px]"
                src="https://www.youtube.com/embed/GQL8YDs6uNA?start=6"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="side-4 mt-[50px] mb-[30px]">
            <p className="text-white font-bold text-[50px] flex justify-center">TG_bot</p>
            <div className="flex items-center text-[white] gap-[50px] justify-center mt-[50px]">
            <Image className="w-[350px] h-[400px]" src={qq}/>
            <p className="font-bold text-[50px]">OR</p>
            <Image src={qr} className="w-[400px] w-[400px]"/>
            </div>
            <div className="flex justify-center mt-[50px]">
              <a href="" className="text-white font-bold text-[40px] duration-300 hover:text-[#AA00FA]">@BOOSTIFY_BOT_bot</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer