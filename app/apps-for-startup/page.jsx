import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAreStartup from "../components/who-we-are-startup";
import StartupWhatWeOfferSection from "../components/startup-what-we-offer-section";
import StartupIndustriesMobile from "../components/startup-industries-mobile";
import StartupProcessSection from "../components/startup-process-section";
import StartupWhyChooseSection from "../components/startup-why-choose-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Online Startup Mobile App Development Services USA",
  description:
    "iOS, Android & cross-platform startup app development — with consulting, UI/UX, MVP, backend & QA support. Work with our team and launch your idea today.",
  alternates: { canonical: "/apps-for-startup" },
};

const AppsForStartup = () => {
    return (
        <>
            <Header />
            <GeneralHeroSection
                firstWord="App Development for Startups"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord="| That Helps You Launch Faster"
                para="Build, test, and scale your idea with reliable Mobile App Development for Startups designed for real users, fast growth, and long-term success."
                buttonText="Start Your Startup App Project"
            />
            <WhoWeAreStartup />
            <StartupWhatWeOfferSection />
            <StartupIndustriesMobile firstWord="We Have" secondWord="Served" thirdWord="Industries" />
            <StartupProcessSection />
            <StartupWhyChooseSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </>
    )
}

export default AppsForStartup;
