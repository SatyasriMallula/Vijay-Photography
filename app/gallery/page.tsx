

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/LightBox";
import Image from "next/image";


const allImages = [
  { src: "/selected blueye/selected blueye/as.jpg", alt: "Bride getting ready" },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
  { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Corporate shoot" },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
    { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
    { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
   { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
  
];

 function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); 

  
  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className="py-30 px-4 bg-black/90">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">
          My Photography Showcase
        </h2>
        <p className="text-gray-400">
          A curated selection of timeless moments, creative portraits, and
          storytelling frames. Every picture carries its own story.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {visibleImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer break-inside-avoid"
          ><div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              fill
               
          
              className="w-full   h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 "
              onClick={() => setSelectedIndex(index)}
            />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
              {img.alt}
            </div>
          </motion.div>
        ))}
      </div>

      
      {visibleCount < allImages.length && (
        <div className="text-center  border border-red-500">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
          >
            Load More
          </button>
        </div>
      )}
       
      
      <Lightbox
        images={visibleImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        setSelectedIndex={setSelectedIndex}
      />

      {/* <div className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Book a Session
        </a>
      </div> */}
    </section>
  );
}
export default GalleryPage