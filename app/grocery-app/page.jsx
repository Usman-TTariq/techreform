import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { GROCERY_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { GROCERY_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { GROCERY_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import CaseStudiesSection from "../components/case-studies-section";
import { GROCERY_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { GROCERY_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const groceryAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grocery App Development",
  serviceType: "Grocery App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/grocery-app",
  description:
    "Build a grocery app your customers will love with user-friendly features, fast performance, secure payments, and seamless shopping experiences.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Grocery App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Grocery App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Vendor Grocery Marketplace App" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Quick-Commerce / Instant Delivery App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Grocery App Development" } },
    ],
  },
};

export const metadata = {
  title: "Let's Build a Grocery App Your Customers Will Actually Use",
  description:
    "Build a grocery app your customers will love with user-friendly features, fast performance, secure payments, and seamless shopping experiences. Let's talk.",
  keywords: [
    "grocery app development",
    "grocery delivery app",
    "online grocery app",
    "grocery ordering app",
    "instant delivery app",
    "quick commerce app development",
    "grocery store app",
    "multi-vendor grocery app",
    "grocery app like Instacart",
    "grocery app like Blinkit",
  ],
  alternates: { canonical: "/grocery-app" },
};

const GROCERY_APP_IMPACT_CARDS = [
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

const GROCERY_APP_TESTIMONIALS = [
  {
    name: "Grocery Store Owner",
    role: "Texas · Single-Store Grocery",
    quote:
      "We kept getting orders for items that were already out of stock in-store, and refunding customers every other day was killing our reputation. Tech Reforms built real-time inventory sync that actually fixed this. Customers see accurate stock now, and our refund requests have dropped massively since launch.",
  },
  {
    name: "Operations Manager",
    role: "Florida · Multi-Location Grocery Chain",
    quote:
      "We have three locations and needed one app that could handle all of them without mixing up inventory between stores. Tech Reforms set up a multi-store system with separate dashboards for each location but one app for our customers. Managing all three stores is so much easier now.",
  },
  {
    name: "Marketplace Founder",
    role: "California · Multi-Vendor Grocery Platform",
    quote:
      "We wanted to bring local vendors onto one platform instead of just selling our own products, and Tech Reforms built exactly that. Each vendor manages their own stock and orders, and we oversee everything from a central dashboard. It's turned into a proper marketplace, not just a single grocery app.",
  },
  {
    name: "E-commerce Manager",
    role: "New York · Online Grocery Delivery",
    quote:
      "Our checkout process before this was so clunky that people were abandoning their carts halfway through. Tech Reforms redesigned the entire ordering flow, and it's noticeably faster now, fewer steps, smoother payment. We've seen a real increase in completed orders since the new app went live.",
  },
  {
    name: "Quick-Commerce Founder",
    role: "Illinois · Instant/Quick-Commerce Grocery Delivery",
    quote:
      "We promised 15-minute delivery to our customers but our old system couldn't keep up with order volume during peak hours. Tech Reforms built the app on infrastructure that actually handles the rush, with smart order routing to the nearest store. We're consistently hitting our delivery promise now, even during weekend spikes.",
  },
];

const GroceryApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groceryAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="Let's Build a"
          secondWord="Grocery App"
          breakAfterFirstWord
          thirdWord=""
          forthWord="Your Customers Will Actually Use"
          fifthWord=""
          para="So you're running a grocery store, a chain, or maybe a delivery startup — and you're thinking about going digital. Good move. We've been there with other grocery businesses, and honestly, the ones who win online are the ones whose app just works: fast search, accurate stock, smooth checkout. That's exactly what we build at Tech Reforms."
          para2="Tell us about your store, and let's figure out what your app needs to look like."
          buttonText="Talk to Us About Your Grocery App"
        />
        <OurImpactBoxesSection cards={GROCERY_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...GROCERY_APP_WHAT_WE_OFFER} />
        <ProcessSection {...GROCERY_APP_PROCESS} />
        <WhyChooseSection {...GROCERY_APP_WHY_CHOOSE} />
        <CaseStudiesSection {...GROCERY_APP_CASE_STUDIES} />
        <FaqSection items={GROCERY_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={GROCERY_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.groceryApp} />
      </main>

      <Footer />
    </>
  );
};

export default GroceryApp;
