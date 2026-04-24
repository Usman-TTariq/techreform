import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import ReactNativeWhatWeOfferSection from "../components/react-native-what-we-offer-section";
import ReactNativeProcessSection from "../components/react-native-process-section";
import ReactNativeWhyChooseSection from "../components/react-native-why-choose-section";
import ReactNativeCaseStudiesSection from "../components/react-native-case-studies-section";
import FaqReactNativeSection from "../components/faq-react-native-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Professional react native development company for online",
  description:
    "Launch cross-platform iOS & Android apps with React Native — custom development, UI/UX prototyping, QA testing & full post-launch support. Work with us.",
  keywords: ["React Native development for iOS and Android"],
  alternates: { canonical: "/react-native" },
};

const ReactNative = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="React Native App Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord="| Cross-Platform Mobile Apps That Feel Truly Native"
        para="We help businesses get polished, high-performance mobile apps on iOS and Android without the overhead of two separate teams."
        buttonText="Get Free Consultation"
      />
      <WhoWeAre
        p1="At Tech Reforms, we have spent years helping businesses from early-stage startups to established companies build mobile products that people actually enjoy using. React Native sits at the heart of how we work, and for good reason: it gives our clients the reach of iOS and Android from a single codebase, without asking them to pay for two entirely separate development tracks."
        p2="Our team handles everything from early discovery and UI/UX design through to development, testing, and post-launch support. We are not a vendor you hand a brief to and wait on; we get involved, ask the hard questions early, and make sure what we build is genuinely aligned with your business goals."
        buttonText="Hire React Native Developers Today"
      />
      <OurImpactBoxesSection />
      <ReactNativeWhatWeOfferSection />
      <ReactNativeProcessSection />
      <ReactNativeWhyChooseSection />
      <ReactNativeCaseStudiesSection />
      <FaqReactNativeSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default ReactNative;