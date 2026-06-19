import { notFound } from "next/navigation";
import MobileHeroSection from "../../components/mobile-hero-section";
import Header from "../../components/header";
import OurImpactBoxesSection from "../../components/our-impact-boxes-section";
import AppDevelopmentSection from "../../components/app-development-section";
import WhatWeDoMobileSection from "../../components/advanced-technology-section";
import CaseStudiesSection from "../../components/case-studies-section";
import FaqSection from "../../components/faq-section";
import TestimonialSection from "../../components/testimonial-section";
import ThreeDTextRotationSection from "../../components/3d-text-rotation-section";
import DetailFormSection from "../../components/detail-form-section";
import StepperFrom from "../../components/stepper-from";
import Footer from "../../components/footer";
import HowWeBuildMobileSection from "../../components/how-we-build-mobile-section";
import WaitingForYouMobile from "../../components/waiting-for-you-mobile";
import IndustriesMobile from "../../components/industries-mobile";
import FacilitiesMobile from "../../components/facilities-mobile";
import AnalyticsMobile from "../../components/analytics-mobile";
import AppIntegrationMobile from "../../components/app-integration-mobile";
import OurClientsMobile from "../../components/our-clients-mobile";
import TechnologyStackMobile from "../../components/technology-stack-mobile";
import FlutterVsReactNativeSection from "../../components/flutter-vs-react-native-section";
import HipaaCompliantSection from "../../components/hipaa-compliant";
import EngagementModelSection from "../../components/engagement-model-section";
import { CITIES } from "@/app/constants/city-data";

export async function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const city = CITIES[resolved?.city];
  if (!city) return {};

  const canonical = `https://techreforms.com/mobile-app-development/${city.slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
    },
  };
}

function buildMobileAppSchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development",
    serviceType: "Mobile App Development",
    provider: {
      "@type": "Organization",
      name: "Tech Reforms",
      url: "https://techreforms.com",
    },
    url: `https://techreforms.com/mobile-app-development/${city.slug}`,
    description: city.metaDescription,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressRegion: city.state,
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "iOS App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Platform App Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Maintenance and Support" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apps For Startup" } },
      ],
    },
  };
}

export default async function MobileAppDevelopmentCityPage({ params }) {
  const resolved = typeof params.then === "function" ? await params : params;
  const city = CITIES[resolved?.city];
  if (!city) notFound();

  const mobileAppSchema = buildMobileAppSchema(city);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <Header />
      <MobileHeroSection
        headlinePrefix={city.heroHeadlinePrefix}
        headlineAccent={city.heroHeadlineAccent}
        headlineSuffix={city.heroHeadlineSuffix}
        introText={city.heroIntro}
      />
      <OurImpactBoxesSection />
      <AppDevelopmentSection />
      <FlutterVsReactNativeSection />
      <StepperFrom />
      <HowWeBuildMobileSection />
      <WaitingForYouMobile />
      <EngagementModelSection />
      <IndustriesMobile
        firstWord={city.industriesFirstWord}
        secondWord={city.industriesSecondWord}
        thirdWord={city.industriesThirdWord}
        para={city.industriesIntro}
      />
      <HipaaCompliantSection />
      <FacilitiesMobile />
      <AnalyticsMobile />
      <AppIntegrationMobile />
      <OurClientsMobile />
      <TechnologyStackMobile />
      <WhatWeDoMobileSection />
      <CaseStudiesSection />
      <FaqSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection formIntro={city.formIntro} />
      <Footer />
    </div>
  );
}
