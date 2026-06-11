import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import HireFlutterWhatWeOfferSection from "../components/hire-flutter-what-we-offer-section";
import HireFlutterProcessSection from "../components/hire-flutter-process-section";
import HireFlutterWhyChooseSection from "../components/hire-flutter-why-choose-section";
import HireFlutterCaseStudiesSection from "../components/hire-flutter-case-studies-section";
import HireFlutterFaqSection from "../components/hire-flutter-faq-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hire Flutter Developers for iOS, Android & Web Apps",
  description:
    "Top Flutter app development company in USA. We build high-performance iOS, Android & web apps with custom cross-platform solutions. Get a free quote today!",
  alternates: { canonical: "/hire-flutter" },
};

const HireFlutter = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Hire "
        secondWord="Dedicated Flutter Developers"
        thirdWord=""
        forthWord="| Who Ship. Not Just Code."
        fifthWord=""
        para="Most Flutter developers write clean Dart. Few understand your product roadmap, your deployment timelines, or what a missed sprint actually costs. At Tech Reforms, you hire Flutter engineers who work inside your workflow — integrated, accountable, and focused on your delivery goals."
        buttonText="Hire a Flutter DeveloperView Engagement Models"
      />
      <WhoWeAre
        p1="We are not a general-purpose IT agency that added Flutter to a service list. Tech Reforms was built specifically around Flutter and Dart — our developers live inside the Flutter ecosystem, stay current with every SDK release, and have shipped production apps across iOS, Android, Web, and Desktop from a single codebase.
        From MVP builds with a two-week sprint to full-scale enterprise app development with CI/CD pipelines and automated testing — we handle every phase of the Flutter product lifecycle. You stay focused on your product vision. We handle the engineering execution."
        
        buttonText="Hire a Flutter DeveloperView Our Flutter Wo"
      />
      <OurImpactBoxesSection />
      <HireFlutterWhatWeOfferSection />
      <HireFlutterProcessSection />
      <HireFlutterWhyChooseSection />
      <HireFlutterCaseStudiesSection />
      <HireFlutterFaqSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </>
  );
};

export default HireFlutter;
