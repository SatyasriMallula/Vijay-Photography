// app/portfolio/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wedding Photography | Blueye Portfolio",
    description: "Capturing unforgettable wedding moments with creativity and precision.",
    openGraph: {
        title: "Wedding Portfolio | Blueye Photography",
        description: "Timeless wedding photos captured by Blueye Studio.",
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
