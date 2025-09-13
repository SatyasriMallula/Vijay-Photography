
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    {
        title: "Portraits",
        description: "Capturing expressions, emotions, and timeless moments.",
        img: "/potraits/cover-image.jpg",
    },
    {
        title: "Weddings",
        description: "Telling love stories with elegance and warmth.",
        img: "/weddings/cover-image.jpg",
    },
    {
        title: "Branding",
        description: "Exploring cultures, landscapes, and adventures.",
        img: "/selected blueye/selected blueye/as.jpg",
    },

];

export default function Categories() {
    return (
        <section className="w-full px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                Explore My Work
            </h2>

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
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                        />

                        {/* Text (always visible) */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/20 p-4">
                            <h3 className="text-xl font-bold text-yellow-400">{cat.title}</h3>
                            <p className="text-sm text-gray-200">{cat.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
