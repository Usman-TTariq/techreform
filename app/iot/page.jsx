import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import IotWhatWeOfferSection from "../components/iot-what-we-offer-section";
import IotProcessSection from "../components/iot-process-section";
import IotWhyChooseSection from "../components/iot-why-choose-section";
import IotCaseStudiesSection from "../components/iot-case-studies-section";
import FaqIotSection from "../components/faq-iot-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Industrial IoT Solutions for Automation & Efficiency",
  description:
    "Optimize operations with industrial IoT solutions built for automation and efficiency. We enable real-time monitoring, smart devices, and data-driven systems. Upgrade your operations with IoT today!",
  alternates: { canonical: "/iot" },
};

const IoTPage = () => {
    return (
        <>
            <Header />
            <GeneralHeroSection
                firstWord="IoT Development Company"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord=" | Smart Devices. Smarter Business."
                para="Turn physical environments into intelligent, data-driven systems with IoT development engineered for real-world reliability and long-term operational value."
                buttonText="Discuss Your IoT App Project — Free Consultation"
            />
            <WhoWeAre
                p1="Tech Reforms is an IoT development company that believes in innovation and smarter streamlining. We offer solutions that actually work in the field. We partner with product teams, operations leaders, and founders across industries, delivering everything from early-stage connected device prototypes to large-scale Industrial IoT deployments."
                p2="For us, IoT software development is a discipline that demands precision at every layer. Sensors must collect accurate data. Connectivity must be stable. Processing must be fast. And the interface must make all of it usable. We treat each of those layers with equal care, because a weak link anywhere in the chain undermines the entire system."
                buttonText="Talk to Our Team Today"
            />
            <OurImpactBoxesSection />
            <IotWhatWeOfferSection />
            <IotProcessSection />
            <IotWhyChooseSection />
            <IotCaseStudiesSection />
            <FaqIotSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </>
    );
};

export default IoTPage;
