"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WHY_CHOOSE = [
  {
    title: "Industry-Focused Expertise",
    desc: "Our team has hands-on experience building restaurant apps for cloud kitchens, single-location restaurants, and multi-outlet chains, helping us deliver solutions that actually fit how food businesses operate.",
  },
  {
    title: "Secure and Reliable Apps",
    desc: "Customer payments and data deserve real protection. Every restaurant app we build follows strict security standards, so your customers can order with confidence, and your business stays compliant.",
  },
  {
    title: "Fast, Hassle-Free Delivery",
    desc: "We know restaurants can't afford long development timelines. Our restaurant app development services are built to move fast, getting your ordering or delivery app live without unnecessary delays.",
  },
  {
    title: "Built to Scale With You",
    desc: "Whether you're starting with a simple ordering app or planning a full restaurant management software setup with POS and CRM, we build with growth in mind from day one.",
  },
];

const RestaurantWhyChooseSection = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const swiper = swiperRef.current;
    if (!section || !swiper || !swiperReady) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const inView = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;
      if (!inView) return;

      if (e.deltaY > 0) {
        if (!swiper.isBeginning) {
          e.preventDefault();
          e.stopPropagation();
          swiper.slidePrev();
        }
      } else if (e.deltaY < 0) {
        if (!swiper.isEnd) {
          e.preventDefault();
          e.stopPropagation();
          swiper.slideNext();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", handleWheel, { capture: true });
  }, [swiperReady]);

  return (
    <div
      ref={sectionRef}
      className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden"
    >
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt="Decorative purple gradient behind why choose Tech Reforms for restaurant apps section"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
          <div className="pb-6 sm:pb-[40px] max-sm:flex max-sm:justify-center md:justify-start">
            <CapsuleLabel firstWord="WHY" secondWord="TECH" thirdWord="REFORMS" />
          </div>
          <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words max-sm:text-center">
            <span className="text-[#F74B1C]">Why </span>
            <span className="text-white">Tech Reforms?</span>
          </div>
          <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full max-sm:text-center">
            As a top-rated restaurant app development agency, we deliver reliable, high-performing apps that create
            measurable results, faster ordering, fewer errors, and better customer retention. No matter what you need, we
            offer it all, from custom restaurant ordering app development to full-scale restaurant software development
            for multi-location businesses.
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
          <div className="overflow-hidden">
            <Swiper
              autoHeight
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.slideTo(1, 0);
                setSwiperReady(true);
              }}
              initialSlide={1}
              spaceBetween={12}
              slidesPerView={1.05}
              breakpoints={{
                480: { slidesPerView: 1.2, spaceBetween: 12 },
                640: { slidesPerView: 1.2, spaceBetween: 12 },
                768: { slidesPerView: 1.8, spaceBetween: 12 },
                1024: { slidesPerView: 1.8, spaceBetween: 12 },
                1280: { slidesPerView: 2.1, spaceBetween: 12 },
                1530: { slidesPerView: 2.1, spaceBetween: 12 },
                1536: { slidesPerView: 2.1, spaceBetween: 12 },
              }}
            >
              {WHY_CHOOSE.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="bg-white border-2 h-auto min-h-[320px] sm:min-h-[420px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                        <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                      </div>
                    </div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">
                      {item.title}
                    </div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed pb-4 sm:pb-[30px]">
                      {item.desc}
                    </div>
                    <div className="shrink-0 pt-2">
                      <button
                        type="button"
                        onClick={() => setPopupOpen(true)}
                        className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]"
                      >
                        Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                      </button>
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

export default RestaurantWhyChooseSection;
