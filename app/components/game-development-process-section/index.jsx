"use client";

import { useRef, useEffect, useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const STEPS = [
    {
        title: "Requirement Analysis",
        desc: "We start by understanding your game idea, who it's for, what features you need, and how you plan to monetize it. Our professional game developers carefully review the technical side and create a clear, step-by-step plan to bring your vision to life.",
    },
    {
        title: "Design & Prototyping",
        desc: "Our creative team works on the look and feel of your game. This includes all aspects of execution, from UI/UX and gameplay mechanics to characters and environments. We build early prototypes so you can see how everything comes together and make sure it feels right before full development begins.",
    },
    {
        title: "Development and Testing",
        desc: "Using modern tools and game engines, our team handles the complete game development process. We thoroughly test our games to deliver smooth performance, stable gameplay, and a great experience across all target devices.",
    },
    {
        title: "Launch with Support",
        desc: "Once your game is live, we don't just walk away. We continue to support you with updates, improvements, and performance optimization to keep your game fresh, competitive, and engaging for players.",
    },
];

const GameDevelopmentProcessSection = () => {
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
        <div ref={sectionRef} className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="OUR" secondWord="GAME" thirdWord="PROCESS" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Optimized Process for</span>
                        <br />
                        <span className="text-[#F74B1C]">High-Quality Game Creation</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2">
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
                                    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] leading-relaxed flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden pb-4 sm:pb-[30px] break-words">
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
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default GameDevelopmentProcessSection;
