import CapsuleLabel from "../common/capsule-label";
import HireGameRatesTable from "./hire-game-rates-table";

const HireGameRatesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="TRANSPARENT" secondWord="PRICING" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">What Does It Cost to </span>
              <span className="text-[#F74B1C]">Hire a Game Developer?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Rates vary by engine specialization, seniority, and engagement model. Here&apos;s a clear
              breakdown so you can plan your budget before the first call.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl pt-8 sm:pt-10 md:pt-[52px]">
          <HireGameRatesTable />
        </div>
      </div>
    </section>
  );
};

export default HireGameRatesSection;
