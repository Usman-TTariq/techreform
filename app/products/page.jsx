import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import ProductDashboardSection from "../components/product-dashboard-section";
import ParagraphSection from "../components/paragraph-section";
import HRSolutionSection from "../components/hr-solution-section";
import HRPlatformSection from "../components/hr-platform-section";
import EnpoweringBusinessSection from "../components/enpowering-business-section";
import EffortlessEmployeeSection from "../components/effortless-emplyee-section";
import OrchestratorSection from "../components/orchestrator-section";
import SmarterHrSection from "../components/smarter-hr-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import Footer from "../components/footer";

const Products = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection firstWord="Simplify" secondWord="HR" thirdWord="Empower" forthWord="Your" fifthWord="Workforce" para="Manage your people, processes, and performance from one powerful HR platform. Our HRMS helps businesses reduce manual work, improve employee experience, and make smarter HR decisions — all in one place." buttonText="Request a Demo" />
            <ProductDashboardSection />
            <ParagraphSection />
            <HRSolutionSection />
            <HRPlatformSection />
            <EnpoweringBusinessSection />
            <EffortlessEmployeeSection />
            <OrchestratorSection />
            <SmarterHrSection />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default Products;