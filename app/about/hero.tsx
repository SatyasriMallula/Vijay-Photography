import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white"
      >
        {/* Image with dark border effect */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/about/2P6A6331.jpg"
            alt="about"
            width={100}
            height={100}
            unoptimized
            className="w-full h-[500px] object-contain rounded-xl"
          />
          {/* Radial dark edges overlay */}
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,transparent_70%,rgba(0,0,0,0.7)_100%)]"></div>
        </div>

        {/* Text section */}
        <div className="w-full flex pt-4 px-20">
          <div className="w-[600px] flex items-center">
            <h2 className="text-5xl leading-16 font-semibold bg-gradient-to-l bg-clip-text text-transparent from-orange-400 to-orange-600">
              Capturing Life&apos;s Most Precious Moments
            </h2>
          </div>
          <div className="w-[600px]">
            <p className="leading-8 text-white/90 text-base">
              I’m Vijay, a passionate photographer and Assistant DOP based in
              Bangalore. My journey in the Kannada film industry has shaped my
              eye for cinematic detail and storytelling. I specialize in
              portraits, fashion, weddings, and pre-weddings, capturing moments
              that reflect both beauty and emotion. For me, photography is not
              just about pictures, but about preserving memories that last a
              lifetime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
