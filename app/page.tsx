import { Instagram, MapIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen bg-black flex justify-center items-center px-4">
      <div className="backdrop-blur-lg p-10 text-center max-w-4xl flex flex-col items-center gap-6 rounded-2xl">
        <Image
          src="/logo.png"
          alt="Blue Eye Logo"
          height={100}
          width={100}
          className=" pulse-logo" />

        <svg width="650" height="250" viewBox="0 0 650 250" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <path id="curve1" d="M 90 100 Q 325 160 560 100" fill="none" />
            <path id="curve2" d="M 90 160 Q 325 210 560 160" fill="none" />
          </defs>

          <text fontSize="48" fontWeight="bold" fill="url(#gradient)" textLength="440">
            <textPath href="#curve1" startOffset="50%" textAnchor="middle">
              Welcometo
            </textPath>
          </text>

          <text fontSize="48" fontWeight="bold" fill="url(#gradient)" textLength="470">
            <textPath href="#curve2" startOffset="50%" textAnchor="middle">
              Blue Eye Photography
            </textPath>
          </text>
        </svg>




        <p className="mt-4 text-gray-300 text-lg md:text-xl font-light opacity-90 animate-fade-in">
          Every picture tells your story — let&apos;s capture yours
        </p>

        <div className="flex gap-6">
          <Link
            href="/home"
            className="mt-3 px-6 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/40 hover:text-white transition duration-300 shadow-md shadow-blue-500/40"
          >
            Explore
          </Link>
          <Link
            href="/home"
            className="mt-3 px-6 py-2 rounded-lg text-gray-300 hover:bg-blue-500/40 hover:text-white transition duration-300 shadow-md shadow-blue-500/40"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-6 text-2xl text-white mt-8">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            title="location"
          >
            <MapIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <Instagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <MessageCircle />
          </a>
        </div>
      </div>
    </section>
  );
}
