"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/LightBox";
import Image from "next/image";

const allImages = [
  { src: "/selected blueye/selected blueye/_KN11127.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/_DCS7412.jpg", alt: "frfhr" },
  { src: "/home/59be7081def4d.jpg", alt: "landscape " },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/home/featured-shot/_DCS0275.JPG", alt: "fhcjsj" },
  { src: "/selected blueye/selected blueye/_DCS7306.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC05947.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
  { src: "/selected blueye/selected blueye/_DCS7247.jpg", alt: "frfhr" },
  { src: "/home/DSC05894.jpg", alt: "landscape2" },
  { src: "/selected blueye/selected blueye/_DCS0129.JPG", alt: "frfhr" },
  { src: "/home/featured-shot/_DCS0430.JPG", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC06690.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC07655.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC07857.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC08523.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC07655.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/_DCS7389.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC09816.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DSC09867.jpg", alt: "frfhr" },
  { src: "/home/featured-shot/DSC05890.jpg", alt: "prewedding" },
  { src: "/weddings/DSC00356 2.jpg", alt: "portrait" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(16); // start with 12 images

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-5 text-center text-yellow-500">Gallery</h2>
      <p
        className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-8 leading-relaxed"
      >
        A curated selection of timeless moments, creative portraits, and storytelling frames.
      </p>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 px-2">
        {visibleImages.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedIndex(idx)}
            className="mb-4 break-inside-avoid cursor-pointer"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={600}
              height={800}
              className="w-full h-auto shadow-md hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allImages.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}
