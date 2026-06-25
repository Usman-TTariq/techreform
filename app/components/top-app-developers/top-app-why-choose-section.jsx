"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import {
  TOP_APP_WHY_CHOOSE,
  TOP_APP_TRUST_METRICS,
  TOP_APP_IMPACT_CARDS,
} from "@/app/constants/top-app-developers-content";

const TopAppWhyChooseSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-6 min-w-0">
            <div className="flex justify-start max-sm:justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHY" secondWord="CHOOSE US" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] md:leading-[48px] font-black break-words max-sm:text-center">
              <span className="text-white">Building Scalable Apps with </span>
              <span className="text-[#F74B1C]">Teams You Can Trust</span>
            </h2>
            <ul className="pt-8 sm:pt-10 space-y-5 sm:space-y-6">
              {TOP_APP_WHY_CHOOSE.map((item) => (
                <li key={item.title} className="flex gap-4 min-w-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#C380FE] shrink-0 mt-0.5" strokeWidth={2} />
                  <div className="min-w-0">
                    <h3 className="font-britanicaBlack text-[17px] sm:text-[19px] md:text-[20px] text-white pb-1">
                      {item.title}
                    </h3>
                    <p className="font-britanicaRegular text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-8 max-sm:flex max-sm:justify-center">
              <Button text="Talk to Our Team" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 min-w-0">
            <div className="rounded-2xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-6 sm:p-8 h-full">
              <h3 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white pb-6 sm:pb-8">
                Trust Metrics
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {TOP_APP_TRUST_METRICS.map((metric) => {
                  const pct = metric.display ? 75 : (metric.value / metric.max) * 100;
                  const displayValue = metric.display ?? `${metric.value}${metric.suffix}`;
                  return (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center pb-2">
                        <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/90">
                          {metric.label}
                        </span>
                        <span className="font-britanicaBlack text-[15px] sm:text-[17px] text-[#F74B1C]">
                          {displayValue}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#7724C1_0%,#C380FE_100%)]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-8 sm:pt-10">
                {TOP_APP_IMPACT_CARDS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center"
                  >
                    <div className="font-britanicaBlack text-[22px] sm:text-[26px] text-[#F74B1C] leading-none">
                      {stat.value}
                    </div>
                    <div className="font-britanicaRegular text-[11px] sm:text-[12px] text-white/80 pt-1.5 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
};

export default TopAppWhyChooseSection;
