"use client";
import React from "react";

export default function WelcomeGlass() {
  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="backdrop-blur-lg bg-white/10 p-10 rounded-3xl shadow-2xl text-center max-w-2xl flex flex-col items-center gap-6">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Blue Eye Logo"
          className="w-24 h-24 mx-auto mb-4 animate-bounce-slow"
        />

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 tracking-wider animate-focus-in">
          Welcome to <br></br>Blue Eye Photography
          
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-blue-200 text-lg md:text-xl font-light opacity-90 animate-fade-in">
          Every picture tells your story — let's capture yours
        </p>
      </div>
    </section>
  );
}
