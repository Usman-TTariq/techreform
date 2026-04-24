import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import MvpWhatWeOfferSection from "../components/mvp-what-we-offer-section";
import MvpProcessSection from "../components/mvp-process-section";
import MvpWhyChooseSection from "../components/mvp-why-choose-section";
import CaseStudiesMvpSection from "../components/case-studies-mvp-section";
import FaqMvpSection from "../components/faq-mvp-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
// import WhoWeAreErp from "../components/who-we-are-erp";
import WhoWeAreMvp from "../components/who-we-are-mvp";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Top MVP Development Company for Startup Projects",
  description:
    "Work with a trusted MVP development company that helps startups validate ideas, reduce risk, and ship products faster. Get started today.",
  keywords: ["MVP development company"],
  alternates: { canonical: "/mvp" },
};

const MvpPage = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection
                firstWord="Startup-Focused MVP Development Company"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord=" | Hire MVP Developers for Startup Projects"
                para="Launch your startup faster with expert MVP development services. We help founders validate ideas, reduce risk, and build scalable products."
            // buttonText="Hire ERP Experts Today"
            />
            <WhoWeAreMvp />
            <OurImpactBoxesSection />
            <MvpWhatWeOfferSection />
            <MvpProcessSection />
            <MvpWhyChooseSection />
            <CaseStudiesMvpSection />
            <FaqMvpSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection formIntro="Every ERP system directly impacts your efficiency and profitability. Fill out the form for a quick consultation and project estimate. Our ERP solutions provider experts will guide you in building the best ERP software for a small business or a robust enterprise system, while keeping development timelines and costs under control." />
            <Footer />
        </div>
    )
}

export default MvpPage;
