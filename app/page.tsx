"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between words
    },
  },
};

const word = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const line1 = "Welcome to";
  const line2 = "Blue Eye Photo Studio";

  return (
    <section className="relative w-full py-5 md:py-0 h-screen ">
      {/* Background image */}
      <Image
        src="/booknow/IMG_0380.JPG"
        alt="Background"
        fill
        priority
        className="object-cover brightness-100 z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center px-4 z-20">
        <div className=" p-10 text-center max-w-2xl flex flex-col items-center gap-6 rounded-2xl">
          {/* Logo */}
          <Image
            src="/logo.png"
            height={100}
            width={100}
            priority
            alt="Blue Eye Logo"
            className="w-24 h-24 mx-auto mb-2 md:mb-4 md:pt-0 pt-2 animate-bounce-slow"
          />

          {/* Animated heading */}
          <div className="flex flex-col items-center gap-2">
            {/* First line */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center gap-3"
            >
              {line1.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            {/* Second line */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center gap-3"
            >
              {line2.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subheading */}
          <p className="mt-4 text-gray-300 text-lg md:text-xl font-light opacity-90 animate-fade-in">
            Every picture tells your story — let&apos;s capture yours
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <Link
              href="/home"
              className="mt-3 px-6 py-2 rounded-lg bg-blue-500/20 text-blue-300 
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40"
            >
              Explore
            </Link>

            <Link
              href="/contact"
              className="mt-3 px-6 py-2 rounded-lg text-gray-300 
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40"
            >
              Contact
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 text-2xl text-white mt-8">
            <a
              href="https://google.com"
              target="_blank"
              className="hover:text-blue-400"
              title="location"
            >
              <MapPin />
            </a>
            <a
              href="https://www.instagram.com/blueye_photostudio/?hl=en"
              target="_blank"
              className="hover:text-pink-400"
            >
              <Instagram />
            </a>
            <a
              href="https://wa.me/7729803266"
              title="WhatsApp"
              target="_blank"
              className="hover:text-green-400"
            >
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
