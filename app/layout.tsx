import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Blueye | Capture Your Moments",
  description:
    "Blueye Photography — professional photography portfolio showcasing portraits, weddings, landscapes, and creative shots. Capturing memories with creativity and precision.",
  keywords: [
    "Blueye Photography",
    "photographer portfolio",
    "wedding photography",
    "portrait photography",
    "landscape photography",
  ],
  openGraph: {
    title: "Blueye Photography | Capture Your Moments",
    description:
      "Explore Blueye Photography's portfolio: weddings, portraits, and creative photography projects.",
    url: "https://your-domain.com",
    siteName: "Blueye Photography",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blueye Photography Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueye Photography",
    description:
      "Professional photography portfolio — weddings, portraits, and more.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Header></Header>
        <SocialLinks />
        {children}
      </body>
    </html >
  );
}
