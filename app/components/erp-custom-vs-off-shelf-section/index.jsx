import { Check, Code2, Package } from "lucide-react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";

const cellClass =
  "px-3 sm:px-4 py-2.5 sm:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-sm sm:text-[15px]";

const RECOMMENDATION_PURPLE =
  "border-[#C380FE] bg-[#7824c12c] text-[#E8D4FF]";
const RECOMMENDATION_NEUTRAL =
  "border-[#444444] bg-black/40 text-white/85";

const toneClass = {
  positive: "text-[#66BB6A] font-britanicaExtraBold",
  negative: "text-[#EF5350] font-britanicaExtraBold",
  neutral: "text-white",
};

const OPTIONS = [
  {
    name: "Custom ERP Development",
    Icon: Code2,
    recommended: true,
    rows: [
      { label: "Upfront Cost", value: "$8K–$100K", tone: "positive" },
      { label: "License Fee", value: "None — you own it", tone: "positive" },
      { label: "Customization", value: "100% your workflow", tone: "positive" },
      { label: "Scalability", value: "Add modules anytime", tone: "positive" },
      { label: "Vendor dependency", value: "None", tone: "positive" },
      { label: "Timeline", value: "8–20 weeks", tone: "neutral" },
      { label: "IP Ownership", value: "100% yours", tone: "positive" },
    ],
    recommendation:
      "Best if: Your business has unique workflows that off-the-shelf software cannot handle — or you want full ownership with no recurring license costs.",
    recommendationClass: RECOMMENDATION_PURPLE,
    bestFor: [
      "Manufacturing with complex BOM",
      "Logistics with custom routing",
      "Healthcare with HIPAA requirements",
    ],
  },
  {
    name: "Off-the-Shelf (SAP / Oracle)",
    Icon: Package,
    recommended: false,
    rows: [
      { label: "Upfront Cost", value: "$100K–$500K+", tone: "negative" },
      { label: "License Fee", value: "$50K–$200K/year", tone: "negative" },
      { label: "Customization", value: "Limited by vendor", tone: "negative" },
      { label: "Scalability", value: "Vendor-controlled", tone: "neutral" },
      { label: "Vendor dependency", value: "High — locked in", tone: "negative" },
      { label: "Timeline", value: "6–18 months", tone: "negative" },
      { label: "IP Ownership", value: "Vendor owns software", tone: "negative" },
    ],
    recommendation:
      "Best if: You are a 500+ employee enterprise with global operations and need a proven platform with extensive third-party integrations.",
    recommendationClass: RECOMMENDATION_NEUTRAL,
    bestFor: [
      "Global enterprises 500+ staff",
      "Multi-country operations",
      "Heavy compliance requirements",
    ],
  },
];

const ErpCustomVsOffShelfSection = () => {
  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4 max-w-full overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="APPROACH" secondWord="COMPARISON" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Custom ERP vs Off-the-Shelf — </span>
              <span className="text-[#F74B1C]">Which Is Right for You?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              The biggest decision before starting your ERP project. Most businesses overpay for SAP
              or Oracle licenses when a custom ERP would cost less and fit better. Here is an honest
              comparison.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-[52px]">
          {OPTIONS.map((option) => (
            <div key={option.name} className="col-span-12 lg:col-span-6 min-w-0">
              <div
                className={`h-full rounded-xl border bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] ${
                  option.recommended
                    ? "border-[#C380FE] ring-1 ring-[#C380FE]/60"
                    : "border-[#444444]"
                }`}
              >
                <div className="flex items-start justify-between gap-3 pb-4 sm:pb-5 flex-wrap">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                      <option.Icon
                        className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <span className="font-britanicaBlack text-[18px] sm:text-[22px] md:text-[24px] text-white leading-tight">
                      {option.name}
                    </span>
                  </div>
                  {option.recommended && (
                    <span className="rounded-full border border-[#C380FE] bg-[#7724C1]/30 px-2.5 py-0.5 font-britanicaExtraBold text-[11px] sm:text-xs text-[#C380FE] uppercase tracking-wide shrink-0">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="max-w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse border border-[#444444] text-sm sm:text-[15px]">
                    <thead>
                      <tr className="bg-[#F74B1C] text-white">
                        <th className={`${cellClass} font-britanicaExtraBold w-[42%]`}>Factor</th>
                        <th className={`${cellClass} font-britanicaExtraBold`}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {option.rows.map((row) => (
                        <tr key={row.label} className="bg-black">
                          <td className={`${cellClass} font-britanicaExtraBold text-white/90 break-words`}>
                            {row.label}
                          </td>
                          <td className={`${cellClass} break-words ${toneClass[row.tone]}`}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p
                  className={`mt-4 sm:mt-5 rounded-lg border px-4 py-3 text-sm sm:text-[15px] font-britanicaRegular leading-relaxed ${option.recommendationClass}`}
                >
                  {option.recommendation}
                </p>

                <div className="mt-4 sm:mt-5">
                  <p className="font-britanicaExtraBold text-xs sm:text-sm text-white/60 uppercase tracking-wide pb-3">
                    Best for
                  </p>
                  <ul className="space-y-2.5">
                    {option.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 min-w-0">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#C380FE]/40 mt-0.5">
                          <Check className="h-3 w-3 text-[#C380FE]" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="font-britanicaRegular text-sm sm:text-[15px] text-white/90 leading-snug break-words">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ErpCustomVsOffShelfSection;
