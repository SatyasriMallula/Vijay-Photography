// app/gallery/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Now | Blueye PhotoStudio",
    description: "Explore our photography portfolio across weddings, travel, and events.",
    openGraph: {
        title: "Blueye PhotoStudio - Gallery",
        description: "Explore our photography portfolio.",
        images: ["/og-gallery.jpg"],
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
