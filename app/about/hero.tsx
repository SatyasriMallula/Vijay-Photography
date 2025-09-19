import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="md:mt-10" id="hero">
      {/* Image with dark border effect */}
      <div className="relative  flex items-center justify-center">
        <Image
          src="/about/2P6A6331.jpg"
          alt="about"
         width={1200}       
          height={630} 
          priority
          className="w-full xl:h-[630px] h-[200px] md:h-[400px] lg:h-[500px] object-contain rounded-xl"
        />
        {/* Radial dark edges overlay */}
        <div className="absolute inset-0 z-0 rounded-xl bg-[radial-gradient(circle,transparent_70%,rgba(0,0,0,0.7)_100%)]"></div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white relative z-0"
      >
        {/* Text section */}
        <div className="w-full flex   md:flex-row flex-col pt-4 px-4 md:px-12 lg:px-20 gap-4 md:gap-0">
          <div className="w-full  md:w-1/2 lg:w-[600px] x:w-full flex items-center">
            <h2 className=" md:text-4xl lg:text-5xl text-2xl md:leading-10 lg:leading-16 text-center md:text-left font-semibold bg-gradient-to-l bg-clip-text text-transparent from-orange-400 to-orange-600">
              Capturing Life&apos;s Most Precious Moments
            </h2>
          </div>
          <div className="w-full   xl:w-[700px]">
            <p className="lg:leading-8  text-white/90  lg:text-xl  xl:text-lg text-sm leading-6">
              I&apos;m Vijay, a passionate photographer and Assistant DOP based in
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
