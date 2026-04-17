"use client";

import { useRef, useEffect, useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const STEPS = [
  {
    title: "Idea Discovery",
    desc: "We begin by understanding your vision, market, and users.",
  },
  {
    title: "Product Planning",
    desc: "Our team creates a structured roadmap for Custom Startup App Development.",
  },
  {
    title: "Design",
    desc: "User-focused interfaces and smooth app flows are designed for engagement.",
  },
  {
    title: "Development, Testing & QA",
    desc: "We build the app and test it across devices to ensure it performs reliably.",
  },
  {
    title: "Launch & Scaling",
    desc: "Your product goes live with infrastructure ready for growth.",
  },
];

const StartupProcessSection = () => {
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
        if (!swiper.isEnd) {
          e.preventDefault();
          e.stopPropagation();
          swiper.slideNext();
        }
      } else if (e.deltaY < 0) {
        if (!swiper.isBeginning) {
          e.preventDefault();
          e.stopPropagation();
          swiper.slidePrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [swiperReady]);

  return (
    <div
      ref={sectionRef}
      className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden"
    >
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[20%] left-0 opacity-60 sm:opacity-100"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt="Soft purple abstract gradient background decoration"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1">
          <div className="pb-6 sm:pb-[40px] max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="OUR" secondWord="STARTUP" thirdWord="PROCESS" />
          </div>
          <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words max-sm:text-center">
            <span className="text-white">Our Startup App </span>
            <br />
            <span className="text-[#F74B1C]">Development Process</span>
          </div>
          <div className="pt-5 sm:pt-[30px] max-sm:flex max-sm:justify-center">
            <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2">
          <div className="overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setSwiperReady(true);
              }}
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
              {STEPS.map((step, index) => (
                <SwiperSlide key={index} className="!h-full">
                  <div className="bg-white border-2 h-[400px] sm:h-[460px] md:h-[500px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                        <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                      </div>
                    </div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">
                      {step.title}
                    </div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed flex-1 min-h-0 overflow-y-auto pb-4 sm:pb-[30px]">
                      {step.desc}
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

export default StartupProcessSection;
