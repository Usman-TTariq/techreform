import Footer from "../components/footer"
import Header from "../components/header"
import ArHeroSection from "../components/ar-hero-section"
import ArAppFunctions from "../components/ar-app-functions"
import ARIndustries from "../components/ar-industries"
import DevelopingARSoftware from "../components/developing-ar-software"
import OurARExpertise from "../components/our-ar-expertise"
import ArProcess from "../components/ar-process"
import HowWeDoAr from "../components/how-we-do-ar"
import Marquee from "../components/marquee"
import TestimonialSection from "../components/testimonial-section"
import ThreeDTextRotationSection from "../components/3d-text-rotation-section"
import DetailFormSection from "../components/detail-form-section"
import FaqHomeSection from "../components/faq-home-section"

const ArDevelopment = () => {
    return (
        <>
            <Header />
            <ArHeroSection />
            <ArAppFunctions />
            <ARIndustries />
            <DevelopingARSoftware />
            <OurARExpertise />
            <ArProcess />
            <HowWeDoAr />
            <Marquee />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro={undefined} />
            <FaqHomeSection />
            <Footer />
        </>
    )
}

export default ArDevelopment;
