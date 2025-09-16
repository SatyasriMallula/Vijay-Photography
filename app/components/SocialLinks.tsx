import { Instagram, Facebook, MessageCircle } from "lucide-react";

const links = [
  { href: "https://instagram.com", icon: <Instagram className="w-7 h-7 text-pink-500" /> },
  // { href: "https://facebook.com", icon: <Facebook className="w-7 h-7 text-blue-600" /> },
  { href: "https://wa.me/911234567890", icon: <MessageCircle className="w-7 h-7 text-green-500" /> },
];

function SocialLinks() {
  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 flex flex-col gap-4 items-center justify-between py-4 px-2 ">
      {links.map(({ href, icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:scale-125 transition rounded-lg p-1 bg-white"
        >
          {icon}
        </a>
      ))}
      {/* <div className="pt-30">
        <button className="px-4 py-2 text-lg text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
          Book Now
        </button>
      </div> */}
    </div>
  );
}
export default SocialLinks;