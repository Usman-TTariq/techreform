"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How long does iOS app development usually take?",
    answer: (
      <>
        Timelines depend on app complexity, but most iOS projects take between
        a few weeks to a few months from discovery to launch.
      </>
    ),
  },
  {
    id: 2,
    question: "Do you build apps for both iPhone and iPad?",
    answer: (
      <>
        Yes. We develop optimized experiences for both iPhone and iPad with
        responsive layouts, smooth performance, and Apple-standard UX.
      </>
    ),
  },
  {
    id: 3,
    question: "Can you help with App Store submission?",
    answer: (
      <>
        Absolutely. We handle App Store readiness, compliance checks, submission,
        and release support to make launch smooth and hassle-free.
      </>
    ),
  },
  {
    id: 4,
    question: "Do you provide maintenance after launch?",
    answer: (
      <>
        Yes. We offer post-launch support including bug fixes, performance
        improvements, OS compatibility updates, and new feature rollouts.
      </>
    ),
  },
  {
    id: 5,
    question: "What kinds of iOS apps do you build?",
    answer: (
      <>
        We build iOS applications across multiple business domains, including:
        <ul className="list-none mt-3 space-y-2 min-w-0">
          <li className="flex gap-2 min-w-0">
            <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
            <span className="min-w-0 break-words">Healthcare</span>
          </li>
          <li className="flex gap-2 min-w-0">
            <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
            <span className="min-w-0 break-words">Fintech</span>
          </li>
          <li className="flex gap-2 min-w-0">
            <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
            <span className="min-w-0 break-words">E-commerce</span>
          </li>
          <li className="flex gap-2 min-w-0">
            <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
            <span className="min-w-0 break-words">Education</span>
          </li>
          <li className="flex gap-2 min-w-0">
            <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
            <span className="min-w-0 break-words">Logistics</span>
          </li>
        </ul>
      </>
    ),
  },
];

const FaqIosSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4">
              <span className="text-white">Frequently Asked </span>
              <br />
              <span className="text-[#F74B1C]">Questions</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              {FAQ_ITEMS.map((item) => {
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
                        className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed pb-4 sm:pb-5 px-4 sm:px-5 pt-0 border-t border-white/10 break-words min-w-0">
                          {item.answer}
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

export default FaqIosSection;
