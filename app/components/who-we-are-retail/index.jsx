"use client";

import Image from "next/image";
import { useState } from "react";
import HireExpertPopup from "../hire-expert-popup";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const WhoWeAreRetail = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <Image
        className="absolute -top-[20%] left-0 w-[50%] sm:w-[40%] md:w-[35%] opacity-60"
        src="https://ik.imagekit.io/sajib4aqc/bk1_qqglcc.webp"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 pt-12 sm:pt-16 md:pt-[100px]">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHO" secondWord="WE" thirdWord="ARE" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="font-britanicaBlack text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[38px] font-black text-white break-words">
              <span className="text-white">A Retail App Development Company That </span>
              <span className="text-[#F74B1C]">Understands Retail</span>
            </h2>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-5 sm:pt-6 md:pt-[26px] max-w-full leading-relaxed">
              Tech Reforms is a dedicated retail app development company that partners with businesses at every stage of growth, from independent retailers
              launching their first mobile storefront to established brands scaling omnichannel operations across multiple markets.
            </div>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
              We don&apos;t recycle templates or cookie-cutter app samples to match your business requirements. Every retail mobile app we build is engineered
              from the ground up around your customers, your operations, and your revenue goals. Our teams bring together deep retail domain knowledge and proven
              technical expertise across iOS, Android, hybrid, and progressive web app development so the software we deliver works in the real world, not just
              in a demo.
            </div>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
              With hundreds of apps delivered and years of retail-specific app development experience, we know what separates a retail app that drives growth
              from one that gets uninstalled after the first session.
            </div>
            <div className="pt-4 sm:pt-[30px] w-full flex justify-center items-center">
              <div className="w-full max-w-[320px] sm:max-w-none mx-auto flex justify-center">
                <Button text="Talk to Our Retail App Experts Today" icon={false} onClick={() => setPopupOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default WhoWeAreRetail;
