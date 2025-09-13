"use client";
import Image from "next/image";

const images = [
    "/home/featured-shot/_DCS0275.JPG",
    "/home/featured-shot/_DCS0430.JPG",
    "/home/featured-shot/DSC05890.jpg",
    "/home/featured-shot/DSC08778.jpg",
    "/home/featured-shot/DSC06939.jpg",
];

export default function Carousel() {
    // To make seamless loop → duplicate the array
    const doubledImages = [...images, ...images];

    return (
        <section className="w-full py-12 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                Featured Shots
            </h2>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll gap-6">
                    {doubledImages.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[500px] h-[320px] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Carousel image ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
