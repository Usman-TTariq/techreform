import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { TRAVEL_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { TRAVEL_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { TRAVEL_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import CaseStudiesSection from "../components/case-studies-section";
import { TRAVEL_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { TRAVEL_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const travelAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Travel App Development",
  serviceType: "Travel App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/travel-app",
  description:
    "Tech Reforms builds custom travel apps with itinerary planning, booking and live trip tracking.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Travel App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flight & Hotel Booking App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trip Planning & Itinerary App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Travel App Development" } },
    ],
  },
};

export const metadata = {
  title: "Travel App Development Company in the USA | Tech Reforms",
  description:
    "Want your own travel booking app instead of relying on third-party platforms? Tech Reforms builds custom travel apps with itinerary planning, booking & live trip tracking. Let's talk.",
  keywords: [
    "travel app development",
    "travel booking app",
    "flight booking app",
    "hotel booking app",
    "trip planner app",
    "travel itinerary app",
    "tour and travel app development",
    "travel app like Booking.com",
    "travel app like Expedia",
    "travel agency app",
  ],
  alternates: { canonical: "/travel-app" },
};

const TRAVEL_APP_IMPACT_CARDS = [
  {
    value: "350+",
    label: "Apps already live",
    action: "Go see for yourself",
    href: "/portfolio",
    isLink: true,
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    value: "4.9★",
    label: "Rating on Clutch",
    action: "Real client reviews, not cherry-picked",
    href: "https://clutch.co/profile/tech-reforms",
    isLink: true,
    rounded: "",
  },
  {
    value: "$5K",
    label: "Is where pricing starts",
    action: "Fixed, no surprises later",
    isLink: false,
    rounded: "",
  },
  {
    value: "4–8 wk",
    label: "And your MVP is ready",
    action: "Test with real customers",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const TRAVEL_APP_TESTIMONIALS = [
  {
    name: "Travel Agency Director",
    role: "Texas · Travel Agency & Booking",
    quote:
      "Third-party booking platforms were taking a huge cut of every sale, so we decided to build our own app. Tech Reforms built a booking flow that doesn't lose customers halfway through checkout like our old website did. More travelers are booking direct with us now, which was the whole point of doing this.",
  },
  {
    name: "Tour Operator",
    role: "Florida · Tour Packages & Group Travel",
    quote:
      "We sell flights, hotels, and tour packages, and most developers we talked to wanted to treat it like a simple booking app. Tech Reforms actually understood the complexity and built proper package-bundling so we can combine flights and hotels with custom pricing. It's made selling packages so much easier.",
  },
  {
    name: "Booking Platform Founder",
    role: "California · Online Travel Booking Startup",
    quote:
      "Cancellations and date changes used to mean a flood of support calls every single day. Tech Reforms built in self-service cancellation and modification flows based on our policies, so travelers can handle most changes themselves now. Our support team has way less on their plate during busy season.",
  },
  {
    name: "Travel Startup Co-Founder",
    role: "New York · International Travel Booking",
    quote:
      "We needed multi-currency and multi-language support since our travelers come from different countries, and Tech Reforms got that right without us having to explain it twice. The app feels local no matter where someone's booking from, and that alone has helped us close more international bookings.",
  },
  {
    name: "Travel Agency Owner",
    role: "Arizona · Seasonal Travel & Holiday Packages",
    quote:
      "Our old booking system would basically slow down every holiday season when everyone's trying to book at once. Tech Reforms rebuilt it on infrastructure that actually handles the rush, and we got through our last peak season without a single complaint about the app being slow or unresponsive.",
  },
];

const TravelApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Let's Build a"
          secondWord="Travel App"
          breakAfterFirstWord
          thirdWord=""
          forthWord="People Actually Plan Their Trips Around"
          fifthWord=""
          para="So you're running a travel agency, a tour business, or maybe a booking startup — and third-party platforms are eating into your margins or you just don't have control over the customer experience. We get it. We've built travel apps before that actually keep travelers booking direct with you instead of bouncing to a bigger aggregator. That's what we do at Tech Reforms."
          para2="Tell us what kind of trips you're selling — flights, hotels, full packages, anything — and let's figure out what your app needs."
          buttonText="Talk to Us About Your Travel App"
        />
        <OurImpactBoxesSection cards={TRAVEL_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...TRAVEL_APP_WHAT_WE_OFFER} />
        <ProcessSection {...TRAVEL_APP_PROCESS} />
        <WhyChooseSection {...TRAVEL_APP_WHY_CHOOSE} />
        <CaseStudiesSection {...TRAVEL_APP_CASE_STUDIES} />
        <FaqSection items={TRAVEL_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={TRAVEL_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.travelApp} />
      </main>

      <Footer />
    </>
  );
};

export default TravelApp;
