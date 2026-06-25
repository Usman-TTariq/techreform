import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const BADGE_STYLES = {
  blue: "border-[#60A5FA]/50 bg-[#60A5FA]/15 text-[#93C5FD]",
  purple: "border-[#C380FE] bg-[#7724C1]/30 text-[#C380FE]",
  green: "border-[#66BB6A]/50 bg-[#66BB6A]/15 text-[#66BB6A]",
};

const ENGAGEMENT_MODELS = [
  {
    badge: "For short-term needs",
    badgeStyle: "blue",
    title: "Part-Time",
    subtitle: "20 hours/week",
    description:
      "Flexible support for smaller projects, bug fixes, or ongoing maintenance. Share a developer with your team part-time.",
    details: [
      { label: "Hours", value: "20 hrs/week" },
      { label: "Rate", value: "50% of full-time" },
      { label: "Min duration", value: "1 month" },
      { label: "Notice", value: "2 weeks" },
    ],
    popular: false,
  },
  {
    badge: "Most Popular",
    badgeStyle: "purple",
    title: "Full-Time Dedicated",
    subtitle: "40 hours/week",
    description:
      "One dedicated developer works exclusively on your project. Full-time commitment — treated as your in-house team member.",
    details: [
      { label: "Hours", value: "40 hrs/week" },
      { label: "Rate", value: "$25–$130/hr" },
      { label: "Min duration", value: "3 months" },
      { label: "Notice", value: "2 weeks" },
    ],
    popular: true,
  },
  {
    badge: "For scaling teams",
    badgeStyle: "green",
    title: "Dedicated Team",
    subtitle: "3–10 developers",
    description:
      "Full squad extension — developers, QA, designer, and tech lead. Works as your offshore development team with daily standups.",
    details: [
      { label: "Team size", value: "3–10 members" },
      { label: "Billing", value: "Monthly retainer" },
      { label: "Min duration", value: "3 months" },
      { label: "Discount", value: "Volume pricing" },
    ],
    popular: false,
  },
];

const StaffAugmentationEngagementModelsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[15%] left-0 opacity-50 sm:opacity-70 pointer-events-none"
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
              <CapsuleLabel firstWord="ENGAGEMENT" secondWord="MODELS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Choose Your </span>
              <span className="text-[#F74B1C]">Engagement Model</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Pick the staffing model that fits your project size, timeline, and budget — from
              part-time support to a full dedicated squad working as your extended team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {ENGAGEMENT_MODELS.map((model, index) => (
            <div
              key={model.title}
              className={`col-span-12 md:col-span-6 lg:col-span-4 flex ${
                index === 2 ? "md:col-start-4 lg:col-start-auto" : ""
              }`}
            >
              <div
                className={`flex h-full w-full flex-col rounded-2xl p-5 sm:p-6 md:p-7 bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] ${
                  model.popular
                    ? "border-2 border-[#C380FE] ring-1 ring-[#C380FE]/40"
                    : "border border-[#444444]"
                }`}
              >
                <span
                  className={`inline-block w-fit max-w-full rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-britanicaExtraBold uppercase tracking-wide leading-snug ${BADGE_STYLES[model.badgeStyle]}`}
                >
                  {model.badge}
                </span>

                <h3 className="font-britanicaBlack text-[20px] sm:text-[24px] md:text-[26px] text-white pt-4 sm:pt-5 leading-tight">
                  {model.title}
                </h3>
                <p className="font-britanicaExtraBold text-[14px] sm:text-[15px] text-[#C380FE] pt-1 pb-3">
                  {model.subtitle}
                </p>
                <p className="font-britanicaRegular flex-1 text-[14px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed">
                  {model.description}
                </p>

                <div className="mt-5 sm:mt-6 rounded-xl border border-[#444444] bg-black/30 overflow-hidden divide-y divide-[#444444]">
                  {model.details.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 sm:py-3"
                    >
                      <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/55 shrink-0">
                        {row.label}
                      </span>
                      <span className="font-britanicaExtraBold text-[13px] sm:text-[14px] text-white text-right break-words">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationEngagementModelsSection;
