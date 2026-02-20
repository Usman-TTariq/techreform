import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import ErpWhatWeOfferSection from "../components/erp-what-we-offer-section";
import ErpProcessSection from "../components/erp-process-section";
import ErpWhyChooseSection from "../components/erp-why-choose-section";
import CaseStudiesErpSection from "../components/case-studies-erp-section";
import FaqErpSection from "../components/faq-erp-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import WhoWeAreErp from "../components/who-we-are-erp";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/erp" },
};

const Erp = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection
                firstWord="Custom ERP Development Company"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord="| Hire Enterprise Resource Planning Software Developer"
                para="Looking for a smarter way to manage your business operations with a system built specifically for you? Tech Reforms can help you streamline operations and automate workflows effectively!"
                // buttonText="Hire ERP Experts Today"
            />
            <WhoWeAreErp />
            <OurImpactBoxesSection />
            <ErpWhatWeOfferSection />
            <ErpProcessSection />
            <ErpWhyChooseSection />
            <CaseStudiesErpSection />
            <FaqErpSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every ERP system directly impacts your efficiency and profitability. Fill out the form for a quick consultation and project estimate. Our ERP solutions provider experts will guide you in building the best ERP software for a small business or a robust enterprise system, while keeping development timelines and costs under control." />
            <Footer />
        </div>
    );
};

export default Erp;
