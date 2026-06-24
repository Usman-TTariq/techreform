import {
  Bot,
  Eye,
  Globe,
  Glasses,
  Headset,
  Layers,
  ScanLine,
  Smartphone,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const TAG_CLASS =
  "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50";

const DEVICES = [
  {
    title: "iPhone & iPad",
    desc: "ARKit and LiDAR-powered AR for iOS — face tracking, room scanning, object occlusion, and App Store-ready deployment for iPhone and iPad users.",
    tags: ["ARKit", "LiDAR"],
    Icon: Smartphone,
  },
  {
    title: "Android Devices",
    desc: "ARCore apps reaching 400M+ compatible Android devices — motion tracking, environmental understanding, and Google Play deployment at scale.",
    tags: ["ARCore", "400M+ devices"],
    Icon: Bot,
  },
  {
    title: "HoloLens 2",
    desc: "Enterprise mixed reality with Microsoft MRTK — spatial mapping, hand tracking, and voice commands for industrial training and field service.",
    tags: ["MRTK", "Enterprise"],
    Icon: Headset,
  },
  {
    title: "Apple Vision Pro",
    desc: "Spatial computing on visionOS — immersive AR/VR experiences with eye tracking, hand gestures, and shared spatial anchors for premium use cases.",
    tags: ["visionOS", "Spatial"],
    Icon: Eye,
  },
  {
    title: "Meta Quest",
    desc: "Passthrough AR on Meta Quest headsets — mixed reality experiences for training, collaboration, and consumer applications without a PC tether.",
    tags: ["Meta SDK", "Passthrough"],
    Icon: Glasses,
  },
  {
    title: "Smart Glasses",
    desc: "Hands-free AR for warehouse, logistics, and field workers — RealWear and similar devices with voice control and remote expert assistance.",
    tags: ["RealWear", "Hands-free"],
    Icon: ScanLine,
  },
  {
    title: "Web Browser (WebAR)",
    desc: "Browser-based AR with 8th Wall — no app download required. Ideal for marketing campaigns, product launches, and mass-audience reach via QR codes.",
    tags: ["8th Wall", "No Download"],
    Icon: Globe,
  },
  {
    title: "Cross-Platform",
    desc: "Unity XR builds that run across iOS, Android, HoloLens, and Quest from a single codebase — faster delivery and lower long-term maintenance cost.",
    tags: ["Unity XR", "All Devices"],
    Icon: Layers,
  },
];

const cardClass =
  "rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]";

const ArDevicesPlatformsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="AR" secondWord="DEVICES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">AR Apps for </span>
              <span className="text-[#F74B1C]">Every Device &amp; Platform</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              We develop AR experiences across all major devices — from iPhone and Android to
              HoloLens and Apple Vision Pro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {DEVICES.map((device) => (
            <div key={device.title} className="col-span-12 sm:col-span-6 lg:col-span-3 min-w-0">
              <div className={`${cardClass} p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]`}>
                <div className="flex flex-col h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 text-white shrink-0">
                      <device.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C380FE]" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                  <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                    {device.title}
                  </h3>
                  <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white text-left leading-relaxed flex-1">
                    {device.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 sm:pt-5">
                    {device.tags.map((tag) => (
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

export default ArDevicesPlatformsSection;
