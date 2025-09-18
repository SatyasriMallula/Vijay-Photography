import { Instagram, MessageCircle, MapPin } from "lucide-react";
const phoneNumber = "917729803266";
const message = "Hello! I want to contact you.";
const links = [
  {
    href: "https://www.instagram.com/blueye_photostudio/?hl=enm", title: "Instagram", icon: <Instagram className="w-7 h-7 text-pink-500" />,
  },
  {
    href: "https://maps.app.goo.gl/iL4T7yBjVTVbXCBE6", title: "Location", icon: <MapPin className="w - 7 h- 7 text - blue - 600" />,
  },
  {
    href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, title: "WhatsApp", icon: <MessageCircle className="w-7 h-7 text-green-500" />,
  },
];

function SocialLinks() {
  return (
    <>
      {/* Vertical fixed on md and up */}
      <div className="hidden md:flex fixed top-1/2 right-5 -translate-y-1/2 flex-col gap-4 py-4 px-2 z-50 items-center justify-between backdrop-blur-sm bg-black/30 rounded-lg">
        {links.map(({ href, icon, title }, i) => (
          <a
            key={i}
            title={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-125 transition rounded-lg p-1 hover:bg-black/50"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;


