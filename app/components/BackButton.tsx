"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // fallback if no history
    }
  };

  return (
    <button
      onClick={goBack}
      className="
        absolute top-1 left-1
        flex items-center gap-1
        rounded-full bg-black/80 shadow-md
        px-1 py-1 iso-only
        md:hidden   /* 🚀 only visible in mobile screens */
      "
    >
      <ChevronLeft size={24} className="text-white"/>
      
    </button>
  );
}