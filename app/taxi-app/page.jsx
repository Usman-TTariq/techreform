import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { TAXI_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { TAXI_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { TAXI_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import CaseStudiesSection from "../components/case-studies-section";
import { TAXI_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { TAXI_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const taxiAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxi App Development",
  serviceType: "Taxi App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/taxi-app",
  description:
    "Tech Reforms builds custom taxi booking apps with live GPS tracking, secure payments and driver management.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taxi App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Taxi App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxi Dispatch & Fleet Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driver App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Taxi App Development" } },
    ],
  },
};

export const metadata = {
  title: "Taxi App Development Company in the USA | Tech Reforms",
  description:
    "Tech Reforms builds custom taxi booking apps with live GPS tracking, secure payments & driver management. Get a free taxi app consultation today.",
  keywords: [
    "taxi app development company",
    "taxi booking app development",
    "ride hailing app development",
    "on-demand taxi app",
    "custom taxi app",
    "taxi dispatch software",
    "driver app development",
    "taxi app like Uber",
    "GPS tracking app",
    "fleet management app",
  ],
  alternates: { canonical: "/taxi-app" },
};

const TAXI_APP_IMPACT_CARDS = [
  {
    value: "350+",
    label: "Live Apps",
    action: "View Portfolio",
    isLink: false,
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

const TAXI_APP_TESTIMONIALS = [
  {
    name: "Taxi Fleet Owner",
    role: "Texas · Taxi & Ride-Hailing",
    quote:
      "We wanted our own dispatch system instead of depending on third-party ride apps, and Tech Reforms got it right from day one. The driver app is simple enough that even our older drivers picked it up fast, and the live tracking actually works without lag. Launched in under 8 weeks, and our cancellation rate has dropped noticeably since.",
  },
  {
    name: "Cab Service Owner",
    role: "Florida · Taxi & Local Cab Service",
    quote:
      "Before this, we were managing bookings over phone calls and WhatsApp, which honestly was a mess during rush hours. Tech Reforms built us a proper dispatch app where rides get assigned automatically based on driver location. Our drivers are happier because they're not sitting idle anymore, and we're handling almost double the rides without hiring more staff.",
  },
  {
    name: "Fleet Manager",
    role: "Arizona · Multi-City Taxi Service",
    quote:
      "We run a small fleet across two cities, and most agencies we spoke to wanted to charge us for a massive app we didn't need yet. Tech Reforms actually listened and built something lean that fit our size, with room to add features later. The fare calculation is accurate, payments go through smoothly, and our riders haven't had a single complaint about the booking process.",
  },
  {
    name: "Taxi Business Owner",
    role: "Nevada · Airport & City Taxi Service",
    quote:
      "What stood out for us was how fast Tech Reforms moved without cutting corners. We needed the app live before our busy season, and they delivered on time with real-time GPS tracking and a clean driver dashboard. Riders can actually see their driver approaching now instead of just guessing, which alone cut down our 'where's my ride' support calls significantly.",
  },
  {
    name: "Ride-Hailing Startup Founder",
    role: "Georgia · Urban Ride-Hailing",
    quote:
      "We'd tried a cheaper developer before Tech Reforms and ended up with an app that kept crashing during peak hours. Tech Reforms rebuilt it properly on infrastructure that actually handles our ride volume during weekends and events. Drivers get ride requests instantly now, and we haven't had a single downtime issue since launch.",
  },
];

const TaxiApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Best"
          secondWord="Taxi App Development Company"
          breakAfterFirstWord
          thirdWord=""
          forthWord="– Built for Ride-Hailing Success"
          fifthWord=""
          para="Want to grow your taxi or ride-hailing business without the tech hassle? Tech Reforms helps taxi fleets, cab companies, and ride-hailing startups build apps that riders trust."
          para2="So, turn your taxi service into a digital-first business with a custom app built around your brand."
          buttonText="Get a Free Taxi App Consultation"
        />
        <OurImpactBoxesSection cards={TAXI_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...TAXI_APP_WHAT_WE_OFFER} />
        <ProcessSection {...TAXI_APP_PROCESS} />
        <WhyChooseSection {...TAXI_APP_WHY_CHOOSE} />
        <CaseStudiesSection {...TAXI_APP_CASE_STUDIES} />
        <FaqSection items={TAXI_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={TAXI_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.taxiApp} />
      </main>

      <Footer />
    </>
  );
};

export default TaxiApp;
