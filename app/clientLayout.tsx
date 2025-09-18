"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import { ArrowUp } from "lucide-react";
import { Instagram, MessageCircle, MapPin } from "lucide-react";


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
  const links = [
    {
      href: "https://instagram.com", title: "Instagram", icon: <Instagram className="w-7 h-7 text-pink-500" />,
    },
    {
      href: "https://google.com", title: "Location", icon: <MapPin className="w-7 h-7 text-blue-600" />,
    },
    {
      href: "https://wa.me/7729803266", title: "WhatsApp", icon: <MessageCircle className="w-7 h-7 text-green-500" />,
    },
  ];

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

      <footer className="relative py-6 space-y-6 text-sm text-center">
        <div className="flex md:hidden justify-center gap-6">
          {links.map(({ href, icon, title }, i) => (
            <a
              key={i}
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              {icon}
            </a>
          ))}
        </div>
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
