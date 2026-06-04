import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAreGame from "../components/who-we-are-game";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import GameDevelopmentWhatWeOfferSection from "../components/game-development-what-we-offer-section";
import GameDevelopmentGenresSection from "../components/game-development-genres-section";
import GameDevelopmentCategoriesSection from "../components/game-development-categories-section";
import GameDevelopmentEngineComparisonSection from "../components/game-development-engine-comparison-section";
import GameDevelopmentProcessSection from "../components/game-development-process-section";
import GameDevelopmentWhyChooseSection from "../components/game-development-why-choose-section";
import CaseStudiesGameSection from "../components/case-studies-game-section";
import FaqGameDevelopmentSection from "../components/faq-game-development-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import TechnologyStackGame from "../components/technology-stack-game";

const GAME_IMPACT_CARDS = [
  { value: "100+", label: "Games Launched", rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]" },
  { value: "50+", label: "Game Developers", rounded: "" },
  { value: "8+", label: "Game Genres", rounded: "" },
  { value: "4", label: "Platforms Supported", rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]" },
];

const GAME_TESTIMONIALS = [
  {
    name: "Marcus Williams",
    role: "Founder — Pixel Rush Studios",
    quote:
      "Delivered our hyper-casual game in 8 weeks. Hit 200K downloads on Google Play in the first 6 weeks. Unity optimization was excellent.",
  },
  {
    name: "Jordan Lee",
    role: "CEO — NexaPlay Interactive",
    quote:
      "Built our PC multiplayer game on Unreal 5 from GDD to Steam submission. Team understood game architecture deeply. Shipped 12 weeks early.",
  },
  {
    name: "Priya Sharma",
    role: "Product Lead — ArcadeForge",
    quote:
      "Cross-platform RPG on iOS and Android — zero performance gap between platforms. Post-launch support has been fast. 4.8 rating on both stores.",
  },
  {
    name: "Ryan Kowalski",
    role: "Co-Founder — CasualBit Games",
    quote:
      "Match-3 game in 10 weeks with IAP and AdMob built in from day one. Crossed $180K in IAP revenue by month 3. Monetization integration was the standout.",
  },
  {
    name: "David Moreau",
    role: "Studio Director — IronForge Games",
    quote:
      "TechReforms handled our console game from prototype to PS5 and Xbox certification. They flagged compliance issues before submission — saved us months of back-and-forth with Sony and Microsoft. Best decision we made.",
  },
];

export const dynamic = "force-dynamic";

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Game Development Services",
  "serviceType": "Game Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/game-development",
  "description": "Tech Reforms is a leading client-focused game development company in the USA. We build 2D/3D mobile, PC, and console games tailored to your audience.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Game Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "2D Mobile Game Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Mobile Game Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PC Game Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Console Game Development" } }
    ]
  }
};

export const metadata = {
  title: "Custom Game Development Services in the USA",
  description:
    "Tech Reforms is a leading client-focused game development company in the USA. We build 2D/3D mobile, PC, and console games tailored to your audience.",
  alternates: { canonical: "/game-development" },
};

const GameDevelopment = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
            />
            <Header />
            <GeneralHeroSection
                firstWord="Professional Game Development Services "
                secondWord="in the "
                thirdWord="USA"
                forthWord=""
                fifthWord="| Custom Game Development Company" 
                para="Looking for professional game development services in the USA? Tech Reforms is a leading game development company that aims to offer premium end-to-end solutions across mobile and PC."
                // para2="Tech Reforms is a trusted custom game development company delivering end-to-end solutions for mobile, PC, and console platforms. We design and develop high-performance, scalable games tailored to your target audience and business goals."
                // para3="Planning to hire game developers in the USA? Our expert team specializes in 2D and 3D mobile game development, immersive PC gaming experiences, and advanced console game solutions. From concept to launch, we build engaging, revenue-driven games that players love and businesses grow with."
                buttonText="Hire Expert Game Developers"
            />
            <WhoWeAreGame />
            <OurImpactBoxesSection cards={GAME_IMPACT_CARDS} />
            <GameDevelopmentWhatWeOfferSection />
            <GameDevelopmentProcessSection />
            <GameDevelopmentWhyChooseSection />
            <GameDevelopmentGenresSection />
            <TechnologyStackGame />
            <GameDevelopmentCategoriesSection />
            <GameDevelopmentEngineComparisonSection />
            <CaseStudiesGameSection />
            <FaqGameDevelopmentSection />
            <TestimonialSection testimonials={GAME_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every game idea deserves the right strategy and execution. Get a quick consultation and development estimate by filling out this form. Our experts will guide you through the best approach to build and scale your next big gaming success." />
            <Footer />
        </div>
    );
};

export default GameDevelopment;
