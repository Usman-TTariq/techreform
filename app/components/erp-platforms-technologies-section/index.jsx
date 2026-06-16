import Image from "next/image";
import {
  Building2,
  Check,
  Cloud,
  Code2,
  Database,
  LayoutGrid,
  Package,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const PLATFORMS = [
  { title: "SAP ERP", subtitle: "Large Enterprise", Icon: Building2 },
  { title: "Oracle ERP", subtitle: "Enterprise / Finance", Icon: Database },
  { title: "MS Dynamics 365", subtitle: "Mid-Enterprise", Icon: LayoutGrid },
  { title: "Odoo ERP", subtitle: "SMB / Startup", Icon: Package },
  { title: "NetSuite ERP", subtitle: "Cloud / Mid-market", Icon: Cloud },
  { title: "Custom ERP", subtitle: "Any business size", Icon: Code2 },
];

const TECH_STACK = [
  {
    title: "BACKEND",
    items: ["Node.js", "Python / Django", "Laravel / PHP", "Java Spring"],
  },
  {
    title: "DATABASE",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "CLOUD",
    items: ["AWS", "Azure", "Google Cloud", "Docker / K8s"],
  },
  {
    title: "INTEGRATIONS",
    items: ["Salesforce CRM", "QuickBooks", "Stripe / PayPal", "REST / GraphQL"],
  },
];

const cardClass =
  "rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]";

const ErpPlatformsTechnologiesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[30%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="/images/whatwedobk.png"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />

      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="ERP" secondWord="PLATFORMS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">ERP Platforms &amp; </span>
              <span className="text-[#F74B1C]">Technologies</span>
              <span className="text-white"> We Work With</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
          {PLATFORMS.map(({ title, subtitle, Icon }) => (
            <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className={`${cardClass} flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5 h-full`}>
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                  <Icon
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-britanicaExtraBold text-[15px] sm:text-[16px] text-white leading-tight">
                    {title}
                  </h3>
                  <p className="font-britanicaRegular text-[12px] sm:text-[13px] text-white/60 pt-0.5">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-12 md:pt-14 border-t border-white/10 mt-10 sm:mt-12 md:mt-14">
          {TECH_STACK.map((group) => (
            <div key={group.title} className="min-w-0">
              <h3 className="font-britanicaExtraBold text-[11px] sm:text-[12px] tracking-[0.08em] text-white/70 pb-3 sm:pb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 min-w-0">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                      <Check className="h-3 w-3 text-[#C380FE]" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/85 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpPlatformsTechnologiesSection;
