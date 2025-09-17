// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Lightbox from "../components/LightBox";
// import Image from "next/image";

// const allImages = [
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//   { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Corporate shoot" },
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
//   { src: "/selected blueye/selected blueye/_DCS1799.jpg", alt: "Branding session" },
//   { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//     { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
// ];

//  function GalleryPage() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [visibleCount, setVisibleCount] = useState(6);

//   const visibleImages = allImages.slice(0, visibleCount);

//   return (
//     <section className="py-30 px-4 bg-black/90">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-4xl text-yellow-400 font-bold mb-4">
//           My Photography Showcase
//         </h2>
//         <p className="text-gray-400">
//           A curated selection of timeless moments, creative portraits, and
//           storytelling frames. Every picture carries its own story.
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="flex flex-wrap ">
//         {visibleImages.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="relative group cursor-pointer break-inside-avoid"
//           >
//             <Image
//               src={img.src}
//               alt={img.alt}
//               width={600}
//                height={400}

//               className="h-90 w-auto object-cover shadow-md transition-transform duration-300 group-hover:scale-105 "
//               onClick={() => setSelectedIndex(index)}
//             />

//             <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
//               {img.alt}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {visibleCount < allImages.length && (
//         <div className="text-center  border border-red-500">
//           <button
//             onClick={() => setVisibleCount((prev) => prev + 6)}
//             className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
//           >
//             Load More
//           </button>
//         </div>
//       )}

//       <Lightbox
//         images={visibleImages}
//         selectedIndex={selectedIndex}
//         onClose={() => setSelectedIndex(null)}
//         setSelectedIndex={setSelectedIndex}
//       />

//       {/* <div className="text-center mt-12">
//         <a
//           href="/contact"
//           className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
//         >
//           Book a Session
//         </a>
//       </div> */}
//     </section>
//   );
// }
// export default GalleryPage

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/LightBox";
import Image from "next/image";

const allImages = [
  { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "Bride getting ready" },
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/selected blueye/selected blueye/DSC05947.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
  { src: "/selected blueye/selected blueye/_DCS1661.jpg", alt: "Corporate shoot" },
  { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "frfhr" },
  { src: "/selected blueye/selected blueye/DCS1824.jpg", alt: "frfhr" },
  { src: "/home/featured-shot/_DCS0430.JPG", alt: "frfhr" },
  { src: "/home/featured-shot/_DCS0275.JPG", alt: "fhcjsj" },
  { src: "/selected blueye/selected blueye/DSC06690.jpg", alt: "frfhr" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleImages = allImages.slice(0, visibleCount);

  // Split images into chunks of 4 for rows
  const rows = [];
  for (let i = 0; i < visibleImages.length; i += 3) {
    rows.push(visibleImages.slice(i, i + 4));
  }

  return (
    <section className="py-20 px-4 bg-black/90">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Blueye Studio Gallery</h2>
        <p className="text-gray-400">
          A curated selection of timeless moments, creative portraits, and storytelling frames.
        </p>
      </div>

      <div className="flex flex-col gap-5 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {row.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden   shadow-md cursor-pointer"
                onClick={() => setSelectedIndex(rowIndex * 4 + idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={0} // width auto

                  height={0} // height auto
                  style={{
                    height: "300px", // fixed height
                    width: "auto",   // width adjusts automatically
                    objectFit: "cover", // or "contain" if you want full image
                  }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      <Lightbox
        images={visibleImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
}