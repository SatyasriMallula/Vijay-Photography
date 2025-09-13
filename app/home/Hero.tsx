"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/home/DSC06591.jpg",
    "home/DSC05894.jpg",
    "home/DSC08119.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="absolute max-w-2xl  bottom-30 left-80 right-50 ">
          
          {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-300 ">
            Discover The Beauty of Nature
          </h1> */}
               <div className="mt-6 flex justify-center gap-4">
            
            <button className="px-8 py-3 text-lg  text-white bg-yellow-500 font-semibold rounded-lg  backdrop-blur-sm border border-white/40 hover:bg-white/30 transition">
          Book Now
            </button>

              </div>
              </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" /> */}

     
    </section>
  );
}

{
  /* <p className="mt-4 text-blue-200 text-lg  flex flex-col font-light animate-pulse ">
          A curated collection of moments captured with precision and creativity.  
         <span className="text-right pt-3 pr-3 text-base  ">  — every image tells a story</span>
      </p> */
}
