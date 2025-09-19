import { Instagram, MessageCircle, MapPin } from "lucide-react";
const phoneNumber = "917729803266";
const message = "Hello! I want to contact you.";
const links = [
  {
    href: "https://www.instagram.com/blueye_photostudio/?hl=enm", title: "Instagram", icon: <Instagram className="w-7 h-7 text-pink-500" />,
  },
  {
    href: "https://maps.app.goo.gl/iL4T7yBjVTVbXCBE6", title: "Location", icon: <MapPin className="w - 7 h- 7 text-blue-600" />,
  },
  {
    href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, title: "WhatsApp", icon: <MessageCircle className="w-7 h-7 text-green-500" />,
  },
];

function SocialLinks() {
  return (
    <div className="fixed hidden top-1/2 right-5 z-50 -translate-y-1/2 md:flex md:flex-col gap-4 items-center justify-between py-4 px-2">
      {links.map(({ href, icon, title }, i) => (
        <a
          key={i}
          title={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:scale-125 transition rounded-lg p-1 backdrop-blur-sm bg-black/30 hover:bg-black/50"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
