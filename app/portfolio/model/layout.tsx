

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Baby Shoot | Blueye PhotoStudio",
    description: "Adorable baby shoots that preserve precious memories.",
    openGraph: {
        title: "Blueye PhotoStudio - Baby Shoots",
        description: "Cherish your baby's special moments with our photography.",
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
