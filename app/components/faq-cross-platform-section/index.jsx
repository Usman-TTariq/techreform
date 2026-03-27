"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const INDUSTRIES = [
  "Fintech and financial services",
  "SaaS and enterprise tools",
  "Healthcare and patient-facing applications",
  "E-commerce and retail",
  "On-demand services and logistics",
  "AI-powered mobile products",
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Is cross-platform development suitable for my project?",
    answer: (
      <>
        For the majority of mobile and multi-platform products, cross-platform development delivers excellent results at a lower cost and faster timeline than
        building separately for each platform. During our initial consultation, we will give you a straightforward assessment of whether it is the right fit.
      </>
    ),
  },
  {
    id: 2,
    question: "How do you handle platform differences in the design?",
    answer: (
      <>
        We follow the UI/UX guidelines for each platform individually. The goal is app consistency in terms of quality and behavior, not a one-size-fits-all design
        that ignores how each platform works. Users on iOS and Android should feel at home in the app regardless of which version they are using.
      </>
    ),
  },
  {
    id: 3,
    question: "Will the app perform as well as a fully native build?",
    answer: (
      <>
        In most cases, yes. Modern cross-platform frameworks produce apps with a native feel and performance that is practically indistinguishable from fully
        native builds. Where genuine platform-specific capability is required, we handle it; performance is never sacrificed for the sake of convenience.
      </>
    ),
  },
  {
    id: 4,
    question: "Can I release on iOS and Android at the same time?",
    answer: (
      <>
        Yes. A simultaneous release across all platforms is one of the core advantages of cross-platform development. We manage the submission process for both
        the App Store and Google Play, so your users everywhere get access at the same time.
      </>
    ),
  },
  {
    id: 5,
    question: "Do you offer cross-platform consulting without full development?",
    answer: (
      <>
        We do. If you need help with architecture decisions, platform selection, or reviewing an existing codebase, our cross-platform consulting service is
        available as a standalone engagement.
      </>
    ),
  },
  {
    id: 6,
    question: "Which industries do you work with?",
    answer: (
      <>
        We have delivered cross-platform apps for clients across a wide range of sectors, including:
        <ul className="list-none mt-3 space-y-2 min-w-0">
          {INDUSTRIES.map((item) => (
            <li key={item} className="flex gap-2 min-w-0">
              <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
              <span className="min-w-0 break-words">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const FaqCrossPlatformSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
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

export default FaqCrossPlatformSection;
