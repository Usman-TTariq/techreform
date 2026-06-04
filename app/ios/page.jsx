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
import IosIndustriesSection from "../components/ios-industries-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hire iOS App Developers agency for Your Business",
  description:
    "Scalable enterprise iOS apps built for real-world performance — custom development, secure systems, UI/UX design & App Store launch. Let's build together.",
  keywords: [
    "enterprise iOS app development",
    "hire iOS app developers",
  ],
  alternates: { canonical: "/ios" },
};

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
                buttonText="Hire Certified iOS App Developers"
            />
            <WhoWeAre
                p1="As a trusted iOS app development company, we build native iPhone and iPad applications with premium features and intuitive designs that deliver a premium experience on every Apple device. Tech Reforms provides high-quality iOS development solutions for startups, growing businesses, and enterprises alike."
                p2="From iOS apps to full-scale App Store releases, our team handles everything: concept, design, development, and deployment. We simplify the entire product lifecycle with a focus on speed, quality, and long-term scalability."
                buttonText="Hire iOS Developers Today"
            />
            <OurImpactBoxesSection />
            <IosWhatWeOfferSection />
            <IosProcessSection />
            <IosWhyChooseSection />
            <IosIndustriesSection />
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