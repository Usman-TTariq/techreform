"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WHY_CHOOSE = [
  { title: "Cross-Platform Without Compromise", desc: "React Native's single codebase model means you get coverage on both iOS and Android without paying to maintain two entirely separate products. We make full use of code reuse while writing native modules, where platform-specific performance demands it, you get the best of both worlds." },
  { title: "Startup and Scale-Up Experience", desc: "We work well with early-stage companies because we understand the constraints: limited budget, tight timelines, and the need to validate quickly. We also work well with more established businesses looking to modernise or extend their mobile offering. Fintech, SaaS, healthcare, e-commerce, we have done it across industries." },
  { title: "Transparent and Collaborative", desc: "We believe you should know exactly where your project stands at all times. Regular sprint reviews, honest reporting, and a team that is easy to reach; these are not selling points, they are just how we prefer to work." },
  { title: "Long-Term Partnership", desc: "We are not interested in shipping a product and disappearing. Post-launch, we stay available for performance improvements, third-party integrations, new features, and whatever else your product needs as it grows. We build for the long run." },
];

const ReactNativeWhyChooseSection = () => {
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
      if (e.deltaY > 0 && !swiper.isBeginning) { e.preventDefault(); e.stopPropagation(); swiper.slidePrev(); }
      if (e.deltaY < 0 && !swiper.isEnd) { e.preventDefault(); e.stopPropagation(); swiper.slideNext(); }
    };
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", handleWheel, { capture: true });
  }, [swiperReady]);

  return (
    <div ref={sectionRef} className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
      <Image className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100" src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp" alt="Decorative purple gradient behind why choose us for React Native development section" width={1000} height={1000} />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
          <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words max-sm:text-center"><span className="text-[#F74B1C]">Why Choose </span><br /><span className="text-white">Us?</span></div>
          <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full max-sm:text-center">
          There are many React Native development services out there. What we offer is a team that takes your business seriously, communicates clearly, and builds products that hold up in the real world. Here is what that looks like in practice:
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
          <div className="overflow-hidden">
            <Swiper onSwiper={(swiper) => { swiperRef.current = swiper; swiper.slideTo(1, 0); setSwiperReady(true); }} initialSlide={1} spaceBetween={12} slidesPerView={1.05}
              breakpoints={{ 480: { slidesPerView: 1.2, spaceBetween: 12 }, 640: { slidesPerView: 1.2, spaceBetween: 12 }, 768: { slidesPerView: 1.8, spaceBetween: 12 }, 1024: { slidesPerView: 1.8, spaceBetween: 12 }, 1280: { slidesPerView: 2.1, spaceBetween: 12 }, 1530: { slidesPerView: 2.1, spaceBetween: 12 }, 1536: { slidesPerView: 2.1, spaceBetween: 12 } }}>
              {WHY_CHOOSE.map((item, index) => (
                <SwiperSlide key={index} className="!h-full">
                  <div className="bg-white border-2 h-[420px] sm:h-[460px] md:h-[550px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0"><div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center"><AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" /></div></div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">{item.title}</div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed flex-1 min-h-0 overflow-y-auto pb-4 sm:pb-[30px]">{item.desc}</div>
                    <div className="shrink-0 pt-2"><button type="button" onClick={() => setPopupOpen(true)} className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">Learn More <ArrowRight className="w-4 sm:w-[16px]" /></button></div>
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

export default ReactNativeWhyChooseSection;
