// app/portfolio/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel | Blueye PhotoStudio",
    description: "Travel photoStudio capturing landscapes and cultures worldwide.",
    openGraph: {
        title: "Blueye PhotoStudio - Travel",
        description: "Discover our travel photography adventures.",
        images: ["/og-image.jpg"],
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
