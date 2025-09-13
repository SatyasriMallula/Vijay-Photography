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
        <section className="w-full py-20 px-6 bg-[#1e3a8a]/20" id="footer">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
                    What Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8" >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0a192f] rounded-2xl shadow-lg p-6 text-left border border-yellow-400/30"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-300 mb-4">“{t.feedback}”</p>
                            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                            <span className="text-sm text-gray-400">{t.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
