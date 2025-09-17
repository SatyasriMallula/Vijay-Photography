"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      
      if (scrollTop + windowHeight >= documentHeight - 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isRoot && (
        <>
          <Header />
          <SocialLinks />
        </>
      )}

      {children}

      {!isRoot && (
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="fixed bottom-6 right-6"
            >
              <button
                onClick={handleClick}
                className="bg-black/40 border hover:cursor-pointer rounded-lg text-white/70 border-black/70 px-4 flex gap-2 py-2"
              >
                Back to Top <ArrowUp />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
