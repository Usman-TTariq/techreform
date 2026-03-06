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
  src: "../public/fonts/Britanica Regular.woff2",
  variable: "--font-britanicaRegular",
  display: "swap",
  preload: false,
});

const britanicaExtraBold = localFont({
  src: "../public/fonts/Britanica Extra Bold.woff2",
  variable: "--font-britanicaExtraBold",
  display: "swap",
  preload: false,
});

const britanicaBlack = localFont({
  src: "../public/fonts/Britanica Black.woff2",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16723277657" strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16723277657');
          `}
        </Script>
        <Script id="livechat-config" strategy="afterInteractive">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19568383;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
          `}
        </Script>
        <Script
          id="livechat-widget"
          strategy="afterInteractive"
          src="https://cdn.livechatinc.com/tracking.js"
        />
      </head>
      <body className="antialiased">
        {children}
        <AutoPopupOnLoad />
      </body>
    </html>
  );
}
