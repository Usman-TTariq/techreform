import Footer from "../components/footer";
import FaqIosSection from "../components/faq-ios-section";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import IosCaseStudiesSection from "../components/ios-case-studies-section";
import IosProcessSection from "../components/ios-process-section";
import IosWhatWeOfferSection from "../components/ios-what-we-offer-section";
import IosWhyChooseSection from "../components/ios-why-choose-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhoWeAre from "../components/who-we-are";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

const IOS = () => {
    return (
        <>
            <Header />
            <GeneralHeroSection
                firstWord="High-Performance iOS App Development"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord=" | For Apps That Grow Your Business"
                para="Looking to build an iPhone app that actually works well and feels smooth?"
                para2="At Tech Reforms, we help businesses turn ideas into clean, high-performing iOS apps. From startups to growing brands, we focus on building apps that are simple to use, secure, and ready to scale."
                buttonText="Get Free Consultation"
            />
            <WhoWeAre
                p1="As a trusted iOS app development company, we create custom iPhone and iPad apps through clear planning, clean architecture, and user-first design."
                p2="From product discovery and UI/UX to development, testing, and launch, our team handles the full iOS journey and delivers scalable apps built for long-term growth."
                buttonText="Hire iOS Developers Today"
            />
            <OurImpactBoxesSection />
            <IosWhatWeOfferSection />
            <IosProcessSection />
            <IosWhyChooseSection />
            <IosCaseStudiesSection />
            <FaqIosSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </>
    )
}

export default IOS; 