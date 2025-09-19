"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const models = [
    { src: "/models/2 2.jpg", alt: "Model 1" },
    { src: "/models/_RO_2603.jpg", alt: "Model 2" },
    { src: "/models/_RO_2835.jpg", alt: "Model 3" },
    { src: "/models/_RO_3246.jpg", alt: "Model 4" },
    { src: "/models/_RO_2917.jpg", alt: "Model 5" },
    { src: "/models/_RO_3055.jpg", alt: "Model 6" },
];

const extraImages = [
    { src: "/models/1.jpg", alt: "Model Extra 1" },
    { src: "/models/2.jpg", alt: "Model Extra 2" },
    { src: "/models/BeFunky-collage (2).jpg", alt: "Model Extra 3" },
    { src: "/models/_RO_2761.jpg", alt: "Model Extra 4" },
    { src: "/models/_RO_3069.jpg", alt: "Model Extra 5" },
    { src: "/models/_RO_2835.jpg", alt: "Model Extra 6" },
];

const angle = 360 / models.length;

export default function ModelsPage() {
    const [index, setIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const rotateY = -index * 90;

    function prevCube() {
        setIndex((i) => (i === 0 ? models.length - 1 : i - 1));
    }
    function nextCube() {
        setIndex((i) => (i === models.length - 1 ? 0 : i + 1));
    }

    function scrollLeft() {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    }
    function scrollRight() {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    }

    return (
        <div>
            {/* Cube Section */}
            <div className="overflow-y-hidden min-h-[90vh] overflow-x-hidden flex flex-col md:flex-row items-center justify-evenly gap-10 text-white px-4 md:px-16">
                <aside className="max-w-xl flex flex-col items-start space-y-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400">
                        Models Gallery
                    </h2>
                    <p className="italic text-base md:text-lg text-blue-200 max-w-md">
                        A model is more than appearance — it&apos;s the art of expression, style,
                        and presence.
                    </p>
                </aside>

                <section
                    className="relative w-[280px] sm:w-80 md:w-96 h-[280px] sm:h-80 md:h-96 pb-16 md:pb-0"
                    style={{ perspective: "1400px" }}
                >
                    <div
                        className="absolute inset-0 transition-transform duration-700"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateY(${rotateY}deg)`,
                        }}
                    >
                        {models.map((src, i) => (
                            <Image
                                key={i}
                                src={src.src}
                                height={100}
                                width={100}
                                alt={src.alt}
                                priority
                                loading="eager"
                                className="absolute w-full h-full object-contain rounded-xl shadow-xl cursor-pointer"
                                style={{
                                    transform: `rotateY(${i * angle}deg) translateZ(230px)`,
                                }}
                            />
                        ))}
                    </div>

                    <div
                        className="
      absolute 
      left-1/2 transform -translate-x-1/2 
      flex gap-6 md:gap-8
      bottom-[-50px] md:bottom-[-96px] top-auto
    "
                    >
                        <button
                            onClick={prevCube}
                            className="p-3 md:p-4 rounded-full bg-white/10 border border-white/20 text-blue-400 hover:text-blue-200 transition"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextCube}
                            className="p-3 md:p-4 rounded-full bg-white/10 border border-white/20 text-blue-400 hover:text-blue-200 transition"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </section>

            </div>

            {/* Extra Images - Full Width Horizontal Scroll */}
            <section className="w-full  pb-20 relative mt-10 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8 text-center px-4 sm:px-6 md:px-0">
                    More Models
                </h3>
                <div className="relative w-full">
                    {/* Left Scroll Button */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-black/60 rounded-full text-white hover:bg-black/80 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 px-4 sm:px-8 scrollbar-hide scroll-smooth"
                    >
                        {extraImages.map((img, i) => (
                            <Image
                                key={i}
                                src={img.src}
                                width={320}
                                height={420}
                                alt={img.alt}
                                className="rounded-lg shadow-lg hover:scale-105 transition cursor-pointer object-cover flex-shrink-0 w-[320px] sm:w-[380px] md:w-[450px] h-[420px] sm:h-[500px] md:h-[600px]"
                                unoptimized
                            />
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-black/60 rounded-full text-white hover:bg-black/80 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </section>
        </div>
    );
}
