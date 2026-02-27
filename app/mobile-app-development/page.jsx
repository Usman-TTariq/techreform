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

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/mobile-app-development" },
};

const Mobile = () => {
    return (
        <div>
            <Header />
            <MobileHeroSection />
            <OurImpactBoxesSection />
            <AppDevelopmentSection />
            <StepperFrom />
            <HowWeBuildMobileSection />
            <WaitingForYouMobile/>
            <IndustriesMobile/>
            <FacilitiesMobile/>
            <AnalyticsMobile />
            <AppIntegrationMobile />
            <OurClientsMobile />
            <TechnologyStackMobile />
            <WhatWeDoMobileSection />
            <CaseStudiesSection />
            <FaqSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default Mobile;
