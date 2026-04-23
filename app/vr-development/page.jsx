import Footer from "../components/footer";
import Header from "../components/header";
import VrHeroSection from "../components/vr-hero-section";
import VrAppFunctions from "../components/vr-app-functions";
import VRIndustries from "../components/vr-industries";
import DevelopingVRSoftware from "../components/developing-vr-software";
import OurVRExpertise from "../components/our-vr-expertise";
import VrProcess from "../components/vr-process";
import HowWeDoVr from "../components/how-we-do-vr";
import Marquee from "../components/marquee";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import FaqHomeSection from "../components/faq-home-section";

const VrDevelopmentPage = () => {
    return (
        <>
            <Header />
            <VrHeroSection />
            <VrAppFunctions />
            <VRIndustries />
            <DevelopingVRSoftware />
            <OurVRExpertise />
            <VrProcess />
            <HowWeDoVr />
            <Marquee />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro={undefined} />
            <FaqHomeSection />
            <Footer />
        </>
    );
};

export default VrDevelopmentPage;
