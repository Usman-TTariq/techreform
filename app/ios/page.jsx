import Footer from "../components/footer";
import FaqIosSection from "../components/faq-ios-section";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import IosAppTypesSection from "../components/ios-app-types-section";
import IosAsoSection from "../components/ios-aso-section";
import IosCaseStudiesSection from "../components/ios-case-studies-section";
import IosProcessSection from "../components/ios-process-section";
import IosSwiftFlutterComparisonSection from "../components/ios-swift-flutter-comparison-section";
import IosTechnologiesFrameworksSection from "../components/ios-technologies-frameworks-section";
import IosWhatWeOfferSection from "../components/ios-what-we-offer-section";
import IosWhyChooseSection from "../components/ios-why-choose-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import WhoWeAre from "../components/who-we-are";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import IosIndustriesSection from "../components/ios-industries-section";
import { IOS_CONTACT_BENEFITS } from "../constants/ios-contact-benefits";

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

const IOS_IMPACT_CARDS = [
  {
    value: "150+",
    label: "iOS Apps Delivered",
    action: "App Store live",
    href: "/portfolio",
    isLink: true,
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
    label: "iOS Starting Price",
    action: "Fixed-price available",
    isLink: false,
    rounded: "",
  },
  {
    value: "4-12wk",
    label: "Avg. Delivery",
    action: "MVP to enterprise",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const IOS_TESTIMONIALS = [
  {
    name: "Alex Kim",
    role: "CEO — PayFlow Inc.",
    quote:
      "TechReforms built our fintech iOS app with Apple Pay and Face ID in 10 weeks. App Store approved first submission — no rejections. 4.8 rating after 3 months with 12K+ downloads.",
  },
  {
    name: "Dr. Sarah Reed",
    role: "Founder — MediConnect",
    quote:
      "HIPAA-compliant telemedicine app on iOS. HealthKit integration, video consultation, and patient records — all in one app. TechReforms handled everything including App Store submission and privacy labels.",
  },
  {
    name: "Marie Laurent",
    role: "Head of Digital — VisionStyle",
    quote:
      "AR try-on app using ARKit for our eyewear brand. LiDAR tracking was accurate — conversion rate up 35% since launch. TechReforms delivered in 14 weeks on a fixed price. Zero scope creep.",
  },
  {
    name: "James Park",
    role: "CTO — LearnPath",
    quote:
      "E-learning iOS app with offline video, interactive quizzes, and subscription billing via StoreKit 2. 50K downloads in first 6 months. TechReforms team understood iOS deeply — not just generic app developers.",
  },
];

const IOS = () => {
    return (
        <>
            <Header />
      <main>
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
            <OurImpactBoxesSection cards={IOS_IMPACT_CARDS} />
            <IosWhatWeOfferSection />
            <IosAppTypesSection />
            <IosProcessSection />
            <IosAsoSection />
            <IosTechnologiesFrameworksSection />
            <IosSwiftFlutterComparisonSection />
            <IosWhyChooseSection />
            <IosIndustriesSection />
            <IosCaseStudiesSection />
            <FaqIosSection />
            <TestimonialSection testimonials={IOS_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection
                productType="ios"
                benefits={IOS_CONTACT_BENEFITS}
                formIntro="Tell us about your iOS app — target devices, Apple APIs needed, and timeline. We respond within 24 hours with a scope outline and ballpark estimate."
            />
            </main>

            <Footer />
        </>
    )
}

export default IOS; 