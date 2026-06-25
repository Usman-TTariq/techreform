import {
  Building2,
  Factory,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Home,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const TAG_CLASS =
  "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50";

const VR_USE_CASES = [
  {
    number: "01",
    title: "VR Corporate Training",
    desc: "Safe, repeatable training scenarios — fire drills, compliance training, soft skills, onboarding. 60% faster learning vs traditional methods.",
    tags: ["Meta Quest", "LMS Ready"],
    Icon: GraduationCap,
  },
  {
    number: "02",
    title: "VR Medical Simulation",
    desc: "Surgical training, anatomy exploration, patient education, and PTSD therapy. Risk-free, repeatable medical scenarios.",
    tags: ["PC VR", "HoloLens"],
    Icon: HeartPulse,
  },
  {
    number: "03",
    title: "VR Real Estate",
    desc: "Virtual property walkthroughs, interior customization, and remote buyer tours before construction is complete.",
    tags: ["Meta Quest", "WebVR"],
    Icon: Home,
  },
  {
    number: "04",
    title: "VR Product Showroom",
    desc: "3D product demos, virtual test drives, and interactive showrooms — no physical space required. Automotive, furniture, heavy equipment.",
    tags: ["WebVR", "Meta Quest"],
    Icon: Building2,
  },
  {
    number: "05",
    title: "VR Gaming",
    desc: "Immersive game environments, multiplayer VR experiences, and interactive entertainment for PSVR2, SteamVR, and Meta Quest.",
    tags: ["PSVR2", "SteamVR"],
    Icon: Gamepad2,
  },
  {
    number: "06",
    title: "VR Manufacturing",
    desc: "Assembly guidance, equipment maintenance training, factory floor simulation, and safety protocol training at scale.",
    tags: ["HoloLens", "PC VR"],
    Icon: Factory,
  },
];

const cardClass =
  "rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]";

const VrUseCasesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="VR" secondWord="USE CASES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">What Can You </span>
              <span className="text-[#F74B1C]">Build With VR?</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              VR training apps, real estate walkthroughs, surgical simulations, and product showrooms
              — each is a distinct use case with its own platform, timeline, and ROI. We build all of them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {VR_USE_CASES.map((card) => (
            <div key={card.title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className={`${cardClass} p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]`}>
                <div className="flex flex-col h-full min-h-0">
                  <div className="flex items-start justify-between gap-3 pb-3 sm:pb-[20px]">
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 text-white shrink-0">
                      <card.Icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#C380FE]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <span className="font-britanicaRegular font-semibold text-[32px] sm:text-[40px] md:text-[44px] text-white/20 leading-none">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                    {card.title}
                  </h3>
                  <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white text-left leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 sm:pt-5">
                    {card.tags.map((tag) => (
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

export default VrUseCasesSection;
