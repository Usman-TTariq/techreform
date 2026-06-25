import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";
import Footer from "../components/footer";
import Header from "../components/header";
import IndustriesMobile from "../components/industries-mobile";
import LpAppAbout from "../components/lp-app-about";
import LpAppBarriers from "../components/lp-app-barriers";
import LpAppCase from "../components/lp-app-case";
import LpAppHire from "../components/lp-app-hire";
import LpAppPartnership from "../components/lp-app-partnership";
import LpAppPlatform from "../components/lp-app-platform";
import LpAppprocess from "../components/lp-app-process";
import LpAppServices from "../components/lp-app-services";
import LpAppTechStack from "../components/lp-app-tech-stack";
import LpAppWhyCustom from "../components/lp-app-why-custom";
import TestimonialSection from "../components/testimonial-section";
import WebAppHeroSection from "../components/web-app-hero-section";

const AppDevelopmentPage = () => {
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
      <DetailFormSection {...PAGE_CONTACT.appDevelopment} />
      <Footer />
    </div>
  );
};

export default AppDevelopmentPage;
