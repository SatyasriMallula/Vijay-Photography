"use client";

export default function ExtrasMarquee() {
  const extras = [
    "Photo Albums & Prints",
    "Editing / Retouching Services",
    "Videography (Teasers, Highlights, Reels)",
    "Drone Photography",
    "Lifestyle Branding Sessions",
    "Festivals / Cultural Functions",
    "Fashion Shoots",
    "Street / Travel Photography Collections",
  ];

  return (
    <section className="bg-gray-800 py-10 overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-yellow-400 mb-6">
         Add-ons
      </h2>

    
      <div className="relative flex overflow-x-hidden">
        
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {extras.map((item, i) => (
            <span
              key={i}
              className="text-xl text-gray-200 font-medium hover:text-yellow-300 transition-colors duration-800"
            >
              {item}
            </span>
          ))}
        </div>

        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 pr-24">
          {extras.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="text-xl text-gray-200 font-medium hover:text-yellow-300 transition-colors duration-300 "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
