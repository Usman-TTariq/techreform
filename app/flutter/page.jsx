import Link from "next/link";
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
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Premium Flutter App for Startups & Businesses",
  description:
    "Flutter MVP, custom app development, UI/UX prototyping, QA testing & post-launch support — all in one place for startups and growing businesses. Work with us.",
  alternates: { canonical: "/flutter" },
};

const FLUTTER_TESTIMONIALS = [
  
  {
    name: "Sarah Park",
    role: "Founder — ClinicConnect",
    quote:
      "We needed a Flutter MVP for our healthcare startup in 6 weeks. TechReforms delivered iOS and Android simultaneously with Firebase backend. HIPAA-compliant, App Store approved first submission.",
  },
  {
    name: "Ryan Kim",
    role: "CTO — WalletEdge",
    quote:
      "TechReforms built our fintech Flutter app — iOS and Android from one codebase in 10 weeks. BLoC architecture made the codebase easy for our in-house team to maintain. 4.7 rating on both stores within 2 months.",
  },
  {
    name: "James Lee",
    role: "CEO — TaskPilot SaaS",
    quote:
      "Our SaaS platform needed Flutter Web + mobile app from same codebase. TechReforms used Riverpod and delivered clean architecture. We launched 3 platforms simultaneously — iOS, Android, and web — in 14 weeks.",
  },
  {
    name: "Mark Hassan",
    role: "VP Technology — SwiftRoute",
    quote:
      "Logistics Flutter app with offline sync, Google Maps, and real-time driver tracking. TechReforms handled complex state management with BLoC and Hive for offline storage. Works perfectly in low connectivity areas.",
  },
];

const Flutter = () => {
  return (
    <>
      <Header />
      <main>
      <GeneralHeroSection
        firstWord="Flutter App Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord="| Build Cross-Platform Apps with Flutter"
        para="Ship beautiful, fast mobile apps on iOS and Android from a single codebase, faster and more affordably than ever."
        buttonText="Obtain a Free Flutter App Development Quote `"
      />
      <WhoWeAre
        p1="As a trusted Flutter app development company, we build cross-platform mobile applications that look and feel native on every device. Tech Reforms delivers high-quality Flutter development solutions for startups, growing businesses, and enterprises alike."
        p2={
          <>
            From Flutter{" "}
            <Link href="/flutter-mvp" className=" text-[#F74B1C] hover:text-white transition-colors underline">
              MVP
            </Link>{" "}
            apps to full-scale production releases, our team handles everything: concept, design, development, and deployment. We simplify the entire product lifecycle with a focus on speed, quality, and long-term scalability.
          </>
        }
        buttonText="Hire Flutter Developers Today"
      />
      <OurImpactBoxesSection />
      <FlutterWhatWeOfferSection />
      <FlutterProcessSection />
      <FlutterWhyChooseSection />
      <FlutterCaseStudiesSection />
      <FaqFlutterSection />
      <TestimonialSection testimonials={FLUTTER_TESTIMONIALS} />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.flutter} />
      </main>

      <Footer />
    </>
  );
};

export default Flutter;