import CapsuleLabel from "../common/capsule-label";
import { HIRE_GAME_GENRES } from "@/app/constants/hire-game-content";

const HireGamePlatformsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="GAME" secondWord="GENRES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Every Genre, Every Platform, </span>
              <span className="text-[#F74B1C]">Production-Ready</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Our game developers have shipped across genres — not just &ldquo;any mobile game&rdquo;
              but products built for specific player expectations and monetization models.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px] max-w-5xl mx-auto">
          {HIRE_GAME_GENRES.map(({ icon, name }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center rounded-xl border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] px-3 py-5 sm:py-6 text-center transition-all duration-200 hover:border-[#C380FE] hover:shadow-[0_0_16px_rgba(195,128,254,0.12)]"
            >
              <span className="text-[28px] leading-none pb-2.5" aria-hidden>
                {icon}
              </span>
              <span className="font-britanicaExtraBold text-[12px] sm:text-[13px] text-white/90 group-hover:text-[#F74B1C] transition-colors leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGamePlatformsSection;
