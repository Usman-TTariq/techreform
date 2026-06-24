import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Zap,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import { TOP_APP_INDUSTRIES } from "@/app/constants/top-app-developers-content";

const INDUSTRY_ICONS = {
  "Fintech & Banking": Landmark,
  "E-commerce": ShoppingBag,
  Healthcare: HeartPulse,
  "Real Estate & Logistics": Truck,
  EdTech: GraduationCap,
  Media: Building2,
  "On-Demand": Zap,
  "Food & Restaurant": UtensilsCrossed,
};

const cardClass =
  "rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)]";

const TopAppIndustriesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="INDUSTRIES" secondWord="WE SERVE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Domain Expertise Across </span>
              <span className="text-[#F74B1C]">Every Major Vertical</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {TOP_APP_INDUSTRIES.map((industry) => {
            const Icon = INDUSTRY_ICONS[industry] ?? Building2;
            return (
              <div key={industry} className="col-span-12 sm:col-span-6 lg:col-span-3 min-w-0">
                <div className={`${cardClass} p-5 sm:p-6 flex items-center gap-4 min-h-[88px]`}>
                  <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C380FE]" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-britanicaBlack text-[15px] sm:text-[17px] md:text-[18px] text-white leading-snug">
                    {industry}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopAppIndustriesSection;
