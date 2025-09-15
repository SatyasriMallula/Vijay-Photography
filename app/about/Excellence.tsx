"use client";
import Image from "next/image";

export default function ExcellenceSection() {
  const features = [
    {
      img: "/about/sony m4.jpg", 
      title: "Professional Cameras",
      desc: "Full-frame DSLRs and mirrorless cameras that capture stunning detail and clarity.",
    },
    {
      img: "/about/sony fx3.jpeg",
      title: "Cinematic Lenses",
      desc: "High-quality prime and zoom lenses that bring a cinematic feel to every frame.",
    },
    {
      img: "/about/sony-a7r4.webp",
      title: "Lighting Mastery",
      desc: "From studio lights to natural setups, I ensure the perfect ambience for every shoot.",
    },
    {
        img: "/about/drone.jpg",
      title: "Advanced Editing",
      desc: "Professional color grading and retouching using industry-standard tools.",
    },
  ];

  return (
    <section className="py-25">
      <div className="  max-w-8xl   mx-auto px-6 text-center">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Excellence Behind the Lens</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-12">
          My photography is powered by professional-grade equipment and refined
          by years of experience, ensuring every image reflects quality and
          creativity.
        </p>

        <div className="grid gap-8 sm:grid-cols-2  lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow hover:shadow-lg  overflow-hidden hover:scale-105 duration-300 transition-transform"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-65 object-cover"
              />
              <div className="p-6 bg-black/40 h-[165px]">
                <h3 className="text-lg text-white/90 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300/80 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
