"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const HireFaqSection = ({ titleWhite, titleAccent, subtitle, items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4 max-sm:text-center">
              <span className="text-white">{titleWhite} </span>
              <span className="text-[#F74B1C]">{titleAccent}</span>
            </h2>
            <p className="font-britanicaRegular text-[14px] sm:text-[15px] text-white/80 pt-3 max-sm:text-center">
              {subtitle}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full cursor-pointer flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-5 text-left min-w-0"
                    >
                      <span className="font-britanicaExtraBold text-[15px] sm:text-[17px] text-white pr-2 sm:pr-4 min-w-0 break-words text-left">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed pb-4 sm:pb-5 px-4 sm:px-5 pt-0 border-t border-white/10 break-words min-w-0">
                          {typeof item.answer === "string" ? (
                            <span className="whitespace-pre-line">{item.answer}</span>
                          ) : (
                            item.answer
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireFaqSection;
