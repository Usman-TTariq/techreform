import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { FITNESS_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { FITNESS_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { FITNESS_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import FaqSection from "../components/faq-section";
import { FITNESS_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const fitnessAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fitness App Development",
  serviceType: "Gym & Fitness App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/fitness-app",
  description:
    "Tech Reforms builds custom fitness apps with class booking, QR check-ins, and workout tracking for gyms, studios, and wellness brands.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Fitness App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gym Management App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Trainer App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Demand Fitness App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fitness Tracking App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Fitness App Development" } },
    ],
  },
};

export const metadata = {
  title: "Gym & Fitness App Development Services | Tech Reforms",
  description:
    "Losing members to poor experience? Tech Reforms builds fitness apps with class booking, QR check-ins, and workout tracking. Starting at $5K. Get a free consultation.",
  keywords: [
    "fitness app development",
    "gym app development",
    "gym management app",
    "personal trainer app",
    "workout tracking app",
    "class booking app",
    "fitness app development company",
    "white-label fitness app",
  ],
  alternates: { canonical: "/fitness-app" },
};

const FITNESS_APP_IMPACT_CARDS = [
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

const FITNESS_APP_TESTIMONIALS = [
  {
    name: "Gym Owner",
    role: "Texas · Gym & Fitness Center",
    quote:
      "We were managing gym memberships and class schedules on paper before this, and it was a nightmare during peak hours. Tech Reforms built us an app where members can book classes themselves and check in with a QR code. Our front desk has way less to manage now, and members actually like having everything in one place.",
  },
  {
    name: "Online Fitness Coach",
    role: "Florida · Online Personal Training",
    quote:
      "We sell personal training programs online, and most members would lose motivation halfway through without someone checking in on them. Tech Reforms built in progress tracking and workout reminders, and our program completion rate has genuinely improved. It feels like a real coaching app now, not just a video library.",
  },
  {
    name: "Fitness Chain Manager",
    role: "California · Multi-Location Gym Chain",
    quote:
      "We run multiple gym locations and needed one app that worked across all of them without mixing up memberships. Tech Reforms set it up so members can book classes at any of our branches, and we can manage all locations from a single dashboard. It's made running multiple gyms so much less stressful.",
  },
  {
    name: "Fitness App Startup Founder",
    role: "New York · Subscription Fitness App",
    quote:
      "We wanted a subscription-based workout app, and Tech Reforms understood exactly how to structure the payment and plan tiers without it feeling complicated for users. Sign-ups have been smooth, and our churn rate has actually gone down since we made the upgrade process easier inside the app.",
  },
  {
    name: "Boutique Studio Owner",
    role: "Illinois · Live Virtual Fitness Classes",
    quote:
      "Live workout classes on our old setup would lag constantly whenever a lot of members joined at once. Tech Reforms rebuilt the video infrastructure properly, and now our live sessions run smoothly even with a full class logged in together. Member complaints about the app have basically disappeared since launch.",
  },
];

const FitnessApp = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fitnessAppSchema) }}
      />
      <Header />
      <main>
        <GeneralHeroSection
          firstWord="The Fitness App Your Members Will Actually Use —"
          secondWord="Built for Your Business"
          breakAfterFirstWord
          thirdWord=""
          forthWord=""
          fifthWord=""
          para="Fitness businesses that rely on front-desk check-ins, paper schedules, and manual renewals lose members they could have kept. Tech Reforms builds custom fitness apps where members book classes, track workouts, manage memberships, and stay connected to your brand — all from their phone."
          buttonText="Get a Free Fitness App Consultation"
        />
        <OurImpactBoxesSection cards={FITNESS_APP_IMPACT_CARDS} />
        <WhatWeOfferSection {...FITNESS_APP_WHAT_WE_OFFER} />
        <ProcessSection {...FITNESS_APP_PROCESS} />
        <WhyChooseSection {...FITNESS_APP_WHY_CHOOSE} />
        <FaqSection items={FITNESS_APP_FAQ_ITEMS} />
        <TestimonialSection testimonials={FITNESS_APP_TESTIMONIALS} />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.fitnessApp} />
      </main>

      <Footer />
    </>
  );
};

export default FitnessApp;
