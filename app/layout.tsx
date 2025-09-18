
import type { Metadata } from "next";
import { Inter, Roboto_Mono, Kalnia, Moderustic, Josefin_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";


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
const kalnia = Kalnia({
  variable: "--font-kalnia",
  subsets: ["latin"],

  display: "swap",
});
const josefin = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap"
})
// Import ModernAntiqua (closest to Moderustic style)
const moderustic = Moderustic({
  variable: "--font-moderustic",
  subsets: ["latin"],

  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.blueyephotography.com"),
  title: "Blueye | Capture Your Moments",
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Blueye PhotoStudio— professional photography portfolio showcasing portraits, weddings, landscapes, and creative shots. Capturing memories with creativity and precision.",
  keywords: [
    "Blueye PhotoStudio",
    "photographer portfolio",
    "wedding photography",
    "portrait photography",
    "landscape photography",
  ],
  openGraph: {
    title: "Blueye PhotoStudio | Capture Your Moments",
    description:
      "Explore Blueye PhotoStudio's portfolio: weddings, portraits, and creative photography projects.",
    url: "https://your-domain.com",
    siteName: "Blueye PhotoStudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blueye PhotoStudio Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueye PhotoStudio",
    description:
      "Professional photography portfolio — weddings, portraits, and more.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className={`${inter.variable}  ${josefin.variable} ${kalnia.variable} ${moderustic.variable}  ${robotoMono.variable}`}>

      <body className="antialiased ">
        {/* Client wrapper handles conditional header */}
        <ClientLayout>{children}</ClientLayout>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PhotoStudio",
            "name": "Blueye Photogstudio",
            "url": "https://www.blueyephotostudio.com",
            "logo": "https://www.blueyephotostudio.com/logo.png",
            "sameAs": [
              "https://www.instagram.com/yourhandle",
              "https://www.facebook.com/yourhandle"
            ]
          })
        }} />
      </body>


    </html >
  );
}