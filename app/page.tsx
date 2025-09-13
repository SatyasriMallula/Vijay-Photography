import ImageCarousel from "./components/Caraousel";
import Welcome from "./components/HeroSection";

export default function Home() {
  return (

    <section className="space-y-10 flex flex-col">
      
    <Welcome/>
      
    <ImageCarousel/>
    </section >


  );
}
