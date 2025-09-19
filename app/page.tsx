"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const line1 = "Welcome to";
  const line2 = "Blue Eye Photo Studio";

  // Container animation
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  // Letter animation
  const letter = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
            className="w-24 h-24 mx-auto mb-4 animate-bounce-slow"
          />

          {/* Title line 1 */}
          <motion.h1
            className="text-5xl font-bold text-yellow-400 flex flex-wrap justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {line1.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Title line 2 */}
          <motion.h1
            className="text-5xl font-bold text-yellow-400 flex flex-wrap justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {line2.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-300 text-lg md:text-xl font-light opacity-90 animate-fade-in">
            Every picture tells your story — let&apos;s capture yours
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <Link
              href="/home"
              className="mt-3 px-6 py-2 rounded-lg bg-yellow-500/80 text-white font-medium
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40"
            >
              Explore
            </Link>

            <Link
              href="/contact"
              className="mt-3 px-6 py-2 rounded-lg text-white bg-yellow-500/80 font-medium
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
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-400"
            >
              <Instagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="hover:text-green-500"
            >
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}