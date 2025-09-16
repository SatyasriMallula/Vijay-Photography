"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Weddings",
        description: "Elegant and timeless wedding photography capturing your special day.",
        href: "/services/weddings",
        image: "/weddings/cover-image.jpg",
    },
    {
        title: "Branding",
        description: "Professional brand photoshoots to elevate your business identity.",
        href: "/services/branding",
        image: "/selected blueye/selected blueye/DSC03543.jpg",
    },
    {
        title: "Events",
        description: "From corporate events to private parties, we capture every moment.",
        href: "/services/events",
        image: "/selected blueye/selected blueye/DSC03543.jpg",
    },
    {
        title: "Portraits",
        description: "Artistic portraits that highlight personality and style.",
        href: "/services/portraits",
        image: "/potraits/cover-image.jpg",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b  text-gray-100">
            {/* Hero */}
            <section className="relative h-screen flex items-end pb-18 justify-center text-center">
                <div className="absolute inset-0">
                    <Image
                        src="/cover-image-service.jpg"
                        alt="Services Hero"
                        fill
                        className="w-full h-full object-cover opacity-60"
                        priority
                        quality={100}

                    />
                </div>
                <div className="relative z-10 flex flex-col items-center px-6 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg"
                    >
                        Our Services
                    </motion.h1>
                    <p className=" max-w-2xl mx-auto text-lg text-blue-100/90">
                        Explore the range of photography services we offer to create lasting memories.
                    </p>
                      <a
      href="/about"
      className="px-8 py-3 text-lg font-semibold 
                 rounded-full bg-blue-600 hover:bg-blue-700 
                 text-white shadow-lg shadow-blue-500/50 
                 transition-transform transform hover:scale-105 
                 hover:shadow-blue-400/70 duration-300"
    >
      Learn More
    </a>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-6 md:px-12 lg:px-20 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg h-80"
                        >
                            {/* Background image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                
                                fill
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-blue-100/90 mb-6">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.href}
                                    className="px-6 py-2 bg-yellow-400 text-[#0a192f] font-semibold rounded-full hover:bg-yellow-300 transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
