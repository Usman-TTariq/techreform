import AboutWeDoSection from "../components/about-we-do-section";
import FounderMsgSection from "../components/founder-msg-section";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import OurValuesSection from "../components/our-values-section";
import WhyTechReformsSection from "../components/why-tech-reforms-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import Footer from "../components/footer";
import WhoWeAre from "../components/who-we-are";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Tech Reforms",
  "url": "https://techreforms.com/about",
  "description": "TechReforms \u2013 Premier digital agency offering mobile app development, scalable e-commerce solutions, & staff augmentation to grow your business online.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com",
    "telephone": "+15822335015",
    "email": "info@techreforms.com",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "811 Wilshire Boulevard",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90017",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/techreforms.1/",
      "https://www.instagram.com/tech.reforms/"
    ]
  }
};

export const metadata = {
  alternates: { canonical: "/about" }, 
};

const About = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header />
      <GeneralHeroSection firstWord="We" secondWord="Bring Smart Business" thirdWord="Solutions" forthWord="To Your" fifthWord="Doorsteps" para="Why settle for lackluster all-in-one developmental and marketing solutions that do nothing for your brand? Instead, join hands with Tech Reforms and scale with confidence." buttonText="Partner with Our App Development Experts "
      // para2="We help high-potential brands to scale faster through innovative developmental services and high-impact marketing strategies. Our products and solutions are all built for growth, visibility, and revenue. Our approach blends strategy, creativity, and performance to position your brand where it wins attention and trust."
      // para3="From putting your business on the digital map with an intuitive website, to boosting business visibility with paid advertising and social media."
      />
      <WhoWeAre
        p1="Tech Reform helps high-potential brands to scale faster through innovative developmental services and high-impact marketing strategies. Our products and solutions are all built for growth, visibility, and revenue. Our approach blends strategy, creativity, and performance to position your brand where it wins attention and trust."
        p2="From putting your business on the digital map with an intuitive website, to boosting business visibility with paid advertising and social media."
        // buttonText=""
      />
      <OurImpactBoxesSection />
      {/* <FounderMsgSection /> */}
      <AboutWeDoSection />
      <OurValuesSection />
      <WhyTechReformsSection />
      <TestimonialSection />
      <ThreeDTextRotationSection />
      <DetailFormSection />
      <Footer />
    </div>
  );
};

export default About;
