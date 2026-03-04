import Header from "../../components/header";
import WebLPHeroSection from "../../components/web-lp-hero-section";
import LpWebSaving from "../../components/lp-web-saving";
import WebDevelopmentServices from "../../components/web-dev-services";
import LpWebFacilities from "../../components/lp-web-facilities";
import LpWebWorks from "../../components/lp-web-works";
import LpWebHere from "../../components/lp-web-here";
import LpWebTransforming from "../../components/lp-web-transforming";
import LpWebIndustries from "../../components/lp-web-industries";
import LpWebPortfolioCase from "../../components/lp-web-portfolio-case";
import DetailFormSection from "../../components/detail-form-section";
import Footer from "../../components/footer";

const WebLPPage = () => {
    return (
        <>
            <Header />
            <WebLPHeroSection />
            <LpWebSaving />
            <WebDevelopmentServices />
            <LpWebFacilities />
            <LpWebWorks />
            <LpWebHere />
            <LpWebTransforming />
            <LpWebIndustries />
            <LpWebPortfolioCase />
            <DetailFormSection />
            <Footer />
        </>
    )
}

export default WebLPPage;
