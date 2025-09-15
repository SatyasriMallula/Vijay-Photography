"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/selected blueye/selected blueye/as.jpg",
  "/selected blueye/selected blueye/DSC03543.jpg",
  "/selected blueye/selected blueye/DSC08756.jpg",
  "/selected blueye/selected blueye/DSC06699.jpg",
  "/selected blueye/selected blueye/DSC05840.jpg",
  "/selected blueye/selected blueye/DCS1824.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen p-8 py-25">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => setSelectedImage(src)}
          >
            {/* Image */}
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            
            {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">View</p>
            </div> */}
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={800}
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
