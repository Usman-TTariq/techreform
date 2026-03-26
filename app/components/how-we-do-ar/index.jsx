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
        title: "Discovery & AR Strategy",
        desc: "We align on your AR goals, target devices (mobile, headset, web), and user journeys. Our team maps technical constraints, tracking needs, and content pipelines so your experience is feasible, scalable, and aligned with your product roadmap.",
    },
    {
        title: "Design & Prototyping",
        desc: "We shape spatial UI, interactions, and 3D assets so they feel natural in the real world. Early prototypes and device tests help validate tracking, performance, and UX before full production so you can iterate with confidence.",
    },
    {
        title: "Development & QA",
        desc: "We build with leading AR frameworks and engines, integrating sensors, occlusion, and lighting where needed. Rigorous testing across devices ensures stable tracking, smooth frame rates, and a polished experience on every supported platform.",
    },
    {
        title: "Launch & Ongoing Support",
        desc: "We help you ship to app stores or enterprise distribution and monitor real-world performance. Post-launch, we support updates, new features, and optimization so your AR product stays reliable as OS and hardware evolve.",
    },
];

const HowWeDoAr = () => {
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
        <div ref={sectionRef} className="container pt-[160px] relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[10%] left-0 opacity-60 sm:opacity-100"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772825717/whatwedobk_wisvaz.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="HOW" secondWord="WE DO" thirdWord="AR" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Optimized Process for</span>
                        <br />
                        <span className="text-[#F74B1C]">Immersive AR Experiences</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; setSwiperReady(true); }}
                            spaceBetween={12}
                            slidesPerView={1}
                            breakpoints={{
                                480: { slidesPerView: 1.2, spaceBetween: 12 },
                                640: { slidesPerView: 1.2, spaceBetween: 12 },
                                768: { slidesPerView: 1.8, spaceBetween: 10 },
                                1024: { slidesPerView: 1.8, spaceBetween: 10 },
                                1280: { slidesPerView: 2.1, spaceBetween: 10 },
                                1530: { slidesPerView: 2.1, spaceBetween: 10 },
                            }}
                            className="!overflow-visible"
                        >
                            {STEPS.map((step, index) => (
                                <SwiperSlide key={index} className="!h-auto">
                                    <div className="bg-white border-2 w-[300px] sm:w-[320px] md:w-[340px] h-[420px] sm:h-[440px] md:h-[460px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col shrink-0 min-w-0 overflow-hidden">
                                        <div className="pb-3 sm:pb-[20px] shrink-0">
                                            <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                                                <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words shrink-0 min-w-0">
                                            {step.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] leading-relaxed flex-1 min-w-0 pb-4 sm:pb-[30px] break-words">
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

export default HowWeDoAr;
