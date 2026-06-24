import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techreforms.com";

/** Google Analytics 4 measurement ID. Set NEXT_PUBLIC_GA_ID in env to change without editing code. */
const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_ID?.trim() || "G-BMLP34G3M0";

/** Google Ads / gtag conversion ID (e.g. AW-123456789). Set NEXT_PUBLIC_GOOGLE_ADS_ID in env to change without editing code. */
const googleAdsId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "AW-16723277657";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Tech Reforms",
                  "url": "https://techreforms.com",
                  "logo": "https://techreforms.com/images/hover-logo.png",
                  "description": "TechReforms \u2013 Premier digital agency offering mobile app development, scalable e-commerce solutions, & staff augmentation to grow your business online.",
                  "telephone": "+15822335015",
                  "email": "info@techreforms.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "811 Wilshire Boulevard",
                    "addressLocality": "Los Angeles",
                    "addressRegion": "CA",
                    "postalCode": "90017",
                    "addressCountry": "US"
                  },
                  "sameAs": [
                    "https://www.facebook.com/techreforms.1/",
                    "https://www.instagram.com/tech.reforms/"
                  ],
                  "areaServed": "US",
                  "foundingDate": "2023"
                },
                {
                  "@type": "WebSite",
                  "name": "Tech Reforms",
                  "url": "https://techreforms.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://techreforms.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleAnalyticsId)}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${JSON.stringify(googleAnalyticsId)});
            gtag('config', ${JSON.stringify(googleAdsId)});
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
        <Script
          id="ze-snippet"
          strategy="afterInteractive"
          src="https://static.zdassets.com/ekr/snippet.js?key=3196a1f3-1999-4162-9a9d-9a4efcf9d971"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
