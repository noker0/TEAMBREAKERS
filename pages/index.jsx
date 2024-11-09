import Navbar from "@/components/Navbar";
import Main from "@/components/Main.jsx";
import Cards from "@/components/Cards";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import TrainerCarousel from '@/components/TrainerCarousel';

const Home = ()=>{
    return(
        <>
            <Navbar/>
            <Main/>
            <Cards/>
            <Pricing/>
            <Trainers/>
            <TrainerCarousel />
        </>
    )
}

export default Home;