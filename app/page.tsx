// import Link from "next/link";

import { Instagram, MapIcon, MessageCircle, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <section className="w-full h-screen  bg-black">


      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="backdrop-blur-lg  p-10 
   text-center max-w-2xl flex flex-col items-center gap-6 rounded-2xl">
          {/* shadow-[0_0_10px_rgba(59,130,246,0.8),0_0_10px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.4)] 
    rounded-3xl */}
          {/* Logo */}
          <Image
            src="/logo.png"
            height={100}
            width={100}
            priority
            alt="Blue Eye Logo"
            className="w-24 h-24 mx-auto mb-4 animate-bounce-slow"
          />

          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl border-2  font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 tracking-wider animate-focus-in">
            Welcome to <br></br>Blue Eye Photography

          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-300 text-lg md:text-xl font-light opacity-90 animate-fade-in">
            Every picture tells your story — let&apos;s capture yours
          </p>
          <div className="flex gap-6">
            <Link
              href="/home"
              className="mt-3 px-6 py-2 rounded-lg bg-blue-500/20 text-blue-300 
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40">
              Explore
            </Link>
            <Link
              href="/home"
              className="mt-3 px-6 py-2 rounded-lg text-gray-300 
                     hover:bg-blue-500/40 hover:text-white 
                     transition duration-300 shadow-md shadow-blue-500/40">
              Contact
            </Link>
          </div>
          <div className=" flex gap-6 text-2xl text-white mt-8">
            <a href="https://google.com" target="_blank" className="hover:text-blue-400" title="location">
              <MapIcon />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-400">
              <Instagram />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-green-500">
              <MessageCircle />
            </a>
          </div>
        </div>

      </div>

    </section>

  );
}


