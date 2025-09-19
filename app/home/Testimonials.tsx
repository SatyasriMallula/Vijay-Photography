"use client";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Emily Carter",
        role: "Bride",
        feedback:
            "The wedding photos were beyond magical! Every emotion was beautifully captured. Truly timeless memories.",
    },
    {
        name: "James Anderson",
        role: "Traveler",
        feedback:
            "Stunning travel shots! Each frame tells a story and brings the journey alive again.",
    },
    {
        name: "Sophia Martinez",
        role: "Model",
        feedback:
            "The portrait session was amazing. Felt super comfortable and the final shots were just incredible.",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full p-6 pb-10 " id="footer">
            <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-10">
                <h2 className="text-2xl md:text-4xl font-medium text-yellow-500 ">
                    What Clients Say
                </h2>
                <motion.p
                    className="max-w-2xl mx-auto text-gray-300 text-sm md:text-lg leading-relaxed "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Every story I capture is unique, and hearing from my clients is the
                    greatest reward. Here&apos;s what they felt when their memories came alive
                    through my lens.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8" >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#72A295] shadow-lg p-6 text-left "
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-white italic mb-4">“{t.feedback}”</p>
                            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                            <span className="text-sm text-white">{t.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
