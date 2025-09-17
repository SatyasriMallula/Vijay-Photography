import { Metadata } from "next";
import About from "./About";
export const metadata: Metadata = {
    title: "About Us | Blueye PhotoStudio",
    description: "Learn more about Blueye Photography and our creative journey.",
    openGraph: {
        title: "About Blueye Photography",
        description: "Our story, vision, and the passion behind the lens.",
        images: ["/og-image.jpg"],
    },
};

export default function AboutPage() {
    return (
        <div> <About /></div>

    );
}
