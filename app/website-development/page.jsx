import Header from "../components/header";
import Footer from "../components/footer";
import WebLPHeroSection from "../components/web-lp-hero-section";
import LpWebSaving from "../components/lp-web-saving";
import WebDevelopmentServices from "../components/web-dev-services";
import LpWebFacilities from "../components/lp-web-facilities";
import LpWebWorks from "../components/lp-web-works";
import LpWebHere from "../components/lp-web-here";
import LpWebTransforming from "../components/lp-web-transforming";
import LpWebIndustries from "../components/lp-web-industries";
import LpWebPortfolioCase from "../components/lp-web-portfolio-case";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const metadata = {
    alternates: { canonical: "/website-development" },
};

const WebsiteDevelopmentPage = () => {
    return (
        <>
            <Header />
      <main>
            <WebLPHeroSection />
            <LpWebSaving />
            <WebDevelopmentServices />
            <LpWebFacilities />
            <LpWebWorks />
            <LpWebHere />
            <LpWebTransforming />
            <LpWebIndustries />
            <LpWebPortfolioCase />
            <DetailFormSection {...PAGE_CONTACT.websiteDevelopment} />
            </main>

            <Footer />
        </>
    )
}

export default WebsiteDevelopmentPage;
