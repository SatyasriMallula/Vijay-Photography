"use client";

import Image from "next/image";

const features = [
  {
    title: "Worried about dreamy shots?",
    text: "We'll plan everything together and I’ll ensure your vision turns into timeless photographs.",
    image: "/about/DSC08756.jpg",
  },
  {
    title: "Not confident in posing?",
    text: "I'll guide you with simple directions, while bringing out your natural expressions.",
    image: "/about/_DCS0295.JPG",
  },
  {
    title: "Stressed about setup?",
    text: "All you need to do is show up and enjoy the experience.Everything is handled with care to make your day effortless.",
    image: "/about/DSC03595.jpg",
  },
  {
    title: "Think a photoshoot is just about pictures?",
    text: "It's about creating an experience that leaves you with lasting memories beyond the photos.",
    image: "/about/DSC05840.jpg",
  },
];

export default function Features() {
  return (
    <section className="pb-40 xl:pb-30 lg:pb-60 h-full">
      {/* Section Heading */}
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-medium">
          Your Concerns-My Care
        </h2>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                gap-y-40 md:gap-y-48 lg:gap-y-44 
                gap-x-8 md:gap-x-10 
                px-6 md:px-16">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[230px] rounded-xl overflow-hidden">
              <Image
                src={f.image}
                alt={f.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Text Overlay Card */}
            <div className="absolute left-1/2 -bottom-36 sm:-bottom-40 md:-bottom-45 lg:-bottom-65 xl:-bottom-48 -translate-x-1/2 
               bg-blue-300/20 shadow-xl rounded-tr-[30px] sm:rounded-tr-[40px]   rounded-bl-[30px] sm:rounded-bl-[40px] 
                             px-4 sm:px-5 py-4 sm:py-5 lg:w-[95%]  w-[88%] sm:w-[90%] h-[180px] sm:h-[210px] md:h-[230px] lg:h-[300px] xl:h-[250px] ">
              <p className=" text-lg  font-normal mb-3 text-white/90">
                {f.title}
              </p>
              <hr className="md:w-12 w-10 h-1 mb-3 bg-blue-500 rounded border-0" />
              <p className=" text-xs lg:text-[15px] md:text-sm text-gray-200 leading-6 md:leading-relaxed">{f.text}</p>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}
