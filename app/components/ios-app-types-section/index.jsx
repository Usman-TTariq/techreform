import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TAG_STYLES = {
  purple: "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50",
  green: "bg-[#16A34A]/20 text-[#B8F5C8] border border-[#16A34A]/40",
  blue: "bg-[#2563EB]/20 text-[#93C5FD] border border-[#2563EB]/40",
  orange: "bg-[#EA580C]/20 text-[#FDBA74] border border-[#EA580C]/40",
  red: "bg-[#DC2626]/20 text-[#FCA5A5] border border-[#DC2626]/40",
};

const APP_TYPES = [
  {
    step: "01",
    title: "Native iPhone & iPad Apps",
    description:
      "Swift + SwiftUI. Best performance, full Apple API access. App Store optimized. iPhone 15 Pro, iPad Pro, all screen sizes.",
    tags: [
      { label: "Swift", style: "purple" },
      { label: "SwiftUI", style: "purple" },
    ],
  },
  {
    step: "02",
    title: "Apple Watch Apps",
    description:
      "WatchKit + HealthKit. Fitness tracking, health monitoring, notifications, and complications for Apple Watch Series 9 and Ultra.",
    tags: [
      { label: "WatchKit", style: "green" },
      { label: "HealthKit", style: "green" },
    ],
  },
  {
    step: "03",
    title: "AR iOS Apps (ARKit)",
    description:
      "LiDAR scanner, face tracking, object detection. Retail try-on, real estate visualization, medical education, and industrial training.",
    tags: [
      { label: "ARKit 6", style: "purple" },
      { label: "LiDAR", style: "purple" },
    ],
  },
  {
    step: "04",
    title: "AI-Powered iOS Apps",
    description:
      "On-device AI with Core ML. Image recognition, NLP, predictive features — runs offline, no server needed. Privacy-first AI.",
    tags: [
      { label: "Core ML", style: "blue" },
      { label: "On-device AI", style: "blue" },
    ],
  },
  {
    step: "05",
    title: "iOS Enterprise Apps",
    description:
      "MDM deployment, SSO, ERP integration, role-based access. Distributed via Apple Business Manager — not public App Store.",
    tags: [
      { label: "MDM", style: "orange" },
      { label: "Apple Biz Manager", style: "orange" },
    ],
  },
  {
    step: "06",
    title: "Apple Vision Pro Apps",
    description:
      "visionOS spatial computing apps — eye tracking, hand gestures, immersive environments. First-mover advantage in spatial computing.",
    tags: [
      { label: "visionOS", style: "red" },
      { label: "Spatial", style: "red" },
    ],
  },
];

const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-7 transition-all duration-200 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const IosAppTypesSection = () => {
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
              <CapsuleLabel firstWord="iOS" secondWord="APP TYPES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Types of </span>
              <span className="text-[#F74B1C]">iOS Apps </span>
              <span className="text-white">We Build</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Specific app types — not just generic services. Cover search queries like
              &ldquo;Apple Watch app development&rdquo;, &ldquo;ARKit iOS app&rdquo;, and
              &ldquo;visionOS developer&rdquo; with clear, expert positioning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {APP_TYPES.map((app) => (
            <div key={app.step} className="col-span-12 sm:col-span-6 lg:col-span-4 flex min-w-0">
              <article className={cardClass}>
                <span
                  className="pointer-events-none absolute -top-1 left-3 sm:left-4 font-britanicaBlack text-[56px] sm:text-[64px] md:text-[72px] leading-none text-white/[0.06] group-hover:text-[#C380FE]/10 transition-colors select-none"
                  aria-hidden
                >
                  {app.step}
                </span>

                <div className="relative z-10 flex flex-col h-full min-h-0">
                  <p className="font-britanicaExtraBold text-[12px] sm:text-[13px] tracking-wider text-[#C380FE]/70 pb-2">
                    {app.step}
                  </p>
                  <h3 className="font-britanicaBlack text-[18px] sm:text-[20px] md:text-[22px] text-white leading-snug pb-3 sm:pb-4 group-hover:text-[#F74B1C] transition-colors">
                    {app.title}
                  </h3>
                  <p className="font-britanicaRegular flex-1 text-[13px] sm:text-[14px] md:text-[15px] text-white/85 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 sm:pt-5">
                    {app.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-britanicaRegular ${TAG_STYLES[tag.style]}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosAppTypesSection;
