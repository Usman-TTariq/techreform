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
import PlatformExpertiseSection from "../components/platform-expertise";

const ecommerceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Development Solutions",
  "serviceType": "E-Commerce Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/ecommerce",
  "description": "Looking for expert eCommerce development services? We create fast, secure and sales-focused online stores that scale your business.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-Commerce Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom E-Commerce Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Store Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment Gateway Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory Management System" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Analytics" } }
    ]
  }
};

export const metadata = {
    alternates: { canonical: "/ecommerce" },
};

const ECOMMERCE_TESTIMONIALS = [
    {
        name: "Rachel Kim",
        role: "CEO — StyleNest Fashion",
        quote:
            "TechReforms migrated our 8,000-product WooCommerce store to Shopify Plus in 6 weeks — zero ranking loss, all 301 redirects preserved. First month on Shopify: 28% higher conversion rate. Mobile checkout speed alone made the difference.",
    },
    {
        name: "Mark Peterson",
        role: "VP Sales — BuildSupply Co.",
        quote:
            "Custom Magento 2 B2B store — customer-specific pricing, purchase order system, and ERP integration with SAP. TechReforms delivered in 5 months. Our wholesale team processes 300% more orders per day without extra staff.",
    },
    {
        name: "Sarah Lee",
        role: "Head of Digital — HomeDecor Plus",
        quote:
            "Headless Shopify with Next.js frontend — page load dropped from 4.2 seconds to 0.8 seconds. Google Core Web Vitals went green across the board. 42% improvement in organic traffic in 3 months post-launch.",
    },
    {
        name: "James Hassan",
        role: "Founder — FreshBasket",
        quote:
            "Grocery delivery ecommerce app — Flutter mobile + WooCommerce backend, time-slot delivery, real-time order tracking. TechReforms delivered in 14 weeks. We hit 5,000 orders per day within 3 months of launch.",
    },
];

const Ecommerce = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSchema) }}
            />
            <Header />
            <GeneralHeroSection firstWord="Hire" secondWord="Expert E-Commerce" thirdWord="" forthWord="Web Developers" fifthWord="in the USA" para="Looking for an affordable way to digitize your business without emptying your bank account? 
Tech Reforms is a pioneering e-commerce development agency that offers affordable e-commerce website development in the USA. Our SEO-friendly, conversion-focused framework is designed for small and scaling businesses to grow faster in the market.
"
                buttonText="Hire Expert Developers Today"
                compact
            />
            <OurImpactBoxesSection />
            <EcommerceDevelopmentSection />
            {/* <StepperFrom /> */}
            <EcommerceTabsSection />
            <WhatWeDoEcommerceSection />
            <PlatformExpertiseSection />
            <CaseStudiesEcommerceSection />
            <WhatMakesEcommerce />
            <FaqEcommerceSection />
            <EcommerceCta />
            <TestimonialSection testimonials={ECOMMERCE_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default Ecommerce;