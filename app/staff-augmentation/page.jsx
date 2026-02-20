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

// Avoid oversized static fallback (ISR page > 19 MB); render on demand
export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/staff-augmentation" },
};

const StaffAugmentation = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection firstWord="IT Staff Augmentation" secondWord="Services" thirdWord="in the" forthWord="USA" fifthWord="| Hire Dedicated Developers" para="Looking for a flexible and cost-effective way to scale your team without long-term hiring commitments?"
                para2="Tech Reforms is a trusted provider of staff augmentation services curated to help businesses access top-tier talent at affordable rates. From short-term support to long-term technical assistance, we have it all!"
                para3="So, expand your workforce with our reliable IT staff augmentation solutions."
                buttonText="Hire Experts Today"
            />
            <OurImpactBoxesSection />
            <StaffAugmentationDevelopmentSection />
            {/* <StepperFrom /> */}
            <WhatWeDoStaffAugmentationSection />
            <StaffAugmentationWhyPartnerSection />
            <CaseStudiesStaffAugmentationSection />
            <FaqStaffAugmentationSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every hire impacts your project timeline and budget. Get a quick consultation and resource estimate by filling out this form. Our experts will help you scale your development team faster and reduce software development costs." />
            <Footer />
        </div>
    )
}

export default StaffAugmentation;