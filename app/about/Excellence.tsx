"use client";
import Image from "next/image";

export default function ExcellenceSection() {
 const features = [
  {
    img: "/about/sony m4.jpg",
    title: "Sony M4",
    desc: "A powerful full-frame mirrorless camera delivering sharp images,  professional quality for every shoot.",
  },
  {
    img: "/about/sony fx3.jpeg",
    title: "Sony FX3",
    desc: "A compact cinema camera designed for offering exceptional low-light  and cinematic video recording.",
  },
  {
    img: "/about/sony-a7r4.webp",
    title: "SONY A7R IV",
    desc: "A high-resolution 61MP mirrorless camera, perfect for capturing ultra-detailed portraits, landscapes.",
  },
  {
    img: "/about/drone.jpg",
    title: "Drone",
    desc: "Advanced aerial photography and videography equipment for dynamic, high-angle shots.",
  },
];



  return (
    <section className="">
      <div className="  max-w-8xl   mx-auto px-6 text-center">
        <h2 className="text-4xl text-white font-medium mb-4">Excellence Behind the Lens</h2>
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
                <p className="text-white/70 text-sm text-center  ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
