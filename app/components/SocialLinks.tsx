import { Instagram, Facebook, Youtube } from "lucide-react";

function SocialLinks() {
    return (
        <div className="
      fixed top-1/2 right-0 z-50
      -translate-y-1/2 flex flex-col gap-4 items-center
      bg-[#0a192f]/70 backdrop-blur-lg  py-4 px-2
      shadow-xl 
    ">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="group hover:scale-125 transition rounded-lg p-1 bg-white">
                <Instagram className="w-7 h-7 text-pink-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="group hover:scale-125 transition  rounded-full p-1 bg-white">
                <Facebook className="w-7 h-7 text-blue-600" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="group hover:scale-125 transition rounded-lg p-1 bg-white">
                <Youtube className="w-7 h-7 text-red-500" />
            </a>
        </div>
    );
}

export default SocialLinks;
