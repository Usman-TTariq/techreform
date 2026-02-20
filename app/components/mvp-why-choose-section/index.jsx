"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WHY_CHOOSE = [
    {
        title: "Lean Approach",
        desc: "Our Lean MVP Development methodology helps you build, validate faster, and scale simply.",
    },
    {
        title: "Startup-Focused Expertise",
        desc: "From fintech to e-commerce, our product development services for startups help founders reduce risk and accelerate growth.",
    },
    {
        title: "Cost-Effective",
        desc: "We deliver fast, cost-effective MVP development without unnecessary add-ons or complexity.",
    },
    {
        title: "Full-Cycle Support",
        desc: "From proof-of-concept (PoC) development to post-launch optimization, we provide tailored end-to-end MVP development solutions.",
    },
];

const MvpWhyChooseSection = () => {
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
        <div ref={sectionRef} className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
                        <span className="text-[#F74B1C]">Why Choose </span>
                        <br />
                        <span className="text-white">Us?</span>
                    </div>
                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        Recognized as one of the most trusted MVP design and development companies, we specialize in delivering practical solutions that drive real results. Our solutions aren’t limited to the industry's renowned names; we also offer simplified MVP development for early-stage startups.
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; swiper.slideTo(1, 0); setSwiperReady(true); }}
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
                                <SwiperSlide key={index} className="!h-full">
                                    <div className="bg-white border-2 h-[420px] sm:h-[460px] md:h-[500px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col">
                                        <div className="pb-3 sm:pb-[20px] shrink-0">
                                            <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight shrink-0">
                                            {item.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] leading-relaxed flex-1 min-h-0 overflow-y-auto pb-4 sm:pb-[30px]">
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

export default MvpWhyChooseSection;
