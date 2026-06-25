import Footer from "../components/footer";
import Header from "../components/header";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import TopAppHeroSection from "../components/top-app-developers/top-app-hero-section";
import TopAppServicesSection from "../components/top-app-developers/top-app-services-section";
import TopAppWhyChooseSection from "../components/top-app-developers/top-app-why-choose-section";
import TopAppProcessSection from "../components/top-app-developers/top-app-process-section";
// import TopAppTechStackSection from "../components/top-app-developers/top-app-tech-stack-section";
import TopAppIndustriesSection from "../components/top-app-developers/top-app-industries-section";
import TopAppFaqSection from "../components/top-app-developers/top-app-faq-section";
import TopAppCtaSection from "../components/top-app-developers/top-app-cta-section";
import {
  TOP_APP_IMPACT_CARDS,
  TOP_APP_TESTIMONIALS,
} from "../constants/top-app-developers-content";
import { TOP_APP_DEVELOPERS_PAGE } from "../constants/hire-developer-pages";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Top App Developers | iOS, Android & Cross-Platform Experts",
  description:
    "Hire top-rated app developers for iOS, Android, Flutter, and React Native. 350+ apps delivered, 95% client satisfaction. Schedule a free consultation with Tech Reforms.",
  alternates: { canonical: "/top-app-developers" },
};

const TopAppDevelopersPage = () => {
  return (
    <>
      <Header />
      <TopAppHeroSection />
      <OurImpactBoxesSection cards={TOP_APP_IMPACT_CARDS} />
      <TopAppServicesSection />
      <TopAppWhyChooseSection />
      <TopAppProcessSection />
      {/* <TopAppTechStackSection /> */}
      <TopAppIndustriesSection />
      <TestimonialSection testimonials={TOP_APP_TESTIMONIALS} />
      <TopAppFaqSection />
      <TopAppCtaSection />
      <ThreeDTextRotationSection />
      <DetailFormSection {...TOP_APP_DEVELOPERS_PAGE.contact} />
      <Footer />
    </>
  );
};

export default TopAppDevelopersPage;
