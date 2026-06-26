import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { LOGISTICS_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { LOGISTICS_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { LOGISTICS_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import FaqSection from "../components/faq-section";
import { LOGISTICS_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const logisticsAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logistics App Development",
  serviceType: "Logistics App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/logistics-app",
  description:
    "Tech Reforms builds custom logistics apps with real-time fleet tracking, route optimization, and last-mile delivery management.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Logistics App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Management App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Last-Mile Delivery App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Management App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Demand Logistics App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Logistics App Development" } },
    ],
  },
};

export const metadata = {
  title: "Top Logistics App Development Company in the USA | Tech Reforms",
  description:
    "Tech Reforms builds custom logistics apps with real-time fleet tracking, route optimization, and last-mile delivery management. Get a free consultation today.",
  keywords: [
    "logistics app development",
    "logistics app development company",
    "fleet management app",
    "last-mile delivery app",
    "warehouse management app",
    "supply chain app development",
    "courier app development",
    "3PL logistics software",
  ],
  alternates: { canonical: "/logistics-app" },
};

const LOGISTICS_APP_IMPACT_CARDS = [
  {
    value: "350+",
    label: "Live Apps",
    action: "View Portfolio",
    href: "/portfolio",
    isLink: true,
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    value: "4.9★",
    label: "Clutch Rating",
    action: "See Reviews",
    href: "https://clutch.co/profile/tech-reforms",
    isLink: true,
    rounded: "",
  },
  {
    value: "$5K",
    label: "Starting Price",
    action: "Fixed-price",
    isLink: false,
    rounded: "",
  },
  {
    value: "4–8 wk",
    label: "MVP Timeline",
    action: "Guaranteed",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const LOGISTICS_APP_TESTIMONIALS = [
  {
    name: "Operations Director",
    role: "Texas · Last-Mile Delivery Company",
    quote:
      "We were tracking 200+ shipments a day on spreadsheets before this, and things were constantly falling through the cracks. Tech Reforms built us a logistics app where dispatchers assign drivers in seconds, customers get live tracking links automatically, and we can see exactly where every order is in real time. Delays are down, customer complaints are down, and our ops team finally has breathing room.",
  },
  {
    name: "Fleet Manager",
    role: "Ohio · Freight & Trucking Company",
    quote:
      "Managing a fleet of 40 trucks across three states with phone calls and paper logs was costing us time and money we didn't have. The fleet management app Tech Reforms built gives us live GPS on every vehicle, automated maintenance alerts, and driver performance reports all in one dashboard. We cut fuel waste by routing better and our dispatchers spend half the time they used to on coordination.",
  },
  {
    name: "Co-Founder",
    role: "California · On-Demand Courier Startup",
    quote:
      "We launched an on-demand courier service and needed an app that could handle instant bookings, live driver tracking, and proof-of-delivery — all before we went live in 90 days. Tech Reforms delivered exactly that. The driver app is simple enough that new riders pick it up in minutes, and the customer-facing tracking portal genuinely impressed our early users. Couldn't have launched on schedule without them.",
  },
  {
    name: "Warehouse Supervisor",
    role: "Illinois · 3PL & Warehousing Provider",
    quote:
      "Our warehouse was running on manual receiving logs and verbal handoffs between shifts. After Tech Reforms built our warehouse management app, every inbound shipment gets scanned in, inventory levels update automatically, and pick-pack errors dropped significantly in the first month. The staff adapted faster than I expected because the interface is genuinely straightforward to use.",
  },
  {
    name: "CEO",
    role: "Georgia · Regional Logistics & Supply Chain",
    quote:
      "We were losing clients because our delivery ETAs were unreliable and we had no way to show them live order status. Tech Reforms built us a logistics platform with real-time tracking, automated ETA updates, and a client portal where shippers can monitor their own orders. Our contract renewals went up noticeably after launch because clients can finally see what's happening with their freight.",
  },
];

const LogisticsApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logisticsAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Your Logistics Operation Deserves Better Than"
          secondWord="Spreadsheets and Phone Calls"
          breakAfterFirstWord
          thirdWord=""
          forthWord=""
          fifthWord=""
          para="Tech Reforms builds custom logistics apps that automate dispatch, track fleets in real time, and give your team the visibility they need to deliver on time — every time."
          para2="No more manual coordination. No more missed shipments."
          buttonText="Build My Logistics App"
        />
        <OurImpactBoxesSection cards={LOGISTICS_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...LOGISTICS_APP_WHAT_WE_OFFER} />
        <ProcessSection {...LOGISTICS_APP_PROCESS} />
        <WhyChooseSection {...LOGISTICS_APP_WHY_CHOOSE} />
        <FaqSection items={LOGISTICS_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={LOGISTICS_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.logisticsApp} />
      </main>

      <Footer />
    </>
  );
};

export default LogisticsApp;
