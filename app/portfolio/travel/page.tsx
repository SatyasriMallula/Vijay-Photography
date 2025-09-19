"use client"
import Lightbox from "@/app/components/LightBox";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";


import Image from "next/image";
import { useEffect, useState } from "react";

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
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <div className="py-16 px-6 max-w-7xl mx-auto space-y-6 md:space-y-0">
            <h1 className=" text-3xl md:text-4xl font-bold md:mb-8 text-center text-green-800">Travel Diaries</h1>
            <motion.p
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center w-full md:max-w-3xl md:mx-auto text-gray-300 text-sm md:text-lg md:mb-10 leading-relaxed"
            >
                Traveling is more than just reaching a destination—it&apos;s about the stories,
                cultures, and experiences you gather along the way. From majestic
                mountains to vibrant city streets, each frame captures the spirit of
                adventure and discovery. Here&apos;s a glimpse into unforgettable travel
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
                        {!isMobile && (
        <Lightbox
          images={TravelImages}
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
                            {TravelImages.map((img, idx) => (
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
        </div>
    );
}