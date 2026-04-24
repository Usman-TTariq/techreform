import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import Header from "../components/header";
import PortfolioOne from "../components/portfolio-one";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";

export const metadata = {
  title: "Our Portfolio & Case Studies of Digital Projects Work",
  description:
    "Explore our portfolio showcasing innovative digital projects, apps, and platforms built for performance, scalability, and real-world impact. See our work in action today!",
  alternates: { canonical: "/portfolio" },
};

const Portfolio = () => {
    return (
        <div>
            <Header />
            <GeneralHeroSection firstWord="Innovation Beyond Limits:" secondWord=" Discover Our Project Showcase" breakAfterFirstWord para="Explore our projects and see how we are redefining what’s possible. Our showcase highlights the innovative solutions we have developed to solve complex challenges across various industries. From intelligent analytics to seamless integrations, discover how our work drives real progress and delivers meaningful results that create a lasting impact for businesses and communities alike."
                buttonText="Request a Demo"
            />
            <PortfolioOne />
            <TestimonialSection />
            <ThreeDTextRotationSection />
            <DetailFormSection />
            <Footer />
        </div>
    )
}

export default Portfolio;
