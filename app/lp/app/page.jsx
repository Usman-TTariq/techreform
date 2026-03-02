import Header from "../../components/header";
import WebAppHeroSection from "../../components/web-app-hero-section";
import LpAppAbout from "../../components/lp-app-about";
import LpAppServices from "../../components/lp-app-services";
import IndustriesMobile from "../../components/industries-mobile";

const AppLPPage = () => {
    return (
        <div>
            <Header />
            <WebAppHeroSection />
            <LpAppAbout />
            <LpAppServices />
            <IndustriesMobile secondWord="Impact of Mobile Application Development Across Industries" secondCol="!col-span-4" thirdCol="!col-span-8" para="From enhancing customer engagement to modernizing legacy systems, industry-specific mobile solutions are enabling organizations to adapt and thrive in an increasingly digital world." />
        </div>
    )
}

export default AppLPPage;  