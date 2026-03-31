import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import CloudWhatWeOfferSection from "../components/cloud-what-we-offer-section";
import CloudProcessSection from "../components/cloud-process-section";
import CloudWhyChooseSection from "../components/cloud-why-choose-section";
import CloudCaseStudiesSection from "../components/cloud-case-studies-section";
import FaqCloudSection from "../components/faq-cloud-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

const CloudPage = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Cloud Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord=" | One Vision. Built on the Cloud"
        para="Get powerful, scalable products on iOS, Android, and web, backed by a cloud development foundation built for speed, reliability, and long-term growth."
        buttonText="Talk to Our Team Today"
      />
      <WhoWeAre
        p1="Tech Reforms is a cloud development company that works with businesses of all sizes, from founders launching their first product to established teams looking to modernize their infrastructure. We believe good software should be fast, scalable, and accessible from anywhere."
        p2="Cloud development is not a trend for us; it is a deliberate choice. A well-architected cloud solution means faster delivery, reduced infrastructure costs, and a consistent experience for every user, regardless of their device or location. We plan each project carefully so that none of those benefits come at the expense of quality or security."
        buttonText="Talk to Our Team Today"
      />
      <OurImpactBoxesSection />
      <CloudWhatWeOfferSection />
      <CloudProcessSection />
      <CloudWhyChooseSection />
      <CloudCaseStudiesSection />
      <FaqCloudSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default CloudPage;
