"use client";

import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const TRUST_ITEMS = [
  "48-hour developer match",
  "2-week trial available",
  "NDA on day one",
  "Unity, Unreal & mobile specialists",
];

const HireGameCtaSection = () => {
  return (
    <section className="container px-4 sm:px-4 pb-12 sm:pb-16 md:pb-[80px]">
      <div className="rounded-2xl border border-[#7724C1]/40 bg-[linear-gradient(135deg,_#110C2A_0%,_#1C0E38_84%)] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 text-center shadow-[0_0_30px_rgba(195,128,254,0.12)] relative overflow-hidden">
        <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[50px] font-black break-words relative z-10">
          <span className="text-white">Hire a Game Developer </span>
          <span className="text-[#F74B1C]">Who&apos;s Actually Shipped Games</span>
        </h2>
        <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[18px] text-white/85 pt-4 max-w-xl mx-auto leading-relaxed relative z-10">
          Tell us your engine, genre, and timeline — we&apos;ll match you with a pre-vetted game
          developer within 48 hours. No agency overhead, no surprise costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 relative z-10">
          <Button text="Hire a Game Developer" icon={false} onClick={goToContact} />
          <button
            type="button"
            onClick={goToContact}
            className="inline-flex items-center justify-center rounded-full border-2 border-[#444444] px-6 py-3 font-britanicaExtraBold text-[14px] sm:text-[15px] text-white hover:border-[#C380FE] transition-colors"
          >
            Get a Custom Quote
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8 relative z-10">
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 font-britanicaRegular text-[13px] text-white/45"
            >
              <span className="text-[#66BB6A] font-britanicaExtraBold">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGameCtaSection;
