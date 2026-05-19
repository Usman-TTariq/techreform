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
import FaqHomeSection from "../components/faq-home-section"

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
            <ArAppFunctions />
            <ARIndustries />
            <DevelopingARSoftware />
            <OurARExpertise />
            <ArProcess />
            <HowWeDoAr />
            <Marquee />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro={undefined} />
            <FaqHomeSection />
            <Footer />
        </>
    )
}

export default ArDevelopment;
