import { Check } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Link from "next/link";

const FlutterIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" aria-hidden>
    <path fill="#42A5F5" d="M8 36 L24 20 L32 28 L16 44 Z" />
    <path fill="#29B6F6" d="M8 12 L24 28 L32 20 L16 4 Z" />
    <path fill="#0277BD" d="M24 28 L40 12 L32 4 L16 20 Z" />
    <path fill="#01579B" d="M24 28 L32 36 L40 28 L32 20 Z" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" aria-hidden>
    <circle cx="24" cy="24" r="4" fill="#61DAFB" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 24 24)" />
  </svg>
);

const cellClass =
  "px-3 sm:px-4 py-2.5 sm:py-3 text-center text-white border border-[#444444] font-britanicaRegular text-sm sm:text-[15px]";

const ValueCell = ({ children, tone = "default" }) => {
  const toneClass =
    tone === "positive"
      ? "text-[#66BB6A]"
      : tone === "caution"
        ? "text-[#FFB74D]"
        : tone === "info"
          ? "text-[#64B5F6]"
          : "text-white";

  return (
    <td className={`${cellClass} ${toneClass}`}>
      <span className="inline-flex items-center justify-center gap-1.5 flex-wrap">
        {children}
      </span>
    </td>
  );
};

const FRAMEWORKS = [
  {
    name: "Flutter",
    Icon: FlutterIcon,
    href: "/flutter",
    rows: [
      { label: "Language", value: "Dart" },
      { label: "Performance", value: "Near-native", tone: "positive", icon: "check" },
      { label: "UI Consistency", value: "Pixel-perfect", tone: "positive", icon: "check" },
      { label: "Code Reuse", value: "~95%" },
      { label: "Best For", value: "Custom UI, Gaming" },
    ],
    recommendation:
      "Choose Flutter if pixel-perfect UI and performance are your priority.",
  },
  {
    name: "React Native",
    Icon: ReactNativeIcon,
    href: "/react-native",
    rows: [
      { label: "Language", value: "JavaScript" },
      { label: "Performance", value: "Good (JS bridge)", tone: "caution", icon: "tilde" },
      { label: "UI Consistency", value: "Platform-native", tone: "info" },
      { label: "Code Reuse", value: "~85–90%" },
      { label: "Best For", value: "JS teams, fast launch" },
    ],
    recommendation:
      "Choose React Native if your team knows JavaScript and needs faster time-to-market.",
  },
];

const RECOMMENDATION_CLASS =
  "border-[#C380FE] bg-[#7824c12c] text-[#E8D4FF]";

const FlutterVsReactNativeSection = () => {
  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="FRAMEWORK" secondWord="COMPARISON" />
            </div>
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Flutter vs React Native — </span>
              <span className="text-[#F74B1C]">Which Should You Choose?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto">
              Both frameworks power modern cross-platform apps. Compare the essentials side by side, then pick the stack that fits your team, timeline, and product goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-[52px]">
          {FRAMEWORKS.map((framework) => (
            <div key={framework.name} className="col-span-12 lg:col-span-6">
              <div className="h-full rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px]">
                <Link
                  href={framework.href}
                  className="flex items-center gap-3 pb-4 sm:pb-5 group w-fit"
                >
                  <framework.Icon />
                  <span className="font-britanicaBlack text-[22px] sm:text-[26px] text-white group-hover:text-[#F74B1C] transition-colors">
                    {framework.name}
                  </span>
                </Link>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[280px] border-collapse border border-[#444444]">
                    <thead>
                      <tr className="bg-[#F74B1C] text-white">
                        <th className={`${cellClass} font-britanicaExtraBold w-[45%]`}>Factor</th>
                        <th className={`${cellClass} font-britanicaExtraBold`}>{framework.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {framework.rows.map((row) => (
                        <tr key={row.label} className="bg-black">
                          <td className={`${cellClass} font-britanicaExtraBold text-white/90`}>{row.label}</td>
                          <ValueCell tone={row.tone}>
                            {row.icon === "check" && <Check className="w-4 h-4 shrink-0" strokeWidth={3} />}
                            {row.icon === "tilde" && <span className="font-britanicaExtraBold">~</span>}
                            {row.value}
                          </ValueCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p
                  className={`mt-4 sm:mt-5 rounded-lg border px-4 py-3 text-sm sm:text-[15px] font-britanicaRegular leading-relaxed ${RECOMMENDATION_CLASS}`}
                >
                  {framework.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FlutterVsReactNativeSection;
