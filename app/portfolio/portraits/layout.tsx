

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portraits | Blueye Photography",
    description: "Creative portraits that capture personality and emotion.",
    openGraph: {
        title: "Blueye Photography - Portraits",
        description: "View our portrait photography collection.",
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
