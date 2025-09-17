"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import { ArrowUp } from "lucide-react";


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
          
    <footer className="relative py-6 text-sm text-center">
  <p className="text-white/70">© {new Date().getFullYear()} Blue eye Photography. All Rights Reserved.</p>
  {!isRoot && (
    <button
      onClick={handleClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 border hover:cursor-pointer rounded-lg text-white/70 border-black/70 px-4 flex gap-2 py-2"
    >
      Back to Top <ArrowUp />
    </button>
  )}
</footer>

    </>
  );
}
