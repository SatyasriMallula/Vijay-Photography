"use client";
import Lightbox from "@/app/components/LightBox";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const portraits =  [
    { src: "/weddings/1L4A1579.jpg", alt: "Travel photo 1" },
    { src: "/weddings/DSC03243.jpg", alt: "Travel photo 2" },
    { src: "/weddings/cover-image.jpg", alt: "Travel photo 3" },
    { src: "/weddings/DSC06116.jpg", alt: "Travel photo 4" },
    { src: "/weddings/1L4A1579.jpg", alt: "Travel photo 5" },
    { src: "/weddings/DSC06713.jpg", alt: "Travel photo 6" }
];

const globalQuote =
    "A portrait is not just a photograph; it is a silent conversation between the soul and the lens.";

const icons = [
    // Camera
    <svg key="camera" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 cursor-pointer text-blue-500 hover:text-blue-300 transition">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h2l1-2h10l1 2h2a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
        <circle cx={12} cy={13} r={3} stroke="currentColor" strokeWidth={2} />
    </svg>,

    // Palette (artistic creativity)
    <svg key="palette" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 cursor-pointer text-blue-500 hover:text-blue-300 transition">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20a7 7 0 100-14 7 7 0 000 14z" />
        <circle cx={7.5} cy={9.5} r={1.5} />
        <circle cx={16.5} cy={8.5} r={1.5} />
        <circle cx={14} cy={15} r={1.5} />
        <circle cx={9} cy={16} r={1.5} />
    </svg>,

    // Clock (capturing the moment)
    <svg key="clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 cursor-pointer text-blue-500 hover:text-blue-300 transition">
        <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>,

    // Heart (emotion & connection)
    <svg key="heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-8 cursor-pointer text-blue-500 hover:text-blue-300 transition">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
];

export default function BabyShoot() {
    const [index, setIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const rotateY = -index * 90;

    function prev() {
        setIndex((i) => (i === 0 ? portraits.length - 1 : i - 1));
    }
    function next() {
        setIndex((i) => (i === portraits.length - 1 ? 0 : i + 1));
    }

    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center p-16 pt-0 gap-16 text-white">
            {/* Left side text + icons */}
            <aside className="max-w-xl px-6 flex flex-col items-start space-y-12">
                <h2 className="text-4xl font-extrabold text-blue-400">Portraits Gallery</h2>
                <p className="italic text-lg text-blue-200">{globalQuote}</p>
                <div className="flex space-x-6">{icons.map((icon) => icon)}</div>
            </aside>

            {/* 3D Cube images */}
            <section className="relative w-96 h-96 perspective" style={{ perspective: "1400px" }}>
                <div
                    className="absolute inset-0 transition-transform duration-700"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${rotateY}deg)`,
                    }}
                >
                    {portraits.map((src, i) => (
                        
                        <Image
                            key={i}
                            src={src.src || ""}
                            height={100}
                            width={100}
                            alt="Portrait"
                            className="absolute w-96 h-96 object-cover rounded-xl shadow-xl"
                            onClick={() => setSelectedIndex(i)}
                            style={{
                                transform: `rotateY(${i * 90}deg) translateZ(180px)`,
                            }}
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
                            <Lightbox images={portraits} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  onClose={() => setSelectedIndex(null)}/>
                

                {/* Controls under cube */}
                

{/* Controls under cube */}
<div className="absolute bottom-[-96px] left-1/2 transform -translate-x-1/2 flex gap-8">
  <button
  title="previous"
    onClick={prev}
    aria-label="Previous portrait"
    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
               text-blue-400 hover:text-blue-200 hover:bg-white/20 
               transition transform hover:scale-110 shadow-lg"
  >
    <ChevronLeft size={28} />
  </button>
  <button
  title="next"
    onClick={next}
    aria-label="Next portrait"
    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
               text-blue-400 hover:text-blue-200 hover:bg-white/20 
               transition transform hover:scale-110 shadow-lg"
  >
    <ChevronRight size={28} />
  </button>
</div>

            </section>
        </div>
    );
}