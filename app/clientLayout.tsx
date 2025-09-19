"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
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
  console.log(showButton)
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const links = [
    {
      href: "https://instagram.com", title: "Instagram", icon: <Instagram className="w-7 h-7 text-pink-500" />,
    },
    {
      href: "https://maps.app.goo.gl/iL4T7yBjVTVbXCBE6", title: "Location", icon: <MapPin className="w-7 h-7 text-blue-600" />,
    },
    {
      href: "https://wa.me/7729803266", title: "WhatsApp", icon: <MessageCircle className="w-7 h-7 text-green-500" />,
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      if (window.scrollY > screenHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isRoot && (
        <>
          <Header />
          {/* <SocialLinks /> */}
        </>
      )}


      {children}

      <footer className="relative py-3 space-y-3 text-sm bg-gray-800 text-center">
        <div className="flex  justify-center gap-6">
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
        <p className="text-white/70">© {new Date().getFullYear()} Blue eye PhotoStudio. All Rights Reserved.</p>

      </footer>
      {!isRoot && showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-8 right-0 z-50 bg-black/50 border border-black/70 rounded-full p-3 text-white/80 shadow-lg hover:bg-black/70 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </>
  );
}
