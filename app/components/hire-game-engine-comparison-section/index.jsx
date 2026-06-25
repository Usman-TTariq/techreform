import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const ENGINES = [
  {
    title: "Unreal Engine 5",
    tag: "Best for AAA/PC",
    highlighted: false,
    image: "/images/unreal.jpg",
    description:
      "Industry gold standard for photorealistic graphics, console titles, and open-world environments. Steeper curve, higher developer cost, but unmatched visual output.",
    bestFor: [
      "AAA PC and console games",
      "First-person shooters",
      "High-fidelity open worlds",
      "Architectural visualization",
      "Real-time cinematics",
    ],
  },
  {
    title: "Unity",
    tag: "Best for Mobile",
    highlighted: true,
    image: "/images/unity.png",
    description:
      "Powers 71% of top mobile games. Strongest choice for iOS/Android, casual games, cross-platform, and AR/VR. Fastest hire — largest developer pool globally.",
    bestFor: [
      "Hyper-casual & casual mobile",
      "Mid-core iOS/Android games",
      "AR/VR mobile experiences",
      "Cross-platform (PC + mobile)",
      "Indie & startup MVPs",
    ],
  },
  {
    title: "Godot",
    tag: "Best for Indie/2D",
    highlighted: false,
    image: null,
    description:
      "Open-source, lightweight, and MIT-licensed. Ideal for 2D games, indie projects, and tight budgets. Developer pool is growing but still smaller than Unity.",
    bestFor: [
      "2D platformers & puzzle games",
      "Indie titles on tight budgets",
      "Lightweight casual games",
      "Browser/WebGL games",
      "Rapid prototyping",
    ],
  },
];

const cardShellClass = (highlighted) =>
  [
    "group flex h-full w-full flex-col rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-200",
    highlighted
      ? "border-2 border-[#C380FE] bg-[linear-gradient(145deg,_#111B3A_0%,_#12141F_84%)] shadow-[0_0_20px_rgba(195,128,254,0.12)]"
      : "border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] hover:border-2 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]",
  ].join(" ");

const HireGameEngineComparisonSection = () => {
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
              <CapsuleLabel firstWord="ENGINE" secondWord="GUIDE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Unity vs Unreal vs Godot: </span>
              <span className="text-[#F74B1C]">Which Engine Do You Need?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              The engine choice directly determines which developer profile to hire, the cost, and
              your delivery timeline. Get this wrong and you rewrite everything.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {ENGINES.map((engine) => (
            <div key={engine.title} className="col-span-12 lg:col-span-4 flex min-w-0">
              <article className={cardShellClass(engine.highlighted)}>
                <div className="flex items-center gap-3 pb-4">
                  {engine.image ? (
                    <Image
                      src={engine.image}
                      alt={`${engine.title} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50 text-[#C380FE] font-britanicaExtraBold text-sm">
                      GD
                    </span>
                  )}
                  <div>
                    <h3
                      className={`font-britanicaBlack text-[18px] sm:text-[20px] leading-tight group-hover:text-[#F74B1C] transition-colors ${
                        engine.highlighted ? "text-[#C380FE]" : "text-white"
                      }`}
                    >
                      {engine.title}
                    </h3>
                    <span className="inline-block mt-1 rounded-md bg-[#7724C1]/20 px-2.5 py-0.5 text-[11px] font-britanicaExtraBold text-[#C380FE]">
                      {engine.tag}
                    </span>
                  </div>
                </div>
                <p className="font-britanicaRegular text-[14px] text-white/85 leading-relaxed pb-4">
                  {engine.description}
                </p>
                <p className="font-britanicaExtraBold text-[12px] uppercase tracking-wide text-white/45 pb-2">
                  Best for:
                </p>
                <ul className="space-y-2 flex-1">
                  {engine.bestFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-britanicaRegular text-[13px] text-white/75"
                    >
                      <span className="text-[#C380FE] shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGameEngineComparisonSection;
