import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AutoPopupOnLoad from "./components/auto-popup-on-load";

export const metadata: Metadata = {
  title: "Top USA Digital Agency for App & eCommerce",
  description: "TechReforms – Premier digital agency offering mobile app development, scalable e-commerce solutions, & staff augmentation to grow your business online.",
  robots: { index: false, follow: false },
  verification: {
    google: "DEnRN5PHSUcsA77Lwd1AqNPCP0nLQx3TldzPqDsJSnA",
  },
};

const britanicaRegular = localFont({
  src: "../public/fonts/Britanica Regular.ttf",
  variable: "--font-britanicaRegular",
  display: "swap",
  preload: false,
});

const britanicaExtraBold = localFont({
  src: "../public/fonts/Britanica Extra Bold.ttf",
  variable: "--font-britanicaExtraBold",
  display: "swap",
  preload: false,
});

const britanicaBlack = localFont({
  src: "../public/fonts/Britanica Black.ttf",
  variable: "--font-britanicaBlack",
  display: "swap",
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${britanicaRegular.variable} ${britanicaExtraBold.variable} ${britanicaBlack.variable}`}>
      <body className="antialiased">
        {children}
        <AutoPopupOnLoad />
      </body>
    </html>
  );
}
