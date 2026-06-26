import Footer from "../components/footer";
import FaqRetailSection from "../components/faq-retail-section";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import RetailCaseStudiesSection from "../components/retail-case-studies-section";
import RetailProcessSection from "../components/retail-process-section";
import RetailWhatWeOfferSection from "../components/retail-what-we-offer-section";
import RetailAppTypesSection from "../components/retail-app-types-section";
import RetailKeyFeaturesSection from "../components/retail-key-features-section";
import RetailWhyChooseSection from "../components/retail-why-choose-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhoWeAreRetail from "../components/who-we-are-retail";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";
import TechnologyStackMobile from "../components/technology-stack-mobile";
import RetailIndustriesSection from "../components/retail-industries-section";
import RetailCtaSection from "../components/retail-cta-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Retail Technology Solutions for Modern Growth & Innovation",
  description:
    "Transform retail operations with advanced technology solutions. We deliver CRM, ERP, automation, and eCommerce systems to boost efficiency and customer experience. Elevate your retail potential today!",
  alternates: { canonical: "/retail" },
};

const RETAIL_TESTIMONIALS = [
  {
    name: "Rachel Kim",
    role: "CMO — StyleNest Fashion",
    quote:
      "TechReforms built our loyalty app in Flutter — iOS and Android simultaneously. 85,000 downloads in 3 months. Repeat purchase rate went up 38% in the first quarter. The points system and push notification timing were built exactly to our retention strategy.",
  },
  {
    name: "Mark Peterson",
    role: "CEO — HomeGoods Plus",
    quote:
      "Omnichannel retail app — customers browse online, reserve in-store, earn loyalty points everywhere. Shopify backend, Flutter frontend, POS integration. TechReforms handled everything. Our app is now our highest-converting sales channel.",
  },
  {
    name: "Sophie Laurent",
    role: "Head of Digital — VisionStyle",
    quote:
      "AR try-on for our eyewear brand — ARKit face tracking, customers see exactly how glasses look before buying. Return rate dropped 24%. TechReforms delivered in 16 weeks. The AR accuracy was better than we expected for the budget.",
  },
  {
    name: "James Hassan",
    role: "VP Operations — FreshMart Group",
    quote:
      "Retail audit app for our 200-store franchise — field teams do store walkthroughs offline, photos sync when back on WiFi. TechReforms built it in React Native with full offline mode. Replaced paper forms across all locations in 6 weeks.",
  },
];

const Retail = () => {
  return (
    <>
      <Header />
      <main>
      <GeneralHeroSection
        firstWord="Retail App Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord="| Putting Your Store in Every Pocket"
        para="Turn your retail business into a mobile-first brand with custom retail mobile app development built around how your customers actually shop. We design and deliver retail apps that increase sales, strengthen loyalty, and give shoppers an experience worth returning to on iOS, Android, and every platform in between."
        buttonText="Book a Free Retail App Consultation "
      />
      <WhoWeAreRetail />
      <OurImpactBoxesSection />
      <RetailWhatWeOfferSection />
      <RetailAppTypesSection />
      <RetailProcessSection />
      <RetailWhyChooseSection />
      <RetailKeyFeaturesSection />
      <TechnologyStackMobile
        capsuleFirst="RETAIL"
        capsuleSecond="TECH"
        titleAccent="Retail App Development "
        titleMain="Technology Stack"
        subtitle="The Platforms and Technologies We Use to Build Retail Apps"
        description="Our retail app developers work across the full spectrum of modern mobile technology, selecting the right tools for each retail app project's specific performance, budget, and scalability requirements."
      />
      <RetailIndustriesSection />
      <RetailCaseStudiesSection />
      <RetailCtaSection />
      <FaqRetailSection />
      <TestimonialSection testimonials={RETAIL_TESTIMONIALS} />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.retail} />
      </main>

      <Footer />
    </>
  );
};

export default Retail;
