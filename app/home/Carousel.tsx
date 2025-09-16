"use client";
import Image from "next/image";

const images = [
  "/home/featured-shot/_DCS0275.JPG",
  "/home/featured-shot/_DCS0430.JPG",
  "/home/featured-shot/DSC05890.jpg",
  "/home/featured-shot/DSC08778.jpg",
  "/home/featured-shot/DSC06939.jpg",
];

export default function Carousel() {
  const doubledImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden py-10">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-white/90 mb-8">
        Featured Shots
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-banner">
          {doubledImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
