"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Weddings",
        description: "Elegant and timeless wedding photography capturing your special day.",
        href: "/services/weddings",
        image: "/selected blueye/selected blueye/DSC03543.jpg",
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
        image: "/selected blueye/selected blueye/DSC03543.jpg",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1e3a8a] text-gray-100">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center text-center">
                <div className="absolute inset-0">
                    <Image
                        src="/selected blueye/selected blueye/DSC03543.jpg"
                        alt="Services Hero"
                        height={100}
                        width={100}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg"
                    >
                        Our Services
                    </motion.h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100/90">
                        Explore the range of photography services we offer to create lasting memories.
                    </p>
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
                            className="group relative rounded-2xl overflow-hidden shadow-lg"
                        >
                            {/* Background image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                height={100}
                                width={100}
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
