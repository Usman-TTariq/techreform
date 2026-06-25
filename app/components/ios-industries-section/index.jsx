"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "../common/button";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";
import { INDUSTRY_IMAGES } from "@/app/constants/industry-images";

const IosIndustriesSection = ({
  firstWord = "iOS Apps for",
  secondWord = "Every",
  thirdWord = "Industry",
  secondCol,
  thirdCol,
  para = "Industry-specific iOS searches — healthcare app development, fintech iPhone apps, AR retail — convert when you show domain expertise, not just generic developers.",
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const industries = [
    {
      title: "Healthcare & MedTech",
      description:
        "HIPAA-compliant iOS apps, patient portals, telemedicine, HealthKit integration, and medical device connectivity.",
      image: INDUSTRY_IMAGES.healthWellness,
      link: "/financing",
    },
    {
      title: "Fintech & Banking",
      description:
        "Payment apps, investment platforms, banking dashboards, Apple Pay, Face ID biometrics, PCI DSS compliant.",
      image: INDUSTRY_IMAGES.finance,
      link: "/financing",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Shopping apps, AR try-on (ARKit), loyalty programs, push notifications, and StoreKit in-app purchases.",
      image: INDUSTRY_IMAGES.retail,
      link: "/retail",
    },
    {
      title: "EdTech & E-Learning",
      description:
        "Learning management, video streaming, interactive quizzes, offline content, and subscription monetization.",
      image: INDUSTRY_IMAGES.education,
      link: "/education",
    },
    {
      title: "Logistics & Field Service",
      description:
        "Route optimization, barcode scanning, offline sync, GPS tracking, and enterprise MDM deployment for field teams.",
      image: INDUSTRY_IMAGES.hospitality,
      link: "/travel",
    },
    {
      title: "Gaming & Entertainment",
      description:
        "SpriteKit, SceneKit, GameKit multiplayer, Game Center leaderboards, and in-app purchase monetization.",
      image: INDUSTRY_IMAGES.foodBeverage,
      link: "/game-development",
    },
  ];

  return (
    <div className="relative pb-[150px] max-sm:pb-[50px]">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-12 justify-between gap-4">
            <div className={`col-span-12 lg:col-span-5 max-lg:max-w-2xl ${secondCol}`}>
              <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
              {para && (
                <div className="font-britanicaRegular max-sm:text-center text-[14px] text-left sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-4 leading-relaxed break-words max-w-2xl lg:max-w-none">
                  {para}
                </div>
              )}
            </div>
            <div className={`col-span-12 lg:col-span-7 ${thirdCol}`}>
              <div className="flex justify-end max-sm:justify-center">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-right max-sm:text-center">
                  {firstWord && <span className="text-[#F74B1C]">{firstWord} </span>}
                  {secondWord && <span className="text-white">{secondWord} </span>}
                  {thirdWord && <span className="text-[#F74B1C]">{thirdWord} </span>}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[40px] max-sm:pt-[10px] industries-mobile-swiper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={1}
              navigation
              watchOverflow
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="rounded-xl h-auto bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                    <div className="flex flex-col gap-4">
                      <div className="pb-[10px]">
                        {/* Fixed aspect so Next/Image 1:1 props do not reserve ~slide-width tall box on mobile */}
                        <div className="relative w-full aspect-[16/10] max-sm:aspect-[2/1] overflow-hidden rounded-lg bg-black/30">
                          <Image
                            src={industry.image}
                            alt={`${industry.title} industry illustration`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 45vw, (max-width: 1023px) 31vw, 23vw"
                          />
                        </div>
                        <div className="flex justify-center -mt-[30px] relative z-10">
                          <Image
                            className="w-[85px] h-[85px]"
                            src="/images/globe-icon.png"
                            alt="Industry category icon"
                            width={85}
                            height={85}
                          />
                        </div>
                      </div>
                      <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left max-sm:text-center pb-1 sm:pb-[5px]">
                        {industry.title}
                      </div>
                      <div className="font-britanicaRegular text-[16px] font-regular text-white text-left max-sm:text-center">
                        {industry.description}
                      </div>
                      <div className="pt-2 flex justify-start max-sm:justify-center">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default IosIndustriesSection;
