"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import HireExpertPopup from "../hire-expert-popup";

const DEFAULT_HEADLINE_PREFIX = "How We Work — ";
const DEFAULT_HEADLINE_ACCENT = "Choose Your Engagement Model";
const DEFAULT_SUPPORTING_COPY =
  "Pick the partnership style that fits your stage, budget, and roadmap — from fixed-scope MVPs to dedicated teams that scale with you.";

const DEFAULT_MODELS = [
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

const EngagementModelSection = ({
  headlinePrefix,
  headlineAccent,
  headlineSuffix,
  stackedHeadline = false,
  supportingCopy,
  models,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const resolvedHeadlinePrefix = headlinePrefix ?? DEFAULT_HEADLINE_PREFIX;
  const resolvedHeadlineAccent = headlineAccent ?? DEFAULT_HEADLINE_ACCENT;
  const resolvedHeadlineSuffix = headlineSuffix ?? null;
  const resolvedSupportingCopy = supportingCopy ?? DEFAULT_SUPPORTING_COPY;
  const resolvedModels = models ?? DEFAULT_MODELS;
  const useStackedHeadline = stackedHeadline || (headlinePrefix != null && headlineAccent != null);

  return (
    <section id="how-we-work" className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="HOW" secondWord="WE" thirdWord="WORK" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-[1.2] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px] xl:leading-[1.2] font-black break-words max-w-5xl mx-auto px-1">
              {useStackedHeadline ? (
                <>
                  <span className="text-white block">{resolvedHeadlinePrefix.trim()}</span>
                  <span className="text-[#F74B1C] block sm:inline sm:mt-0 mt-1">
                    {resolvedHeadlineAccent.trim()}
                  </span>
                  {resolvedHeadlineSuffix ? (
                    <span className="text-white block sm:inline">{resolvedHeadlineSuffix}</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="text-white">{resolvedHeadlinePrefix}</span>
                  <span className="text-[#F74B1C]">{resolvedHeadlineAccent}</span>
                </>
              )}
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              {resolvedSupportingCopy}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-12 md:pt-[52px] items-stretch">
          {resolvedModels.map((model) => (
            <div key={model.title} className="col-span-12 md:col-span-6 flex">
              <div className="flex h-full w-full flex-col rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10">
                <span className="inline-block w-fit max-w-full rounded-full border border-[#7724C1] bg-[#7824c12c] px-3 py-1.5 text-[11px] sm:text-xs md:text-sm font-britanicaRegular font-bold uppercase tracking-wide text-[#C88BFF] leading-snug">
                  {model.badge}
                </span>
                <h3 className="font-britanicaBlack text-[20px] sm:text-[24px] md:text-[26px] text-white pt-4 sm:pt-5 pb-2 sm:pb-3 leading-tight">
                  {model.href ? (
                    <Link href={model.href} className="hover:text-[#F74B1C] transition-colors">
                      {model.title}
                    </Link>
                  ) : (
                    model.title
                  )}
                </h3>
                <p className="font-britanicaRegular flex-1 text-[14px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed">
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
