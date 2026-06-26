"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does it cost to develop a dating app?",
    answer:
      "The cost to develop a dating app usually ranges from $8K to $80K+, depending on features like AI matchmaking, video calling, and real-time chat. A simple dating app costs less, while a custom platform with advanced matching algorithms sits on the higher end.",
  },
  {
    id: 2,
    question: "How long does it take to build a dating app?",
    answer:
      "Most dating app development projects take anywhere from 2 to 6 months, depending on complexity. A basic MVP can launch faster, while apps with AI-powered matchmaking and video dating features take a bit longer to build and test properly.",
  },
  {
    id: 3,
    question: "Can you build a dating app for a specific niche?",
    answer:
      "Absolutely. We specialize in niche dating app development, including LGBTQ dating apps, faith-based platforms, and interest-based communities. We tailor the matching algorithm, design, and features to fit your target audience.",
  },
  {
    id: 4,
    question: "Do you offer white label dating app development?",
    answer:
      "Yes, our white label dating app development service lets you launch a fully branded dating platform without building from scratch, saving you time and development costs while still getting a custom look and feel.",
  },
  {
    id: 5,
    question: "Will I own the source code and intellectual property of my dating app?",
    answer:
      "Yes, once your dating app is fully developed and delivered, you own 100% of the source code and IP, giving you complete freedom to manage, update, or scale it however you choose.",
  },
  {
    id: 6,
    question: "Can the app support both web and mobile platforms?",
    answer:
      "Yes, we build dating apps for iOS, Android, and web, so your users can connect and match across whichever platform they prefer, all powered by the same backend and matching engine.",
  },
  {
    id: 7,
    question: "How do you handle fake profiles and user safety?",
    answer:
      "We build in profile verification, photo verification, and reporting tools from day one, helping reduce fake accounts and giving users confidence that they're connecting with real people.",
  },
  {
    id: 8,
    question: "Can I add a subscription or premium membership model?",
    answer:
      "Absolutely. We can integrate a subscription-based model with tiered plans, premium features, or pay-per-match options, giving you flexible ways to monetize your dating app.",
  },
  {
    id: 9,
    question: "Will the matching algorithm improve over time?",
    answer:
      "Yes, our AI-powered matching algorithms use machine learning, so they continuously learn from user behavior and preferences, delivering more relevant matches the more your app is used.",
  },
  {
    id: 10,
    question: "Do you provide post-launch maintenance and updates?",
    answer:
      "Yes, after launch we offer ongoing maintenance, performance monitoring, and feature updates, so your dating app stays secure, bug-free, and ready to scale as your user base grows.",
  },
];

const FaqDatingSection = () => {
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

export default FaqDatingSection;
