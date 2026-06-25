import { Check, Clock } from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const HIRING_STEPS = [
  {
    step: "01",
    days: "Day 1–2",
    title: "Requirements Call",
    description:
      "We understand your tech stack, team structure, role requirements, seniority level, and time zone preference. 30-minute discovery call.",
    guarantee: "Same day response guaranteed",
  },
  {
    step: "02",
    days: "Day 3–5",
    title: "Candidate Shortlist (3–5 Profiles)",
    description:
      "We send 3–5 pre-screened developer profiles — resume, portfolio, tech assessment results, and English communication sample.",
    guarantee: "3 profiles within 48 hours SLA",
  },
  {
    step: "03",
    days: "Day 6–8",
    title: "Technical Interview",
    description:
      "You interview the candidates directly — technical and cultural fit assessment. We coordinate scheduling and provide interview support.",
    guarantee: "You choose, we don't push",
  },
  {
    step: "04",
    days: "Day 9–10",
    title: "Contract & NDA Signing",
    description:
      "MSA, NDA, and IP protection agreements signed. Rate confirmed, engagement model finalized, and start date set.",
    guarantee: "NDA always included — no extra cost",
  },
  {
    step: "05",
    days: "Day 10–14",
    title: "Developer Onboarded & Working",
    description:
      "Developer integrated into your tools — Slack, Jira, GitHub, or whatever you use. First sprint started. Daily standups in your time zone.",
    guarantee: "Working in your time zone from day one",
  },
];

const StaffAugmentationHiringTimelineSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[60%] sm:w-[45%] absolute -top-[10%] right-0 opacity-40 sm:opacity-60 pointer-events-none"
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
              <CapsuleLabel firstWord="HIRING" secondWord="TIMELINE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">From Request to Working Developer — </span>
              <span className="text-[#F74B1C]">In 14 Days</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] leading-relaxed">
              &ldquo;How fast can I hire a developer?&rdquo; is one of the top searches from buyers.
              Here is our exact timeline — transparent, predictable, and built for US time zones.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto pt-8 sm:pt-10 md:pt-[52px]">
          <div className="relative">
            <div
              className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-px hidden sm:block"
              aria-hidden
            />
            <div className="flex flex-col gap-4 sm:gap-5">
              {HIRING_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-6 md:p-7"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="shrink-0 relative z-10">
                      <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#C380FE] bg-[#7724C1]/40 font-britanicaBlack text-[13px] sm:text-[15px] text-[#C380FE]">
                        {step.step}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-britanicaBlack text-[17px] sm:text-[20px] md:text-[22px] text-white leading-snug pb-2 sm:pb-3">
                        {step.title}
                      </h3>
                      <p className="font-britanicaRegular text-[14px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-4 sm:pt-5">
                        <div className="flex items-center gap-2 min-w-0">
                          <Clock className="w-4 h-4 shrink-0 text-[#C380FE]" aria-hidden />
                          <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#C380FE]">
                            <span className="text-white/60">Timeline: </span>
                            {step.days}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <Check className="w-4 h-4 shrink-0 text-[#66BB6A]" aria-hidden />
                          <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#66BB6A]">
                            <span className="text-white/60">Guarantee: </span>
                            {step.guarantee}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationHiringTimelineSection;
