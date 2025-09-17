"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/home/featured-shot/_DCS0275.JPG",
  "/home/featured-shot/_DCS0430.JPG",
  "/home/featured-shot/DSC05890.jpg",
  "/home/featured-shot/DSC08778.jpg",
  "/home/featured-shot/DSC06939.jpg",
];

export default function Carousel() {
  const doubledImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden  space-y-8">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-yellow-500 ">
        Featured Shots
      </h2>
 <motion.p
        className="max-w-2xl mx-auto text-center text-gray-300 text-lg leading-relaxed "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A glimpse into some of my favorite captures — fleeting emotions,
        stunning details, and stories told through still frames.
        {/* These
        photographs reflect the essence of moments that stay alive forever. */}
      </motion.p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-banner">
          {doubledImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
