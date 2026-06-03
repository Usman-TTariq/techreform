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

export const metadata = {
  title: "Premium Flutter App for Startups & Businesses",
  description:
    "Flutter MVP, custom app development, UI/UX prototyping, QA testing & post-launch support — all in one place for startups and growing businesses. Work with us.",
  alternates: { canonical: "/flutter" },
};

const Flutter = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Flutter App Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord="| Build Cross-Platform Apps with Flutter"
        para="Ship beautiful, high-performance mobile apps on iOS and Android from a single codebase, faster and more affordably than ever."
        buttonText="Obtain a Free Flutter App Development Quote `"
      />
      <WhoWeAre
        p1="Tech Reforms is a leading Flutter app development company specializing in building beautiful, high-performance mobile apps for iOS and Android. Our team of experienced Flutter developers delivers complete Flutter solutions that reduce time-to-market and support long-term growth."
        p2="From Flutter MVP apps to full-scale production releases, our team handles everything: concept, design, development, and deployment. We simplify the entire product lifecycle with a focus on speed, quality, and long-term scalability."
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