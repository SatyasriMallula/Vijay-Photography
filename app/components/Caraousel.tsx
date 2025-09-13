"use client";
import React, { useState, useEffect } from "react";

export default function ImageCarousel() {
  // Image list (replace with your actual images)
  const images = [
      "/img1.jpg",
    "/img2.jpg",
      "/img3.jpg",
      "/img4.jpg",
      "/img5.jpg",
      "/img6.jpg",
      "/img7.jpg",
      "/img8.jpg",
         "/img9.jpg"
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
     <div className="relative w-full flex justify-center items-center pt-10 px-5">
     
      <p className="mt-4 text-blue-200 text-lg  flex flex-col font-light animate-pulse ">
          A curated collection of moments captured with precision and creativity.  
         <span className="text-right pt-3 pr-3 text-base  ">  — every image tells a story</span>
      </p>
      
       <img
  src={images[currentIndex]}
  alt="carousel"
  className="w-[650px] h-[600px] object-contain rounded-2xl shadow-lg transition-opacity duration-700"
/>

      
    
      

     
    </div>
  );
}