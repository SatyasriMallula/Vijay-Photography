"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RefreshCw } from "lucide-react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onClose: () => void;
};

export default function Lightbox({ images, selectedIndex, setSelectedIndex, onClose }: LightboxProps) {

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (selectedIndex === null) return null;

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
//   const handleWheel = (e: React.WheelEvent) => {
//   if (scale <= 1) return; // Only pan when zoomed in
//   e.preventDefault(); // Prevent page scroll
//   setPosition((pos) => ({
//     x: pos.x - e.deltaX,
//     y: pos.y - e.deltaY,
//   }));
// };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Close */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80">
            <X size={24} />
          </button>

          {/* Prev */}
         {/* Prev */}
<button
  onClick={() => {
    setPosition({ x: 0, y: 0 });
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );
  }}
  className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
>
  <ChevronLeft size={28} />
</button>

{/* Next */}
<button
  onClick={() => {
    setPosition({ x: 0, y: 0 });
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );
  }}
  className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
>
  <ChevronRight size={28} />
</button>



          {/* Image */}
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-w-full max-h-[80vh] object-contain select-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? "none" : "transform 0.2s ease",
              cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
            onMouseDown={handleMouseDown}
            
            draggable={false}
          />

          {/* Zoom Controls */}
          <div className="absolute bottom-6 flex space-x-4 bg-black/50 p-3 rounded-lg">
            <button onClick={zoomOut} className="text-white hover:scale-110 transition"><ZoomOut size={24} /></button>
            <button onClick={resetZoom} className="text-white hover:scale-110 transition"><RefreshCw size={24} /></button>
            <button onClick={zoomIn} className="text-white hover:scale-110 transition"><ZoomIn size={24} /></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
