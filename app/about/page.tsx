"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ExcellenceSection from "./Excellence";
import Concerns from "./concerns";
import Hero from "./hero";

export default function About() {
    return (
        <section className="bg-black/90 space-y-20  ">
           <Hero />
            <ExcellenceSection />
            <Concerns />
        </section>
    );
}