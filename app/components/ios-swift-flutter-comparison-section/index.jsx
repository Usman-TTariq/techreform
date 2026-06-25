import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const FRAMEWORKS = [
  {
    title: "Flutter",
    highlighted: false,
    rows: [
      { label: "Type", value: "Cross-platform" },
      { label: "Performance", value: "Near-native", positive: true },
      { label: "Apple API access", value: "Limited via plugins" },
      { label: "UI quality", value: "Custom — consistent" },
      { label: "Code reuse", value: "~95% iOS + Android", positive: true },
      { label: "Cost", value: "Lower — one codebase", positive: true },
    ],
    chooseIf:
      "Need iOS + Android both, budget-conscious, custom UI needed.",
  },
  {
    title: "Swift / SwiftUI",
    highlighted: true,
    rows: [
      { label: "Type", value: "Native iOS only" },
      { label: "Performance", value: "Best — native speed", positive: true },
      { label: "Apple API access", value: "Full — ARKit, Core ML", positive: true },
      { label: "UI quality", value: "Pixel-perfect iOS", positive: true },
      { label: "Code reuse", value: "iOS only" },
      { label: "Cost", value: "Higher" },
    ],
    chooseIf:
      "iOS-first, need ARKit/Core ML, or premium App Store app.",
  },
  {
    title: "React Native",
    highlighted: false,
    rows: [
      { label: "Type", value: "Cross-platform" },
      { label: "Performance", value: "Good — JS bridge" },
      { label: "Apple API access", value: "Via native modules" },
      { label: "UI quality", value: "Platform-native feel" },
      { label: "Code reuse", value: "~85% iOS + Android", positive: true },
      { label: "Cost", value: "Lower — JS team", positive: true },
    ],
    chooseIf:
      "JS team available, fast launch needed, platform-native UI preferred.",
  },
];

const cardShellClass = (highlighted) =>
  [
    "group flex h-full w-full flex-col rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-200",
    "bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]",
    highlighted
      ? "border-2 border-[#C380FE] shadow-[0_0_20px_rgba(195,128,254,0.12)]"
      : "border border-[#444444] hover:border-2 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]",
  ].join(" ");

const IosSwiftFlutterComparisonSection = () => {
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
              <CapsuleLabel firstWord="iOS" secondWord="COMPARE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Swift vs Flutter vs React Native — </span>
              <span className="text-[#F74B1C]">Which Is Right for Your iOS App?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              One of the most common buyer questions at decision stage. A clear comparison
              positions you as the expert — and helps you rank for comparative search queries
              like Swift vs Flutter and React Native vs Swift.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {FRAMEWORKS.map((framework) => (
            <div key={framework.title} className="col-span-12 lg:col-span-4 flex min-w-0">
              <article className={cardShellClass(framework.highlighted)}>
                <h3
                  className={`font-britanicaBlack text-[20px] sm:text-[22px] md:text-[24px] leading-tight pb-5 sm:pb-6 border-b border-[#444444] transition-colors group-hover:text-[#F74B1C] ${
                    framework.highlighted ? "text-[#C380FE]" : "text-white"
                  }`}
                >
                  {framework.title}
                </h3>

                <div className="mt-5 sm:mt-6 flex-1 rounded-xl border border-[#444444] bg-black/25 overflow-hidden divide-y divide-[#444444] group-hover:border-[#C380FE]/40 transition-colors">
                  {framework.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-start justify-between gap-3 px-4 py-3 sm:py-3.5"
                    >
                      <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/55 shrink-0">
                        {row.label}
                      </span>
                      <span
                        className={`font-britanicaRegular text-[13px] sm:text-[14px] text-right leading-snug break-words ${
                          row.positive
                            ? "text-[#66BB6A] font-britanicaExtraBold"
                            : "text-white/90"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 sm:mt-6 rounded-xl border px-4 py-3.5 sm:py-4 transition-all duration-200 ${
                    framework.highlighted
                      ? "border-[#C380FE]/60 bg-[#7724C1]/25"
                      : "border-[#444444] bg-black/30 group-hover:border-[#C380FE]/60 group-hover:bg-[#7724C1]/25"
                  }`}
                >
                  <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/85 leading-relaxed">
                    <span className="font-britanicaExtraBold text-[#C380FE]">Choose if: </span>
                    {framework.chooseIf}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosSwiftFlutterComparisonSection;
