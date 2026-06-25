import {
  Brain,
  Cloud,
  DollarSign,
  HeartPulse,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TAG_CLASS =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-britanicaRegular bg-[#7724C1]/20 text-[#C380FE] border border-[#7724C1]/30";

const INDUSTRIES = [
  {
    title: "Fintech & Banking",
    description:
      "React Native, Node.js developers with Stripe, Plaid, and PCI DSS experience. KYC/AML integration specialists for regulated financial products.",
    tags: ["Stripe", "Plaid", "PCI DSS", "KYC/AML"],
    Icon: DollarSign,
  },
  {
    title: "Healthcare & MedTech",
    description:
      "HIPAA-compliant developers for HL7, FHIR, HealthKit, and telemedicine platforms. Experience building FDA-aware medical software workflows.",
    tags: ["HIPAA", "HL7", "FHIR", "Telemedicine"],
    Icon: HeartPulse,
  },
  {
    title: "SaaS & Enterprise",
    description:
      "Full-stack engineers for multi-tenant SaaS — React, Node.js, PostgreSQL, microservices architecture, and CI/CD pipeline setup.",
    tags: ["Multi-tenant", "React", "Microservices", "CI/CD"],
    Icon: Cloud,
  },
  {
    title: "E-Commerce & Retail",
    description:
      "Magento, Shopify Plus, and WooCommerce developers. Headless commerce, payment gateway integration, and inventory sync specialists.",
    tags: ["Magento", "Shopify Plus", "WooCommerce", "Headless"],
    Icon: ShoppingCart,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Mobile + backend teams for GPS tracking, route optimization, warehouse management systems, and ERP integration.",
    tags: ["GPS Tracking", "Route Opt.", "WMS", "ERP"],
    Icon: Truck,
  },
  {
    title: "AI & Machine Learning",
    description:
      "LLM engineers, RAG system builders, and Python ML developers. OpenAI, Anthropic API, and production AI deployment experience.",
    tags: ["LLM", "RAG", "OpenAI", "Anthropic"],
    Icon: Brain,
  },
];

const IndustryCard = ({ industry }) => {
  const Icon = industry.Icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-7 transition-colors duration-200 hover:border-[#C380FE]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50">
        <Icon className="h-5 w-5 text-[#C380FE]" strokeWidth={1.75} aria-hidden />
      </span>
      <h3 className="font-britanicaBlack text-[18px] sm:text-[20px] md:text-[22px] text-white pt-4 pb-2 leading-snug">
        {industry.title}
      </h3>
      <p className="font-britanicaRegular flex-1 text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
        {industry.description}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-5">
        {industry.tags.map((tag) => (
          <span key={tag} className={TAG_CLASS}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const StaffAugmentationIndustriesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[15%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />

      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="INDUSTRIES" secondWord="WE SERVE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Staff Augmentation for </span>
              <span className="text-[#F74B1C]">Every Industry</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              &ldquo;Fintech developer hire&rdquo;, &ldquo;healthcare IT staff augmentation USA&rdquo; — industry-specific
              searches convert when you show domain expertise, not just generic developers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className="col-span-12 md:col-span-6 lg:col-span-4 flex">
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationIndustriesSection;
