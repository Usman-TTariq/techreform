"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does restaurant app development cost in 2026?",
    answer:
      "Restaurant app development typically costs between $3,000 and $80,000+, depending on complexity. Simple ordering apps start around $3K–$8K, while AI-powered, multi-location apps can run $40K–$80K+.",
  },
  {
    id: 2,
    question: "How fast can you build a restaurant app?",
    answer:
      "Most restaurant ordering apps take 6 to 12 weeks to build, depending on complexity. Basic ordering apps launch faster, while apps with POS, delivery, and loyalty features take longer.",
  },
  {
    id: 3,
    question: "Can I add new features after my restaurant app is live?",
    answer:
      "Yes, you can add features like reservations, loyalty programs, or multi-location support after launch. Restaurant apps are built to scale as your business grows.",
  },
  {
    id: 4,
    question: "Does a custom restaurant app work with my existing POS or delivery system?",
    answer:
      "Yes, custom restaurant apps can usually integrate with existing POS systems, payment gateways, and delivery partners. Compatibility depends on the specific systems already in use.",
  },
  {
    id: 5,
    question: "Can you build an app for both delivery and dine-in service?",
    answer:
      "Yes, we build restaurant apps that support online ordering, delivery tracking, and dine-in features like table reservations and QR-code menus, all within a single platform tailored to how your business operates.",
  },
  {
    id: 6,
    question: "Will my restaurant app work for multiple locations?",
    answer:
      "Absolutely. We build multi-location restaurant apps with centralized menu management, location-based ordering, and individual store dashboards, so you can manage one outlet or an entire chain from one system.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the app is launched?",
    answer:
      "Yes, our restaurant app development services include post-launch support, covering bug fixes, performance monitoring, and feature updates, so your app keeps running smoothly as your business grows.",
  },
  {
    id: 8,
    question: "Can the app handle high order volume during peak hours?",
    answer:
      "Yes, we build restaurant apps on scalable architecture designed to handle order spikes during busy hours, so your system stays fast and reliable, even during peak rush periods.",
  },
  {
    id: 9,
    question: "Will I own the app and its source code?",
    answer:
      "Yes, once development is complete, you get full ownership of your restaurant app, including the source code, so you're never locked into our agency for future changes or hosting.",
  },
  {
    id: 10,
    question: "Do you build apps for cloud kitchens without a physical dine-in space?",
    answer:
      "Yes, we specialize in cloud kitchen app development too, building delivery-first apps with streamlined ordering, real-time order tracking, and integration with your kitchen workflow, no dine-in features needed.",
  },
];

const FaqRestaurantSection = () => {
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

export default FaqRestaurantSection;
