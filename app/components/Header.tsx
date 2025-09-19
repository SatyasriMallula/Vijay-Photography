"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BackButton from "./BackButton";

const navItems = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    {
        label: "PORTFOLIO",
        href: "/portfolio/weddings",
        dropdown: [
            { href: "/portfolio/weddings", label: "WEDDINGS" },
            { href: "/portfolio/travel", label: "TRAVEL" },
            { href: "/portfolio/model", label: "MODEL" },
            { href: "/portfolio/portraits", label: "PORTRAITS" },
        ],
    },
    { href: "/gallery", label: "GALLERY" },
    { href: "/contact", label: "CONTACT" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement | null>(null);

    const isActive = (href: string) => pathname === href;

    // 🔹 Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 🔹 Close menu on scroll
    useEffect(() => {
        const handleScroll = () => setOpen(false);
        if (open) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [open]);

    // 🔹 Close menu on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <header className="w-full z-50 flex items-center justify-around py-3 pt-5">
                {/* Logo */}
                <Link
                    href="/home"
                    className="flex w-[150px] items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-rotate-1"
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
                    </div>
                    <span className="pl-2 text-blue-200 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline">
                        Capturing Moments
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="space-y-2">
                    <h2 className="hidden md:block text-3xl text-blue-400 text-center">
                        BLUEYE PHOTOSTUDIO
                    </h2>
<BackButton/>
                    <nav className="hidden md:flex items-center space-x-8 font-semibold tracking-widest text-sm">
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-white/90 hover:text-blue-400 transition"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </Link>

                                    {/* Dropdown */}
                                    {servicesOpen && (
                                        <ul className="drop-down z-50">
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-white/90 hover:bg-blue-400/20 hover:text-blue-300 transition duration-300 rounded-lg"
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
                                    className={`relative group px-2 py-0.5 transition ${isActive(item.href)
                                        ? "text-yellow-400"
                                        : "text-white/90 hover:text-blue-400"
                                        }`}
                                >
                                    {item.label}
                                    <span className="gradient-line"></span>
                                </Link>
                            )
                        )}
                    </nav>
                </div>

                {/* Desktop Book Now Button */}
                <div className="hidden md:flex items-center ml-4">
                    <Link
                        href="/booknow"
                        className="px-4 py-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white rounded-lg text-sm 2xl:text-base hover:opacity-90 transition"
                    >
                        Book now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden ml-2 p-2 rounded-xl text-blue-400 hover:bg-blue-400/20 transition"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close Menu" : "Open Menu"}
                >
                    <Menu size={32} />
                </button>
            </header>

            {/* Mobile Navigation */}
            {open && (
                <div ref={menuRef} className="absolute right-2 top-[60px] z-50">
                    <nav className="w-[180px] bg-gradient-to-b from-[#08153a]/95 via-[#0f2a6a]/95 to-[#08153a]/95 backdrop-blur-lg border border-blue-800/30 shadow-xl rounded-xl px-4 py-3 flex flex-col space-y-2">
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.label} className="relative">
                                    <button
                                        aria-expanded={servicesOpen}
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center justify-center gap-3 w-full text-sm font-semibold text-blue-100/90 py-2"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    {servicesOpen && (
                                        <div className="mt-1 flex flex-col items-center    space-y-2">
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className={`block px-2 py-1 rounded-md text-sm transition ${isActive(sub.href)
                                                        ? "text-yellow-400 font-semibold"
                                                        : "text-blue-100/80 hover:text-blue-400"
                                                        }`}
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block text-sm font-semibold tracking-wide py-2 rounded-md text-center transition ${isActive(item.href)
                                        ? "text-yellow-400"
                                        : "text-blue-100/80 hover:text-blue-400"
                                        }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}

                        {/* Mobile Book Now Button */}
                        <Link
                            href="/booknow"
                            className="px-4 py-2 mt-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white rounded-lg text-center text-sm hover:opacity-90 transition"
                            onClick={() => setOpen(false)}
                        >
                            Book now
                        </Link>
                    </nav>
                </div>
            )}

        </>
    );
}