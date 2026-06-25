import { ClipboardList, Rocket, Target, UserCheck } from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const STEPS = [
  {
    step: "STEP 01",
    title: "Share Requirements",
    desc: "Tell us your genre, engine preference, target platform, and timeline. 30-minute call or async form — your choice.",
    Icon: ClipboardList,
  },
  {
    step: "STEP 02",
    title: "Developer Matching",
    desc: "We shortlist 2–3 game developers matched to your engine, genre, and experience level. Review their shipped game portfolio.",
    Icon: Target,
  },
  {
    step: "STEP 03",
    title: "Technical Screening",
    desc: "Optional gameplay systems interview or live coding session. We test for real game dev skills — not just Unity on a CV.",
    Icon: UserCheck,
  },
  {
    step: "STEP 04",
    title: "Start Building",
    desc: "Developer onboards within 48 hours. First playable prototype delivered at end of sprint one.",
    Icon: Rocket,
  },
];

const HireGameOnboardingSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/Group%202147225255.png"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="HOW" secondWord="IT WORKS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">From Idea to First Build in </span>
              <span className="text-[#F74B1C]">48 Hours</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              No lengthy procurement. No screening 50 freelancers. We match you with the right game
              developer profile and start the sprint fast.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] max-w-5xl mx-auto">
          {STEPS.map(({ step, title, desc, Icon }) => (
            <div key={step} className="col-span-12 sm:col-span-6 lg:col-span-3 flex">
              <article className="group flex h-full w-full flex-col rounded-2xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-6 text-center transition-all hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]">
                <p className="font-britanicaExtraBold text-[11px] tracking-[0.12em] text-[#C380FE] pb-3">
                  {step}
                </p>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#444444] bg-[#12141F] group-hover:border-[#C380FE]/50 group-hover:bg-[#7724C1]/20 transition-colors">
                  <Icon className="h-6 w-6 text-[#C380FE]" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-britanicaBlack text-[15px] sm:text-[16px] text-white pt-4 pb-2 group-hover:text-[#F74B1C] transition-colors leading-snug">
                  {title}
                </h3>
                <p className="font-britanicaRegular text-[13px] text-white/85 leading-relaxed flex-1">
                  {desc}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGameOnboardingSection;
