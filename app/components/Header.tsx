// "use client";
// import React, { useState } from "react";
// import { Instagram, Facebook, Youtube, Menu } from "lucide-react";

// export default function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header
//             className="absolute top-0 left-0 w-full z-50 flex flex-col"
//             style={{ pointerEvents: "none" }} // Ensures underlying hero image is clickable except header/nav
//         >
//             {/* Hero Image Layer - put this behind header in your page component */}
//             {/* <div className="fixed inset-0 z-0">
//         <img src="/your-best-photo.jpg" alt="" className="w-full h-screen object-cover" />
//       </div> */}

//             <div
//                 className="
//           flex items-center justify-between max-w-7xl mx-auto
//           px-6 py-5 mt-4 rounded-3xl shadow-2xl
//           bg-[#0a192f]/60 backdrop-blur-xl border border-yellow-300/20
//           transition-all
//           pointer-events-auto
//         "
//             >
//                 {/* Left: Logo & Brand */}
//                 <a
//                     href="#home"
//                     className="flex items-center gap-3 group cursor-pointer select-none"
//                 >
//                     {/* Replace with your animated SVG/logo */}
//                     <span className="inline-block w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-200 to-pink-400 rounded-xl flex items-center justify-center shadow">
//                         <svg width="32" height="32" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e1b382" /><circle cx="20" cy="20" r="8" fill="#fff" /></svg>
//                     </span>
//                     <span className="ml-3 text-2xl font-extrabold tracking-wider text-accent uppercase drop-shadow-sm">Vijay Photography</span>
//                 </a>
//                 {/* Center: Hero Navigation */}
//                 <nav className="hidden md:flex items-center space-x-10 text-lg font-bold tracking-widest uppercase">
//                     {["Home", "Portfolio", "About", "Contact"].map(txt => (
//                         <a
//                             key={txt}
//                             href={`#${txt.toLowerCase()}`}
//                             className="relative group text-white hover:text-accent px-2 py-1 transition"
//                         >
//                             {txt}
//                             <span
//                                 className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full
//                   transition-all duration-400 group-hover:w-full"
//                             ></span>
//                         </a>
//                     ))}
//                 </nav>
//                 {/* Right: Social Icons */}
//                 <div className="hidden md:flex items-center space-x-3">
//                     <a href="https://instagram.com" target="_blank" className="hover:scale-110 transition"><Instagram className="w-7 h-7 text-pink-500" /></a>
//                     <a href="https://facebook.com" target="_blank" className="hover:scale-110 transition"><Facebook className="w-7 h-7 text-blue-600" /></a>
//                     <a href="https://youtube.com" target="_blank" className="hover:scale-110 transition"><Youtube className="w-7 h-7 text-red-500" /></a>
//                 </div>
//                 {/* Mobile Burger */}
//                 <button
//                     className="md:hidden ml-2 p-2 rounded-xl text-accent hover:bg-accent/20 transition pointer-events-auto"
//                     onClick={() => setMenuOpen(v => !v)}
//                 >
//                     <Menu size={32} />
//                 </button>
//             </div>
//             {/* Mobile Menu as overlay */}
//             {menuOpen && (
//                 <nav className="
//           md:hidden flex flex-col items-center space-y-8 py-8
//           bg-gradient-to-b from-[#141e30]/95 via-[#243b55]/95 to-[#141e30]/95
//           backdrop-blur-2xl rounded-3xl mx-6 mt-4 shadow-xl pointer-events-auto
//         ">
//                     {["Home", "Portfolio", "About", "Contact"].map(txt => (
//                         <a key={txt} href={`#${txt.toLowerCase()}`} className="text-lg uppercase font-bold tracking-wider text-white/80 hover:text-accent">{txt}</a>
//                     ))}
//                     <div className="flex space-x-6 mt-2">
//                         <a href="https://instagram.com" target="_blank" className="hover:scale-125 transition"><Instagram className="w-8 h-8 text-pink-500" /></a>
//                         <a href="https://facebook.com" target="_blank" className="hover:scale-125 transition"><Facebook className="w-8 h-8 text-blue-600" /></a>
//                         <a href="https://youtube.com" target="_blank" className="hover:scale-125 transition"><Youtube className="w-8 h-8 text-red-500" /></a>
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// }


