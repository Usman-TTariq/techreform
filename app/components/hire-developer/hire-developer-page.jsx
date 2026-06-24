import Footer from "../footer";
import Header from "../header";
import GeneralHeroSection from "../general-hero-section";
import WhoWeAre from "../who-we-are";
import OurImpactBoxesSection from "../our-impact-boxes-section";
import HireWhatWeOfferSection from "./hire-what-we-offer-section";
import HireProcessSection from "./hire-process-section";
import HireWhyChooseSection from "./hire-why-choose-section";
import HireCaseStudiesSection from "./hire-case-studies-section";
import HireFaqSection from "./hire-faq-section";
import TestimonialSection from "../testimonial-section";
import ThreeDTextRotationSection from "../3d-text-rotation-section";
import DetailFormSection from "../detail-form-section";

const HireDeveloperPage = ({ content }) => {
  return (
    <>
      <Header />
      <GeneralHeroSection {...content.hero} />
      <WhoWeAre {...content.whoWeAre} />
      <OurImpactBoxesSection />
      <HireWhatWeOfferSection {...content.whatWeOffer} />
      <HireProcessSection {...content.process} />
      <HireWhyChooseSection {...content.whyChoose} />
      <HireCaseStudiesSection {...content.caseStudies} />
      <HireFaqSection {...content.faq} />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default HireDeveloperPage;
