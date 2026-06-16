import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import ErpWhatWeOfferSection from "../components/erp-what-we-offer-section";
import ErpProcessSection from "../components/erp-process-section";
import ErpWhyChooseSection from "../components/erp-why-choose-section";
import ErpPlatformsTechnologiesSection from "../components/erp-platforms-technologies-section";
import CaseStudiesErpSection from "../components/case-studies-erp-section";
import FaqErpSection from "../components/faq-erp-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import WhoWeAreErp from "../components/who-we-are-erp";

export const dynamic = "force-dynamic";

const erpSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom ERP Development Solutions",
  "serviceType": "ERP Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/erp",
  "description": "Optimize workflows with advanced ERP solutions. We integrate finance, inventory and analytics into one system for better efficiency and real-time insights. Transform your operations with ERP today!",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ERP Solutions",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom ERP Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finance Module Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-time Analytics Dashboard" } }
    ]
  }
};

export const metadata = {
  title: "ERP Solutions for Streamlined Operations & Growth Systems",
  description:
    "Optimize workflows with advanced ERP solutions. We integrate finance, inventory and analytics into one system for better efficiency and real-time insights. Transform your operations with ERP today!",
  alternates: { canonical: "/erp" },
};

const Erp = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(erpSchema) }}
            />
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
            <ErpPlatformsTechnologiesSection />
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
