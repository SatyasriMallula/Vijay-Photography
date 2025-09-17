
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
        description:"Your brand deserves visuals that speak louder than words",
        img: "/branding/DSC06914.jpg",
    },
    {
        title: "Baby Shoots",
        description: "Capture the innocence, laughter of your little one with our baby photoshoots.",
        img:"/babyshoot/DSC07897.jpg"
    }
    ,
    {
        title: "travel",
        description: "Exploring cultures, landscapes, and adventures.",
        img:"/travel/travelshot.png"
    },
    {
        title: "Drone Shots",
        description: "Elevate your story with stunning aerial shots",
        img:"/droneshot/droneshot.jpg"
    }

];

export default function Categories() {
    return (
        <section className="w-full px-6 py-15 space-y-10">
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
        Through my lens, I strive to capture the beauty of emotions —
        love, laughter, innocence, and adventure. Each frame is a
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

                        {/* Text (always visible) */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/10 px-4 py-3">
                            <h3 className="text-xl font-medium text-yellow-400">{cat.title}</h3>
                            <p className="text-sm text-gray-200">{cat.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
