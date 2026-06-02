"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const MODELS = [
  {
    badge: "For startups & MVPs",
    title: "Fixed Price",
    description:
      "Define your scope upfront and lock in the cost. Milestone-based payments. Best for projects with clear requirements.",
    href: "/mvp",
  },
  {
    badge: "For evolving products",
    title: "Time & Materials",
    description:
      "Pay per sprint with flexible scope. Best for enterprise projects with changing requirements.",
  },
  {
    badge: "For long-term growth",
    title: "Dedicated Team",
    description:
      "Our developers become your team. Monthly retainer with full-time commitment to your product.",
  },
  {
    badge: "For in-house extension",
    title: "Staff Augmentation",
    description:
      "Add Flutter/React Native developers to your existing team without hiring overhead.",
    href: "/staff-augmentation",
  },
];

const EngagementModelSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="HOW" secondWord="WE" thirdWord="WORK" />
            </div>
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">How We Work — </span>
              <span className="text-[#F74B1C]">Choose Your Engagement Model</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto">
              Pick the partnership style that fits your stage, budget, and roadmap — from fixed-scope MVPs to dedicated teams that scale with you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-12 md:pt-[52px]">
          {MODELS.map((model) => (
            <div key={model.title} className="col-span-12 md:col-span-6">
              <div className="h-full rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10">
                <span className="inline-block rounded-full border border-[#7724C1] bg-[#7824c12c] px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular font-bold uppercase text-[#C88BFF]">
                  {model.badge}
                </span>
                <h3 className="font-britanicaBlack text-[22px] sm:text-[26px] md:text-[28px] text-white pt-4 sm:pt-5 pb-2 sm:pb-3">
                  {model.href ? (
                    <Link href={model.href} className="hover:text-[#F74B1C] transition-colors">
                      {model.title}
                    </Link>
                  ) : (
                    model.title
                  )}
                </h3>
                <p className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
};

export default EngagementModelSection;
