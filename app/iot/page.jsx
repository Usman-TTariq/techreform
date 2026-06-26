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
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Industrial IoT Solutions for Automation & Efficiency",
  description:
    "Optimize operations with industrial IoT solutions built for automation and efficiency. We enable real-time monitoring, smart devices, and data-driven systems. Upgrade your operations with IoT today!",
  alternates: { canonical: "/iot" },
};

const IOT_TESTIMONIALS = [
  {
    name: "Robert Hayes",
    role: "Plant Director — PrecisionMfg Corp",
    quote:
      "TechReforms built our predictive maintenance IoT platform — 200+ vibration sensors on ESP32, MQTT to AWS IoT Core, real-time alerts to our maintenance team. Unplanned downtime dropped 28% in the first quarter after deployment.",
  },
  {
    name: "Dr. Karen Lee",
    role: "CTO — MedTrack Health",
    quote:
      "Remote patient monitoring with BLE wearables and HIPAA-compliant Azure IoT Hub. TechReforms handled device provisioning, data encryption, and FHIR integration. 500 patients monitored simultaneously with zero data breaches.",
  },
  {
    name: "Mark Peterson",
    role: "Facilities Director — PropTech Group",
    quote:
      "Smart building IoT across 12 office locations — Zigbee sensors for HVAC, occupancy, and energy monitoring. TechReforms built the dashboard and automation rules. Energy costs down 22% year-over-year. Grafana dashboards give us full visibility.",
  },
  {
    name: "James Wilson",
    role: "VP Operations — ColdRoute Logistics",
    quote:
      "Fleet tracking IoT for 300 refrigerated vehicles — LTE-M GPS, temperature sensors, and InfluxDB time-series storage. TechReforms built the custom React dashboard. Cold chain compliance improved and spoilage claims dropped 40%.",
  },
];

const IoTPage = () => {
    return (
        <>
            <Header />
      <main>
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
            <TestimonialSection testimonials={IOT_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection {...PAGE_CONTACT.iot} />
            </main>

            <Footer />
        </>
    );
};

export default IoTPage;
