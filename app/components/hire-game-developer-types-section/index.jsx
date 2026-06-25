import {
  Box,
  Gamepad2,
  Glasses,
  Palette,
  Smartphone,
  Users,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const cardClass =
  "group flex h-full flex-col rounded-2xl border-2 border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-7 transition-all duration-200 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const DEVELOPER_TYPES = [
  {
    step: "ROLE 01",
    title: "Unity Game Developer",
    description:
      "Best for mobile games (iOS & Android), cross-platform titles, casual and mid-core genres, AR/VR, and indie projects. Unity powers 71% of the top 1,000 mobile games.",
    skills: ["C#", "Unity 3D", "Shader Graph", "Firebase", "AdMob", "Unity IAP"],
    Icon: Gamepad2,
  },
  {
    step: "ROLE 02",
    title: "Unreal Engine Developer",
    description:
      "Best for AAA-quality visuals, console and PC games, photorealistic environments, and high-fidelity first-person or action titles. C++ or Blueprints depending on your scope.",
    skills: ["C++", "Blueprints", "UE5", "Nanite", "Lumen", "Niagara"],
    Icon: Box,
  },
  {
    step: "ROLE 03",
    title: "Mobile Game Developer",
    description:
      "iOS and Android-native game developers with deep knowledge of mobile optimization — 60fps targeting, memory constraints, monetization loops, and App Store submission.",
    skills: ["Swift", "Kotlin", "Unity Mobile", "In-App Purchase", "Push Notif"],
    Icon: Smartphone,
  },
  {
    step: "ROLE 04",
    title: "Multiplayer Game Developer",
    description:
      "Architects who design and build real-time multiplayer systems — matchmaking, leaderboards, server-authoritative game loops, anti-cheat, and low-latency networking.",
    skills: ["Photon", "Mirror", "WebSockets", "Playfab", "Node.js"],
    Icon: Users,
  },
  {
    step: "ROLE 05",
    title: "AR/VR Game Developer",
    description:
      "Specialists in augmented and virtual reality experiences for Meta Quest, Apple Vision Pro, ARCore, and ARKit. The most specialized profile — plan for longer timelines.",
    skills: ["ARKit", "ARCore", "Meta SDK", "XR Interaction", "6DoF"],
    Icon: Glasses,
  },
  {
    step: "ROLE 06",
    title: "Game Artist & Technical Artist",
    description:
      "3D modelers, animators, and technical artists who bridge art and code — Blender to Unity pipelines, shader writing, VFX, and performance-optimized asset delivery.",
    skills: ["Blender", "Maya", "Substance", "Figma", "Spine 2D"],
    Icon: Palette,
  },
];

const TAG_STYLE = "bg-[#181A28] text-white/50 border border-[#444444]";

const HireGameDeveloperTypesSection = () => {
  return (
    <section className="relative pt-10 pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="GAME" secondWord="ROLES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Which Game Developer </span>
              <span className="text-[#F74B1C]">Does Your Project Need?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              &ldquo;Game developer&rdquo; covers radically different specializations. Hire the wrong profile
              and you lose months. Here&apos;s how to think about it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {DEVELOPER_TYPES.map(({ step, title, description, skills, Icon }) => (
            <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-4 flex min-w-0">
              <article className={cardClass}>
                <p className="font-britanicaExtraBold text-[11px] tracking-[0.14em] text-[#C380FE] pb-3">
                  {step}
                </p>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50">
                  <Icon className="h-5 w-5 text-[#C380FE]" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-britanicaBlack text-[17px] sm:text-[18px] text-white pt-4 pb-2 leading-snug group-hover:text-[#F74B1C] transition-colors">
                  {title}
                </h3>
                <p className="font-britanicaRegular flex-1 text-[14px] text-white/85 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex rounded-md px-2.5 py-0.5 text-[11px] font-britanicaRegular ${TAG_STYLE}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGameDeveloperTypesSection;
