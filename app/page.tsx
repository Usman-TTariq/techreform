import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ReviewSections from "./components/review-sections";
import WhatWeDoSection from "./components/what-we-do-section";
import TransformingIdeas from "./components/transforming-ideas";
import DetailFormSection from "./components/detail-form-section";
import ThreeDTextRotationSection from "./components/3d-text-rotation-section";
import TestimonialSection from "./components/testimonial-section";
import FaqHomeSection from "./components/faq-home-section";
import Marquee from "./components/marquee";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ReviewSections />
      <WhatWeDoSection/>
      <TransformingIdeas/>
      <Marquee />
      <TestimonialSection/>
      <ThreeDTextRotationSection/>
      <DetailFormSection formIntro={undefined} />
      <FaqHomeSection />
      <Footer />
    </div>
  );
}
