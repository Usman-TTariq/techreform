import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import ErpWhatWeOfferSection from "../components/erp-what-we-offer-section";
import ErpProcessSection from "../components/erp-process-section";
import ErpWhyChooseSection from "../components/erp-why-choose-section";
import ErpPlatformsTechnologiesSection from "../components/erp-platforms-technologies-section";
import ErpPlatformComparisonSection from "../components/erp-platform-comparison-section";
import ErpCustomVsOffShelfSection from "../components/erp-custom-vs-off-shelf-section";
import ErpIndustriesSection from "../components/erp-industries-section";
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

const ERP_IMPACT_CARDS = [
  {
    value: "100+",
    label: "ERP Implementations",
    action: "Across 6 industries",
    isLink: false,
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    value: "4.9★",
    label: "Clutch Rating",
    action: "Verified reviews",
    href: "https://clutch.co/profile/tech-reforms",
    isLink: true,
    rounded: "",
  },
  {
    value: "$8K",
    label: "ERP Starting Price",
    action: "Fixed-price available",
    isLink: false,
    rounded: "",
  },
  {
    value: "98%",
    label: "Client Retention",
    action: "Post-launch support",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const ERP_TESTIMONIALS = [
  {
    name: "Robert Hayes",
    role: "COO — NexaManufacturing Inc.",
    quote:
      "TechReforms built our manufacturing ERP from scratch — inventory, production planning, and supplier management all in one system. Reduced our manual reporting time by 70%. Delivered in 14 weeks on a fixed price.",
  },
  {
    name: "Sarah Kim",
    role: "CTO — RetailBridge Group",
    quote:
      "Migrated our legacy system to cloud-based Odoo ERP. TechReforms handled data migration, module customization, and staff training. Zero downtime during cutover. Our ops team adopted it within 2 weeks.",
  },
  {
    name: "David Moreau",
    role: "VP Operations — FastRoute Logistics",
    quote:
      "We needed a logistics ERP that integrated with our fleet tracking and warehouse system. TechReforms built it in MS Dynamics and connected everything via API. Real-time visibility across 12 warehouses now.",
  },
  {
    name: "Laura Wilson",
    role: "CEO — MediCore Health Systems",
    quote:
      "Healthcare billing and patient management was a mess before TechReforms. They built a HIPAA-compliant ERP that connects our billing, inventory, and HR modules. Audit-ready from day one. Saved us 3 FTEs in manual work.",
  },
];

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
            <OurImpactBoxesSection cards={ERP_IMPACT_CARDS} />
            <ErpWhatWeOfferSection />
            <ErpProcessSection />
            <ErpWhyChooseSection />
            <ErpPlatformComparisonSection />
            <ErpIndustriesSection />
            <ErpPlatformsTechnologiesSection />
            <ErpCustomVsOffShelfSection />
            <CaseStudiesErpSection />
            <FaqErpSection />
            <TestimonialSection testimonials={ERP_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection
              productType="erp"
              formIntro="Every ERP system directly impacts your efficiency and profitability. Fill out the form for a quick consultation and project estimate. Our ERP solutions provider experts will guide you in building the best ERP software for a small business or a robust enterprise system, while keeping development timelines and costs under control."
            />
            <Footer />
        </div>
    );
};

export default Erp;
