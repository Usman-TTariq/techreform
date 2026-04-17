"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Button from "../common/button";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";

const DEFAULT_INDUSTRIES = [
  {
    title: "EdTech",
    description: "Our Scalable App Solutions for Startups help education platforms deliver digital learning, track student progress, and improve accessibility.",
    image: "/images/industries1.png",
    link: "#",
  },
  {
    title: "E-Commerce",
    description: "Startup retail apps provide personalized shopping experiences, loyalty programs, and seamless checkout systems.",
    image: "/images/industries2.png",
    link: "#",
  },
  {
    title: "Healthcare",
    description: "Mobile healthcare apps enable remote care, patient monitoring, and digital health tracking with secure data management.",
    image: "/images/industries3.png",
    link: "#",
  },
  {
    title: "Logistics",
    description: "Apps simplify logistics operations with route optimization, delivery tracking, and real-time communication.",
    image: "/images/industries4.png",
    link: "#",
  },
  {
    title: "FinTech",
    description: "Financial startup apps power secure payments, expense tracking, and modern digital banking experiences.",
    image: "/images/industries1.png",
    link: "#",
  },
  {
    title: "Travel & Hospitality",
    description: "Apps streamline bookings, check-ins, and personalized travel services for better customer engagement.",
    image: "/images/industries3.png",
    link: "#",
  },
];

/**
 * Same layout pattern as IndustriesMobile — headline + OUR INDUSTRIES capsule + Swiper cards.
 * For Apps for Startup and similar pages.
 */
const StartupIndustriesMobile = ({
  firstWord,
  secondWord,
  thirdWord,
  secondCol,
  thirdCol,
  para,
  industries,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const slides = Array.isArray(industries) && industries.length > 0 ? industries : DEFAULT_INDUSTRIES;

  return (
    <div className="relative pb-[150px] max-sm:pb-[30px]">
      <div className="container relative px-4 sm:px-4">
        <div className="">
          <div className="grid grid-cols-12 justify-between gap-4">
            <div className={`col-span-2 max-lg:col-span-12 ${secondCol ?? ""}`}>
              <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
              {para && (
                <div className="font-britanicaRegular max-sm:text-center text-[14px] text-left sm:text-[16px] md:text-[18px] font-regular text-white pt-3 leading-relaxed break-words">
                  {para}
                </div>
              )}
            </div>
            <div className={`col-span-10 max-lg:col-span-12 ${thirdCol ?? ""}`}>
              <div className="flex justify-end max-sm:justify-center">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-right max-sm:text-center">
                  {firstWord && <span className="text-[#F74B1C]">{firstWord} </span>}
                  {secondWord && <span className="text-white">{secondWord} </span>}
                  {thirdWord && <span className="text-[#F74B1C]">{thirdWord} </span>}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[40px] max-sm:pt-[10px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={15}
              slidesPerView={1}
              navigation
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slides.map((industry, index) => (
                <SwiperSlide key={`${industry.title}-${index}`}>
                  <div className="rounded-xl h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="pb-[10px]">
                        <Image
                          className="w-full"
                          src={industry.image}
                          alt={industry.title}
                          width={1000}
                          height={1000}
                        />
                        <div className="flex justify-center -mt-[30px]">
                          <Image
                            className="w-[85px] h-[85px]"
                            src="/images/globe-icon.png"
                            alt="Globe icon representing global industries coverage"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                      <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left max-sm:text-center pb-1 sm:pb-[5px]">
                        {industry.title}
                      </div>
                      <div className="font-britanicaRegular text-[16px] font-regular text-white text-left max-sm:text-center">
                        {industry.description}
                      </div>
                      <div className="pt-[30px] flex justify-start max-sm:justify-center">
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

export default StartupIndustriesMobile;
