"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "@/app/components/LightBox";

export default function VisualPortrait() {
  const images = [
    { src: "/portraits/_DCS0018.JPG", alt: "Signature shot 1", style: "rotate-3" },
    { src: "/portraits/_DCS0023.JPG", alt: "Creative portrait", style: "-rotate-2 scale-110" },
    { src: "/portraits/_DCS0121.JPG", alt: "Event highlight", style: "rotate-1 scale-105" },
    { src: "/portraits/_DCS6394.jpg", alt: "Behind the scenes", style: "-rotate-1" },
    { src: "/portraits/_DCS7230.jpg", alt: "Artistic frame", style: "rotate-2 scale-110" },
    { src: "/portraits/IMG_7822.JPG", alt: "Golden hour", style: "scale-105" },
    { src: "/portraits/_DCS7340.jpg", alt: "Cityscape", style: "-rotate-3" },
    { src: "/portraits/DSC06116.jpg", alt: "Fashion shoot", style: "rotate-4 scale-105" },
    { src: "/portraits/IMG_7867.JPG", alt: "Cityscape", style: "-rotate-3" },
    { src: "/portraits/IMG_7871.JPG", alt: "Fashion shoot", style: "rotate-4 scale-105" },
    { src: "/weddings/DSC03243.jpg", alt: "Fashion shoot1", style: "rotate-4 scale-105" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black py-16 px-6 max-w-7xl mx-auto flex flex-col items-center space-y-8">
      <h1 className="text-5xl font-extrabold text-amber-400 text-center">
        Blueye Studio Highlights
      </h1>

      <motion.p
        className="max-w-2xl text-gray-300 text-center text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Portrait photography is more than capturing faces — it is about telling a story through
        expressions, emotions, and details that often go unnoticed. Each frame is a timeless
        reflection of personality, mood, and essence, turning a fleeting moment into art that
        speaks long after it is captured.
      </motion.p>

      <div className="relative w-full max-w-8xl columns-1 sm:columns-2 md:columns-4 gap-14 space-y-14">
        {images.map(({ src, alt, style }, idx) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-3xl shadow-2xl cursor-pointer max-w-[340px] mx-auto break-inside-avoid transform transition-all duration-500 ${style} hover:rotate-0 hover:scale-100`}
            style={{ boxShadow: "0 8px 20px rgb(255 454 450 / 0.65)" }}
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={50}
              className="w-full object-contain object-center"
            
              decoding="async"
                    draggable={false}
                    unoptimized
                    priority
            />
          </div>
        ))}
      </div>

      <p className="mt-16 max-w-xl text-gray-300 text-center text-lg">
        Moments captured with passion, creativity, and uniqueness.
      </p>

      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </main>
  );
}
