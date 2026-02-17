import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "TechReforms - Digital Agency",
  description: "TechReforms - Elevate Your Digital Success With Tech Reforms",
  robots: { index: false, follow: false },
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
      </body>
    </html>
  );
}
