
import Hero from "./Hero";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Testimonials from "./Testimonials";
import ReelsSection from "./Reels";
export default function Home() {
    return (
        <div className=" ">
            <Hero />
            <Carousel />
            <Categories />
            <ReelsSection/>
            <Testimonials />
        </div>

    );
}
