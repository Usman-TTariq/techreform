import Header from "../header";
import Footer from "../footer";
import GeneralHeroSection from "../general-hero-section";
import OurImpactBoxesSection from "../our-impact-boxes-section";
import ErpWhatWeOfferSection from "../erp-what-we-offer-section";
import ErpProcessSection from "../erp-process-section";
import ErpWhyChooseSection from "../erp-why-choose-section";
import CaseStudiesErpSection from "../case-studies-erp-section";
import FaqErpSection from "../faq-erp-section";
import TestimonialSection from "../testimonial-section";
import ThreeDTextRotationSection from "../3d-text-rotation-section";
import DetailFormSection from "../detail-form-section";
import WhoWeAreErp from "../who-we-are-erp";

const DEFAULT_FORM_INTRO =
    "Every ERP system directly impacts your efficiency and profitability. Fill out the form for a quick consultation and project estimate. Our ERP solutions provider experts will guide you in building the best ERP software for a small business or a robust enterprise system, while keeping development timelines and costs under control.";

const ErpPageContent = ({
    heroTitle = "Custom ERP Development Company",
    heroPara = "Looking for a smarter way to manage your business operations with a system built specifically for you? Tech Reforms can help you streamline operations and automate workflows effectively!",
    formIntro = DEFAULT_FORM_INTRO,
}) => {
    return (
        <div>
            <Header />
            <GeneralHeroSection
                firstWord={heroTitle}
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord="| Hire Enterprise Resource Planning Software Developer"
                para={heroPara}
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
            <DetailFormSection formIntro={formIntro} />
            <Footer />
        </div>
    );
};

export default ErpPageContent;
