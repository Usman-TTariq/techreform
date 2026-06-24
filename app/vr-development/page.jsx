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
import VrCaseStudySection from "../components/vr-case-study-section";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "VR App Development | Virtual Reality Solutions",
    description:
        "Need expert VR development services? TechReforms crafts immersive VR applications and extended reality (XR) experiences that engage users, enhance interaction, and drive real business growth.",
    alternates: { canonical: "/vr-development" },
};

const VR_TESTIMONIALS = [
    {
        name: "Tom Richards",
        role: "HSE Director — GlobalBuild Corp",
        quote:
            "TechReforms built our VR safety training on Meta Quest 3 — deployed to 200 employees across 3 sites without a single PC. Training time dropped from 2 days to 4 hours. ROI was clear in the first month.",
    },
    {
        name: "Dr. Karen Lee",
        role: "Head of Training — MedSim Institute",
        quote:
            "We needed a VR surgical simulation for our medical students. TechReforms delivered a realistic anatomy module on PC VR. Students can now practice 12 different procedures before entering an operating room.",
    },
    {
        name: "Natasha Park",
        role: "Director — PremiumLiving Realty",
        quote:
            "Our luxury real estate clients now tour properties in VR before they're built. TechReforms built the Meta Quest experience in 14 weeks. We closed 2 off-plan sales directly from VR walkthroughs — buyers were sold before visiting the site.",
    },
    {
        name: "Marcus Hunt",
        role: "Digital Lead — AutoPrime Group",
        quote:
            "TechReforms built our VR automotive showroom — customers can configure their car in VR and see it in photorealistic detail. Built on Unreal Engine 5 for PC VR. Dealership sales team reports 40% higher close rate on VR-configured models.",
    },
];

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
            <VrCaseStudySection />
            <Marquee />
            <TestimonialSection testimonials={VR_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro={undefined} />
            <FaqHomeSection />
            <Footer />
        </>
    );
};

export default VrDevelopmentPage;
