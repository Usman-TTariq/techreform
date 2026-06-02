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
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const FEATURES = [
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

const HipaaCompliantSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section id="hipaa-compliant" className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="SECURITY" secondWord="&" thirdWord="COMPLIANCE" />
            </div>
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">HIPAA-Compliant </span>
              <span className="text-[#F74B1C]">Mobile App Development</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px]">
              Healthcare apps require specialized security standards. Tech Reforms builds HIPAA-compliant mobile applications with full audit support and BAA agreements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 pt-8 sm:pt-12 md:pt-[52px]">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="rounded-xl h-full border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10">
                <div className="pb-4 sm:pb-5">
                  <feature.Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#C380FE]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h3 className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] text-white text-left pb-2">
                  {feature.title}
                </h3>
                <p className="font-britanicaRegular text-[13px] sm:text-[14px] md:text-[16px] text-white/85 text-left leading-relaxed">
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