"use client";
import React, { useState } from "react";
import { Home, Camera, User, Mail, Instagram, Facebook, Youtube, Menu } from "lucide-react";

// Animated logo SVG (replace with your brand mark if needed)
const LogoSvg = () => (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="url(#g)" opacity="0.95" />
        <circle cx="50" cy="50" r="24" fill="white" />
        <circle cx="50" cy="50" r="12" fill="#E1B382" />
        <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e1b382" />
                <stop offset="100%" stopColor="#141e30" />
            </radialGradient>
        </defs>
    </svg>
);

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

const socials = [
    { href: "https://instagram.com", icon: <Instagram className="text-pink-500" />, label: "Instagram" },
    { href: "https://facebook.com", icon: <Facebook className="text-blue-600" />, label: "Facebook" },
    { href: "https://youtube.com", icon: <Youtube className="text-red-500" />, label: "YouTube" },
];

export default function UniqueTopHeader() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="
        fixed top-0 inset-x-0 z-50 flex flex-col
        bg-[#0a192f]/50 backdrop-blur-2xl border-b border-yellow-300/20
        shadow-xl animate-fadeIn
      ">
                <div className="max-w-8xl mx-auto w-full flex items-center justify-between px-6 py-3 md:py-5">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="
              flex items-center gap-3 group cursor-pointer
              scale-110 hover:rotate-[8deg] hover:scale-[1.12]
              transition-transform duration-500
            "
                    >
                        <LogoSvg />
                        <span className="text-2xl font-extrabold italic tracking-wider text-accent uppercase drop-shadow-sm select-none">
                            Vijay <span className="text-white/70 font-bold">Photography</span>
                        </span>
                    </a>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10 text-base font-semibold tracking-widest ">
                        {navItems.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="
                  relative group px-2 py-0.5 text-white text-opacity-80
                  hover:text-accent transition
                "
                            >
                                {item.label}
                                <span className="
                  absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[3px]
                  rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400
                  transition-all duration-400 group-hover:w-full
                "></span>
                            </a>
                        ))}
                    </nav>
                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center space-x-6 ml-4">

                        <button className="px-6 py-1 bg-accent text-background rounded-lg hover:opacity-90 transition">
                            Book now
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden ml-2 p-2 rounded-xl text-accent hover:bg-accent/20 transition"
                        onClick={() => setOpen(v => !v)}
                        aria-label="Open Menu"
                    >
                        <Menu size={32} />
                    </button>
                </div>
                {/* Mobile Menu */}
                {open && (
                    <nav className="
            md:hidden flex flex-col items-center space-y-8 py-8
            bg-gradient-to-b from-[#141e30]/95 via-[#243b55]/95 to-[#141e30]/95
            backdrop-blur-lg border-t border-yellow-300/10 shadow-2xl animate-slideDown
          ">
                        {navItems.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="
                  text-lg uppercase font-bold tracking-wider text-white/80
                  hover:text-accent py-2 transition
                "
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex space-x-10 mt-2">
                            {socials.map(social => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3
                    group hover:scale-125 hover:drop-shadow-[0_0_10px_#f472b6] transition
                  "
                                    aria-label={social.label}
                                >
                                    {React.cloneElement(
                                        social.icon,
                                        { className: social.icon.props.className + " w-8 h-8" }
                                    )}
                                </a>
                            ))}

                        </div>


                    </nav>
                )}
            </header>
            {/* Push content down so it shows under the header */}
            <div className="h-20 md:h-24"></div>
        </>
    );
}


