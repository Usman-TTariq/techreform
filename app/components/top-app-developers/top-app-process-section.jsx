import CapsuleLabel from "../common/capsule-label";
import { TOP_APP_PROCESS_STEPS } from "@/app/constants/top-app-developers-content";

const TopAppProcessSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="OUR" secondWord="PROCESS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">From First Call to First Sprint — </span>
              <span className="text-[#F74B1C]">Fast</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              We&apos;ve streamlined our onboarding process so your project can start in as little as 48 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {TOP_APP_PROCESS_STEPS.map((step, index) => (
            <div key={step.title} className="col-span-12 sm:col-span-6 lg:col-span-3 min-w-0">
              <div className="relative h-full rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-7">
                {index < TOP_APP_PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-[2px] bg-[#C380FE]/60 z-10" />
                )}
                <span className="font-britanicaRegular text-[32px] sm:text-[40px] text-white/20 leading-none">
                  {step.step}
                </span>
                <h3 className="font-britanicaBlack text-[18px] sm:text-[20px] md:text-[22px] text-white pt-3 pb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/85 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAppProcessSection;
