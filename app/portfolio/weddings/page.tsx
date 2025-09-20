
"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import Lightbox from "@/app/components/LightBox";

import { X } from "lucide-react";

export default function WeddingsPage() {
    const weddingPhotos = [
        { src: "/weddings/_DCS1392.jpg", alt: "1" },
        { src: "/weddings/_DCS1646.jpg", alt: "2" },
        { src: "/weddings/_DCS6422.jpg", alt: "3" },
        { src: "/weddings/_KN10857.jpg", alt: "4" },
        { src: "/weddings/_KN11039.jpg", alt: "5" },
        { src: "/weddings/_KN11133.jpg", alt: "6" },
        { src: "/weddings/_KN12764.jpg", alt: "7" },
        { src: "/weddings/_KN12783.jpg", alt: "8" },
        { src: "/weddings/_KN12844.jpg", alt: "9" },
        { src: "/weddings/_KN12984.jpg", alt: "10" },
        { src: "/weddings/_KN13188.jpg", alt: "11" },
        { src: "/weddings/0V8A9877.jpg", alt: "12" },
        { src: "/weddings/1L4A1579.jpg", alt: "13" },
        { src: "/weddings/cover-image.jpg", alt: "14" },
        { src: "/weddings/DSC00195.jpg", alt: "15" },
        { src: "/weddings/DSC00356 2.jpg", alt: "16" },
        { src: "/weddings/DSC06713.jpg", alt: "17" },
        { src: "/weddings/DSC03243.jpg", alt: "18" },
        { src: "/weddings/DSC05947.jpg", alt: "19" },
        { src: "/weddings/DSC07974.jpg", alt: "20" },
        { src: "/weddings/DSC08797.jpg", alt: "21" },
        { src: "/weddings/DSC08617.jpg", alt: "22" },
        { src: "/weddings/DSC08989.jpg", alt: "23" },
        { src: "/weddings/IMG_7867.JPG", alt: "24" },

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
            {!isMobile && (
                <Lightbox
                    images={weddingPhotos}
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
                            {weddingPhotos.map((img, idx) => (
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