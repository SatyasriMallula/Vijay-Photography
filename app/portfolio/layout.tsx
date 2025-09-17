// app/portfolio/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Blueye PhotoStudio",
    description: "Explore Blueye Photography's portfolio — weddings, travel, baby shoots, and portraits.",
    openGraph: {
        title: "Portfolio | Blueye Photography",
        description: "Discover weddings, travel adventures, baby shoots, and portraits captured by Blueye.",
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
