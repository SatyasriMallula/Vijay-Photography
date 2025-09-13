"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Portraits", "Weddings"];

const photos = [
    { src: "/potraits/cover-image.jpg", category: "Portraits", href: "/portraits" },
    { src: "/weddings/cover-image.jpg", category: "Weddings", href: "/services/weddings" },
    { src: "/selected blueye/selected blueye/DSC03543.jpg", category: "Branding", href: "services/branding" },

];

export default function Portfolio() {
    const [selected, setSelected] = useState("All");

    const filtered =
        selected === "All"
            ? photos
            : photos.filter((photo) => photo.category === selected);

    return (
        <section className="w-full py-20 px-6 bg-[#0a192f]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
                    Portfolio
                </h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${selected === cat
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-black"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery */}
                <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filtered.map((photo, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-xl overflow-hidden shadow-lg group"
                            >
                                <Link href={photo.href}>
                                    <Image
                                        src={photo.src}
                                        alt={photo.category}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-black/60 p-3 text-left">
                                        <p className="text-sm text-yellow-400 font-semibold">
                                            {photo.category}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
