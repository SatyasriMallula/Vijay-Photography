"use client";

import Image from "next/image";

const features = [
  {
    title: "Worried about dreamy shots?",
    text: "We’ll plan everything together and I’ll ensure your vision turns into timeless photographs.",
    image: "/about/DSC08756.jpg",
  },
  {
    title: "Not confident in posing?",
    text: "I’ll guide you with simple directions, while bringing out your natural expressions.",
    image: "/about/_DCS0295.JPG",
  },
  {
    title: "Stressed about setup?",
    text: "All you need to do is show up and enjoy the experience.",
    image: "/about/DSC03595.jpg",
  },
  {
    title: "Think a photoshoot is just about pictures?",
    text: "It’s about creating an experience that leaves you with lasting memories beyond the photos.",
    image: "/about/DSC05840.jpg",
  },
];

export default function Features() {
  return (
    <section className="pb-25 h-full bg-[#1e3a8a]/20">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl text-yellow-500 md:text-5xl font-serif font-bold">
          Your Concerns-My Care
        </h2>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Image */}
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
              <Image
                src={f.image}
                alt={f.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Text Overlay Card */}
           <div className="absolute left-1/2 -bottom-35 -translate-x-1/2 
               bg-black/40 shadow-xl rounded-r-2xl  
                p-5 w-[90%] h-[230px] ">
  <h3 className="text-lg font-serif font-semibold mb-3 text-white/90">
    {f.title}
  </h3>
  <hr className="w-12 h-1 mb-3 bg-blue-500 rounded border-0" />
  <p className="text-sm text-gray-200 leading-relaxed">{f.text}</p>
</div>


          </div>
        ))}
      </div>
    </section>
  );
}
