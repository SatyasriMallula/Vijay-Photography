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
'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Weddings", "Portraits", "Branding", "Events"];

const images = [
  { src: "/selected blueye/selected blueye/as.jpg", category: "Weddings" },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", category: "Weddings" },
  { src: "/selected blueye/selected blueye/_DCS1799.jpg", category: "Portraits" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", category: "Portraits" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", category: "Branding" },
  { src: "/selected blueye/selected blueye/DCS1824.jpg", category: "Branding" },
  { src: "selected blueye/selected blueye/_DCS1799.jpg", category: "Events" },
  { src: "/selected blueye/selected blueye/DSC05947.jpg", category: "Events" },
  { src: "/selected blueye/selected blueye/DSC06690.jpg", category: "Events" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));

const introTexts: Record<string, { title: string; desc: string }> = {
  All: {
    title: "Our Photography Gallery",
    desc: "Explore some of our finest work across weddings, portraits, branding, and events. Each moment is carefully captured to tell your story in the most authentic way.",
  },
  Weddings: {
    title: "Weddings",
    desc: "Elegant and timeless wedding photography capturing every emotion, from the smallest detail to the grandest moment of your big day.",
  },
  Portraits: {
    title: "Portraits",
    desc: "Capturing personality and emotion through carefully composed portraits, turning moments into art you’ll cherish forever.",
  },
  Branding: {
    title: "Branding",
    desc: "Professional brand shoots that highlight your business identity, designed to make your story stand out with impact.",
  },
  Events: {
    title: "Events",
    desc: "From intimate gatherings to grand celebrations, we document the energy, joy, and highlights of every event.",
  },
};

  return (
    <section className="py-30 " id="gallery">
      <div className="container mx-auto px-4 text-center">
       
<AnimatePresence mode="wait">
  <motion.div
    key={selectedCategory} 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-3xl text-gray-300 font-bold mb-4">
      {introTexts[selectedCategory].title}
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      {introTexts[selectedCategory].desc}
    </p>
  </motion.div>
</AnimatePresence>


        
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
        <div className="mt-12">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            Book a Session
          </motion.a>
        </div>
      </div>

     
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <X size={32} />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              <ChevronLeft size={40} />
            </button>
            <img
              src={filteredImages[lightboxIndex].src}
              alt="Large View"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}