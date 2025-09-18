"use client"
import Lightbox from "@/app/components/LightBox";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const TravelImages = [
    { src: "/travel/IMG_9140.JPG", alt: "Travel photo 1" },
    { src: "/travel/IMG_9145.JPG", alt: "Travel photo 2" },
    { src: "/travel/IMG_9143.JPG", alt: "Travel photo 3" },
    { src: "/travel/IMG_9148.JPG", alt: "Travel photo 4" },
    { src: "/travel/IMG_9153.JPG", alt: "Travel photo 5" },
    { src: "/travel/IMG_9151.JPG", alt: "Travel photo 6" }
];

export default function TravelPage() {
     const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Travel Diaries</h1>
            <motion.p
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-10 leading-relaxed"
            >
                Traveling is more than just reaching a destination—it’s about the stories,
                cultures, and experiences you gather along the way. From majestic
                mountains to vibrant city streets, each frame captures the spirit of
                adventure and discovery. Here’s a glimpse into unforgettable travel
                moments.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {TravelImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedIndex(idx)}
                    >
                        <Image
                            src={img.src}
                            height={100}
                            width={100}
                            alt={img.alt}
                            className="w-full h-64 object-cover"
                          
                            decoding="async"
                            draggable={false}
                            unoptimized
                            priority
                        />
                    </div>
                ))}
            </div>
            <Lightbox images={TravelImages} selectedIndex={selectedIndex || null} setSelectedIndex={setSelectedIndex} onClose={() => setSelectedIndex(null)} />

        </div>
    );
}
