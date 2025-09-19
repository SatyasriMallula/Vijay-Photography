

"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Wedding Stories",
    description:
      "Your wedding is a once-in-a-lifetime celebration. I capture the candid laughter, heartfelt tears, and timeless moments so you can relive them forever. Every frame is crafted to tell your love story beautifully.",
    subservices: [
      "Pre-wedding & Engagement Shoots",
      "Bridal & Groom Portraits",
      "Candid Wedding Photography",
      "Traditional Coverage",
      "Post-wedding Sessions",
    ],
    image: "/weddings/1L4A1579.jpg",
  },
  {
    title: "Portrait Sessions",
    description:
      "Portraits are about more than just a picture — they're about personality, confidence, and soul. Whether outdoors in natural light or indoors with crafted studio setups, I create portraits that feel personal and timeless.",
    subservices: [
      "Individual Portraits",
      "Couple Portraits",
      "Family Portraits",
      "Professional Headshots",
      "Creative & Themed Portraits",
    ],
    image: "/portraits/_DCS0213.JPG",
  },
  {
    title: "Events & Celebrations",
    description:
      "Life is filled with milestones worth cherishing. From birthdays to cultural celebrations, I document the details, the energy, and the emotions so you can look back at them for years to come.",
    subservices: [
      "Birthday Parties",
      "Cultural & Religious Events",
      "Corporate Gatherings",
      "Baby Showers & Anniversaries",
      "Festivals & Community Events",
    ],
    image: "/portraits/DSC08825.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-3 md:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <h2 className="xl:text-5xl lg:text-4xl text-2xl font-bold text-yellow-500 mb-2 md:mb-4">
            What I Offer
          </h2>
          <p className="text-gray-300  md:text-center text-left leading-6 md:leading-8 text-sm md:text-lg w-full md:max-w-2xl md:mx-auto">
            My focus is on delivering meaningful photography services with
            passion and precision. Each experience is crafted to make your
            memories last a lifetime.
          </p>
        </div>


        <div className=" space-y-14 md:space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 md:gap-10  ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <div className="lg:w-1/2 relative w-full h-[300px] md:h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>


              <div className="lg:w-1/2 w-full px-2 md:px-0">
                <h3 className="lg:text-4xl md:text-3xl text-xl font-semibold text-yellow-500 mb-3 md:mb-4 lg:text-left text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 md:text-lg lg:text-xl text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className=" text-gray-400 text-sm md:text-base space-y-2">
                  {service.subservices.map((sub, i) => (
                    <li key={i} className="flex items-center text-gray-300 gap-2"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-400 flex-shrink-0"
                      />
                      {sub}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
