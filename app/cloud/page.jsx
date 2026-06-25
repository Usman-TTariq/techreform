import Footer from "../components/footer";
import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import WhoWeAre from "../components/who-we-are";
import OurImpactBoxesSection from "../components/our-impact-boxes-section";
import CloudWhatWeOfferSection from "../components/cloud-what-we-offer-section";
import CloudProcessSection from "../components/cloud-process-section";
import CloudWhyChooseSection from "../components/cloud-why-choose-section";
import CloudCaseStudiesSection from "../components/cloud-case-studies-section";
import FaqCloudSection from "../components/faq-cloud-section";
import TestimonialSection from "../components/testimonial-section";
import ThreeDTextRotationSection from "../components/3d-text-rotation-section";
import DetailFormSection from "../components/detail-form-section";
import { PAGE_CONTACT } from "../constants/page-contact-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Affordable Cloud Services for Growing Business Solutions",
  description:
    "Get low-cost cloud services designed for growing businesses. We offer secure infrastructure, migration, and scalable solutions with full support.",
  alternates: { canonical: "/cloud" },
};

const CLOUD_TESTIMONIALS = [
  {
    name: "Ryan Kim",
    role: "VP Engineering — ScaleOps SaaS",
    quote:
      "TechReforms migrated our monolith to AWS microservices with zero downtime. Terraform IaC means we can spin up new environments in minutes. Deployment time went from 4 hours to 8 minutes after CI/CD setup.",
  },
  {
    name: "Sarah Lee",
    role: "CTO — MedCloud Systems",
    quote:
      "Healthcare platform on Azure — HIPAA compliant from day one. TechReforms set up encrypted storage, audit logging, and BAA agreements. Our SOC 2 audit passed on first attempt. Cloud cost dropped 35% after optimization.",
  },
  {
    name: "Mark Peterson",
    role: "Head of Infrastructure — AICore",
    quote:
      "Kubernetes setup on GKE for our AI inference workloads. TechReforms configured auto-scaling GPU nodes — we handle 10x traffic spikes without manual intervention. Grafana dashboards give us full observability.",
  },
  {
    name: "James Hall",
    role: "Director of Engineering — ShopScale",
    quote:
      "E-commerce platform migration to AWS — Redis caching and CloudFront CDN reduced page load time by 60%. Black Friday traffic handled with zero downtime. TechReforms set up auto-scaling that actually works under real load.",
  },
];

const CloudPage = () => {
  return (
    <>
      <Header />
      <GeneralHeroSection
        firstWord="Cloud Development Company"
        secondWord=""
        thirdWord=""
        forthWord=""
        fifthWord=" | One Vision. Built on the Cloud"
        para="Get powerful, scalable products on iOS, Android, and web, backed by a cloud development foundation built for speed, reliability, and long-term growth."
        buttonText="Claim a Free Cloud Solutions Consultation "
      />
      <WhoWeAre
        p1="Tech Reforms is a cloud development company that works with businesses of all sizes, from founders launching their first product to established teams looking to modernize their infrastructure. We believe good software should be fast, scalable, and accessible from anywhere."
        p2="Cloud development is not a trend for us; it is a deliberate choice. A well-architected cloud solution means faster delivery, reduced infrastructure costs, and a consistent experience for every user, regardless of their device or location. We plan each project carefully so that none of those benefits come at the expense of quality or security."
        buttonText="Talk to Our Team Today"
      />
      <OurImpactBoxesSection />
      <CloudWhatWeOfferSection />
      <CloudProcessSection />
      <CloudWhyChooseSection />
      <CloudCaseStudiesSection />
      <FaqCloudSection />
      <TestimonialSection testimonials={CLOUD_TESTIMONIALS} />
      <ThreeDTextRotationSection />
      <DetailFormSection {...PAGE_CONTACT.cloud} />
      <Footer />
    </>
  );
};

export default CloudPage;
