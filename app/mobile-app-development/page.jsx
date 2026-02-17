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

const Mobile = () => {
    return (
        <div>
            <Header />
            <MobileHeroSection />
            <OurImpactBoxesSection />
            <AppDevelopmentSection />
            <StepperFrom />
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
