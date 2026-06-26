import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { DELIVERY_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { DELIVERY_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { DELIVERY_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import CaseStudiesSection from "../components/case-studies-section";
import { DELIVERY_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { DELIVERY_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const deliveryAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Delivery App Development",
  serviceType: "Delivery App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/delivery-app",
  description:
    "Tech Reforms builds custom delivery apps with live tracking, smart routing and fast checkout for on-demand delivery businesses.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Delivery App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Delivery App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Vendor Delivery Marketplace App" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Last-Mile & On-Demand Courier App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Delivery App Development" } },
    ],
  },
};

export const metadata = {
  title: "Delivery App Development Company in the USA | Tech Reforms",
  description:
    "Want your own delivery app instead of relying on third-party platforms? Tech Reforms builds custom delivery apps with live tracking, smart routing & fast checkout. Let's talk.",
  keywords: [
    "delivery app development",
    "on-demand delivery app",
    "courier app development",
    "last-mile delivery app",
    "parcel delivery app",
    "multi-vendor delivery app",
    "delivery management software",
    "delivery app like DoorDash",
    "delivery app like Postmates",
  ],
  alternates: { canonical: "/delivery-app" },
};

const DELIVERY_APP_IMPACT_CARDS = [
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

const DELIVERY_APP_TESTIMONIALS = [
  {
    name: "Courier Business Owner",
    role: "Texas · Local Courier & Parcel Delivery",
    quote:
      "We were dispatching riders manually over phone calls, and it was getting impossible to manage as orders grew. Tech Reforms built us a proper system with automatic rider assignment based on location. Our delivery times improved right away, and our riders aren't sitting idle between orders anymore.",
  },
  {
    name: "Food Delivery Startup Founder",
    role: "Florida · Food Delivery",
    quote:
      "Paying a third-party delivery platform a cut of every order was eating into our margins badly. Tech Reforms built our own delivery app, and now customers order direct through us. The live tracking works great, and we've actually saved more in commissions than the app cost us to build.",
  },
  {
    name: "Delivery Marketplace Founder",
    role: "California · Multi-Vendor Delivery Platform",
    quote:
      "We connect multiple local stores with riders on one platform, and Tech Reforms understood that complexity from the start. Each vendor manages their own orders, and we oversee the whole thing centrally. The dispatch logic actually works well even when several stores get busy at the same time.",
  },
  {
    name: "Logistics Manager",
    role: "Georgia · Last-Mile Delivery Service",
    quote:
      "Late deliveries were our biggest complaint from customers before this. Tech Reforms built in automatic reassignment, so if a rider's running behind, the system shifts the order to someone closer instead of leaving the customer waiting. Our late-delivery complaints have dropped noticeably since we launched.",
  },
  {
    name: "Delivery Operations Head",
    role: "Nevada · On-Demand Delivery Service",
    quote:
      "We needed an app that could handle a huge spike in orders during promotions without crashing, since that happened with our old system more than once. Tech Reforms rebuilt it on infrastructure that scales properly, and we got through our last big sale event without a single slowdown.",
  },
];

const DeliveryApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deliveryAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Let's Build a"
          secondWord="Delivery App"
          breakAfterFirstWord
          thirdWord=""
          forthWord="That Actually Gets Things There On Time"
          fifthWord=""
          para="So you're tired of paying third-party delivery platforms a cut of every order, or maybe you're starting a courier business from scratch — either way, we've built this exact thing before. A delivery app that's fast, that riders actually want to use, and that doesn't fall apart when order volume spikes. That's what we do at Tech Reforms."
          para2="Tell us what you're delivering — food, parcels, groceries, anything — and let's figure out what your app needs."
          buttonText="Talk to Us About Your Delivery App"
        />
        <OurImpactBoxesSection cards={DELIVERY_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...DELIVERY_APP_WHAT_WE_OFFER} />
        <ProcessSection {...DELIVERY_APP_PROCESS} />
        <WhyChooseSection {...DELIVERY_APP_WHY_CHOOSE} />
        <CaseStudiesSection {...DELIVERY_APP_CASE_STUDIES} />
        <FaqSection items={DELIVERY_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={DELIVERY_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.deliveryApp} />
      </main>

      <Footer />
    </>
  );
};

export default DeliveryApp;
