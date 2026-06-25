"use client";

import { useRef, useEffect, useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Hand, BarChart3, RefreshCw } from "lucide-react";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";

const STEPS = [
    {
        title: "VR Environment Development",
        desc: "We build photorealistic VR worlds in Unreal Engine 5 — leveraging Nanite virtualized geometry and Lumen global illumination for AAA-quality visuals. For standalone headsets (Meta Quest 3), we use Unity XR with aggressive draw call optimization, texture streaming, and LOD systems to maintain smooth 72fps without a PC.",
        footerTags: "Engine: Unity XR / Unreal Engine 5 · Target: 72fps Quest, 90fps PC VR · Tools: Nanite, Lumen, LOD optimization",
        Icon: Box,
    },
    {
        title: "User Interaction & Motion Tracking",
        desc: "We implement 6DOF controller tracking, natural hand tracking via Meta Hand SDK, and eye tracking on PSVR2 and Apple Vision Pro. Haptic feedback is integrated for physical realism in training simulations — users feel resistance, vibration, and texture through VR controllers. Comfort-first locomotion design prevents motion sickness.",
        footerTags: "6DOF · Meta Hand SDK · Eye Tracking · Haptic Feedback · Comfort Locomotion",
        Icon: Hand,
    },
    {
        title: "Performance Optimization & Updates",
        desc: "Every VR app we deliver maintains consistent frame rates — frame drops cause motion sickness and destroy immersion. We profile and optimize draw calls, shader complexity, physics calculations, and audio processing. Post-launch, we provide OS compatibility updates as Meta, Sony, and Valve release new headset firmware and SDK versions.",
        footerTags: "Target: stable 72/90fps · Profiling: Unity Profiler, Unreal Insights · SDK updates: Meta, SteamVR, PSVR2",
        Icon: BarChart3,
    },
    {
        title: "Content Updates & LiveOps",
        desc: "VR training libraries grow over time — new scenarios, updated procedures, and additional modules. We build content management workflows so your team can update VR content without re-submitting to app stores. Remote content delivery, A/B testing of scenarios, and analytics dashboards for training managers.",
        footerTags: "Remote content delivery · xAPI analytics · No store resubmission for content · Training manager dashboard",
        Icon: RefreshCw,
    },
];

const HowWeDoVr = () => {
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
        <div ref={sectionRef} className="container pt-[160px] max-sm:pt-[30px] relative pb-4 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[10%] left-0 opacity-60 sm:opacity-100"
                src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
                alt="Decorative purple gradient behind VR development process section"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="HOW" secondWord="WE DO" thirdWord="VR" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Optimized Process for</span>
                        <br />
                        <span className="text-[#F74B1C]">Immersive VR Experiences</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; setSwiperReady(true); }}
                            spaceBetween={16}
                            slidesPerView={1.05}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 12,
                                },
                                640: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 10,
                                },
                                1280: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                                1530: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {STEPS.map((step, index) => {
                                const StepIcon = step.Icon;
                                return (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border-2 !h-full min-h-[380px] sm:min-h-[420px] md:min-h-[520px] border-[#7724C1] rounded-2xl flex flex-col overflow-hidden">
                                        <div className="p-4 sm:p-6 md:p-[30px] flex flex-col flex-1">
                                            <div className="pb-3 sm:pb-[20px]">
                                                <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#7724C1]/15 flex items-center justify-center">
                                                    <StepIcon className="w-6 h-6 sm:w-[32px] sm:h-[32px] text-[#7724C1]" strokeWidth={1.75} aria-hidden />
                                                </div>
                                            </div>
                                            <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-snug">
                                                {step.title}
                                            </div>
                                            <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] leading-relaxed flex-1">
                                                {step.desc}
                                            </div>
                                        </div>
                                        <div className="bg-[#7724C1]/10 px-4 sm:px-6 md:px-[30px] py-3 sm:py-4 border-t border-[#7724C1]/20">
                                            <p className="font-britanicaRegular text-[12px] sm:text-[13px] md:text-[14px] text-[#7724C1] leading-relaxed">
                                                {step.footerTags}
                                            </p>
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

export default HowWeDoVr;
