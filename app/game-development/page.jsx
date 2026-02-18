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
                firstWord="Game Development Company "
                secondWord="in the "
                thirdWord="USA"
                forthWord=""
                fifthWord="for Mobile, PC & Console"
                para="Looking for professional game development services in the USA?"
                para2="Tech Reforms is a trusted custom game development company delivering end-to-end solutions for mobile, PC, and console platforms. We design and develop high-performance, scalable games tailored to your target audience and business goals."
                para3="Planning to hire game developers in the USA? Our expert team specializes in 2D and 3D mobile game development, immersive PC gaming experiences, and advanced console game solutions. From concept to launch, we build engaging, revenue-driven games that players love and businesses grow with."
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
