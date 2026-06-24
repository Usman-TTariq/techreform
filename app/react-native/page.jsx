import Link from "next/link";
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

const REACT_NATIVE_TESTIMONIALS = [
  {
    name: "Nathan Kim",
    role: "CTO — PaySwift",
    quote:
      "TechReforms built our fintech React Native app with Stripe and biometric auth in 12 weeks. TypeScript codebase was clean enough for our in-house team to maintain immediately. 4.8 rating on App Store after first month.",
  },
  {
    name: "Dr. Amy Lee",
    role: "Founder — TeleDoc Pro",
    quote:
      "Healthcare telemedicine app — HIPAA compliant, Twilio video integration, and HealthKit sync. TechReforms used Expo managed workflow and delivered iOS + Android in 10 weeks. Zero App Store rejections.",
  },
  {
    name: "Robert Mills",
    role: "VP Engineering — FleetOps",
    quote:
      "Logistics RN app with offline sync via WatermelonDB and real-time GPS tracking. Works perfectly in warehouses with no connectivity. TechReforms chose the right architecture — Redux Toolkit with offline-first design pattern.",
  },
  {
    name: "James Park",
    role: "CTO — WorkForce360",
    quote:
      "Enterprise SaaS RN app with SSO, role-based access, and offline capability for 500+ field users. TechReforms used React Native New Architecture — performance was noticeably better than our old RN 0.68 codebase.",
  },
];

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
        buttonText="Start with a Free React Native Development Quote "
      />
         <WhoWeAre
         p1={
          <>
            At Tech Reforms, we have spent years helping businesses from early-stage startups to established companies build mobile products that people actually enjoy using. React Native sits at the heart of how we work, and for good reason: it gives our clients the reach of{" "}
            <Link
              href="/ios"
              className="text-[#F74B1C] hover:text-white transition-colors underline"
            >
              iOS
            </Link>{" "}
            and{" "}
            <Link
              href="/mobile-app-development"
              className="text-[#F74B1C] hover:text-white transition-colors underline"
            >
              Android
            </Link>{" "}
            from a single codebase, without asking them to pay for two entirely separate development tracks.
          </>
        }
        p2="Our team handles everything from early discovery and UI/UX design through to development, testing, and post-launch support. We are not a vendor you hand a brief to and wait on; we get involved, ask the hard questions early, and make sure what we build is genuinely aligned with your business goals."
        buttonText="Hire React Native Developers Today"
        />
         <OurImpactBoxesSection />
      <ReactNativeWhatWeOfferSection />
      <ReactNativeProcessSection />
      <ReactNativeWhyChooseSection />
      <ReactNativeCaseStudiesSection />
      <FaqReactNativeSection />
      <TestimonialSection testimonials={REACT_NATIVE_TESTIMONIALS} />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default ReactNative;