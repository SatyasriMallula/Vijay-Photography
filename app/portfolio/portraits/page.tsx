
import type { Metadata } from "next";
import VisualPortrait from "./visualpotrait";


export const metadata: Metadata = {
  title: "Portraits | Blueye PhotoStudio",
  description: "Creative portraits that capture personality and emotion.",
  openGraph: {
    title: "Blueye PhotoStudio - Portraits",
    description: "View our portrait photoStudio collection.",
    images: ["/og-image.jpg"],
  },
};

export default function VisualBrandingPage() {
  return <VisualPortrait />;
}

