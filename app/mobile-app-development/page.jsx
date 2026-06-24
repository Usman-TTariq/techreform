import MobileHeroSection from "../components/mobile-hero-section";
import Header from "../components/header";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import AppDevelopmentSection from "../components/app-development-section";
import WhatWeDoMobileSection from "../components/advanced-technology-section";
import CaseStudiesSection from "../components/case-studies-section";
import FaqSection from "../components/faq-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import StepperFrom from "../components/stepper-from";
import Footer from "../components/footer";
import HowWeBuildMobileSection from "../components/how-we-build-mobile-section";
import WaitingForYouMobile from "../components/waiting-for-you-mobile";
import IndustriesMobile from "../components/industries-mobile";
import FacilitiesMobile from "../components/facilities-mobile";
import AnalyticsMobile from "../components/analytics-mobile";
import AppIntegrationMobile from "../components/app-integration-mobile";
import OurClientsMobile from "../components/our-clients-mobile";
import TechnologyStackMobile from "../components/technology-stack-mobile";
import FlutterVsReactNativeSection from "../components/flutter-vs-react-native-section";
import HipaaCompliantSection from "../components/hipaa-compliant";
import EngagementModelSection from "../components/engagement-model-section";
import { MOBILE_APP_CONTACT_BENEFITS } from "../constants/mobile-app-benefits";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/mobile-app-development" },
};

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App Development",
  "serviceType": "Mobile App Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/mobile-app-development",
  "description": "Looking for a reliable mobile app development agency? TechReforms delivers custom, affordable apps with precision, quality, and guaranteed satisfaction.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile App Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Maintenance and Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apps For Startup" } }
    ]
  }
};

const MOBILE_APP_TESTIMONIALS = [
  {
    name: "Alex Kim",
    role: "CEO — PayFlow Inc.",
    quote:
      "TechReforms built our fintech iOS app with Apple Pay and Face ID authentication in 10 weeks. App Store approved first submission — no rejections. 4.8 rating with 12,000 downloads in the first month. The Swift codebase is clean enough for our in-house team to maintain.",
  },
  {
    name: "Sarah Rodriguez",
    role: "CEO — HomeServe Now",
    quote:
      "Flutter app for iOS and Android simultaneously — marketplace with Stripe Connect, real-time GPS tracking, and push notifications. TechReforms delivered in 14 weeks on a fixed price. We hit 1,000 bookings in the first month. Architecture handled the growth without issues.",
  },
  {
    name: "Dr. Sarah Reed",
    role: "Founder — MediConnect",
    quote:
      "React Native app with HIPAA-compliant backend, Twilio video consultations, and HealthKit integration. TechReforms handled App Store and Play Store submission. 500 doctors onboarded in 3 months. The telemedicine flow is exactly what our patients needed.",
  },
  {
    name: "James Park",
    role: "CTO — LearnPath",
    quote:
      "AI-powered EdTech app — Core ML on-device recommendations, offline video, StoreKit 2 subscriptions. TechReforms built it in 12 weeks. 50,000 downloads in 6 months, 4.9 App Store rating. The on-device AI was the feature that made us stand out in a crowded market.",
  },
  {
    name: "Marcus Hall",
    role: "VP Engineering — WorkForce360 Enterprise",
    quote:
      "Enterprise React Native app with SSO, role-based access, and offline capability for 500+ field users across 12 countries. TechReforms used the New Architecture (JSI/Fabric) — performance was noticeably better than our previous RN 0.68 codebase. Deployed via Apple Business Manager and Google Play Managed. Zero reported crashes in first 30 days.",
  },
];

const Mobile = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
            />
            <Header />
            <MobileHeroSection />
            <OurImpactBoxesSection />
            <AppDevelopmentSection />
            <FlutterVsReactNativeSection />
            <StepperFrom />
            <HowWeBuildMobileSection />
            <WaitingForYouMobile/>
            <EngagementModelSection />
            <IndustriesMobile firstWord="We Have" secondWord="Served" thirdWord="Industries" />
            <HipaaCompliantSection />
            <FacilitiesMobile/>
            <AnalyticsMobile />
            <AppIntegrationMobile />
            <OurClientsMobile />
            <TechnologyStackMobile />
            <WhatWeDoMobileSection />
            <CaseStudiesSection />
            <FaqSection />
            <TestimonialSection testimonials={MOBILE_APP_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection
                formIntro="Every dollar you invest matters. Get a rough estimate of the return on investment for your upcoming app by filling out this form."
                benefits={MOBILE_APP_CONTACT_BENEFITS}
            />
            <Footer />
        </div>
    )
}  

export default Mobile;
