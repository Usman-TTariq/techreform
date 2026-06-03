import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import ContactFormSection from "../components/contact-form-section";
import Footer from "../components/footer";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tech Reforms",
  url: "https://techreforms.com/contact",
  description:
    "Get in touch with Tech Reforms for app development, e-commerce, staff augmentation, and digital solutions.",
  mainEntity: {
    "@type": "Organization",
    name: "Tech Reforms",
    url: "https://techreforms.com",
    telephone: "+15822335015",
    email: "info@techreforms.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "811 Wilshire Boulevard",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90017",
      addressCountry: "US",
    },
  },
};

export const metadata = {
  title: "Contact Us | Tech Reforms",
  description:
    "Reach out to Tech Reforms for custom app development, e-commerce solutions, and staff augmentation. We respond within one business day.",
  alternates: { canonical: "/contact" },
};

const Contact = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <GeneralHeroSection
        firstWord="Get In"
        secondWord="Touch"
        thirdWord="With"
        forthWord="Our"
        fifthWord="Team"
        para="Whether you have a project idea, need a quote, or just want to learn more about our services — we'd love to hear from you."
        autoHeight
      />
      <ContactFormSection />
      <Footer />
    </div>  
  );
};

export default Contact;
