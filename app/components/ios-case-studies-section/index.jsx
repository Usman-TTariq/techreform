"use client";

import Image from "next/image";
import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const IosCaseStudiesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left">
              <span className="text-[#F74B1C]">Case Studies </span>
              <span className="text-white">That Show How Our </span>
              <br />
              <span className="text-white">iOS Apps Perform in the </span>
              <span className="text-[#F74B1C]">Real World </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2">
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
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
              Explore our real-world iOS case studies that reflect clean execution, strong UX, and high performance. See how we help businesses improve user retention, app stability, and conversion outcomes.
            </div>
            <div className="pt-6 sm:pt-[30px]">
              <Button text="Check The Full Case" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pt-10 sm:pt-16 md:pt-[70px]">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div>
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772825939/backphone1_koj0do.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div>
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772826867/phones1_gicxbe.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
              Review scalable iOS solutions we have built for different business needs, from MVPs to enterprise apps, with architecture designed for reliability and long-term growth.
            </div>
            <div className="pt-6 sm:pt-[30px]">
              <Button text="Check The Full Case" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default IosCaseStudiesSection;
