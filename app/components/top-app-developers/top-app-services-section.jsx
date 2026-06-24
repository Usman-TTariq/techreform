"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { TOP_APP_SERVICES } from "@/app/constants/top-app-developers-content";

const TopAppServicesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="OUR" secondWord="SERVICES" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Scale Your Business with </span>
              <span className="text-[#F74B1C]">Growth-Focused App Solutions</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              We design and develop fast, scalable, and user-centric mobile applications tailored to meet
              your business&apos;s unique goals and needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {TOP_APP_SERVICES.map((service) => (
            <div key={service.title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                <div className="flex flex-col h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <Image
                      className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                      src="/images/gamingicon.png"
                      alt={service.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] text-white text-left pb-2 leading-tight break-words">
                    {service.title}
                  </h3>
                  <p className="font-britanicaRegular text-[13px] sm:text-[14px] text-white text-left leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="pt-4 sm:pt-[30px]">
                    <Button
                      text={service.buttonText}
                      icon={false}
                      onClick={() => setPopupOpen(true)}
                      className="w-full min-h-[52px] justify-center"
                      textClassName="!text-[14px] sm:!text-[15px] !font-britanicaBlack"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
};

export default TopAppServicesSection;
