import {
  Brain,
  Check,
  Code2,
  HeartPulse,
  LayoutGrid,
  Scan,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const cardClass =
  "group flex h-full items-center gap-4 rounded-2xl border-2 border-[#C380FE] px-4 py-4 sm:px-5 sm:py-5 transition-all duration-200 bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const FEATURED_TECH = [
  {
    title: "Swift 6",
    subtitle: "Primary iOS language",
    Icon: Terminal,
  },
  {
    title: "SwiftUI",
    subtitle: "Modern Apple UI framework",
    Icon: LayoutGrid,
  },
  {
    title: "Objective-C",
    subtitle: "Legacy iOS codebases",
    Icon: Code2,
  },
  {
    title: "ARKit 6",
    subtitle: "Augmented reality — LiDAR",
    Icon: Scan,
  },
  {
    title: "Core ML",
    subtitle: "On-device AI / ML",
    Icon: Brain,
  },
  {
    title: "HealthKit",
    subtitle: "Health & fitness apps",
    Icon: HeartPulse,
  },
];

const TECH_STACK = [
  {
    title: "IOS FRAMEWORKS",
    items: ["Swift 6", "SwiftUI", "UIKit", "Combine", "CoreData"],
  },
  {
    title: "APPLE APIS",
    items: ["ARKit 6", "Core ML", "HealthKit", "MapKit", "StoreKit 2"],
  },
  {
    title: "BACKEND & CLOUD",
    items: ["Firebase", "AWS Amplify", "Node.js", "Supabase", "GraphQL"],
  },
  {
    title: "PAYMENTS & TOOLS",
    items: ["Apple Pay", "Stripe SDK", "Xcode 16", "TestFlight", "Fastlane"],
  },
];

const IosTechnologiesFrameworksSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[20%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
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
              <CapsuleLabel firstWord="iOS" secondWord="TECH" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">iOS </span>
              <span className="text-[#F74B1C]">Technologies &amp; Frameworks </span>
              <span className="text-white">We Build With</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Swift, SwiftUI, Xcode, ARKit, Core ML — the named Apple technologies buyers search
              for and Google indexes. Our team ships production apps on every major iOS stack.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
          {FEATURED_TECH.map(({ title, subtitle, Icon }) => (
            <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className={cardClass}>
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50">
                  <Icon
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-britanicaExtraBold text-[15px] sm:text-[16px] text-white leading-tight group-hover:text-[#F74B1C] transition-colors">
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

        <div className="mx-auto max-w-6xl pt-10 sm:pt-12 md:pt-14">
          <div className="rounded-2xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-0">
              {TECH_STACK.map((group, index) => (
                <div
                  key={group.title}
                  className={`min-w-0 text-left md:text-center lg:text-left px-0 md:px-4 lg:px-6 ${
                    index > 0 ? "max-sm:border-t max-sm:border-[#444444]/70 max-sm:pt-6" : ""
                  } ${index % 2 === 1 ? "sm:border-l sm:border-[#444444]/70" : ""} ${
                    index >= 2
                      ? "sm:border-t sm:border-[#444444]/70 sm:pt-6 lg:border-t-0 lg:pt-0"
                      : ""
                  } ${index > 0 ? "lg:border-l lg:border-[#444444]/70" : ""}`}
                >
                  <h3 className="font-britanicaExtraBold text-[11px] sm:text-[12px] tracking-[0.08em] text-[#C380FE] pb-3 sm:pb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 min-w-0 md:justify-center lg:justify-start"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                          <Check
                            className="h-3 w-3 text-[#C380FE]"
                            strokeWidth={2.5}
                            aria-hidden
                          />
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
        </div>
      </div>
    </section>
  );
};

export default IosTechnologiesFrameworksSection;
