import AboutWeDoSection from "../components/about-we-do-section";
import FounderMsgSection from "../components/founder-msg-section";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import OurValuesSection from "../components/our-values-section";
import WhyTechReformsSection from "../components/why-tech-reforms-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
      <Header />
      <GeneralHeroSection />
      <OurImpactBoxesSection />
      <FounderMsgSection />
      <AboutWeDoSection />
      <OurValuesSection />
      <WhyTechReformsSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </div>
  );
};

export default About;
