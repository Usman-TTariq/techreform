import Footer from "../components/footer"
import Header from "../components/header"
import ArHeroSection from "../components/ar-hero-section"
import ArAppFunctions from "../components/ar-app-functions"
import ARIndustries from "../components/ar-industries"
import DevelopingARSoftware from "../components/developing-ar-software"
import OurARExpertise from "../components/our-ar-expertise"
import ArProcess from "../components/ar-process"
import HowWeDoAr from "../components/how-we-do-ar"

const ArDevelopment = () => {
    return (
        <>
            <Header />
            <ArHeroSection />
            <ArAppFunctions />
            <ARIndustries />
            <DevelopingARSoftware />
            <OurARExpertise />
            <ArProcess />
            <HowWeDoAr />
            <Footer />
        </>
    )
}

export default ArDevelopment;
