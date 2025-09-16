"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/home/DSC06591.jpg",
    "/home/DSC05894.jpg",
    "/home/DSC08119.jpg",
    "/home/featured-shot/_DCS0430.JPG",
    "/home/featured-shot/DSC08778.jpg",
    "/home/_DCS0075.JPG",
    "/home/featured-shot/DSC06939.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section
      id="hero"
      className="relative h-[40vw] flex justify-center "
    >
      <div className="relative max-w-[600px] max-h-[75vh] w-full overflow-hidden rounded-2xl shadow-xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`carousel-${index}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
