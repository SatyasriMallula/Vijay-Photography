"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        title: "Portraits",
        description: "Capturing expressions, emotions, and timeless moments.",
        img: "/portraits/cover-image.jpg",
        href: "/portfolio/portraits"
    },
    {
        title: "Weddings",
        description: "Telling love stories with elegance and warmth.",
        img: "/weddings/cover-image.jpg",
        href: "/portfolio/weddings"
    },
    {
        title: "Branding",
        description: "Your brand deserves visuals that speak louder than words",
        img: "/branding/DSC06914.jpg",
        href: "/gallery"
    },
    {
        title: "Baby Shoots",
        description: "Capture the innocence, laughter of your little one with our baby photoshoots.",
        img: "/babyshoot/DSC07897.jpg",
        href: "/gallery"
    },
    {
        title: "Travel",
        description: "Exploring cultures, landscapes, and adventures.",
        img: "/travel/travelshot.png",
        href: "/portfolio/travel"
    },
    {
        title: "Drone Shots",
        description: "Elevate your story with stunning aerial shots",
        img: "/droneshot/droneshot.jpg",
        href: "/gallery"
    }
];

export default function Categories() {
    return (
        <section className="w-full px-6 py-15 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium text-center text-yellow-500">
                Explore My Work
            </h2>
  <motion.p
        className="max-w-2xl mx-auto text-center text-gray-300 text-lg leading-relaxed "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Through my lens, I strive to capture the beauty of emotions —
                love, laughter, innocence, and adventure. */}
                Each frame is a
        reflection of moments that deserve to be remembered forever.
      </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Image */}
                        <Image
                            src={cat.img}
                            alt={cat.title}
                            width={600}
                            height={400}
                            className="w-full h-100 object-cover transform group-hover:scale-110 transition duration-700"
                        />

                        {/* Text */}
                        <Link href={cat.href}>
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/10 px-4 py-3">
                                <h3 className="text-xl font-medium text-yellow-400">{cat.title}</h3>
                                <p className="text-sm text-gray-200">{cat.description}</p>
                            </div>

                            {/* Hover arrow */}
                            {/* Hover arrow */}
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-yellow-400/90 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                    {/* Thicker arrow using SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}   // makes arrow thicker
                                        stroke="black"
                                        className="w-5 h-5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
