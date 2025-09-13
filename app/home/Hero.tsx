"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center" id="hero">
            {/* Background Image */}
            {/* <Image
                src="/selected blueye/selected blueye/DSC08756.jpg"
                alt="Hero Background"
                fill
                priority
                className="object-cover brightness-75"
            /> */}

            {/* Overlay Content */}
            <div className="relative z-10 text-white ">
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    Capturing Moments That Last Forever
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
                    Welcome to my world of photography
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition">
                    View Portfolio
                </button>
            </div>
        </section>
    );
}
