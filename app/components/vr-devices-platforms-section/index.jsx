import {
  Boxes,
  Eye,
  Gamepad2,
  Globe,
  Headset,
  Layers,
  Monitor,
  Glasses,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const TAG_CLASS =
  "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50";

const HEADSETS = [
  {
    title: "Meta Quest 3",
    category: "Standalone + Mixed Reality",
    desc: "Most popular consumer VR. No PC needed. Passthrough mixed reality. Meta SDK + Unity XR.",
    tags: ["Meta SDK", "Standalone"],
    Icon: Glasses,
  },
  {
    title: "PlayStation VR2",
    category: "Console VR",
    desc: "PS5-powered. Eye tracking, haptic feedback. Best for gaming and interactive experiences.",
    tags: ["PSVR2 SDK", "PS5"],
    Icon: Gamepad2,
  },
  {
    title: "HTC Vive / Valve Index",
    category: "PC VR — High-End",
    desc: "Room-scale tracking, high refresh rate. Best for enterprise simulation and photorealistic experiences.",
    tags: ["SteamVR", "PC VR"],
    Icon: Monitor,
  },
  {
    title: "HoloLens 2",
    category: "Mixed Reality — Enterprise",
    desc: "Holographic AR/VR for manufacturing, surgery, field service. Hands-free, voice-controlled.",
    tags: ["MRTK", "Enterprise"],
    Icon: Headset,
  },
  {
    title: "Apple Vision Pro",
    category: "Spatial Computing",
    desc: "visionOS apps with eye tracking, hand gestures. Premium spatial experiences for enterprise.",
    tags: ["visionOS", "Spatial"],
    Icon: Eye,
  },
  {
    title: "Windows Mixed Reality",
    category: "PC VR — Mid Range",
    desc: "HP Reverb G2 and other WMR headsets. OpenXR standard. Good enterprise price-performance.",
    tags: ["OpenXR", "WMR"],
    Icon: Boxes,
  },
  {
    title: "WebVR / WebXR",
    category: "Browser-Based VR",
    desc: "VR in any browser — no headset required for basic experiences. A-Frame, Three.js, Babylon.js.",
    tags: ["WebXR", "A-Frame"],
    Icon: Globe,
  },
  {
    title: "Cross-Platform VR",
    category: "All Headsets — One Build",
    desc: "Unity XR + OpenXR standard. Deploy to Meta Quest, SteamVR, and PSVR2 from single codebase.",
    tags: ["Unity XR", "OpenXR"],
    Icon: Layers,
  },
];

const cardClass =
  "rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]";

const VrDevicesPlatformsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="VR" secondWord="PLATFORMS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">VR Apps for </span>
              <span className="text-[#F74B1C]">Every Headset &amp; Platform</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              We develop VR experiences for all major headsets — from Meta Quest standalone to
              PC-powered HTC Vive and PlayStation VR2. One studio, all platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {HEADSETS.map((headset) => (
            <div key={headset.title} className="col-span-12 sm:col-span-6 lg:col-span-3 min-w-0">
              <div className={`${cardClass} p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]`}>
                <div className="flex flex-col h-full min-w-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 text-white shrink-0">
                      <headset.Icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#C380FE]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                    {headset.title}
                  </h3>
                  <p className="font-britanicaRegular text-[12px] sm:text-[13px] text-[#C380FE] text-left pb-2 sm:pb-3 leading-snug">
                    {headset.category}
                  </p>
                  <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white text-left leading-relaxed flex-1">
                    {headset.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 sm:pt-5">
                    {headset.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-britanicaRegular ${TAG_CLASS}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VrDevicesPlatformsSection;
