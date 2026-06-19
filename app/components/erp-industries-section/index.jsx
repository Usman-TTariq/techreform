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

const ERP_INDUSTRIES = [
  {
    title: "Manufacturing ERP",
    description:
      "Production planning, inventory, BOM management, quality control, and supply chain automation.",
    image: "/images/buildmobile.png",
  },
  {
    title: "Healthcare ERP",
    description:
      "Patient management, billing, inventory, HR, and HIPAA-compliant data handling across departments.",
    image: INDUSTRY_IMAGES.healthWellness,
  },
  {
    title: "Logistics ERP",
    description:
      "Fleet management, route optimization, warehouse operations, shipment tracking, and delivery automation.",
    image: INDUSTRY_IMAGES.hospitality,
  },
  {
    title: "Retail & E-Commerce ERP",
    description:
      "POS integration, multi-store inventory, order management, supplier coordination, and customer analytics.",
    image: INDUSTRY_IMAGES.retail,
  },
  {
    title: "Construction ERP",
    description:
      "Project costing, contractor management, material procurement, compliance tracking, and site reporting.",
    image: INDUSTRY_IMAGES.education,
  },
  {
    title: "Finance & Fintech ERP",
    description:
      "Accounting automation, multi-currency, audit trails, regulatory compliance, and real-time financial dashboards.",
    image: INDUSTRY_IMAGES.finance,
  },
];

const ErpIndustriesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] max-sm:pb-[50px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 lg:items-end">
          <div className="col-span-12 lg:col-span-4 min-w-0 flex flex-col max-lg:items-center lg:items-start">
            <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
            <p className="font-britanicaRegular max-lg:text-center text-[14px] text-left sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-4 leading-relaxed break-words w-full">
              We build and implement industry-specific ERP systems — not generic one-size-fits-all
              solutions. Each vertical has different modules, compliance needs, and workflow
              requirements.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 flex max-lg:justify-center lg:justify-end lg:items-end">
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[48px] lg:leading-[56px] font-black text-center lg:text-right w-full lg:w-auto lg:max-w-[640px] pb-0 lg:pb-[26px]">
              <span className="text-[#F74B1C]">ERP Solutions </span>
              <span className="text-white">for </span>
              <span className="text-[#F74B1C]">Every Industry</span>
            </h2>
          </div>
        </div>
        <div className="pt-8 sm:pt-10 md:pt-[40px] erp-industries-swiper industries-mobile-swiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            watchOverflow
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {ERP_INDUSTRIES.map((industry, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="rounded-xl h-full min-h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-[20px] flex flex-col items-center text-center">
                  <div className="pb-[10px] w-full">
                    <div className="relative w-full aspect-[16/10] max-sm:aspect-[2/1] overflow-hidden rounded-lg bg-black/30">
                      <Image
                        src={industry.image}
                        alt={`${industry.title} illustration`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 45vw, 33vw"
                      />
                    </div>
                    <div className="flex justify-center -mt-[30px] relative z-10">
                      <Image
                        className="w-[72px] h-[72px] sm:w-[85px] sm:h-[85px]"
                        src="/images/globe-icon.png"
                        alt="Industry category icon"
                        width={85}
                        height={85}
                      />
                    </div>
                  </div>
                  <h3 className="font-britanicaBlack font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white pb-2 min-h-[3.25rem] sm:min-h-[3.5rem] leading-snug w-full">
                    {industry.title}
                  </h3>
                  <p className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/90 leading-relaxed flex-1 w-full">
                    {industry.description}
                  </p>
                  <div className="pt-4 flex justify-center w-full">
                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
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

export default ErpIndustriesSection;
