import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import GameDevelopmentWhatWeOfferSection from "../components/game-development-what-we-offer-section";
import GameDevelopmentProcessSection from "../components/game-development-process-section";
import GameDevelopmentWhyChooseSection from "../components/game-development-why-choose-section";
import CaseStudiesGameSection from "../components/case-studies-game-section";
import FaqGameDevelopmentSection from "../components/faq-game-development-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

const GameDevelopment = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection
                firstWord="Game Development Services "
                secondWord="in the "
                thirdWord="USA"
                forthWord=""
                fifthWord="| Custom Game Development Company"
                para="Looking for professional game development services in the USA?"
                para2="Tech Reforms is a leading game development company that aims to offer premium end-to-end solutions across mobile, PC, and console platforms. As a trusted custom game development firm, we help businesses design, develop, and launch high-performance games customized to your target audience."
                para3="Are you looking to hire game developers in the USA? We can help! Our experienced team specializes in 2D and 3D mobile games, high-resolution PC games, and advanced console gaming solutions. We focus on building scalable and revenue-driven gaming experiences that players love."
                buttonText="Hire Expert Game Developers"
            />
            <OurImpactBoxesSection />
            <GameDevelopmentWhatWeOfferSection />
            <GameDevelopmentProcessSection />
            <GameDevelopmentWhyChooseSection />
            <CaseStudiesGameSection />
            <FaqGameDevelopmentSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every game idea deserves the right strategy and execution. Get a quick consultation and development estimate by filling out this form. Our experts will guide you through the best approach to build and scale your next big gaming success." />
            <Footer />
        </div>
    );
};

export default GameDevelopment;
