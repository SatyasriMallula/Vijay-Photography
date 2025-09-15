// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const images = [
//   "/selected blueye/selected blueye/as.jpg",
//   "/selected blueye/selected blueye/DSC03543.jpg",
//   "/selected blueye/selected blueye/DSC08756.jpg",
//   "/selected blueye/selected blueye/DSC06699.jpg",
//   "/selected blueye/selected blueye/DSC05840.jpg",
//   "/selected blueye/selected blueye/DCS1824.jpg",
// ];

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div className="w-full min-h-screen p-8 py-25">
//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {images.map((src, idx) => (
//           <div
//             key={idx}
//             className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
//             onClick={() => setSelectedImage(src)}
//           >
//             {/* Image */}
//             <Image
//               src={src}
//               alt={`Gallery image ${idx + 1}`}
//               width={600}
//               height={400}
//               className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//             />

            
//             {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//               <p className="text-white text-lg font-semibold">View</p>
//             </div> */}
//           </div>
//         ))}
//       </div>

      
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl w-full px-4">
//             <Image
//               src={selectedImage}
//               alt="Selected"
//               width={1200}
//               height={800}
//               className="w-full max-h-[90vh] object-contain rounded-lg"
//             />
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-white text-3xl font-bold"
//               onClick={() => setSelectedImage(null)}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const images = [

// {src: "/selected blueye/selected blueye/as.jpg",alt: "Bride getting ready", w: 600, h: 900 },
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset", w: 900, h: 600 },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session", w: 700, h: 700 },
//   { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait", w: 600, h: 800 },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding", w: 1000, h: 650 },
//   { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Corporate shoot", w: 800, h: 1200 },
//   // ➝ Add more with different w/h for variety
// ];

// export default function GallerySection() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   const handlePrev = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage - 1 + images.length) % images.length);
//     }
//   };

//   const handleNext = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage + 1) % images.length);
//     }
//   };

//   return (
//     <section className="py-30 px-4">
//       {/* Intro */}
//       <motion.div
//         className="text-center max-w-3xl mx-auto mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h2 className="text-4xl text-yellow-400 font-bold mb-4">Captured Moments</h2>
//         <p className="text-lg text-gray-200">
//           Every photo tells a story — from timeless weddings to creative portraits.  
//           Explore the moments I’ve been honored to capture.
//         </p>
//       </motion.div>

//       {/* Masonry Grid */}
//       <div className="columns-1 sm:columns-2 lg:columns-3  space-y-4">
//         {images.map((img, idx) => (
//           <motion.div
//             key={idx}
//             className="relative cursor-pointer overflow-hidden rounded-xl group"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: idx * 0.1 }}
//             onClick={() => setSelectedImage(idx)}
//           >
//             <Image
//               src={img.src}
//               alt={img.alt}
//               width={img.w}
//               height={img.h}
//               className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
//             />
//             {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//               <span className="text-white text-lg">{img.alt}</span>
//             </div> */}
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg"
//         >
//           Book a Session
//         </motion.button>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <button
//               className="absolute top-6 right-6 text-white text-3xl"
//               onClick={() => setSelectedImage(null)}
//             >
//               <X size={32} />
//             </button>

//             <button
//               className="absolute left-6 text-white"
//               onClick={handlePrev}
//             >
//               <ChevronLeft size={40} />
//             </button>

//             <div className="max-w-5xl max-h-[90vh] w-full flex items-center">
//               <Image
//                 src={images[selectedImage].src}
//                 alt={images[selectedImage].alt}
//                 width={images[selectedImage].w}
//                 height={images[selectedImage].h}
//                 className="rounded-lg  max-w-full max-h-[90vh] object-contain mx-auto"
//               />
//             </div>

//             <button
//               className="absolute right-6 text-white"
//               onClick={handleNext}
//             >
//               <ChevronRight size={40} />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//   ZoomIn,
//   ZoomOut,
//   RefreshCw,
// } from "lucide-react";

