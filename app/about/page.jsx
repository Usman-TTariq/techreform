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
import WhoWeAre from "../components/who-we-are";

export const metadata = {
  alternates: { canonical: "/about" },
};

const About = () => {
  return (
    <div>
      <Header />
      <GeneralHeroSection firstWord="We" secondWord="Bring Smart Business" thirdWord="Solutions" forthWord="To Your" fifthWord="Doorsteps" para="Why settle for lackluster all-in-one developmental and marketing solutions that do nothing for your brand? Instead, join hands with Tech Reforms and scale with confidence." buttonText="Schedule a Free Consultation"
      // para2="We help high-potential brands to scale faster through innovative developmental services and high-impact marketing strategies. Our products and solutions are all built for growth, visibility, and revenue. Our approach blends strategy, creativity, and performance to position your brand where it wins attention and trust."
      // para3="From putting your business on the digital map with an intuitive website, to boosting business visibility with paid advertising and social media."
      />
      <WhoWeAre
        p1="Tech Reform helps high-potential brands to scale faster through innovative developmental services and high-impact marketing strategies. Our products and solutions are all built for growth, visibility, and revenue. Our approach blends strategy, creativity, and performance to position your brand where it wins attention and trust."
        p2="From putting your business on the digital map with an intuitive website, to boosting business visibility with paid advertising and social media."
        // buttonText=""
      />
      <OurImpactBoxesSection />
      {/* <FounderMsgSection /> */}
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
