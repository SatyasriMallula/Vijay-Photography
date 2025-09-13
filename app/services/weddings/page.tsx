"use client";

import Image from "next/image";

export default function WeddingsPage() {
    const weddingPhotos = [
        { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Wedding Couple" },
        { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Bride Portrait" },
        { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Reception" },
        { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Ring Ceremony" },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1e3a8a] text-gray-100">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
                    Weddings
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-blue-100/80">
                    Capturing timeless love stories with elegance and emotion.
                </p>
            </section>

            {/* Gallery Section */}
            <section className="px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {weddingPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl shadow-lg group"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-20 bg-[#0a192f]/70 backdrop-blur-lg border-t border-yellow-400/10">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                    Let’s Capture Your Big Day
                </h2>
                <p className="max-w-2xl mx-auto text-blue-100/80 mb-8">
                    From intimate moments to grand celebrations, we make sure your love
                    story is told beautifully through our lens.
                </p>
                <a
                    href="/contact"
                    className="px-8 py-3 bg-yellow-400 text-[#0a192f] font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
                >
                    Book Your Wedding Shoot
                </a>
            </section>
        </main>
    );
}
