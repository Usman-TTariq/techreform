import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import AutoPopupOnLoad from "./components/auto-popup-on-load";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techreforms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Top USA Digital Agency for App & eCommerce",
  description: "TechReforms – Premier digital agency offering mobile app development, scalable e-commerce solutions, & staff augmentation to grow your business online.",
  robots: { index: true, follow: true },
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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BMLP34G3M0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BMLP34G3M0');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <AutoPopupOnLoad />
      </body>
    </html>
  );
}
