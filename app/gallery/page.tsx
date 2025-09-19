

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Lightbox from "../components/LightBox";
// import Image from "next/image";

// const allImages = [
//   {src:"selected blueye/selected blueye/_KN11127.jpg",alt:"frfhr"},
//   { src: "selected blueye/selected blueye/_DCS7412.jpg", alt: "frfhr" },
//    {src:"home/59be7081def4d.jpg",alt:"landscape "},
//   { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },

//   { src: "/home/featured-shot/_DCS0275.JPG", alt: "fhcjsj" },
//    {src:"selected blueye/selected blueye/_DCS7306.jpg",alt:"frfhr"},
//   { src: "/selected blueye/selected blueye/DSC05947.jpg", alt: "Branding session" },
//   { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
//   { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
//   { src: "/selected blueye/selected blueye/_DCS7247.jpg", alt: "frfhr" },
//    {src:"home/DSC05894.jpg",alt:"landscape2"},
//   { src: "/selected blueye/selected blueye/_DCS0129.JPG", alt: "frfhr" },
//   { src: "/home/featured-shot/_DCS0430.JPG", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC06690.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC07655.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC07857.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC07974.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC08523.jpg", alt: "frfhr" },
//       { src: "/selected blueye/selected blueye/DSC07655.jpg", alt: "frfhr" },
//   { src: "selected blueye/selected blueye/_DCS7389.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC09816.jpg", alt: "frfhr" },
//   { src: "/selected blueye/selected blueye/DSC09867.jpg", alt: "frfhr" },
//   { src: "home/featured-shot/DSC05890.jpg", alt: "prewedding" },
//   { src: "/weddings/DSC00356 2.jpg", alt: "portrait" },
// ];

// export default function GalleryPage() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [visibleCount, setVisibleCount] = useState(12);

//   const visibleImages = allImages.slice(0, visibleCount);

//   // Split images into chunks of 4 for rows
//  const rows = [];
// for (let i = 0; i < visibleImages.length; i += 4) {
//   rows.push(visibleImages.slice(i, i + 4));
// }

//   return (
//     <section className="py-20 px-4 bg-black/90">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-4xl text-yellow-400 font-bold mb-4">Blueye Studio Gallery</h2>
//         <p className="text-gray-400">
//           A curated selection of timeless moments, creative portraits, and storytelling frames.
//         </p>
//       </div>

//       <div className="flex flex-col gap-5 ">
//         {rows.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex gap-4">
//             {row.map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="relative overflow-hidden   shadow-md cursor-pointer"
//                 onClick={() => setSelectedIndex(rowIndex * 4 + idx)}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   width={0} // width auto

//                   height={0} // height auto
//                   style={{
//                     height: "300px", // fixed height
//                     width: "auto",   // width adjusts automatically
//                     objectFit: "cover", // or "contain" if you want full image
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {visibleCount < allImages.length && (
//         <div className="text-center mt-6">
//           <button
//             onClick={() => setVisibleCount((prev) => prev + 4)}
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
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../components/LightBox";
import Image from "next/image";

const allImages = [
  {src:"/selected blueye/selected blueye/_KN11127.jpg",alt:"frfhr"},
  { src: "/selected blueye/selected blueye/_DCS7412.jpg", alt: "frfhr" },
   {src:"/home/59be7081def4d.jpg",alt:"landscape "},
  { src: "/selected blueye/selected blueye/DSC03543.jpg", alt: "Couple at sunset" },
  { src: "/home/featured-shot/_DCS0275.JPG", alt: "fhcjsj" },
   {src:"/selected blueye/selected blueye/_DCS7306.jpg",alt:"1"},
  { src: "/selected blueye/selected blueye/DSC05947.jpg", alt: "Branding session" },
  { src: "/selected blueye/selected blueye/DSC06699.jpg", alt: "Family portrait" },
  { src: "/selected blueye/selected blueye/_DCS0210.jpg", alt: "Outdoor wedding" },
 
 {src:"/home/DSC05894.jpg",alt:"landscape2"},
  { src: "/selected blueye/selected blueye/_DCS0129.JPG", alt: "2" },
  { src: "/selected blueye/selected blueye/DSC08825.jpg", alt: "Gallery" },
  { src: "/selected blueye/selected blueye/_DCS1799.JPG", alt: "3" },
  { src: "/selected blueye/selected blueye/DSC06690.jpg", alt: "4" },
  { src: "/selected blueye/selected blueye/DSC08825.jpg", alt: "5" },
  
  { src: "/selected blueye/selected blueye/DSC07857.jpg", alt: "6" },
  { src: "/selected blueye/selected blueye/2P6A5682.JPG", alt: "7" },
  { src: "/selected blueye/selected blueye/DSC07974.jpg", alt: "8" },
  { src: "/selected blueye/selected blueye/DSC08523.jpg", alt: "9" },
  { src: "/selected blueye/selected blueye/as.jpg", alt: "10" },
  { src: "/selected blueye/selected blueye/_DCS7389.jpg", alt: "11" },
  { src: "/selected blueye/selected blueye/DSC09816.jpg", alt: "12" },
  { src: "/selected blueye/selected blueye/DSC09867.jpg", alt: "13" },
  { src: "/home/featured-shot/DSC05890.jpg", alt: "prewedding" },
  { src: "/weddings/DSC00356 2.jpg", alt: "portrait" },
  { src: "/selected blueye/selected blueye/IMG_7840.JPG", alt: "haldi" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  

  return (
    <section className="py-20 px-4 bg-black/90">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Blueye Studio Gallery</h2>
        <p className="text-gray-400">
          A curated selection of timeless moments, creative portraits, and storytelling frames.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 py-10">
                     {allImages.map((p, idx) => (
                          
                         <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} onClick={() => setSelectedIndex(idx)} className="mb-4 break-inside-avoid">
                             <Image src={p.src} alt={p.alt} width={600} height={800} className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform" />
                         </motion.div>
                     ))}
                 </div>

      

      <Lightbox
        images={allImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
}