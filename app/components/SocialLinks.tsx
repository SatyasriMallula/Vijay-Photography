import { Instagram,  MessageCircle, MapIcon, MapPin } from "lucide-react";

const links = [
  {
    href: "https://instagram.com",title: "Instagram",icon: <Instagram className="w-7 h-7 text-pink-500" />,
  },
  {
    href: "https://google.com",title: "Location",icon: <MapPin className="w-7 h-7 text-blue-600" />,
  },
  {
    href: "https://wa.me/7729803266",title: "WhatsApp",icon: <MessageCircle className="w-7 h-7 text-green-500" />,
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
