"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CARDS = [
  {
    title: "AI Matchmaking Engines",
    desc: "We build smart matching systems that learn what your users want and connect them faster. Our AI dating app development approach uses machine learning to deliver better matches, not just more swipes, so users actually stick around.",
  },
  {
    title: "Custom Dating App Development",
    desc: "Have a unique idea? We turn it into reality. From niche dating apps to LGBTQ-friendly platforms, our custom dating app development services are built around your audience, your features, and your brand.",
  },
  {
    title: "Tinder & Bumble Style Apps",
    desc: "Want a proven model with your own twist? We specialize in Tinder like app development and Bumble clone app development, complete with swipe matching, profile verification, and smooth onboarding.",
  },
  {
    title: "Real-Time Chat & Video Calling",
    desc: "Keep users engaged long after the match. We add real-time chat, video dating features, and geolocation-based discovery, so your dating app feels alive, personal, and built for real conversations.",
  },
];

const DatingWhatWeOfferSection = () => {
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
              <span className="text-white">Build a Dating App That </span>
              <span className="text-[#F74B1C]">People Actually Use</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
          {CARDS.map((card, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px] group">
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
                  <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] text-white text-left pb-1 sm:pb-[5px] leading-tight break-words max-sm:text-center group-hover:text-[#F74B1C] transition-colors">
                    {card.title}
                  </div>
                  <div className="font-britanicaRegular text-[13px] sm:text-[14px] text-white text-left leading-relaxed max-sm:text-center">
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

export default DatingWhatWeOfferSection;
