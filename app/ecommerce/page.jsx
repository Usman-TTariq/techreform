import Header from "../components/header";
import Footer from "../components/footer";
import MobileHeroSection from "../components/mobile-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import EcommerceDevelopmentSection from "../components/ecommerce-development-section";
import StepperFrom from "../components/stepper-from";
import WhatWeDoEcommerceSection from "../components/what-we-do-ecommerce-section";
import CaseStudiesEcommerceSection from "../components/case-studies-ecommerce-section";
import FaqEcommerceSection from "../components/faq-ecommerce-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import GeneralHeroSection from "../components/general-hero-section";
import EcommerceTabsSection from "../components/ecommerce-tabs-section";
import WhatMakesEcommerce from "../components/what-makes-ecommerce";
import EcommerceCta from "../components/ecommerce-cta";

export const metadata = {
    alternates: { canonical: "/ecommerce" },
};

const Ecommerce = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection firstWord="Hire" secondWord="Expert E-Commerce" thirdWord="" forthWord="Web Developers" fifthWord="in the USA" para="Looking for an affordable way to digitize your business without emptying your bank account? 
Tech Reforms is a pioneering e-commerce development agency that offers an accessible e-commerce platform. Our SEO-friendly, conversion-focused app framework is designed for small and scaling businesses to grow faster in the market.
"
                buttonText="Hire Expert Developers Today"
                compact
            />
            <OurImpactBoxesSection />
            <EcommerceDevelopmentSection />
            {/* <StepperFrom /> */}
            <EcommerceTabsSection />
            <WhatWeDoEcommerceSection />
            <CaseStudiesEcommerceSection />
            <WhatMakesEcommerce />
            <FaqEcommerceSection />
            <EcommerceCta />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default Ecommerce;