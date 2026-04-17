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
  { title: "Discovery and Planning", desc: "We begin with a clear understanding of your business, target users, and project goals. This helps us define the technical architecture, set a realistic scope, and create a structured development plan. Our approach ensures steady progress while maintaining high standards at every stage." },
  { title: "UI/UX Design", desc: "Before development starts, our design team prepares detailed wireframes and interactive prototypes. This gives you a clear view of the application’s layout and functionality, along with the opportunity to share feedback and refine the user experience at an early stage." },
  { title: "React Native Development", desc: "Our engineers turn approved designs into a functional application through React Native’s component-based architecture, along with JavaScript and TypeScript where required. We focus on clean, well-structured, and documented code, and use native modules where needed to deliver a consistent experience across platforms." },
  { title: "Testing and Quality Assurance", desc: "Quality remains a priority throughout the development cycle. We conduct automated tests on real iOS and Android devices during each sprint. This allows early issue detection, full edge case coverage, and a stable product as new features are introduced. By delivery, the application has undergone thorough validation." },
  { title: "Launch and Post-Launch Support", desc: "We handle app store submission and deployment to ensure a smooth release. After launch, we continue support through performance checks, bug resolution, and feature updates. This way, we treat the apps' post-launch support as a core part of the engagement, not a separate phase." },
];

const ReactNativeProcessSection = () => {
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
      if (e.deltaY > 0 && !swiper.isEnd) { e.preventDefault(); e.stopPropagation(); swiper.slideNext(); }
      if (e.deltaY < 0 && !swiper.isBeginning) { e.preventDefault(); e.stopPropagation(); swiper.slidePrev(); }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [swiperReady]);

  return (
    <div ref={sectionRef} className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
      <Image className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100" src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp" alt="Soft purple abstract gradient background decoration" width={1000} height={1000} />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1">
          <div className="pb-6 sm:pb-[40px] max-sm:flex max-sm:justify-center"><CapsuleLabel firstWord="OUR" secondWord="REACT NATIVE" thirdWord="PROCESS" /></div>
          <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words max-sm:text-center">
            <span className="text-white">Our React Native </span><span className="text-[#F74B1C]">Development Process</span>
          </div>
          <div className="pt-5 sm:pt-[30px] max-sm:flex max-sm:justify-center"><Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} /></div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2">
          <div className="overflow-hidden">
            <Swiper onSwiper={(swiper) => { swiperRef.current = swiper; setSwiperReady(true); }} spaceBetween={12} slidesPerView={1.05}
              breakpoints={{ 480: { slidesPerView: 1.2, spaceBetween: 12 }, 640: { slidesPerView: 1.2, spaceBetween: 12 }, 768: { slidesPerView: 1.8, spaceBetween: 12 }, 1024: { slidesPerView: 1.8, spaceBetween: 12 }, 1280: { slidesPerView: 2.1, spaceBetween: 12 }, 1530: { slidesPerView: 2.1, spaceBetween: 12 }, 1536: { slidesPerView: 2.1, spaceBetween: 12 } }}>
              {STEPS.map((step, index) => (
                <SwiperSlide key={index} className="!h-full">
                  <div className="bg-white border-2 h-[420px] sm:h-[460px] md:h-[600px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0"><div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center"><AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" /></div></div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">{step.title}</div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed flex-1 min-h-0 overflow-y-auto pb-4 sm:pb-[30px]">{step.desc}</div>
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

export default ReactNativeProcessSection;
