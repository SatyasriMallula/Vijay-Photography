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
  title: "Vijay Photography | Capture Your Moments",
  description:
    "Vijay Photography — professional photography portfolio showcasing portraits, weddings, landscapes, and creative shots. Capturing memories with creativity and precision.",
  keywords: [
    "Vijay Photography",
    "photographer portfolio",
    "wedding photography",
    "portrait photography",
    "landscape photography",
  ],
  openGraph: {
    title: "Vijay Photography | Capture Your Moments",
    description:
      "Explore Vijay Photography's portfolio: weddings, portraits, and creative photography projects.",
    url: "https://your-domain.com",
    siteName: "Vijay Photography",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vijay Photography Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Photography",
    description:
      "Professional photography portfolio — weddings, portraits, and more.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable}`}
    >
      <body>
        <Header />
        <SocialLinks />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
