"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const TopAppHeroSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="relative w-full min-w-0 overflow-hidden min-h-auto sm:min-h-auto md:min-h-[60vh] pb-8 sm:pb-12 md:pb-0">
        <Image
          className="absolute -top-[10%] right-4 w-[28%] sm:w-[32%] md:right-12 md:w-[35%] lg:right-[100px] hidden sm:block"
          src="https://ik.imagekit.io/sajib4aqc/Group%202147225267.png"
          alt="Decorative abstract accent on page hero"
          width={1000}
          height={1000}
        />
        <Image
          className="absolute -bottom-[15%] left-0 w-[28%] sm:w-[30%] hidden sm:block"
          src="https://ik.imagekit.io/sajib4aqc/frame2_h4xmpf.webp"
          alt="Decorative frame on page hero"
          width={1000}
          height={1000}
        />
        <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
          <div className="grid grid-cols-12 pt-12 sm:pt-[100px] md:pt-[120px]">
            <div className="col-span-12 text-center min-w-0">
              <h1 className="font-britanicaBlack text-[22px] leading-[1.25] sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[52px] font-black break-words">
                <span className="text-white">Top </span>
                <span className="text-[#F74B1C]">App Developers </span>
                <br />
                <span className="text-white">Built for Results</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0 flex flex-col items-center">
              <p className="font-britanicaRegular text-[14px] sm:text-[17px] md:text-[20px] text-white pt-4 sm:pt-[22px] max-w-full sm:max-w-3xl mx-auto leading-relaxed">
                At Tech Reforms, we design, develop, and ship high-quality mobile apps that drive growth,
                enhance user experience, and deliver solutions that stand out in the App Store and Google Play.
              </p>
              <div className="pt-4 sm:pt-[30px] w-full flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button
                  text="Schedule Free Consultation"
                  icon={false}
                  onClick={() => setPopupOpen(true)}
                />
                <Link href="/portfolio">
                  <Button
                    text="View Portfolio"
                    icon={false}
                    textClassName="!text-[#F74B1C]"
                    className="!bg-transparent border border-[#C380FE]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default TopAppHeroSection;
