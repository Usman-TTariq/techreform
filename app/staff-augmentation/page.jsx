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

const staffAugmentationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Staff Augmentation Services",
  "serviceType": "Staff Augmentation",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/staff-augmentation",
  "description": "Hire expert staff augmentation services to scale your team with vetted professionals, boost efficiency, and achieve project goals faster with flexible support.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Staff Augmentation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Flutter Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Java Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Magento Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Python Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Laravel Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Node.js Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Spring Boot Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Power BI Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire Golang Developer" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire LLM Developer" } }
    ]
  }
};

export const metadata = {
  alternates: { canonical: "/staff-augmentation" },
};

const STAFF_AUG_TESTIMONIALS = [
  {
    name: "Marcus Chen",
    role: "Engineering Lead — ScaleApp Inc.",
    quote:
      "TechReforms sent 3 Flutter developer profiles within 24 hours. We hired a senior Flutter dev who was onboarded into our GitHub and Jira within 10 days. He integrated like a full-time employee from week one.",
  },
  {
    name: "Priya Sharma",
    role: "CTO — AI Labs Co.",
    quote:
      "We needed a senior Python developer with LLM experience urgently. TechReforms delivered 2 qualified profiles in 48 hours. The developer we hired had worked with OpenAI APIs and RAG systems — exactly what we needed.",
  },
];

const StaffAugmentation = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(staffAugmentationSchema) }}
            />
            <Header />
            <GeneralHeroSection firstWord="IT Staff Augmentation" secondWord="Services" thirdWord="in the" forthWord="USA" fifthWord="| Hire Dedicated Developers" para="Looking for a flexible and cost-effective way to scale your team without long-term hiring commitments?"
                para2="Tech Reforms is a trusted provider of staff augmentation services curated to help businesses access top-tier talent at affordable rates. From short-term support to long-term technical assistance, we have it all!"
                para3="So, expand your workforce with our reliable IT staff augmentation solutions."
                buttonText="Scale Your Team with Dedicated Developers"
            />
            <OurImpactBoxesSection />
            <StaffAugmentationDevelopmentSection />
            {/* <StepperFrom /> */}
            <WhatWeDoStaffAugmentationSection />
            <StaffAugmentationWhyPartnerSection />
            <CaseStudiesStaffAugmentationSection />
            <FaqStaffAugmentationSection />
            <TestimonialSection testimonials={STAFF_AUG_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every hire impacts your project timeline and budget. Get a quick consultation and resource estimate by filling out this form. Our experts will help you scale your development team faster and reduce software development costs." />
            <Footer />
        </div>
    )
}

export default StaffAugmentation;