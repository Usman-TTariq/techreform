"use client";

import Image from "next/image";
import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CASE_STUDY_BULLETS = [
  "Omnichannel retail launches",
  "Higher conversion on mobile checkout",
  "Faster in-store pickup experiences",
];

const RetailCaseStudiesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-[#F74B1C]">Real Apps. </span>
              <span className="text-white">Real Results. </span>
              <br className="max-sm:hidden" />
              {/* <span className="text-white">Retail Apps Perform in the </span> */}
              <span className="text-[#F74B1C]">Real Retail Businesses. </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pt-10 sm:pt-16 md:pt-[70px]">
          <div className="col-span-12 md:col-span-6">
            <div className="h-full flex items-center justify-center">
              <Image
                className="w-full max-w-[280px] md:max-w-none mx-auto"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772825809/iphone_bdeijn.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <Image
                className="w-full my-auto"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772825859/phones_djllco.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <ul className="list-none font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] space-y-2 sm:space-y-3 min-w-0">
              {CASE_STUDY_BULLETS.map((line) => (
                <li key={line} className="flex gap-2 sm:gap-3 min-w-0">
                  <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                  <span className="min-w-0 break-words">{line}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 sm:pt-[30px] max-sm:flex max-sm:justify-center">
              <Button text="Check The Full Case" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default RetailCaseStudiesSection;
