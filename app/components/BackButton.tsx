"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [isApple, setIsApple] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    console.log("User Agent:", userAgent);

    if (/iPhone|iPad|iPod|Macintosh/.test(userAgent) && !/Android/.test(userAgent)) {
      setIsApple(true);
    }
    else if (/Android|Samsung/.test(userAgent)) {
      setIsApple(false);
    }
    else {
      setIsApple(false);
    }
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  if (isApple === null) return null;

  if (!isApple) return null;

  return (
    <button
      onClick={goBack}
      className="
        absolute top-1 left-1
        flex items-center gap-1
        rounded-full bg-black/80 shadow-md
        px-1 py-1 iso-only
        md:hidden  /* Visible only on mobile screens */
      "
    >
      <ChevronLeft size={24} className="text-white" />
    </button>
  );
}
