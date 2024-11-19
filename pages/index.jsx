import Navbar from "@/components/Navbar";
import Main from "@/components/Main.jsx";
import Cards from "@/components/Cards";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import TrainerCarousel from '@/components/TrainerCarousel';
import TrainerCarousell from "@/components/TrainerCarousell";
import TrainerCarouselll from "@/components/TrainerCarouselll";
import Blogers from "@/components/Blogers";
import Paket from "@/components/Paket";
import Poket from "@/components/Poket";
import Footer from "@/components/footer";

const Home = ()=>{
    return(
        <>
        <div>
            <Main/>
            <Cards/>
            <Pricing/>
            <Trainers/>
            <TrainerCarousel />
            <TrainerCarousell/>
            <TrainerCarouselll/>
            <Blogers/>
            <Paket/>
            <Poket/>
        </div>
        </>
    )
}

export default Home;