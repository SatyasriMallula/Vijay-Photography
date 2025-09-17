// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Blueye PhotoStudio",
    description: "Get in touch with Blueye Photography for inquiries and bookings.",
    openGraph: {
        title: "Blueye Photography - Contact",
        description: "Reach out to us for questions or to book a session.",
        images: ["/og-contact.jpg"],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