// "use client";
// import React from "react";
// import { Home, Camera, User, Mail, Instagram, Facebook, Youtube } from "lucide-react";

// // Example: SVG logo (replace <circle> with your brand icon if needed)
// const LogoSvg = () => (
//     <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
//         <circle cx="50" cy="50" r="48" fill="url(#g)" opacity="0.95" />
//         <circle cx="50" cy="50" r="24" fill="white" />
//         <circle cx="50" cy="50" r="12" fill="#E1B382" />
//         <defs>
//             <radialGradient id="g" cx="50%" cy="50%" r="50%">
//                 <stop offset="0%" stopColor="#e1b382" />
//                 <stop offset="100%" stopColor="#141e30" />
//             </radialGradient>
//         </defs>
//     </svg>
// );

// const navItems = [
//     { href: "#home", icon: <Home />, label: "Home" },
//     { href: "#portfolio", icon: <Camera />, label: "Portfolio" },
//     { href: "#about", icon: <User />, label: "About" },
//     { href: "#contact", icon: <Mail />, label: "Contact" },
// ];

// const socials = [
//     { href: "https://instagram.com", icon: <Instagram className="text-pink-500" />, label: "Instagram" },
//     { href: "https://facebook.com", icon: <Facebook className="text-blue-600" />, label: "Facebook" },
//     { href: "https://youtube.com", icon: <Youtube className="text-red-500" />, label: "YouTube" },
// ];

// export default function Header() {
//     return (
//         <aside className="
//       fixed inset-y-0 left-0 w-20 md:w-24 bg-white/10
//       backdrop-blur-2xl z-50 rounded-r-3xl shadow-2xl
//       flex flex-col items-center py-8 animate-fadeIn
//     ">
//             {/* Logo */}
//             <a href="#home"
//                 className="
//           mb-16 rotate-[-8deg] scale-110 hover:rotate-0
//           hover:scale-[1.18] transition-transform duration-500 cursor-pointer
//           bg-gradient-to-br from-yellow-400 via-pink-200 to-red-300
//           rounded-2xl p-2 shadow-lg
//         "
//                 aria-label="Vijay Photography"
//             >
//                 <LogoSvg />
//             </a>
//             {/* Nav */}
//             <nav className="flex flex-col items-center space-y-12 flex-grow">
//                 {navItems.map(item => (
//                     <a
//                         key={item.href}
//                         href={item.href}
//                         className="
//               group flex flex-col items-center w-14 md:w-16
//               transition-transform hover:scale-110
//             "
//                         aria-label={item.label}
//                     >
//                         <span className="
//               block w-10 h-10 md:w-12 md:h-12
//               bg-gradient-to-br from-yellow-400 via-pink-200 to-pink-400
//               rounded-xl flex items-center justify-center text-black/80
//               shadow-md group-hover:ring-2 group-hover:ring-pink-300
//               transition
//             ">
//                             {item.icon}
//                         </span>
//                         <span className="
//               mt-2 text-xs text-yellow-50/60 tracking-wider
//               group-hover:opacity-100 opacity-70 transition-all
//             ">
//                             {item.label}
//                         </span>
//                     </a>
//                 ))}
//             </nav>
//             {/* Socials */}
//             <div className="flex flex-col space-y-5 mt-auto mb-4">
//                 {socials.map(social => (
//                     <a
//                         key={social.href}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="
//               group flex items-center justify-center
//               hover:scale-125 hover:drop-shadow-[0_0_12px_#f472b6]
//               transition
//             "
//                         aria-label={social.label}
//                     >
//                         {React.cloneElement(social.icon, { className: social.icon.props.className + " w-7 h-7" })}
//                     </a>
//                 ))}
//             </div>
//             {/* Vertical site title (optional, hides under mobile) */}
//             <span className="hidden md:block mt-8 text-xs text-yellow-200/60 rotate-90 tracking-wider select-none">
//                 Vijay Photography
//             </span>
//         </aside>
//     );
// }
