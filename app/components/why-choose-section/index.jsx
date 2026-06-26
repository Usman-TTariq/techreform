"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WhyChooseSection = ({
  heading = { accent: "Why Choose ", line2: "Us?" },
  description = "",
  items = [],
  backgroundImage = "/images/whatwedobk.png",
  backgroundAlt = "Decorative gradient behind why choose us section",
  cardLinkText = "Learn More",
  initialSlide = 1,
  reverseWheelScroll = true,
  ItemIcon = AiIcon,
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

      if (e.deltaY > 0) {
        if (reverseWheelScroll ? !swiper.isBeginning : !swiper.isEnd) {
          e.preventDefault();
          e.stopPropagation();
          reverseWheelScroll ? swiper.slidePrev() : swiper.slideNext();
        }
      } else if (e.deltaY < 0) {
        if (reverseWheelScroll ? !swiper.isEnd : !swiper.isBeginning) {
          e.preventDefault();
          e.stopPropagation();
          reverseWheelScroll ? swiper.slideNext() : swiper.slidePrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", handleWheel, { capture: true });
  }, [swiperReady, reverseWheelScroll]);

  return (
    <div
      ref={sectionRef}
      className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden"
    >
      {backgroundImage ? (
        <Image
          className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
          src={backgroundImage}
          alt={backgroundAlt}
          width={1000}
          height={1000}
          loading="lazy"
        />
      ) : null}
      <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
          <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
            {heading.accent ? (
              <>
                <span className="text-[#F74B1C]">{heading.accent}</span>
                <br />
              </>
            ) : null}
            {heading.line2 ? <span className="text-white">{heading.line2}</span> : null}
          </div>
          {description ? (
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
              {description}
            </div>
          ) : null}
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
          <div className="overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.slideTo(initialSlide, 0);
                setSwiperReady(true);
              }}
              initialSlide={initialSlide}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.1, spaceBetween: 16 },
                768: { slidesPerView: 1.5, spaceBetween: 18 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 2, spaceBetween: 24 },
                1530: { slidesPerView: 2, spaceBetween: 24 },
              }}
              className="!overflow-visible [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-slide]:items-stretch"
            >
              {items.map((item) => {
                const Icon = item.icon ?? ItemIcon;
                return (
                  <SwiperSlide key={item.title} className="!flex !items-stretch">
                    <div className="bg-white border-2 w-[300px] sm:w-[320px] md:w-[340px] h-[420px] sm:h-[440px] md:h-[460px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col shrink-0 min-w-0 overflow-hidden">
                      <div className="pb-3 sm:pb-[20px] shrink-0">
                        <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                        </div>
                      </div>
                      <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words shrink-0 min-w-0">
                        {item.title}
                      </div>
                      <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] leading-relaxed flex-1 min-w-0 pb-4 sm:pb-[30px] break-words">
                        {item.desc}
                      </div>
                      <div className="shrink-0 pt-2">
                        <button
                          type="button"
                          onClick={() => setPopupOpen(true)}
                          className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]"
                        >
                          {cardLinkText} <ArrowRight className="w-4 sm:w-[16px]" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default WhyChooseSection;
