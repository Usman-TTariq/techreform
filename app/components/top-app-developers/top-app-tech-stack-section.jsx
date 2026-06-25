import CapsuleLabel from "../common/capsule-label";
import { TOP_APP_TECH_CATEGORIES } from "@/app/constants/top-app-developers-content";

const TAG_CLASS =
  "inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50";

const TopAppTechStackSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="rounded-[30px] sm:rounded-[50px] border border-[#C380FE]/40 bg-black overflow-hidden">
          <div className="grid grid-cols-12 px-5 sm:px-10 py-10 sm:py-14 gap-6">
            <div className="col-span-12 lg:col-span-4 min-w-0">
              <CapsuleLabel firstWord="TECH" secondWord="STACK" />
              <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[44px] font-black pt-4 sm:pt-6 break-words">
                <span className="text-[#F74B1C]">The Tech Stack </span>
                <span className="text-white">Behind 350+ Shipped Apps</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8 min-w-0 space-y-6 sm:space-y-8">
              {TOP_APP_TECH_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <h3 className="font-britanicaBlack text-[16px] sm:text-[18px] text-[#C380FE] pb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.tags.map((tag) => (
                      <span key={tag} className={TAG_CLASS}>
                        {tag}
                      </span>
                    ))}
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

export default TopAppTechStackSection;
