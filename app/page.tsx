import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ReviewSections from "./components/review-sections";
import { PAGE_CONTACT } from "./constants/page-contact-config";

const WhatWeDoSection = dynamic(() => import("./components/what-we-do-section"));
const TransformingIdeas = dynamic(() => import("./components/transforming-ideas"));
const Marquee = dynamic(() => import("./components/marquee"));
const TestimonialSection = dynamic(() => import("./components/testimonial-section"));
const ThreeDTextRotationSection = dynamic(
  () => import("./components/3d-text-rotation-section")
);
const DetailFormSection = dynamic(() => import("./components/detail-form-section"));
const FaqHomeSection = dynamic(() => import("./components/faq-home-section"));

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ReviewSections />
        <WhatWeDoSection />
        <TransformingIdeas />
        <Marquee />
        <TestimonialSection />
        <ThreeDTextRotationSection />
        <DetailFormSection {...PAGE_CONTACT.home} />
        <FaqHomeSection />
      </main>
      <Footer />
    </div>
  );
}
