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
  "AI-powered cloud products",
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Is cloud development suitable for my project?",
    answer: (
      <>
        For the majority of modern software products, cloud development delivers excellent results at lower cost and faster timelines than traditional
        infrastructure. During our initial consultation, we will give you a straightforward assessment of whether it is the right fit.
      </>
    ),
  },
  {
    id: 2,
    question: "Which cloud platforms do you work with?",
    answer: (
      <>
        We work across all major cloud platforms, including AWS, Google Cloud, and Microsoft Azure. We select the right platform based on your product&apos;s
        scale, performance requirements, and budget, not personal preference.
      </>
    ),
  },
  {
    id: 3,
    question: "Will moving to the cloud affect my product's performance?",
    answer: (
      <>
        In most cases, it improves it. A well-architected cloud development setup increases speed, uptime, and scalability significantly. Performance is never
        sacrificed for the sake of convenience.
      </>
    ),
  },
  {
    id: 4,
    question: "Can you migrate an existing product to the cloud?",
    answer: (
      <>
        Yes. Cloud migration is a core part of what we offer. We assess your existing setup, plan the migration carefully, and execute it with minimal disruption
        to your users or operations.
      </>
    ),
  },
  {
    id: 5,
    question: "Do you offer cloud consulting without full development?",
    answer: (
      <>
        We do. If you need help with cloud architecture decisions, platform selection, or reviewing an existing setup, our consulting service is available as a
        standalone engagement.
      </>
    ),
  },
  {
    id: 6,
    question: "Which industries have you covered?",
    answer: (
      <>
        We have delivered cloud development solutions for clients across a wide range of sectors, including:
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

const FaqCloudSection = () => {
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

export default FaqCloudSection;
