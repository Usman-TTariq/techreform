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

const RETAIL_INDUSTRIES = [
  {
    title: "Fashion & Apparel",
    description:
      "Size guides, virtual try-on, lookbook experiences, and seamless checkout for fashion retail apps.",
    image: INDUSTRY_IMAGES.retail,
  },
  {
    title: "Grocery & FMCG",
    description:
      "Fast, subscription-capable grocery shopping apps with real-time inventory, scheduled delivery, and loyalty app integration.",
    image: INDUSTRY_IMAGES.foodBeverage,
  },
  {
    title: "Home Goods & Furniture",
    description:
      "AR-powered visualization tools that let customers place products in their own space are a standout feature for home retail apps.",
    image: INDUSTRY_IMAGES.hospitality,
  },
  {
    title: "Health & Beauty",
    description:
      "Personalized product recommendation engines, loyalty programs, and virtual consultations for health and beauty retail apps.",
    image: INDUSTRY_IMAGES.healthWellness,
  },
  {
    title: "Specialty Retail",
    description:
      "Custom retail apps for niche product categories that require deep catalog functionality and community-building features.",
    image: INDUSTRY_IMAGES.finance,
  },
  {
    title: "Multi-Location & Franchise Retail",
    description:
      "Omnichannel retail apps that unify customer data, loyalty, and inventory across dozens or hundreds of retail locations.",
    image: INDUSTRY_IMAGES.education,
  },
];

const RetailIndustriesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] max-sm:pb-[50px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-4 min-w-0 max-lg:flex max-lg:flex-col max-lg:items-center">
            <CapsuleLabel firstWord="INDUSTRIES" secondWord="WE SERVE" />
            <p className="font-britanicaRegular max-sm:text-center text-[14px] text-left sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-4 leading-relaxed break-words">
              Our retail app development services span every vertical where mobile commerce delivers measurable value.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0">
            <div className="flex justify-end max-sm:justify-center max-lg:pt-4">
              <h2 className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-right max-sm:text-center">
                <span className="text-[#F74B1C]">Industries </span>
                <span className="text-white">We Serve</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 md:pt-[40px] industries-mobile-swiper">
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
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {RETAIL_INDUSTRIES.map((industry) => (
              <SwiperSlide key={industry.title} className="!h-auto">
                <div className="rounded-xl h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-[20px]">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="pb-2 sm:pb-[10px]">
                      <div className="relative w-full aspect-[16/10] max-sm:aspect-[2/1] overflow-hidden rounded-lg bg-black/30">
                        <Image
                          src={industry.image}
                          alt={`${industry.title} retail app development`}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 767px) 45vw, (max-width: 1023px) 31vw, 23vw"
                        />
                      </div>
                      <div className="flex justify-center -mt-[30px] relative z-10">
                        <Image
                          className="w-[85px] h-[85px]"
                          src="/images/globe-icon.png"
                          alt=""
                          width={85}
                          height={85}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] text-white text-left max-sm:text-center pb-1 sm:pb-[5px] leading-tight">
                      {industry.title}
                    </h3>
                    <p className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/95 text-left max-sm:text-center leading-relaxed flex-1">
                      {industry.description}
                    </p>
                    <div className="pt-2 sm:pt-4 flex justify-start max-sm:justify-center">
                      <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default RetailIndustriesSection;