// // Example images
// const images = [
//   { src: "/selected blueye/selected blueye/as.jpg", alt: "Bride getting ready", w: 600, h: 900 },
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset", w: 900, h: 600 },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session", w: 700, h: 700 },
//   { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait", w: 600, h: 800 },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding", w: 1000, h: 650 },
//   { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Corporate shoot", w: 800, h: 1200 },
// ];

// export default function Gallery() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [scale, setScale] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

//   // Zoom handlers
//   const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
//   const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
//   const resetZoom = () => {
//     setScale(1);
//     setPosition({ x: 0, y: 0 });
//   };

//   // Drag handlers
//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (scale <= 1) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     setPosition({
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y,
//     });
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (scale <= 1) return;
//     const touch = e.touches[0];
//     setIsDragging(true);
//     setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging) return;
//     const touch = e.touches[0];
//     setPosition({
//       x: touch.clientX - dragStart.x,
//       y: touch.clientY - dragStart.y,
//     });
//   };

//   const handleTouchEnd = () => setIsDragging(false);

//   return (
//     <section className="py-12 px-4">
//       {/* Intro Text */}
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold mb-4">My Photography Showcase</h2>
//         <p className="text-gray-600">
//           A curated selection of timeless moments, creative portraits, and
//           storytelling frames. Every picture carries its own story.
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="relative group cursor-pointer break-inside-avoid"
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 object-cover"
//               onClick={() => {
//                 setSelectedIndex(index);
//                 resetZoom();
//               }}
//             />
//             {/* Hover Caption */}
//             <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
//               {img.alt}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedIndex(null)}
//               className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
//             >
//               <X size={24} />
//             </button>

//             {/* Prev */}
//             <button
//               onClick={() =>
//                 setSelectedIndex((prev) =>
//                   prev !== null ? (prev - 1 + images.length) % images.length : 0
//                 )
//               }
//               className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
//             >
//               <ChevronLeft size={28} />
//             </button>

//             {/* Next */}
//             <button
//               onClick={() =>
//                 setSelectedIndex((prev) =>
//                   prev !== null ? (prev + 1) % images.length : 0
//                 )
//               }
//               className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
//             >
//               <ChevronRight size={28} />
//             </button>

//             {/* Image */}
//             <motion.img
//               key={selectedIndex}
//               src={images[selectedIndex].src}
//               alt={images[selectedIndex].alt}
//               className="max-w-full max-h-[80vh] object-contain select-none"
//               style={{
//                 transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
//                 transition: isDragging ? "none" : "transform 0.2s ease",
//                 cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
//               }}
//               onMouseDown={handleMouseDown}
//               onTouchStart={handleTouchStart}
//               draggable={false}
//             />

//             {/* Zoom Controls */}
//             <div className="absolute bottom-6 flex space-x-4 bg-black/50 p-3 rounded-lg">
//               <button
//                 onClick={zoomOut}
//                 className="text-white hover:scale-110 transition"
//               >
//                 <ZoomOut size={24} />
//               </button>
//               <button
//                 onClick={resetZoom}
//                 className="text-white hover:scale-110 transition"
//               >
//                 <RefreshCw size={24} />
//               </button>
//               <button
//                 onClick={zoomIn}
//                 className="text-white hover:scale-110 transition"
//               >
//                 <ZoomIn size={24} />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <a
//           href="/contact"
//           className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
//         >
//           Book a Session
//         </a>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/LightBox";


const images = [
  { src: "/selected blueye/selected blueye/as.jpg", alt: "Bride getting ready" },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
  { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Corporate shoot" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-30 px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">My Photography Showcase</h2>
        <p className="text-gray-400"> A curated selection of timeless moments, creative portraits, and
           storytelling frames. Every picture carries its own story.</p>
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer break-inside-avoid"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 object-cover"
              onClick={() => setSelectedIndex(index)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
              {img.alt}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reusable Lightbox */}
      <Lightbox images={images} selectedIndex={selectedIndex} onClose={() => setSelectedIndex(null)}  setSelectedIndex={setSelectedIndex} />

      <div className="text-center mt-12">
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Book a Session
        </a>
      </div>
    </section>
  );
}
