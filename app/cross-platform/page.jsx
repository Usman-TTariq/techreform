import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import CrossPlatformWhatWeOfferSection from "../components/cross-platform-what-we-offer-section";
import CrossPlatformProcessSection from "../components/cross-platform-process-section";
import CrossPlatformWhyChooseSection from "../components/cross-platform-why-choose-section";
import CrossPlatformCaseStudiesSection from "../components/cross-platform-case-studies-section";
import FaqCrossPlatformSection from "../components/faq-cross-platform-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

const CrossPlatform = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Cross-Platform App Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord="| One App. Every Platform"
        para="Reach your users on iOS, Android, web, and desktop, built once, deployed everywhere, without cutting corners on quality."
        buttonText="Talk to Our Team Today"
      />
      <WhoWeAre
        p1="Tech Reforms is a cross-platform app development company that works with businesses of all sizes, from founders validating their first idea to established teams looking to expand their product's reach. We believe good software should work well everywhere, not just on one device or operating system."
        p2="Cross-platform development is not a workaround for us; it is a deliberate choice. A shared codebase means faster delivery, reduced costs, and a consistent experience for every user, regardless of the device they use. We plan each project carefully so that none of those benefits come at the expense of quality."
        buttonText="Talk to Our Team Today"
      />
      <OurImpactBoxesSection />
      <CrossPlatformWhatWeOfferSection />
      <CrossPlatformProcessSection />
      <CrossPlatformWhyChooseSection />
      <CrossPlatformCaseStudiesSection />
      <FaqCrossPlatformSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default CrossPlatform;
