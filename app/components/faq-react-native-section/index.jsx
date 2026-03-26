"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const INDUSTRIES = [
  "Fintech and digital banking",
  "SaaS and enterprise software",
  "Healthcare and telehealth",
  "AI-powered mobile products",
  "E-commerce and retail",
  "Logistics and supply chain",
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How quickly can you start on my React Native project?",
    answer: (
      <>
        We can typically have a React Native team onboarded and up to speed
        within one to two weeks. We like to spend that time properly reviewing
        your brief, asking questions, and making sure we are aligned before
        development begins.
      </>
    ),
  },
  {
    id: 2,
    question:
      "Can I scale the team up or down as my business requirements change over time?",
    answer: (
      <>
        Yes, and that flexibility is important to us. Whether you need a single
        React Native developer to support an existing team or a full squad to
        take ownership of the product, we can structure the engagement
        accordingly.
      </>
    ),
  },
  {
    id: 3,
    question: "How does React Native compare to fully native development?",
    answer: (
      <>
        For the vast majority of mobile apps, React Native delivers native-like
        performance and a user experience that is indistinguishable from fully
        native. Where platform-specific capability is genuinely required, we
        integrate native modules directly so you are never limited by the
        framework.
      </>
    ),
  },
  {
    id: 4,
    question: "Do you offer React Native consulting only, without full development?",
    answer: (
      <>
        We do. Some clients come to us for architecture reviews, code reviews,
        or to help scope a project before they build it. Our React Native
        consulting service is available as a standalone engagement.
      </>
    ),
  },
  {
    id: 5,
    question: "What happens after the app launches?",
    answer: (
      <>
        We offer structured post-launch support covering performance monitoring,
        bug resolution, third-party integrations, and ongoing feature
        development. The level of involvement is entirely up to you, and we are
        happy to scale back as your own team grows in confidence with the
        codebase.
      </>
    ),
  },
  {
    id: 6,
    question: "What industries do you serve?",
    answer: (
      <>
        We have built React Native apps for businesses across a broad range of
        sectors, including:
        <ul className="list-none mt-3 space-y-2 min-w-0">
          {INDUSTRIES.map((item) => (
            <li key={item} className="flex gap-2 min-w-0">
              <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">
                •
              </span>
              <span className="min-w-0 break-words">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const FaqReactNativeSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4 max-sm:text-center"><span className="text-white">Frequently Asked </span><br /><span className="text-[#F74B1C]">Questions</span></h2>
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

export default FaqReactNativeSection;
