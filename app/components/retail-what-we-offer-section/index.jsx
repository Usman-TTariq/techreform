"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CARDS = [
  {
    title: "Retail App Strategy & Consultation",
    desc: "Not sure which type of retail app will deliver the strongest ROI? Our retail app consultants help you build the right mobile strategy before a single line of code is written. We analyze your target customers, competitive landscape, existing tech stack, and growth objectives to define the right app type, feature set, and platform approach, so your retail app development budget is focused exactly where it has the greatest impact.",
  },
  {
    title: "Custom Retail Mobile App Development",
    desc: "We design and build custom retail apps to your exact specifications. Whether you need a loyalty and rewards platform, a full-featured eCommerce shopping app, a retail audit tool for field teams, or an omnichannel retail app that bridges in-store and online, we build it properly scalable, performant, and aligned with how modern consumers shop.",
  },
  {
    title: "Native Retail App Development",
    desc: "For retailers who need platform-specific performance and full access to device hardware, our native retail app development service delivers dedicated iOS and Android apps built with Swift, Kotlin, and platform-native tooling. The result is a retail shopping app that feels completely at home on every device.",
  },
  {
    title: "Hybrid & Cross-Platform Retail App Development",
    desc: "Want to reach iOS and Android customers without maintaining two separate codebases? Our hybrid retail app development service uses React Native and Flutter to build a single app that runs seamlessly across both platforms, cutting development time and cost without sacrificing the quality of the customer experience.",
  },
  {
    title: "Progressive Web App Development for Retail",
    desc: "Looking for app-like retail shopping functionality accessible directly from a mobile browser? Our retail progressive web app development service delivers fast, installable, and offline-capable web experiences that remove the friction of app store downloads, entirely broadening your reach to every smartphone user.",
  },
  {
    title: "Retail App UI/UX Design",
    desc: "First impressions determine whether customers stay or bounce. Our retail app designers create intuitive, visually compelling shopping app interfaces built around proven retail UX principles, clear product discovery, frictionless checkout flows, and loyalty interactions that feel rewarding rather than mechanical. Every design is wireframed, prototyped, and approved by you before development begins.",
  },
];

const RetailWhatWeOfferSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
            </div>
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">End-to-End Retail Mobile App Development, </span>
              <span className="text-[#F74B1C]">From Strategy to Launch</span>
            </div>
            {/* <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
              We build retail experiences that are fast, reliable, and easy to operate. Our team focuses on conversion, in-store pickup flows, and integrations so
              your digital channels grow with your business.
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
          {CARDS.map((card, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                <div className="flex flex-col justify-between h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <Image
                      className="w-12 h-12 sm:w-[70px] sm:h-[70px] max-sm:mx-auto"
                      src="/images/retail_card_icon.webp"
                      alt={card.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words max-sm:text-center">
                    {card.title}
                  </div>
                  <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed max-sm:text-center">
                    {card.desc}
                  </div>
                  <div className="pt-4 sm:pt-[30px] flex justify-start max-sm:justify-center">
                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default RetailWhatWeOfferSection;
