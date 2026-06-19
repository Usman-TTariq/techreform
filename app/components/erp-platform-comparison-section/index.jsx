import {
  Building2,
  LayoutGrid,
  Package,
} from "lucide-react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";

const cellClass =
  "px-3 sm:px-4 py-2.5 sm:py-3 text-center text-white border border-[#444444] font-britanicaRegular text-sm sm:text-[15px]";

const RECOMMENDATION_PURPLE =
  "border-[#C380FE] bg-[#7824c12c] text-[#E8D4FF]";
const RECOMMENDATION_GREEN =
  "border-[#66BB6A]/50 bg-[#66BB6A]/10 text-[#B8F5C8]";
const RECOMMENDATION_ORANGE =
  "border-[#FFB74D]/50 bg-[#FFB74D]/10 text-[#FFE0B2]";

const PLATFORMS = [
  {
    name: "Odoo ERP",
    Icon: Package,
    popular: false,
    rows: [
      { label: "Best for", value: "SMB / Startup" },
      { label: "Cost", value: "$15K – $40K" },
      { label: "Setup time", value: "8–14 weeks" },
      { label: "Customization", value: "High" },
      { label: "License", value: "Open source" },
    ],
    recommendation: "Best if: Small team, limited budget, fast launch needed",
    recommendationClass: RECOMMENDATION_GREEN,
  },
  {
    name: "MS Dynamics 365",
    Icon: LayoutGrid,
    popular: true,
    rows: [
      { label: "Best for", value: "Mid-Enterprise" },
      { label: "Cost", value: "$50K – $150K" },
      { label: "Setup time", value: "4–8 months" },
      { label: "Customization", value: "Medium-High" },
      { label: "License", value: "Microsoft 365" },
    ],
    recommendation: "Best if: Mid-size company, Office 365 already in use",
    recommendationClass: RECOMMENDATION_PURPLE,
  },
  {
    name: "SAP / Oracle",
    Icon: Building2,
    popular: false,
    rows: [
      { label: "Best for", value: "Large Enterprise" },
      { label: "Cost", value: "$100K – $500K+" },
      { label: "Setup time", value: "6–18 months" },
      { label: "Customization", value: "Medium" },
      { label: "License", value: "Expensive / annual" },
    ],
    recommendation: "Best if: 500+ employees, complex global operations",
    recommendationClass: RECOMMENDATION_ORANGE,
  },
];

const ErpPlatformComparisonSection = () => {
  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="PLATFORM" secondWord="COMPARISON" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">SAP vs Oracle vs Odoo vs </span>
              <span className="text-[#C380FE]">Custom ERP</span>
              <span className="text-white"> — </span>
              <span className="text-[#F74B1C]">Which Is Right for You?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              The biggest decision before ERP development is platform selection. Wrong choice = wasted
              budget. Here is a direct comparison based on business size and budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-[52px]">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className="col-span-12 lg:col-span-4">
              <div
                className={`h-full rounded-xl border bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] ${
                  platform.popular
                    ? "border-[#C380FE] ring-1 ring-[#C380FE]/60"
                    : "border-[#C380FE]"
                }`}
              >
                <div className="flex items-center gap-3 pb-4 sm:pb-5 flex-wrap">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                    <platform.Icon
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <span className="font-britanicaBlack text-[20px] sm:text-[24px] text-white">
                    {platform.name}
                  </span>
                  {platform.popular && (
                    <span className="rounded-full border border-[#C380FE] bg-[#7724C1]/30 px-2.5 py-0.5 font-britanicaExtraBold text-[11px] sm:text-xs text-[#C380FE] uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[260px] border-collapse border border-[#444444]">
                    <thead>
                      <tr className="bg-[#F74B1C] text-white">
                        <th className={`${cellClass} font-britanicaExtraBold w-[45%]`}>Factor</th>
                        <th className={`${cellClass} font-britanicaExtraBold`}>{platform.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platform.rows.map((row) => (
                        <tr key={row.label} className="bg-black">
                          <td className={`${cellClass} font-britanicaExtraBold text-white/90`}>
                            {row.label}
                          </td>
                          <td className={cellClass}>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p
                  className={`mt-4 sm:mt-5 rounded-lg border px-4 py-3 text-sm sm:text-[15px] font-britanicaRegular leading-relaxed ${platform.recommendationClass}`}
                >
                  {platform.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 sm:pt-10 md:pt-12">
          <Link
            href="#contact"
            className="block rounded-xl border border-[#C380FE]/60 bg-[#7824c12c] px-5 py-4 sm:px-6 sm:py-5 text-center font-britanicaRegular text-sm sm:text-base md:text-[17px] text-[#C380FE] hover:text-[#E8D4FF] hover:border-[#C380FE] transition-colors leading-relaxed"
          >
            Not sure which platform is right? Tell us your business size and budget — we&apos;ll
            recommend the right ERP in 24 hours →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErpPlatformComparisonSection;
