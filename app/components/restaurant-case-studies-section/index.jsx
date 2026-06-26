"use client";

import Image from "next/image";
import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const RestaurantCaseStudiesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-[#F74B1C]">Our Restaurant Apps </span>
              <span className="text-white">Don&apos;t Just Launch, </span>
              <br className="max-sm:hidden" />
              <span className="text-[#F74B1C]">They Perform</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="PORTFOLIO" secondWord="" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pt-10 sm:pt-16 md:pt-[70px]">
          <div className="col-span-12 md:col-span-6">
            <div className="h-full flex items-center justify-center">
              <Image
                className="w-full max-w-[280px] md:max-w-none mx-auto"
                src="/images/iphone.png"
                alt="iPhone mockup showing restaurant app case study screens"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div>
              <Image
                className="w-full my-auto"
                src="/images/phones.png"
                alt="Multiple smartphone mockups for restaurant app case studies"
                width={1000}
                height={1000}
              />
            </div>
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px] max-sm:text-center leading-relaxed">
              Explore our real-world case studies to see how our restaurant app development solutions have helped
              businesses, from cloud kitchen app development to multi-restaurant app development for growing chains,
              launch faster and serve customers better.
            </div>
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px] max-sm:text-center leading-relaxed">
              From small businesses to multi-outlet brands, our online food ordering app development work has helped
              restaurants cut down on third-party fees and reduce order errors.
            </div>
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

export default RestaurantCaseStudiesSection;
