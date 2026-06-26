import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import RestaurantWhatWeOfferSection from "../components/restaurant-what-we-offer-section";
import RestaurantProcessSection from "../components/restaurant-process-section";
import RestaurantWhyChooseSection from "../components/restaurant-why-choose-section";
import RestaurantCaseStudiesSection from "../components/restaurant-case-studies-section";
import FaqRestaurantSection from "../components/faq-restaurant-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Restaurant App Development",
  serviceType: "Restaurant App Development",
  provider: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
  },
  url: "https://techreforms.com/restaurant-app",
  description:
    "Trusted restaurant app development company in the USA. Custom ordering, reservation, loyalty, and AI-powered restaurant apps for cloud kitchens and multi-location chains.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Restaurant App Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Restaurant App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restaurant Reservation App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restaurant Loyalty App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Restaurant App Development" } },
    ],
  },
};

export const metadata = {
  title: "Trusted Restaurant App Development Company in the USA | Tech Reforms",
  description:
    "Build custom restaurant apps for ordering, delivery, reservations, and loyalty. Tech Reforms helps restaurants, cloud kitchens, and delivery startups grow with digital-first solutions.",
  keywords: ["restaurant app development company", "restaurant app development USA"],
  alternates: { canonical: "/restaurant-app" },
};

const RestaurantAppPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Header />
      <GeneralHeroSection
        firstWord="Trusted Restaurant App Development"
        secondWord="Company in the USA"
        breakAfterFirstWord
        thirdWord=""
        forthWord=""
        fifthWord=""
        para="Want to grow your restaurant business without the tech hassle? Tech Reforms helps restaurants, cloud kitchens, and delivery startups build apps customers love."
        para2="So, turn your restaurant into a digital-first business with a custom app built around your brand."
        buttonText="Get a Free Restaurant App Consultation"
      />
      <OurImpactBoxesSection />
      <RestaurantWhatWeOfferSection />
      <RestaurantProcessSection />
      <RestaurantWhyChooseSection />
      <RestaurantCaseStudiesSection />
      <FaqRestaurantSection />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.restaurant} />
      <Footer />
    </>
  );
};

export default RestaurantAppPage;
