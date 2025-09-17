
import Image from "next/image";
const eventsImages = [
    "/weddings/1L4A1579.jpg",
    "/weddings/1L4A1579.jpg",
    "/weddings/1L4A1579.jpg",
    "/weddings/1L4A1579.jpg",
    "/weddings/1L4A1579.jpg",
    "/weddings/1L4A1579.jpg"
];

export default function page() {
    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Events Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {eventsImages.map((src, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={src}
                            height={100}
                            width={100}
                            alt={`Event photo ${idx + 1}`}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
