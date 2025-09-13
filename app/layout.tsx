import type { Metadata } from "next";
import { Inter, Roboto_Mono, Dancing_Script } from "next/font/google";
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
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
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
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${dancingScript.variable}`}>
      <body className="relative min-h-screen bg-black antialiased overflow-x-hidden">
  {/* Global background gradients (visible on every page) */}
  <div className="fixed inset-0 -z-10">
    <div
      className="absolute top-10 left-0 w-[350px] h-[350px] rounded-full 
                 bg-[radial-gradient(circle_at_center,theme(colors.blue.900),transparent_90%)] 
                 blur-3xl opacity-70"
    />
    <div
      className="absolute right-0 bottom-10 w-[350px] h-[350px] rounded-full 
                 bg-[radial-gradient(circle_at_center,theme(colors.blue.900),transparent_90%)] 
                 blur-3xl opacity-70"
    />
  </div>

  {/* Always visible */}
  <Header />
  <SocialLinks />

  {/* Page-specific content */}
  <main className="relative z-10">{children}</main>
</body>

    </html >
  );
}
