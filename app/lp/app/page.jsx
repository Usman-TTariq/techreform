import Header from "../../components/header";
import WebAppHeroSection from "../../components/web-app-hero-section";
import LpAppAbout from "../../components/lp-app-about";
import LpAppServices from "../../components/lp-app-services";
import IndustriesMobile from "../../components/industries-mobile";
import LpAppprocess from "../../components/lp-app-process";
import LpAppBarriers from "../../components/lp-app-barriers";
import LpAppWhyCustom from "../../components/lp-app-why-custom";
import LpAppPartnership from "../../components/lp-app-partnership";
import LpAppTechStack from "../../components/lp-app-tech-stack";
import LpAppHire from "../../components/lp-app-hire";
import LpAppPlatform from "../../components/lp-app-platform";
import TestimonialSection from "../../components/testimonial-section";
import DetailFormSection from "../../components/detail-form-section";
import Footer from "../../components/footer";
import LpAppCase from "../../components/lp-app-case";

const AppLPPage = () => {
  return (
    <div>
      <Header />
      <WebAppHeroSection autoHeight />
      <LpAppAbout />
      <LpAppServices />
      <IndustriesMobile
        secondWord="Impact of Mobile Application Development Across Industries"
        secondCol="!col-span-4 max-sm:!col-span-12"
        thirdCol="!col-span-8 max-sm:!col-span-12"
        para="From enhancing customer engagement to modernizing legacy systems, industry-specific mobile solutions are enabling organizations to adapt and thrive in an increasingly digital world."
      />
      <LpAppprocess/>
      <LpAppBarriers/>
      <LpAppWhyCustom />
      <LpAppPartnership />
      <LpAppTechStack />
      <LpAppHire />
      <LpAppPlatform />
      <TestimonialSection />
      <LpAppCase />
      <DetailFormSection />
      <Footer />
    </div>
  );
};

export default AppLPPage;
