import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhatWeOfferSection from "../components/what-we-offer-section";
import { DOCTOR_APP_WHAT_WE_OFFER } from "../constants/what-we-offer-content";
import ProcessSection from "../components/process-section";
import { DOCTOR_APP_PROCESS } from "../constants/process-content";
import WhyChooseSection from "../components/why-choose-section";
import { DOCTOR_APP_WHY_CHOOSE } from "../constants/why-choose-content";
import ErpPlatformsTechnologiesSection from "../components/erp-platforms-technologies-section";
import ErpPlatformComparisonSection from "../components/erp-platform-comparison-section";
import ErpCustomVsOffShelfSection from "../components/erp-custom-vs-off-shelf-section";
import ErpIndustriesSection from "../components/erp-industries-section";
import CaseStudiesSection from "../components/case-studies-section";
import { DOCTOR_APP_CASE_STUDIES } from "../constants/case-studies-content";
import FaqSection from "../components/faq-section";
import { DOCTOR_APP_FAQ_ITEMS } from "../constants/faq-content";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";
import WhoWeAreErp from "../components/who-we-are-erp";

export const dynamic = "force-dynamic";

// const erpSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   "name": "Custom ERP Development Solutions",
//   "serviceType": "ERP Development",
//   "provider": {
//     "@type": "Organization",
//     "name": "Tech Reforms",
//     "url": "https://techreforms.com"
//   },
//   "url": "https://techreforms.com/erp",
//   "description": "Optimize workflows with advanced ERP solutions. We integrate finance, inventory and analytics into one system for better efficiency and real-time insights. Transform your operations with ERP today!",
//   "areaServed": "US",
//   "hasOfferCatalog": {
//     "@type": "OfferCatalog",
//     "name": "ERP Solutions",
//     "itemListElement": [
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom ERP Software Development" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finance Module Integration" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory Management" } },
//       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-time Analytics Dashboard" } }
//     ]
//   }
// };

// export const metadata = {
//   title: "ERP Solutions for Streamlined Operations & Growth Systems",
//   description:
//     "Optimize workflows with advanced ERP solutions. We integrate finance, inventory and analytics into one system for better efficiency and real-time insights. Transform your operations with ERP today!",
//   alternates: { canonical: "/erp" },
// };

const ERP_IMPACT_CARDS = [
    {
        value: "350+",
        label: "Live Apps",
        action: "View Portfolio",
        isLink: false,
        rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
    },
    {
        value: "4.9★",
        label: "Clutch Rating",
        action: "Verified reviews",
        href: "https://clutch.co/profile/tech-reforms",
        isLink: true,
        rounded: "",
    },
    {
        value: "$5K",
        label: "Starting Price",
        action: "Fixed-price",
        isLink: false,
        rounded: "",
    },
    {  
        value: "4–8 wk",
        label: "MVP Timeline",
        action: "Guaranteed",
        isLink: false,
        rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
    },
];

const DOCTOR_APP_TESTIMONIALS = [
    {
        name: "Clinic Owner",
        role: "California · Private Clinic & Appointment Booking",
        quote:
            "We were still managing patient appointments through a register and phone calls before this. Tech Reforms built us a doctor app with online booking and automated reminders, and our no-show rate dropped almost immediately. Patients love that they can book a slot without calling the clinic during busy hours.",
    },
    {
        name: "Practice Manager",
        role: "Illinois · Multi-Doctor Practice",
        quote:
            "Our biggest concern was patient data security, given how sensitive medical records are. Tech Reforms took that seriously from the start and built the app with proper encryption and compliance in mind. The video consultation feature also turned out to be a bigger hit than we expected, especially with our older patients who can't always come in person.",
    },
    {
        name: "Diagnostic Center Owner",
        role: "Ohio · Diagnostic & Lab Services",
        quote:
            "We run a small diagnostic center and wanted a way for patients to book tests and get reports without standing in line. Tech Reforms delivered exactly that, plus a simple dashboard for our staff to manage reports and appointments together. It's made our front desk noticeably less chaotic.",
    },
    {
        name: "Hospital Administrator",
        role: "Texas · Hospital & Multi-Specialty Care",
        quote:
            "What we appreciated most was how Tech Reforms actually understood healthcare workflows instead of treating it like a generic booking app. The doctor-side dashboard lets our physicians view patient history and prescriptions in seconds, which has cut down consultation time and made the whole process smoother for everyone.",
    },
    {
        name: "Telemedicine Startup Founder",
        role: "North Carolina · Telemedicine & Remote Healthcare",
        quote:
            "We launched our telemedicine app right when we needed it most, and Tech Reforms delivered it well within the timeline they promised. Prescription sharing, appointment scheduling, and payment, all work smoothly in one place. Our patients, especially the ones in rural areas, finally have proper access to consultations without traveling far.",
    },
];

const DoctorApp = () => {
    return (
        <div>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(erpSchema) }}
            /> */}
            <Header />
            <main>
                <GeneralHeroSection
                    firstWord="Looking for a Trusted"
                    secondWord="Doctor App Development"
                    thirdWord=""
                    forthWord="Company in the USA?"
                    fifthWord=""
                    para="Your patients are online. Is your practice? TechReform helps clinics, hospitals, and healthtech startups go digital — fast, secure, and built around your brand. No tech headaches. Just results."
                    buttonText="Get a Free Doctor App Consultation"
                />
                <OurImpactBoxesSection cards={ERP_IMPACT_CARDS} />
                <WhatWeOfferSection {...DOCTOR_APP_WHAT_WE_OFFER} />
                <ProcessSection {...DOCTOR_APP_PROCESS} />
                <WhyChooseSection {...DOCTOR_APP_WHY_CHOOSE} />
                <CaseStudiesSection {...DOCTOR_APP_CASE_STUDIES} />
                <FaqSection items={DOCTOR_APP_FAQ_ITEMS} />
                <TestimonialSection testimonials={DOCTOR_APP_TESTIMONIALS} />
                <ThreeDTextRotationSection />
                <DetailFormSection {...PAGE_CONTACT.doctorApp} />
            </main>

            <Footer />
        </div>
    );
};

export default DoctorApp;
