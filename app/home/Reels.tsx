"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reels = [
  {
    image: "/about/DSC08756.jpg",
    url: "https://www.instagram.com/reel/XXXXXXXX/",
  },
  {
    image: "/about/DSC05840.jpg",
    url: "https://www.instagram.com/reel/YYYYYYYY/",
  },
  {
    image: "/about/DSC03595.jpg",
    url: "https://www.instagram.com/reel/ZZZZZZZZ/",
  },
];

export default function ReelsSection() {
  return (
    <section className="py-10 space-y-10">
      <div className="text-center  space-y-8">
        <h2 className="text-3xl md:text-4xl text-white/90 font-medium">
          Stories in Motion
        </h2>
         <motion.p
          className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Some stories can&apos;t be captured in a single frame — they need
          movement, sound, and rhythm. */}
          These reels bring my photography
          to life, turning fleeting emotions into timeless memories in motion.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
              {reels.map((reel, i) => (
             <motion.div
                            key={i}
                            className=""
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
           
            <Image
              src={reel.image}
              alt={`Reel ${i + 1}`}
              width={400}
              height={500}
              className="object-cover w-full h-100 group-hover:scale-105 transition-transform duration-500"
            />

          
            <div className="absolute inset-0 -bottom-30 bg-black/40 opacity-70 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <Link
                href={reel.url}
                target="_blank"
                className="text-white flex px-4 py-2 rounded-lg font-semibold  hover:text-white transition"
              >
                Click to watch <Instagram className="w-7 h-7 mx-1 bg-white p-0.5 rounded-md text-pink-500" />
              </Link>
            </div>
                      </div>
                      </motion.div>
        ))}
                  </div>
               
    </section>
  );
}
