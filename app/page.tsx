import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ReviewSections from "./components/review-sections";
import HomeBelowFold from "./components/home-below-fold";

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
        <HomeBelowFold />
      </main>
      <Footer />
    </div>
  );
}
