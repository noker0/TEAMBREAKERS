import Navbar from "@/components/Navbar";
import Main from "@/components/Main.jsx";
import Cards from "@/components/Cards";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import TrainerCarousel from '@/components/TrainerCarousel';
import TrainerCarousell from "@/components/TrainerCarousell";
import TrainerCarouselll from "@/components/TrainerCarouselll";

const Home = ()=>{
    return(
        <>
        <div>
            <Navbar/>
            <Main/>
            <Cards/>
            <Pricing/>
            <Trainers/>
            <TrainerCarousel />
            <TrainerCarousell/>
            <TrainerCarouselll/>
        </div>
        </>
    )
}

export default Home;