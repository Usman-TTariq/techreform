"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does it cost to develop a retail mobile app?",
    answer: (
      <>
        Retail app development costs vary based on platform, feature complexity, and integration requirements. A focused retail app MVP typically starts from
        $25,000–$40,000. A full-scale omnichannel retail platform with AI features, third-party integrations, and custom backend infrastructure can range from
        $80,000 upward. We provide a detailed, itemized estimate after a scoping session, never a vague ballpark.
      </>
    ),
  },
  {
    id: 2,
    question: "How long does retail app development take?",
    answer: (
      <>
        A targeted retail app MVP can be delivered in 10–14 weeks. A full-featured omnichannel retail app with multiple integrations typically takes 5–8 months.
        Timelines are set at the scoping stage based on actual requirements, not optimistic guesses.
      </>
    ),
  },
  {
    id: 3,
    question: "Can you integrate my retail app with our existing POS and ERP systems?",
    answer: (
      <>
        Yes. Third-party integration is a standard part of our retail app development process. We connect retail apps to POS systems, ERP platforms, warehouse
        management software, CRMs, marketing automation tools, and payment gateways. If your backend has an API or a documented integration layer, we can work
        with it.
      </>
    ),
  },
  {
    id: 4,
    question: "Which is better for a retail app: native or cross-platform development?",
    answer: (
      <>
        It depends on your priorities. Native retail apps offer the highest level of platform-specific performance. Cross-platform retail apps using React Native or
        Flutter offer faster development timelines and lower maintenance costs. We assess your specific situation and recommend the right approach without a bias
        toward the more expensive option.
      </>
    ),
  },
  {
    id: 5,
    question: "Do you build retail apps with AI or AR features?",
    answer: (
      <>
        Yes. AI-powered product recommendations, virtual try-on, image recognition, personalized search, and augmented reality shopping features are all capabilities
        we have delivered in production retail mobile apps. We advise on which features make commercial sense for your specific customer base and budget.
      </>
    ),
  },
  {
    id: 6,
    question: "What happens to our retail app after it launches?",
    answer: (
      <>
        We remain actively involved post-launch. Our post-launch support covers performance monitoring, rapid bug resolution, App Store and Google Play update
        management, new feature development, and ongoing third-party integrations. Many of our retail app clients work with us on a long-term retainer as their apps
        and businesses grow.
      </>
    ),
  },
  {
    id: 7,
    question: "Can you build a retail app for a specific niche or vertical?",
    answer: (
      <>
        Absolutely. We have delivered retail apps for fashion, grocery, home goods, health and beauty, specialty retail, multi-location franchises, and B2B trade
        platforms. Niche retail often benefits most from a custom-built retail app; generic solutions rarely address the specific catalog, fulfillment, or loyalty
        dynamics of specialist retail categories.
      </>
    ),
  },
];

const FaqRetailSection = () => {
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

export default FaqRetailSection;
