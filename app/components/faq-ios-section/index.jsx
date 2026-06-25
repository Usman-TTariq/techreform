"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import IosDevelopmentCostTable from "./ios-development-cost-table";

const PHASES = [
  "Research",
  "Strategy",
  "Sketching and Prototyping",
  "Prototype Testing",
  "Design",
  "Development",
  "App Testing",
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does iOS App Development Cost in 2026?",
    answer: (
      <>
        <p className="pb-3">
          Transparent cost ranges by app complexity — from simple Swift + Firebase apps to
          enterprise iOS with AWS backend. No vague estimates; plan your budget before the
          discovery call.
        </p>
        <IosDevelopmentCostTable />
      </>
    ),
  },
  {
    id: 2,
    question: "How does iOS Application Development work?",
    answer: (
      <>
        Our iOS App Development follows a systematic, iterative process. This way, we perform quality control on the products we build. There are seven phases in total:
        <ul className="list-none mt-3 space-y-2 min-w-0">
          {PHASES.map((phase) => (
            <li key={phase} className="flex gap-2 min-w-0">
              <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
              <span className="min-w-0 break-words">{phase}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: "Why Should I Invest in iOS App Development?",
    answer: (
      <>
        Firstly, because Apple has a loyal user base that grows by the second, choosing iOS will simply guarantee you clients who most probably would use your service. Secondly, iPhones and iPads offer an intuitive user experience you can capitalize on.
      </>
    ),
  },
  {
    id: 4,
    question: "How much time does it take to develop an iOS App?",
    answer: (
      <>
        Similar to cost estimation, the time of iOS development can vary due to many factors. It can take days, sometimes even weeks or months, depending on the size, features, and coding requirements of the app.
      </>
    ),
  },
  {
    id: 5,
    question: "Can I monetize my iOS App?",
    answer: (
      <>
        App Monetization is the eventual goal of many business owners. If you plan to, make sure to finalize your monetization strategy before development starts. If you want to build an App with the aim of monetizing it, connect with our team!
      </>
    ),
  },
];

const FaqIosSection = () => {
  const [openId, setOpenId] = useState(3);
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4 max-sm:text-center">
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
