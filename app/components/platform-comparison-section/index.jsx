import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";

const labelCellClass =
  "px-2 sm:px-3 py-2 sm:py-2.5 text-left text-white/90 border border-[#444444] font-britanicaExtraBold text-[11px] sm:text-xs lg:text-[12px] xl:text-sm leading-snug break-words align-top w-[42%]";

const valueCellClass =
  "px-2 sm:px-3 py-2 sm:py-2.5 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] sm:text-xs lg:text-[12px] xl:text-sm leading-snug break-words align-top";

export const RECOMMENDATION_PURPLE =
  "border-[#C380FE] bg-[#7824c12c] text-[#E8D4FF]";
export const RECOMMENDATION_GREEN =
  "border-[#66BB6A]/50 bg-[#66BB6A]/10 text-[#B8F5C8]";
export const RECOMMENDATION_ORANGE =
  "border-[#FFB74D]/50 bg-[#FFB74D]/10 text-[#FFE0B2]";

const valueToneClass = {
  positive: "text-[#FFB74D] font-britanicaExtraBold",
  accent: "text-[#C380FE] font-britanicaExtraBold",
};

/**
 * @param {{
 *   capsuleFirst: string,
 *   capsuleSecond: string,
 *   headline: import("react").ReactNode,
 *   description: string,
 *   platforms: Array<{
 *     name: string,
 *     shortName?: string,
 *     Icon: import("react").ComponentType<{ className?: string, strokeWidth?: number, "aria-hidden"?: boolean }>,
 *     popular?: boolean,
 *     rows: Array<{ label: string, value: string, tone?: keyof typeof valueToneClass }>,
 *     recommendation: string,
 *     recommendationClass: string,
 *   }>,
 *   ctaHref?: string,
 *   ctaText: string,
 * }} props
 */
const PlatformComparisonSection = ({
  capsuleFirst,
  capsuleSecond,
  headline,
  description,
  platforms,
  ctaHref = "#contact",
  ctaText,
}) => {
  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord={capsuleFirst} secondWord={capsuleSecond} />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black">
              {headline}
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 pt-8 sm:pt-12 md:pt-[52px]">
          {platforms.map((platform, index) => {
            const isLastOddCard =
              platforms.length % 2 === 1 && index === platforms.length - 1;

            return (
            <div
              key={platform.name}
              className={`col-span-12 lg:col-span-6 2xl:col-span-4 min-w-0 ${
                isLastOddCard ? "lg:col-start-4 2xl:col-start-auto" : ""
              }`}
            >
              <div
                className={`h-full min-w-0 rounded-xl border bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-5 xl:p-6 2xl:p-[30px] ${
                  platform.popular
                    ? "border-[#C380FE] ring-1 ring-[#C380FE]/60"
                    : "border-[#C380FE]"
                }`}
              >
                <div className="flex items-start gap-3 pb-4 sm:pb-5 min-w-0">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                    <platform.Icon
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-britanicaBlack text-[17px] sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-white leading-tight break-words">
                        {platform.name}
                      </span>
                      {platform.popular && (
                        <span className="rounded-full border border-[#C380FE] bg-[#7724C1]/30 px-2.5 py-0.5 font-britanicaExtraBold text-[10px] sm:text-[11px] text-[#C380FE] uppercase tracking-wide shrink-0">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="min-w-0 w-full">
                  <table className="w-full table-fixed border-collapse border border-[#444444]">
                    <thead>
                      <tr className="bg-[#F74B1C] text-white">
                        <th className={`${labelCellClass} !text-white`}>Factor</th>
                        <th className={`${valueCellClass} !text-white font-britanicaExtraBold`}>
                          {platform.shortName ?? platform.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {platform.rows.map((row) => (
                        <tr key={row.label} className="bg-black">
                          <td className={labelCellClass}>{row.label}</td>
                          <td
                            className={`${valueCellClass} ${
                              row.tone ? valueToneClass[row.tone] : ""
                            }`}
                          >
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p
                  className={`mt-4 sm:mt-5 rounded-lg border px-3 sm:px-4 py-3 text-[12px] sm:text-sm xl:text-[15px] font-britanicaRegular leading-relaxed break-words ${platform.recommendationClass}`}
                >
                  {platform.recommendation}
                </p>
              </div>
            </div>
            );
          })}
        </div>

        <div className="pt-8 sm:pt-10 md:pt-12">
          <Link
            href={ctaHref}
            className="block rounded-xl border border-[#C380FE]/60 bg-[#7824c12c] px-5 py-4 sm:px-6 sm:py-5 text-center font-britanicaRegular text-sm sm:text-base md:text-[17px] text-[#C380FE] hover:text-[#E8D4FF] hover:border-[#C380FE] transition-colors leading-relaxed"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonSection;
