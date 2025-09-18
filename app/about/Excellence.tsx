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
      <div className="  max-w-8xl   mx-auto px-4 md:px-6 text-center">
        <h2 className=" text-base md:text-4xl lg:text-5xl text-yellow-500 font-medium mb-3 md:mb-4">Excellence Behind the Lens</h2>
        <p className="text-white/90 max-w-md md:max-w-2xl md:text-base lg:text-xl xl:text-lg  text-sm mx-auto leading-6 md:leading-8  mb-8 md:mb-12 text-left md:text-center">
          My photography is powered by professional-grade equipment and refined
          by years of experience, ensuring every image reflects quality and
          creativity.
        </p>

        <div className="grid gap-4 md:gap-8 sm:grid-cols-2  lg:grid-cols-4">
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
                className="w-full h-48 md:h-65  lg:h-75 object-cover"
              />
              <div className="p-6 border-3 bg-black/40 h-[140px] lg:h-[220px] xl:h-[155px] md:h-[165px]">
                <h3 className=" text-sm md:text-lg text-white/90 font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm lg:text-base text-center  ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
