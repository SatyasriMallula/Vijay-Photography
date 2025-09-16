"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-6  right-6">
      <button
      title="back to top"
        onClick={handleClick}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black/70 text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <ArrowUp className="w-5 h-5" />
        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <path
            className="text-blue-500"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - scroll}
            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
          />
        </svg>
      </button>
    </div>
  );
}
