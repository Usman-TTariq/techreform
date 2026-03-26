"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  { id: 1, question: "Why should I choose Flutter for my app?", answer: <>Flutter lets you build one codebase for Android and iOS, reducing development time while keeping a high-quality user experience.</> },
  { id: 2, question: "Can Flutter apps match native app performance?", answer: <>Yes. With proper architecture and optimization, Flutter apps provide smooth performance and responsive UI comparable to native apps.</> },
  { id: 3, question: "Do you support both Android and iOS releases?", answer: <>Absolutely. We handle development, QA, and deployment workflows for both platforms through a unified Flutter development process.</> },
  { id: 4, question: "Can you migrate my existing app to Flutter?", answer: <>Yes. We can assess your current app, plan migration phases, and move selected modules or complete products to Flutter with minimal disruption.</> },
  {
    id: 5,
    question: "What types of Flutter apps do you build?",
    answer: (
      <>
        We build Flutter products across several domains:
        <ul className="list-none mt-3 space-y-2 min-w-0">
          {["Fintech", "E-commerce", "Healthcare", "EdTech", "Logistics"].map((item) => (
            <li key={item} className="flex gap-2 min-w-0"><span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span><span className="min-w-0 break-words">{item}</span></li>
          ))}
        </ul>
      </>
    ),
  },
];

const FaqFlutterSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4"><span className="text-white">Frequently Asked </span><br /><span className="text-[#F74B1C]">Questions</span></h2>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25">
                    <button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} className="w-full cursor-pointer flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-5 text-left min-w-0">
                      <span className="font-britanicaExtraBold text-[15px] sm:text-[17px] text-white pr-2 sm:pr-4 min-w-0 break-words text-left">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden"><div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed pb-4 sm:pb-5 px-4 sm:px-5 pt-0 border-t border-white/10 break-words min-w-0">{item.answer}</div></div>
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

export default FaqFlutterSection;
