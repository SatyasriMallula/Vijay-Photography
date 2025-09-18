"use client";

import Image from "next/image";
import { motion } from "framer-motion"

import { useState } from "react";
import Lightbox from "@/app/components/LightBox";

export default function WeddingsPage() {
    const weddingPhotos = [
        { src: "/weddings/_KN10857.jpg", alt: "Reception" },
        { src: "/weddings/_DCS1392.jpg", alt: "Wedding Couple" },
        { src: "/weddings/1L4A1579.jpg", alt: "Reception" },
        { src: "/weddings/DSC00356 2.jpg", alt: "Ring Ceremony" },
        { src: "/weddings/_KN11039.jpg", alt: "Haldi Ceremony" },
        { src: "/weddings/_KN12844.jpg", alt: "Wedding Dance" },
        { src: "/weddings/DSC03243.jpg", alt: "Wedding Ceremony" },
        { src: "/weddings/0V8A9877.jpg", alt: "Wedding Couple" },
          { src: "/weddings/IMG_7867.jpg", alt: "Haldi Ceremony" },
        { src: "/weddings/_KN11133.jpg", alt: "Reception" },
        { src: "/weddings/DSC08797.jpg", alt: "Ring Ceremony" },
        { src: "/weddings/_DCS1646.jpg", alt: "Bride Portrait" },
        { src: "/weddings/DSC06116.jpg", alt: "Wedding Dance" },
        
   { src: "/weddings/DSC07974.jpg", alt: "Bride Portrait" },
  { src: "/weddings/_KN12764.jpg", alt: "Haldi Ceremony" },
           { src: "/weddings/DSC08989.jpg", alt: "Bride Portrait" },
        { src: "/weddings/_KN12984.jpg", alt: "Bride Portrait" },
        {src: "/weddings/DSC00195.jpg", alt: "Bridal Portrait" },
  { src: "/weddings/_KN13188.jpg", alt: "Haldi Ceremony" },


    ];
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    return (
        <section className="px-6 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-yellow-500">Wedding Moments</h2>
            <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-8 leading-relaxed">
                Weddings are a beautiful journey of love, emotions, and timeless
                memories. From the first smile to the final dance, every moment tells a
                story that deserves to be captured with care. Here are some of our
                favorite wedding highlights, where every frame reflects the joy and
                celebration of togetherness.
            </motion.p>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 py-10">
                {weddingPhotos.map((p, idx) => (

                    <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} onClick={() => setSelectedIndex(idx)} className="mb-4 break-inside-avoid">
                        <Image src={p.src} alt={p.alt} width={600} height={800} className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform" />
                    </motion.div>
                ))}
            </div>
            <Lightbox images={weddingPhotos} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} onClose={() => setSelectedIndex(null)} />

        </section>
    );
}

