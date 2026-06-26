import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import DatingWhatWeOfferSection from "../components/dating-what-we-offer-section";
import DatingProcessSection from "../components/dating-process-section";
import DatingWhyChooseSection from "../components/dating-why-choose-section";
import DatingCaseStudiesSection from "../components/dating-case-studies-section";
import FaqDatingSection from "../components/faq-dating-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const datingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dating App Development",
  serviceType: "Dating App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/dating-app",
  description:
    "America's trusted dating app development company. Custom, AI-powered dating apps with matchmaking algorithms, real-time chat, and video calling.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dating App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Matchmaking Engines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Dating App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tinder & Bumble Style Apps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-Time Chat & Video Calling" } },
    ],
  },
};

export const metadata = {
  title: "America's Trusted Dating App Development Company | Tech Reforms",
  description:
    "Build a dating app that people actually use. Tech Reforms offers custom, AI-powered dating app development — from matchmaking algorithms to real-time chat and video calling.",
  keywords: ["dating app development company", "dating app development agency", "AI dating app development"],
  alternates: { canonical: "/dating-app" },
};

const DatingAppPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datingSchema) }}
      />
      <Header />
      <GeneralHeroSection
        firstWord="America's Trusted Dating App Development"
        secondWord="Company"
        breakAfterFirstWord
        thirdWord=""
        forthWord=""
        fifthWord=""
        para="Looking to build a dating app that truly connects people? Tech Reforms is a trusted dating app development agency offering custom, AI-powered dating app development services, from matchmaking algorithms to real-time chat."
        para2="Let's bring your vision to life."
        buttonText="Get a Free Dating App Consultation"
      />
      <OurImpactBoxesSection />
      <DatingWhatWeOfferSection />
      <DatingProcessSection />
      <DatingWhyChooseSection />
      <DatingCaseStudiesSection />
      <FaqDatingSection />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.dating} />
      <Footer />
    </>
  );
};

export default DatingAppPage;
