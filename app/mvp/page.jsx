import Header from "../components/header";
import Footer from "../components/footer";
import GeneralHeroSection from "../components/general-hero-section";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import MvpWhatWeOfferSection from "../components/mvp-what-we-offer-section";
import MvpProcessSection from "../components/mvp-process-section";
import MvpWhyChooseSection from "../components/mvp-why-choose-section";
import CaseStudiesMvpSection from "../components/case-studies-mvp-section";
import FaqMvpSection from "../components/faq-mvp-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";
// import WhoWeAreErp from "../components/who-we-are-erp";
import WhoWeAreMvp from "../components/who-we-are-mvp";

export const dynamic = "force-dynamic";

const mvpSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MVP Development Services",
  "serviceType": "MVP Development",
  "provider": {
    "@type": "Organization",
    "name": "Tech Reforms",
    "url": "https://techreforms.com"
  },
  "url": "https://techreforms.com/mvp",
  "description": "Work with a trusted MVP development company that helps startups validate ideas, reduce risk, and ship products faster. Get started today.",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MVP Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup MVP Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Validation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rapid Prototyping" } }
    ]
  }
};

export const metadata = {
  title: "Top MVP Development Company for Startup Projects",
  description:
    "Work with a trusted MVP development company that helps startups validate ideas, reduce risk, and ship products faster. Get started today.",
  keywords: ["MVP development company"],
  alternates: { canonical: "/mvp" },
};

const MVP_TESTIMONIALS = [
  {
    name: "Alex Kim",
    role: "Founder — LendFast (Pre-seed funded)",
    quote:
      "TechReforms built our fintech MVP in 7 weeks — iOS and Android with Stripe and Plaid integration. We used it to raise our $500K pre-seed round. Investors were impressed with the quality for an MVP.",
  },
  {
    name: "Sarah Reed",
    role: "Founder — DocuChat AI",
    quote:
      "We had an AI product idea but no technical team. TechReforms scoped the MVP in week one, built the RAG-based chatbot in 6 weeks, and launched on Product Hunt. 800 signups in first week. Now we're building v2.",
  },
  {
    name: "Dr. James Park",
    role: "Co-founder — TeleDoc Now",
    quote:
      "Healthcare telemedicine MVP — HIPAA compliant, video calls, appointment booking. Built in 8 weeks. We onboarded 50 doctors in the first month. TechReforms understood startup constraints — no bloat, just what we needed.",
  },
  {
    name: "Mark Lee",
    role: "CEO — Flowboard SaaS",
    quote:
      "SaaS MVP for B2B project management — built in Next.js with Stripe subscriptions and team collaboration. Launched in 10 weeks. First paying customer on week 11. TechReforms helped us scope tightly — we didn't overbuild.",
  },
];

const MvpPage = () => {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mvpSchema) }}
            />
            <Header />
            <GeneralHeroSection
                firstWord="Startup-Focused MVP Development Company"
                secondWord=""
                thirdWord=""
                forthWord=""
                fifthWord=" | Hire MVP Developers for Startup Projects"
                para="Launch your startup faster with expert MVP development services. We help founders validate ideas, reduce risk, and build scalable products."
            // buttonText="Hire ERP Experts Today"
            />
            <WhoWeAreMvp />
            <OurImpactBoxesSection />
            <MvpWhatWeOfferSection />
            <MvpProcessSection />
            <MvpWhyChooseSection />
            <CaseStudiesMvpSection />
            <FaqMvpSection />
            <TestimonialSection testimonials={MVP_TESTIMONIALS} />
            <ThreeDTextRotationSection />
            <DetailFormSection {...PAGE_CONTACT.mvp} />
            <Footer />
        </div>
    )
}

export default MvpPage;
