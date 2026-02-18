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

const WhatWeDoStaffAugmentationSection = () => {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const swiper = swiperRef.current;
        if (!section || !swiper || !swiperReady) return;

        const handleWheel = (e) => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Section is "active" when a good part of it is visible (e.g. top in upper 80% of viewport)
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

    const solutions = [
        {
            title: "Requirement Analysis",
            desc: "We start by getting to know your business, your technical requirements, and your team structure. Our goal is to identify the gaps and the expertise you need to find the right fit for your project and company culture.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Finding the Right Talent",
            desc: "We carefully source and screen professionals based on their technical skills, industry experience, and communication abilities. We offer both certified software engineers and niche specialists, so you can hire without worry.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Quick Onboarding",
            desc: "Once you select your preferred resources, we handle the entire onboarding process quickly and without complication. Our skilled team members integrate seamlessly into your existing workflows, tools, and communication channels through our flexible software team extension model.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Facilitate Scaling",
            desc: "Our partnership doesn't end after onboarding. We provide ongoing support to further optimize performance, productivity, and long-term growth. As your business evolves, we help you scale your augmented team up or down with ease.",
            icon: <AiIcon className="w-[40px]" />,
        },
    ];

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
                        <CapsuleLabel firstWord="Our" secondWord="Staff Augmentation" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Optimized Process For</span>
                        <br />
                        <span className="text-[#F74B1C]">High-Performance Team Expansion</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} />
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
                        {solutions.map((solution, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <div className="bg-white border-2 w-[300px] sm:w-[320px] md:w-[340px] h-[420px] sm:h-[440px] md:h-[460px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px] flex flex-col shrink-0 min-w-0 overflow-hidden">
                                    <div className="pb-3 sm:pb-[20px] shrink-0">
                                        <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                                            <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                        </div>
                                    </div>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words shrink-0 min-w-0">
                                        {solution.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] leading-relaxed flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden pb-4 sm:pb-[30px] break-words">
                                        {solution.desc}
                                    </div>
                                    <div className="shrink-0 pt-2">
                                        <Link
                                            href="/staff-augmentation"
                                            className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]"
                                        >
                                            Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoStaffAugmentationSection;
