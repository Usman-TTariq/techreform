import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import HireGameMatchedSection from "../components/hire-game-matched-section";
import HireGameDeveloperTypesSection from "../components/hire-game-developer-types-section";
import HireGameEngineComparisonSection from "../components/hire-game-engine-comparison-section";
import HireGameEngagementModelsSection from "../components/hire-game-engagement-models-section";
import HireGameRatesSection from "../components/hire-game-rates-section";
import HireGamePlatformsSection from "../components/hire-game-platforms-section";
import HireGameOnboardingSection from "../components/hire-game-onboarding-section";
import HireGameFaqSection from "../components/hire-game-faq-section";
import HireGameCtaSection from "../components/hire-game-cta-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import {
  HIRE_GAME_IMPACT_CARDS,
  HIRE_GAME_TESTIMONIALS,
} from "../constants/hire-game-content";
import { GAME_CONTACT_BENEFITS } from "../constants/game-contact-benefits";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hire Game Developer | Unity, Unreal & Mobile Experts | TechReforms",
  description:
    "Hire dedicated game developers from TechReforms — Unity, Unreal Engine, and mobile game specialists. 48-hour match, 60+ games shipped, iOS & Android experts. Get a free quote today.",
  keywords: [
    "hire game developer",
    "hire mobile game developer",
    "hire unity developer",
    "game developer for hire",
    "hire unreal engine developer",
    "dedicated game developer",
    "mobile game developer hire",
  ],
  alternates: { canonical: "/hire-game-developer" },
};

const HireGameDeveloperPage = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Hire "
        secondWord="Game Developers"
        thirdWord=""
        forthWord="Who Ship Real Games"
        fifthWord=""
        para="Unity, Unreal Engine, and mobile game specialists — pre-vetted, production-tested, and matched to your project in 48 hours. No hiring overhead, no guesswork."
        buttonText="Hire a Game Developer"
      />
      <OurImpactBoxesSection cards={HIRE_GAME_IMPACT_CARDS} />
      <HireGameMatchedSection />
      <HireGameDeveloperTypesSection />
      <HireGameEngineComparisonSection />
      <HireGameEngagementModelsSection />
      <HireGameRatesSection />
      <HireGamePlatformsSection />
      <HireGameOnboardingSection />
      <TestimonialSection
        testimonials={HIRE_GAME_TESTIMONIALS}
      />
      <HireGameFaqSection />
      <HireGameCtaSection />
      <ThreeDTextRotationSection />
      <DetailFormSection
        productType="game"
        benefits={GAME_CONTACT_BENEFITS}
        formIntro="Tell us your genre, engine preference, target platform, and timeline. We match you with pre-vetted game developers within 48 hours."
      />
      <Footer />
    </>
  );
};

export default HireGameDeveloperPage;
