"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const HireWhyChooseSection = ({
  headlineWhite,
  headlineAccent,
  paragraphs,
  stats,
  cards,
  buttonText,
}) => {
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
      if (e.deltaY > 0 && !swiper.isBeginning) {
        e.preventDefault();
        e.stopPropagation();
        swiper.slidePrev();
      }
      if (e.deltaY < 0 && !swiper.isEnd) {
        e.preventDefault();
        e.stopPropagation();
        swiper.slideNext();
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
        alt="Decorative purple gradient behind why choose Tech Reforms section"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
          <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] md:leading-[48px] font-black break-words max-sm:text-center">
            <span className="text-white">{headlineWhite} </span>
            <span className="text-[#F74B1C]">{headlineAccent}</span>
          </div>
          <div className="font-britanicaRegular text-[14px] sm:text-[16px] md:text-[17px] font-regular text-white pt-4 sm:pt-5 leading-relaxed max-w-full max-sm:text-center space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 max-sm:max-w-md max-sm:mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-britanicaBlack text-[22px] sm:text-[28px] md:text-[32px] text-[#F74B1C] leading-none">
                  {stat.value}
                </div>
                <div className="font-britanicaRegular text-[11px] sm:text-[12px] md:text-[13px] text-white/90 pt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6 sm:pt-8 max-sm:flex max-sm:justify-center">
            <Button text={buttonText} icon={false} onClick={() => setPopupOpen(true)} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
          <div className="overflow-hidden">
            <Swiper
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
              {cards.map((item) => (
                <SwiperSlide key={item.title} className="!h-full">
                  <div className="bg-white border-2 h-[460px] sm:h-[500px] md:h-[540px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                        <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                      </div>
                    </div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">
                      {item.title}
                    </div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed flex-1 min-h-0 overflow-y-auto">
                      {item.desc}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 shrink-0">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-britanicaRegular bg-[#7724C1]/15 text-[#7724C1] border border-[#7724C1]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="shrink-0 pt-3">
                      <button
                        type="button"
                        onClick={() => setPopupOpen(true)}
                        className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px] text-left"
                      >
                        {item.buttonText}
                        <ArrowRight className="w-4 sm:w-[16px] shrink-0" />
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

export default HireWhyChooseSection;
