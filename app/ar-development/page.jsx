import Footer from "../components/footer"
import Header from "../components/header"
import ArHeroSection from "../components/ar-hero-section"
import ArAppFunctions from "../components/ar-app-functions"
import ARIndustries from "../components/ar-industries"
import DevelopingARSoftware from "../components/developing-ar-software"
import OurARExpertise from "../components/our-ar-expertise"
import ArProcess from "../components/ar-process"
import HowWeDoAr from "../components/how-we-do-ar"
import Marquee from "../components/marquee"
import TestimonialSection from "../components/testimonial-section"
import ThreeDTextRotationSection from "../components/3d-text-rotation-section"
import DetailFormSection from "../components/detail-form-section"
import { PAGE_CONTACT } from "../constants/page-contact-config"
import FaqArSection from "../components/faq-ar-section"
import ArCaseStudySection from "../components/ar-case-study-section"
import ArTypesSection from "../components/ar-types-section"
import { ArFrameworksTechnologiesSection } from "../components/erp-platforms-technologies-section"
import { ArFrameworkComparisonSection } from "../components/erp-platform-comparison-section"
import ArDevicesPlatformsSection from "../components/ar-devices-platforms-section"
import OurImpactBoxesSection from "../components/our-impact-boxes-section"

const AR_IMPACT_CARDS = [
  {
    value: "50+",
    label: "AR Apps Launched",
    action: "Ios - Android - Wearables",
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
    value: "$25K",
    label: "AR Starting Price",
    action: "Fixed-price available",
    isLink: false,
    rounded: "",
  },
  {
    value: "3-6 mo",
    label: "Avg Delivery",
    action: "End-to-end development",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const arSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Augmented Reality App Development",
  "serviceType": "AR Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/ar-development",
  "description": "Get professional AR app development services for your business. We build scalable, immersive augmented reality apps across mobile and web.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AR Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AR Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AR Product Visualization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AR Virtual Tours" } }
    ]
  }
};

const AR_TESTIMONIALS = [
  {
    name: "Sophie Laurent",
    role: "CEO — VisionWear Co.",
    quote:
      "TechReforms built our AR try-on app for our eyewear brand in 14 weeks. ARKit face tracking was accurate — customers could see exactly how glasses looked on their face. Our online conversion rate increased 38% in the first month.",
  },
  {
    name: "Mark Reynolds",
    role: "Operations Director — FactoryEdge Inc.",
    quote:
      "We needed an AR training app for our manufacturing floor on HoloLens 2. TechReforms delivered a step-by-step assembly guidance system using Vuforia. Training time reduced by 60% and error rate dropped significantly.",
  },
  {
    name: "James Kim",
    role: "Founder — UrbanNest Properties",
    quote:
      "Our real estate app needed AR walkthroughs so buyers could visualize furnished rooms before purchase. TechReforms used ARCore with 3D furniture models — buyers could place sofas and beds in empty apartments. Sold 3 units directly through the app.",
  },
  {
    name: "Priya Rao",
    role: "Marketing Director — LaunchBrand",
    quote:
      "WebAR campaign for our product launch — no app download, just scan a code and see the product in your space. TechReforms used 8th Wall and delivered in 6 weeks. 200K users engaged in the first 2 weeks.",
  },
];

export const metadata = {
    title: "Custom AR App Development Agency For Online",
    description:
        "Get professional AR app development services for your business. We build scalable, immersive augmented reality apps across mobile and web.",
    keywords: ["AR app development services"],
    alternates: { canonical: "/ar-development" },
}

const ArDevelopment = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(arSchema) }}
            />
            <Header />
            <ArHeroSection />
            <OurImpactBoxesSection cards={AR_IMPACT_CARDS} />
            <ArAppFunctions />
            <ArTypesSection />
            <ARIndustries />
            <ArFrameworksTechnologiesSection />
            <ArFrameworkComparisonSection />
            <ArDevicesPlatformsSection />
            <DevelopingARSoftware />
            <OurARExpertise />
            <ArProcess />
            <HowWeDoAr />
            <ArCaseStudySection />
            <Marquee />
            <TestimonialSection testimonials={AR_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection {...PAGE_CONTACT.ar} />
            <FaqArSection />
            <Footer />
        </>
    )
}

export default ArDevelopment;
