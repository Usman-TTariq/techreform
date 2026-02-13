import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ReviewSections from "./components/review-sections";
import WhatWeDoSection from "./components/what-we-do-section";
import TransformingIdeas from "./components/transforming-ideas";
import DetailFormSection from "./components/detail-form-section";
import ThreeDTextRotationSection from "./components/3d-text-rotation-section";
import TestimonialSection from "./components/testimonial-section";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ReviewSections />
      <WhatWeDoSection/>
      <TransformingIdeas/>
      <TestimonialSection/>
      <ThreeDTextRotationSection/>
      <DetailFormSection/>
      <Footer />
    </div>
  );
}
