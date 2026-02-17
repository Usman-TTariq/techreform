import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import StaffAugmentationDevelopmentSection from "../components/staff-augmentation-development-section";
import StepperFrom from "../components/stepper-from";
import WhatWeDoStaffAugmentationSection from "../components/what-we-do-staff-augmentation-section";
import StaffAugmentationWhyPartnerSection from "../components/staff-augmentation-why-partner-section";
import CaseStudiesStaffAugmentationSection from "../components/case-studies-staff-augmentation-section";
import FaqStaffAugmentationSection from "../components/faq-staff-augmentation-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

const StaffAugmentation = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection firstWord="Hire" secondWord="Expert Staff Augmentation" thirdWord="" forthWord="Services" fifthWord="in the USA" para="Looking for a flexible and cost-effective way to scale your team without long-term hiring commitments?"
                para2="Tech Reforms is a trusted provider of staff augmentation services designed to help businesses quickly access top-tier talent. Whether you need short-term support or long-term technical expertise, our IT staff augmentation services allow you to expand your workforce efficiently and accelerate project delivery."
                para3="Our scalable hiring solutions empower startups, growing businesses, and enterprises to meet deadlines, reduce operational costs, and stay competitive."
                buttonText="Hire Augmented Staff Today"
            />
            <OurImpactBoxesSection />
            <StaffAugmentationDevelopmentSection />
            <StepperFrom />
            <WhatWeDoStaffAugmentationSection />
            <StaffAugmentationWhyPartnerSection />
            <CaseStudiesStaffAugmentationSection />
            <FaqStaffAugmentationSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default StaffAugmentation;