import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import FlutterWhatWeOfferSection from "../components/flutter-what-we-offer-section";
import FlutterProcessSection from "../components/flutter-process-section";
import FlutterWhyChooseSection from "../components/flutter-why-choose-section";
import FlutterCaseStudiesSection from "../components/flutter-case-studies-section";
import FaqFlutterSection from "../components/faq-flutter-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

const Flutter = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Scalable Flutter App Development"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord=" | Build Once, Run Everywhere"
        para="Looking for a fast and cost-effective way to launch apps on both Android and iOS?"
        para2="At Tech Reforms, we build modern Flutter apps with smooth UI, strong performance, and scalable architecture tailored to your business growth."
        buttonText="Get Free Consultation"
      />
      <WhoWeAre
        p1="As a trusted Flutter app development company, we design and build cross-platform apps with clean architecture, reusable code, and reliable performance."
        p2="From discovery and UI/UX to development, testing, and launch, our team delivers complete Flutter solutions that reduce time-to-market and support long-term growth."
        buttonText="Hire Flutter Developers Today"
      />
      <OurImpactBoxesSection />
      <FlutterWhatWeOfferSection />
      <FlutterProcessSection />
      <FlutterWhyChooseSection />
      <FlutterCaseStudiesSection />
      <FaqFlutterSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default Flutter;