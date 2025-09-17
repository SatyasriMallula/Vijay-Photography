"use client";
import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    // { href: "/portfolio", label: "PORTFOLIO" },
    {
        label: "PORTFOLIO",
        href: "/portfolio",
        dropdown: [
            { href: "/services/weddings", label: "WEDDINGS" },
            { href: "/services/branding", label: "BRANDINGS" },
            { href: "/services/events", label: "EVENTS" },
            { href: "/services/portraits", label: "POTRAITS" },
        ],
    },
    { href: "/gallery", label: "GALLERY" },
    { href: "/contact", label: "CONTACT" },
];


export default function Header() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);


    return (
        <>
            <header
                id="header"
                className={`
        w-full z-50 
    flex items-center justify-between 
    py-3 pt-5
    bg-black/90
   
        `}
            >
                <div className=" w-full flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex w-[150px]  items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-rotate-1"
                    >
                        <Image
                            src="/logo.png"
                            alt="Blue Photography Logo"
                            width={50}
                            height={50}
                            className="rounded-full shadow-md border-2 border-blue-400"
                            priority
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-2xl font-extrabold text-blue-400 uppercase tracking-tight">
                                Blueye
                            </span>
                            {/* <span className="text-blue-200 font-semibold text-sm">
                                Photography
                            </span> */}
                        </div>
                        <span className="pl-2 text-blue-200 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Capturing Moments
                        </span>
                    </a>
                    <div className="flex  gap-3 flex-col">
                    <div>
                         <h2 className="text-3xl text-blue-400 text-center ">BLUEYE PHOTO STUDIO</h2>
                   </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex text-sm  items-center space-x-8 font-semibold  tracking-widest">
                       
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <Link href={item.href} className="flex   items-center gap-1 text-white/90 hover:text-blue-400 transition">
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </Link>

                                    {/* Dropdown */}
                                    {servicesOpen && (
                                        <ul
                                            className="drop-down z-50 animate-fade-in"
                                        >
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-white/90
                   hover:bg-blue-400/20 hover:text-blue-300 
                   transition duration-300 rounded-lg"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative group px-2 py-0.5 text-white/90 hover:text-blue-400 transition"
                                >
                                        {item.label}
                                        
                                    <span className="gradient-line"></span>
                                </Link>
                            )
                        )}
                    </nav>
 </div>
                    {/* Desktop Button */}
                    <div className="hidden md:flex items-center  ml-4">
                        <button className="px-2 2xl:px-6 py-2  bg-gradient-to-r from-blue-400 via-blue-500 text-sm 2xl:text-base to-blue-700
             hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white rounded-lg hover:opacity-90 transition">
                            Book now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden ml-2 p-2 rounded-xl text-blue-400 hover:bg-blue-400/20 transition"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Open Menu"
                    >
                        <Menu size={32} />
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <nav
                        className="md:hidden flex flex-col items-center space-y-8 py-8
            bg-gradient-to-b from-[#08153a]/95 via-[#0f2a6a]/95 to-[#08153a]/95
            backdrop-blur-lg border-t border-blue-800/20 shadow-2xl animate-slideDown"
                    >
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.label} className="flex flex-col items-center">
                                    <span className="text-lg uppercase font-bold text-blue-100/80 mb-2">
                                        {item.label}
                                    </span>
                                    <div className="flex flex-col space-y-2">
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="text-blue-100/70 hover:text-blue-400 transition"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg uppercase font-bold tracking-wider text-blue-100/80 hover:text-blue-400 py-2 transition"
                                >
                                    {item.label}
                                </Link>
                            )
                        )}

                    </nav>
                )}
            </header>


        </>
    );
}
