"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const line1 = "Blueye";
  const line2 = "Photo Studio";

  const textRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current;
    const amplitude = 10; // wave height for MD+
    const frequency = 0.5; // wave frequency
    const isSmallScreen = window.innerWidth < 768;

    letters.forEach((letter, i) => {
      if (isSmallScreen) {
        // Small screens: simple drop animation
        gsap.fromTo(
          letter,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, ease: "bounce.out", delay: i * 0.08, duration: 1 }
        );
      } else {
        // MD+ screens: sine arc + drop
        gsap.fromTo(
          letter,
          { y: -100, opacity: 0 },
          {
            y: amplitude * Math.sin(i * frequency),
            opacity: 1,
            ease: "bounce.out",
            delay: i * 0.12,
            duration: 1.2,
          }
        );
      }
    });
  }, []);

  // Single gradient for heading text
  const gradientClass = "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600";

  return (
    <section className="relative w-full h-screen py-5">
      {/* Background image */}
      <Image
        src="/booknow/IMG_0380.JPG"
        alt="Background"
        fill
        priority
        className="object-cover brightness-100 z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center px-4 z-20">
        <div className="p-6 md:p-10 text-center max-w-3xl flex flex-col items-center gap-6 rounded-2xl">
          {/* Logo */}
          <Image
            src="/logo.png"
            height={100}
            width={100}
            priority
            alt="Blue Eye Logo"
            className="w-17 h-17 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 md:my-3 animate-bounce-slow"
          />

          {/* Animated Heading */}
          <div className="flex flex-col items-center gap-6 md:gap-10">
            {/* Line 1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap md:tracking-widest md:leading-[1.4] justify-center chewy">
              {line1.split("").map((char, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    textRef.current[i] = el!;
                  }}
                  className={`inline-block text-transparent bg-clip-text ${gradientClass} mr-1`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* Line 2 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap justify-center gap-1 md:gap-2 chewy">
              {line2.split("").map((char, i) => (
                <span
                  key={i + line1.length}
                  ref={(el) => {
                    textRef.current[i + line1.length] = el!;
                  }} className={`inline-block text-transparent bg-clip-text ${gradientClass} md:mr-1`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          {/* Subheading */}
          <p className="mt-4 text-gray-300 text-sm md:text-lg lg:text-xl font-light opacity-90 animate-fade-in">
            Every picture tells your story — let&apos;s capture yours
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/home"
              className="px-6 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/40 hover:text-white transition duration-300 shadow-md shadow-blue-500/40 text-center"
            >
              Explore
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg text-gray-300 hover:bg-blue-500/40 hover:text-white transition duration-300 shadow-md shadow-blue-500/40 text-center"
            >
              Contact
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}