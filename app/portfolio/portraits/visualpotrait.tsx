"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "@/app/components/LightBox";
import { X } from "lucide-react";

export default function VisualPortrait() {
  const images = [
    { src: "/portraits/_DCS0018.JPG", alt: "1", style: "rotate-3 scale-105" },
    { src: "/portraits/_DCS0023.JPG", alt: "2", style: "-rotate-3 scale-110" },
    { src: "/portraits/_DCS0121.JPG", alt: "3", style: "rotate-3 scale-105" },
    { src: "/portraits/DSC06165_Original.jpg", alt: "4", style: "-rotate-2 scale-105" },
    { src: "/portraits/portraits.jpg", alt: "5", style: "rotate-2 scale-105" },
    { src: "/portraits/_DCS6394.jpg", alt: "6", style: "-rotate-3 scale-110" },
    { src: "/portraits/_DCS0115.JPG", alt: "7", style: "rotate-2 scale-105" },
    { src: "/portraits/_DCS7230.jpg", alt: "8", style: "-rotate-3 scale-110" },
    { src: "/portraits/_DCS0210.JPG", alt: "9", style: "rotate-3 scale-105" },
    { src: "/portraits/_DCS0222.JPG", alt: "10", style: "-rotate-3 scale-110" },
    { src: "/portraits/_DCS1698.jpg", alt: "11", style: "rotate-2 scale-110" },
    { src: "/portraits/IMG_7822.JPG", alt: "12", style: "-rotate-3 scale-105" },
    { src: "/portraits/_DCS7340.jpg", alt: "13", style: "rotate-2 scale-110" },
    { src: "/portraits/DSC06116.jpg", alt: "14", style: "-rotate-2 scale-105" },
    { src: "/portraits/IMG_7867.JPG", alt: "15", style: "rotate-1 scale-105" },
    { src: "/portraits/IMG_7871.JPG", alt: "16", style: "-rotate-3 scale-110" },
    { src: "/weddings/DSC03243.jpg", alt: "17", style: "rotate-2 scale-110" },
    { src: "/portraits/_DCS0212.JPG", alt: "18", style: "-rotate-2 scale-105" },
    { src: "/portraits/d.jpg", alt: "19", style: "rotate-1 scale-110" },
    { src: "/portraits/_KN13188.jpg", alt: "20", style: "-rotate-2 scale-105" },
    { src: "/portraits/_DCS0213.JPG", alt: "21", style: "rotate-2 scale-105" },
    { src: "/portraits/_DCS0099.JPG", alt: "22", style: "-rotate-2 scale-110" },
    { src: "/portraits/2P6A5682.JPG", alt: "23", style: "rotate-2 scale-105" },
    { src: "/portraits/_DCS0275.JPG", alt: "24", style: "-rotate-3 scale-110" },
    { src: "/portraits/_DCS1698.jpg", alt: "25", style: "rotate-2 scale-110" },

  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="min-h-screen bg-black py-16 px-6 max-w-7xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
      <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400 text-center">
        Blueye Studio Highlights
      </h1>

      <motion.p
        className="max-w-2xl text-gray-300 text-center text-sm md:text-lg leading-relaxed"
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

      <div className="relative w-full h-full p-10 overflow-hidden  columns-1 sm:columns-2 md:columns-4 gap-14 space-y-14">
        {images.map(({ src, alt, style }, idx) => (
          <motion.div
            key={idx}
            className={`overflow-hidden rounded-3xl shadow-2xl cursor-pointer max-w-[340px] mx-auto break-inside-avoid transform transition-all duration-500 ${style} hover:rotate-0 hover:scale-100`}
            style={{ boxShadow: "0 8px 20px rgb(255 454 450 / 0.65)" }}
            onClick={() => setSelectedIndex(idx)}
            whileHover={{ scale: 1.05, rotate: 0 }}

          >
            <Image
              src={src}
              alt={alt}
              width={500}
              height={700}
              className="w-full object-contain object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"

            />
          </motion.div>
        ))}
      </div>

      <p className="mt-16 max-w-xl text-gray-300 text-center text-lg">
        Moments captured with passion, creativity, and uniqueness.
      </p>

      {!isMobile && (
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}


      {isMobile && selectedIndex !== null && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 text-white bg-black/60 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Scrollable Lightbox */}
            <motion.div
              ref={(el) => {
                if (el && selectedIndex !== null) {
                  const width = el.clientWidth;
                  el.scrollTo({
                    left: selectedIndex * width,
                    behavior: "instant",
                  });
                }
              }}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory"
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-full h-full snap-center flex items-center justify-center"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

    </main>
  );
}
