"use client";

import Image from "next/image";
import { motion } from "framer-motion"
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Wedding Photography | Blueye Portfolio",
//     description: "Capturing unforgettable wedding moments with creativity and precision.",
//     openGraph: {
//         title: "Wedding Portfolio | Blueye Photography",
//         description: "Timeless wedding photos captured by Blueye Studio.",
//         images: ["/og-image.jpg"],
//     },
// };
export default function WeddingsPage() {
    const weddingPhotos = [
        { src: "/weddings/DSC03243.jpg", alt: "Wedding Ceremony" },
        { src: "/weddings/_DCS1392.jpg", alt: "Wedding Couple" },
        { src: "/weddings/1L4A1579.jpg", alt: "Reception" },
        { src: "/weddings/DSC00356 2.jpg", alt: "Ring Ceremony" },
        { src: "/weddings/_DCS1646.jpg", alt: "Bride Portrait" },
        { src: "/weddings/DSC06116.jpg", alt: "Wedding Dance" },
        { src: "/weddings/DSC03243.jpg", alt: "Wedding Ceremony" },
        { src: "/weddings/_DCS1392.jpg", alt: "Wedding Couple" },
        { src: "/weddings/1L4A1579.jpg", alt: "Reception" },
        { src: "/weddings/DSC00356 2.jpg", alt: "Ring Ceremony" },
        { src: "/weddings/_DCS1646.jpg", alt: "Bride Portrait" },
        { src: "/weddings/DSC06116.jpg", alt: "Wedding Dance" },
        { src: "/weddings/DSC00356 2.jpg", alt: "Ring Ceremony" },
        { src: "/weddings/_DCS1646.jpg", alt: "Bride Portrait" },
    ];

    return (
        <section className="px-6 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Wedding Moments</h2>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 py-10">
                {weddingPhotos.map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-4 break-inside-avoid">
                        <Image src={p.src} alt={p.alt} width={600} height={800} className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform" />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}

