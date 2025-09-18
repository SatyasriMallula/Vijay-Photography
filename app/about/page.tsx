"use client";

import ExcellenceSection from "./Excellence";
import Concerns from "./concerns";
import Hero from "./hero";
import ServicesSection from "./ServiceProvide";
import ExtrasMarquee from "./Extras";

export default function AboutPage() {
    return (
        <section className="bg-black/90 space-y-20  ">
            <Hero />
            <ServicesSection />

            <ExcellenceSection />
            <Concerns />
            <ExtrasMarquee />
        </section>
    );
}