"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full py-20 px-6 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="/selected blueye/selected blueye/as.jpg" // Replace with your profile pic
                        alt="Photographer"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        Hi, I’m <span className="font-semibold text-white">Vijay</span>,
                        a passionate photographer who loves capturing timeless memories and
                        turning moments into stories. From portraits to travel, my lens
                        always seeks to freeze emotions in their purest form.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        My mission is to create visuals that speak louder than words,
                        making every shot a piece of art. Let’s create something magical together.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
