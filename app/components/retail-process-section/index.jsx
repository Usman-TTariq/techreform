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
    title: "Step 1: Idea Conceptualization & Market Research",
    desc: "Every successful retail mobile app starts with research. We monitor and analyze your target market, benchmark against competitors, and identify the user problems your retail app needs to solve before making any assumptions about features or technology.",
  },
  {
    title: "Step 2: Strategic Planning & Feature Definition",
    desc: "We define the full retail app development scope, platforms, features, third-party integrations, and success metrics in a detailed plan that is reviewed and agreed upon with your team. A clear feature roadmap at this stage prevents the scope creep and cost overruns that derail retail app projects.",
  },
  {
    title: "Step 3: Wireframing & Interactive Prototyping",
    desc: "Our retail UX designers produce wireframes and clickable prototypes that map every customer journey from first-time browse to repeat purchase. You review and approve the full retail app user experience before development begins, so there are no surprises in the final product.",
  },
  {
    title: "Step 4: Agile Retail App Development",
    desc: "Development runs in structured two-week sprints, each delivering working software you can see and test. We build across iOS, Android, and your chosen platforms simultaneously using the right retail app development technology stack for your requirements, whether that's React Native, Flutter, Swift, or Kotlin.",
  },
  {
    title: "Step 5: Testing & Quality Assurance Across All Devices",
    desc: "Every sprint involves detailed QA testing. We test everything, every feature, every API, and every integration across real iOS and Android devices. We test payment flows, push notification behavior, third-party integrations, offline functionality, and edge cases specific to retail app usage. Issues are resolved sprint by sprint, never saved up for a last-minute panic before launch.",
  },
  {
    title: "Step 6: App Store Submission & Deployment",
    desc: "We manage every step of the App Store and Google Play submission process for your retail mobile app compliance checks, metadata optimization, and release management. Your customers on iOS and Android get access at the same time, with no staggered rollout delays.",
  },
  {
    title: "Step 7: Post-Launch Support & Continuous Improvement",
    desc: "Go-live is not the finish line. We monitor your retail app's real-world performance after launch, respond quickly to any issues, and work with you on a continuous improvement roadmap for new features, seasonal updates, promotional campaigns, and integrations as your retail business evolves.",
  },
];

const RetailProcessSection = () => {
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
        className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
        src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772825717/whatwedobk_wisvaz.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
        <div className="col-span-12 md:col-span-5 min-w-0 order-1">
          <div className="pb-6 sm:pb-[40px] max-sm:flex max-sm:justify-center">
            {/* <CapsuleLabel firstWord="OUR" secondWord="RETAIL APP" thirdWord="PROCESS" /> */}
          </div>
          <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words max-sm:text-center">
            <span className="text-white">A Proven, Step-by-Step Process That </span>
            <br />
            <span className="text-[#F74B1C]">Delivers on Time and on Budget</span>
          </div>
          <div className="pt-5 sm:pt-[30px] max-sm:flex max-sm:justify-center">
            <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 min-w-0 order-2">
          <div className="overflow-hidden">
            <Swiper
              autoHeight
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
                <SwiperSlide key={index} className="!h-auto">
                  <div className="bg-white border-2 h-auto min-h-[320px] sm:min-h-[600px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                    <div className="pb-3 sm:pb-[20px] shrink-0">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                        <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                      </div>
                    </div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">
                      {step.title}
                    </div>
                    <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed pb-4 sm:pb-[30px]">
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

export default RetailProcessSection;
