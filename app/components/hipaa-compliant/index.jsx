"use client";

import { useState } from "react";
import {
  Lock,
  ShieldCheck,
  ClipboardList,
  FileCheck,
  TimerOff,
  GlobeLock,
} from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import HireExpertPopup from "../hire-expert-popup";

const DEFAULT_HEADLINE_PREFIX = "HIPAA-Compliant ";
const DEFAULT_HEADLINE_ACCENT = "Mobile App Development";
const DEFAULT_SUPPORTING_COPY =
  "Healthcare apps require specialized security standards. Tech Reforms builds HIPAA-compliant mobile applications with full audit support and BAA agreements.";

const DEFAULT_FEATURES = [
  {
    Icon: Lock,
    title: "AES-256 Encryption",
    description: "Data encrypted at rest and in transit",
  },
  {
    Icon: ShieldCheck,
    title: "Role-Based Access",
    description: "RBAC + MFA for all user levels",
  },
  {
    Icon: ClipboardList,
    title: "Audit Logs",
    description: "Full activity logs with timestamps",
  },
  {
    Icon: FileCheck,
    title: "BAA Support",
    description: "Business Associate Agreement included",
  },
  {
    Icon: TimerOff,
    title: "Auto Session Timeout",
    description: "PHI protection via auto-logout",
  },
  {
    Icon: GlobeLock,
    title: "TLS 1.3 APIs",
    description: "Secure transmission on all endpoints",
  },
];

const FEATURE_ICONS = [Lock, ShieldCheck, ClipboardList, FileCheck, TimerOff, GlobeLock];

const HipaaCompliantSection = ({
  headlinePrefix,
  headlineAccent,
  stackedHeadline = false,
  supportingCopy,
  features,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const resolvedHeadlinePrefix = headlinePrefix ?? DEFAULT_HEADLINE_PREFIX;
  const resolvedHeadlineAccent = headlineAccent ?? DEFAULT_HEADLINE_ACCENT;
  const resolvedSupportingCopy = supportingCopy ?? DEFAULT_SUPPORTING_COPY;
  const useStackedHeadline = stackedHeadline || (headlinePrefix != null && headlineAccent != null);
  const resolvedFeatures = (features ?? DEFAULT_FEATURES).map((feature, index) => ({
    ...feature,
    Icon: feature.Icon ?? FEATURE_ICONS[index] ?? Lock,
  }));

  return (
    <section id="hipaa-compliant" className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="SECURITY" secondWord="&" thirdWord="COMPLIANCE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-[1.2] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px] xl:leading-[1.2] font-black break-words max-w-5xl mx-auto px-1">
              {useStackedHeadline ? (
                <>
                  <span className="text-white block">{resolvedHeadlinePrefix.trim()}</span>
                  <span className="text-[#F74B1C] block mt-1">{resolvedHeadlineAccent.trim()}</span>
                </>
              ) : (
                <>
                  <span className="text-white">{resolvedHeadlinePrefix}</span>
                  <span className="text-[#F74B1C]">{resolvedHeadlineAccent}</span>
                </>
              )}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
            <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px] leading-relaxed">
              {resolvedSupportingCopy}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 pt-8 sm:pt-12 md:pt-[52px] items-stretch">
          {resolvedFeatures.map((feature) => (
            <div key={feature.title} className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
              <div className="flex h-full w-full flex-col rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10">
                <div className="pb-4 sm:pb-5">
                  <feature.Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#C380FE]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h3 className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] text-white text-left pb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-britanicaRegular flex-1 text-[13px] sm:text-[14px] md:text-[16px] text-white/85 text-left leading-relaxed">
                  {feature.description}
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

export default HipaaCompliantSection;
