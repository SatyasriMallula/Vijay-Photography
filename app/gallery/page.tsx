
"use client";

import { useEffect, useState } from "react";


import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "../components/LightBox";
import Image from "next/image";
import { X } from "lucide-react";

const allImages = [
  { src: "/gallery/_KN11127.jpg", alt: "frfhr" },
  { src: "/gallery/_DCS7412.jpg", alt: "frfhr" },
  { src: "/home/59be7081def4d.jpg", alt: "landscape " },
  { src: "/gallery/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/home/featured-shot/_DCS0275.JPG", alt: "fhcjsj" },
  { src: "/gallery/_DCS7306.jpg", alt: "1" },
  { src: "/gallery/DSC05947.jpg", alt: "Branding session" },
  { src: "/gallery/DSC06699.jpg", alt: "Family portrait" },
  { src: "/gallery/_DCS0210.jpg", alt: "Outdoor wedding" },
  { src: "/home/DSC05894.jpg", alt: "landscape2" },
  { src: "/gallery/_DCS0129.JPG", alt: "2" },
  { src: "/gallery/DSC08825.jpg", alt: "Gallery" },
  { src: "/gallery/_DCS1799.JPG", alt: "3" },
  { src: "/gallery/DSC06690.jpg", alt: "4" },
  { src: "/gallery/DSC08825.jpg", alt: "5" },
  { src: "/gallery/DSC07857.jpg", alt: "6" },
  { src: "/gallery/2P6A5682.JPG", alt: "7" },
  { src: "/gallery/DSC07974.jpg", alt: "8" },
  { src: "/gallery/DSC08523.jpg", alt: "9" },
  { src: "/gallery/as.jpg", alt: "10" },
  { src: "/gallery/_DCS7389.jpg", alt: "11" },
  { src: "/gallery/DSC09816.jpg", alt: "12" },
  { src: "/gallery/DSC09867.jpg", alt: "13" },
  { src: "/home/featured-shot/DSC05890.jpg", alt: "prewedding" },
  { src: "/weddings/DSC00356 2.jpg", alt: "portrait" },
  { src: "/gallery/IMG_7840.JPG", alt: "haldi" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 px-4 bg-black/90">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Blueye Studio Gallery</h2>
        <p className="text-gray-400">
          A curated selection of timeless moments, creative portraits, and storytelling frames.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 py-10">
        {allImages.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={() => setSelectedIndex(idx)}
            className="mb-4 break-inside-avoid"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={600}
              height={800}
              className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>

      {!isMobile && (
        <Lightbox
          images={allImages}
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
          
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 text-white bg-black/60 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            
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
                    {allImages.map((img, idx) => (
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
    </section>
  );
}