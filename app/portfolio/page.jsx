import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import PortfolioOne from "../components/portfolio-one";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Tech Reforms Portfolio",
  "url": "https://techreforms.com/portfolio",
  "description": "Explore our portfolio showcasing innovative digital projects, apps, and platforms built for performance, scalability, and real-world impact. See our work in action today!",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Mobile App Development, E-Commerce, Game Development, Enterprise Software"
  }
};

export const metadata = {
  title: "Our Portfolio & Case Studies of Digital Projects Work",
  description:
    "Explore our portfolio showcasing innovative digital projects, apps, and platforms built for performance, scalability, and real-world impact. See our work in action today!",
  alternates: { canonical: "/portfolio" },
};

const Portfolio = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />
            <Header />
      <main>
            <GeneralHeroSection firstWord="Our Project Showcase:" secondWord=" Experience Innovation Beyond Limits!" breakAfterFirstWord para="Explore our past projects and learn how we work to redefine innovation. Our entire catalogue is a testament to our commitment to providing smart web and mobile development solutions. Our main goal is to help you streamline your business operations and help you monetize smartly."
                buttonText="See Our Work — Request a Demo "
            />
            <PortfolioOne />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection {...PAGE_CONTACT.portfolio} />
            </main>

            <Footer />
        </div>
    )
}

export default Portfolio;
