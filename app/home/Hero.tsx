"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/home/DSC06591.jpg",
    "/home/DSC05894.jpg",
    "/home/DSC08119.jpg",
    "/home/featured-shot/_DCS0430.JPG",
    "/home/59be7081def4d.jpg",
    "/home/featured-shot/DSC08778.jpg",
    "/home/_DCS0075.JPG",
    "/home/featured-shot/DSC06939.jpg",
    "/weddings/_KN12844.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section
      id="hero"
      className="relative h-[35vw] mt-5 flex justify-center "
    >
      <div className="relative max-w-[700px] max-h-[75vh] 2xl:max-h-[75vh] w-full overflow-hidden rounded-2xl shadow-xl">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`carousel-${index}`}
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}