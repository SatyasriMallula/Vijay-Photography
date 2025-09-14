"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ExcellenceSection from "./Excellence";

export default function About() {
    return (
        <section className="w-full h-full bg-[#1e3a8a]/20 pt-25 py-5  ">
         
              
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white"
                >
            
                <div className="flex items-center justify-center">
                    <img src="/about/photographer.jpg" alt="about" className="w-full h-[500px] object-cover rounded-xl" />
                </div>
                <div className="w-full flex pt-4 px-10">
                    <div className="w-1/2 flex items-center ">
                        <h2 className="text-5xl leading-16 font-extrabold text-white/70 ">
                            Capturing Life&apos;s Most Precious Moments
                        </h2>
                    </div>
                    <div className="w-1/2">
                        <p className="leading-relaxed text-lg text-white/80">
                            I’m Vijay, a passionate photographer and Assistant DOP based in Bangalore. My journey in the Kannada film industry has shaped my eye for cinematic detail and storytelling.
I specialize in portraits, fashion, weddings, and pre-weddings, capturing moments that reflect both beauty and emotion. For me, photography is not just about pictures, but about preserving memories that last a lifetime.
                      </p>
                    </div>
                </div>
                
                    {/* <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        Hi, I’m <span className="font-semibold text-white">Vijay</span>,
                        a passionate photographer who loves capturing timeless memories and
                        turning moments into stories. From portraits to travel, my lens
                        always seeks to freeze emotions in their purest form.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        My mission is to create visuals that speak louder than words,
                        making every shot a piece of art. Let’s create something magical together.
                    </p> */}
                </motion.div>
            <ExcellenceSection/>
        </section>
    );
}
