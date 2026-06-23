"use client";

import { useRef, useEffect, useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import AiIcon from "./svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";
import { goToContact } from "@/app/utils/goToContact";

const DEFAULT_SOLUTIONS = [
        {
            title: "Requirement Gathering",
            desc: "Our process starts with a detailed requirements-gathering session. This helps our experts scope the app's goal, target audience, and technical requirements.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "UI/UX Mockups",
            desc: "Our certified designers then develop the perfect UI/UX that not only offers seamless navigation but also actively engages users through high accessibility and a satisfying interface.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "App Development",
            desc: "During Development, we focus all our resources on building scalable, secure, high-performance mobile applications using the latest frameworks and clean code practices.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Quality Testing",
            desc: "We perform a comprehensive mobile app testing and deployment process to gain bug-free performance, security compliance, and cross-device compatibility.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Ongoing Support",
            desc: "Lastly, the maintenance and support phase begins. This is where we review all technical details one last time to ensure optimal performance monitoring, security enhancements, and optimal end-to-end app development.",
            icon: <AiIcon className="w-[40px]" />,
        },
    ];

const WhatWeDoMobileSection = ({
    headlinePrefix,
    headlineAccent,
    headlineSuffix,
    cards,
    partnerSection,
}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const row1Ref = useRef(null);
    const swiper1Ref = useRef(null);
    const [swiper1Ready, setSwiper1Ready] = useState(false);

    useEffect(() => {
        const row1 = row1Ref.current;
        const swiper1 = swiper1Ref.current;
        if (!row1 || !swiper1 || !swiper1Ready) return;

        const handleWheel = (e) => {
            const rect1 = row1.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const inView1 = rect1.top < viewportHeight * 0.8 && rect1.bottom > viewportHeight * 0.2;
            if (!inView1) return;

            if (e.deltaY > 0) {
                if (!swiper1.isEnd) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper1.slideNext();
                }
            } else if (e.deltaY < 0) {
                if (!swiper1.isBeginning) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper1.slidePrev();
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [swiper1Ready]);

    const solutions = (cards ?? DEFAULT_SOLUTIONS).map((card) => ({
        title: card.title,
        desc: card.description ?? card.desc,
        icon: card.icon ?? <AiIcon className="w-[40px]" />,
    }));

    const titlePrefix = headlinePrefix ?? "Simplified Process of";
    const titleAccent = headlineAccent ?? "Building Scalable Apps";
    const titleSuffix = headlineSuffix ?? "Through Smart Strategies";

    const partnerHeadlinePrefix = partnerSection?.headlinePrefix ?? "Why Partner ";
    const partnerHeadlineAccent = partnerSection?.headlineAccent ?? "";
    const partnerHeadlineSuffix = partnerSection?.headlineSuffix ?? "With Us";
    const partnerParagraphs = partnerSection?.paragraphs ?? [
        "We take pride in delivering high-performance app solutions built on a secure architecture. Each application we build is designed to meet the current industry standard for dynamic mobile app development in the USA.",
        "So, begin your journey to the smartest and most accessible dedicated team of expert app developers by clicking a few buttons and paying an upfront fee.",
    ];
    const partnerCtaText = partnerSection?.ctaText;
    const partnerCtaPhone = partnerSection?.ctaPhone;

    return (
        <div className="container relative pb-16 sm:pb-20 md:pb-[100px] lg:pb-[120px] px-4 sm:px-4">
            <Image
                className="w-[70%] sm:w-[60%] md:w-[50%] absolute -top-[20%] sm:-top-[40%] left-0 opacity-60"
                src="/images/whatwedobk.png"
                alt="Decorative purple gradient behind advanced technology section"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 lg:gap-5">
                <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                    <div className="pb-6 sm:pb-[40px] max-sm:flex max-sm:justify-center">
                        <CapsuleLabel firstWord="Our" secondWord="Mobile App Development" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[28px] leading-tight max-sm:text-center sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[45px] font-black">
                        <span className="text-white">{titlePrefix}</span>
                        {(titleAccent || titleSuffix) && " "}
                        {titleAccent && (
                            <>
                                <span className="text-[#F74B1C]">{titleAccent}</span>
                                {titleSuffix && " "}
                            </>
                        )}
                        {titleSuffix && <span className="text-white">{titleSuffix}</span>}
                    </div>
                    {/* <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
            Tech Reforms empowers businesses with smart, secure, and scalable
            digital solutions. From cloud to mobile, security to advanced tech —
            we transform ideas into reliable technology.
          </div> */}
                    <div className="pt-6 sm:pt-[30px] max-sm:flex max-sm:justify-center">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div ref={row1Ref} className="col-span-12 lg:col-span-7 order-1 lg:order-2 min-w-0">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiper1Ref.current = swiper; setSwiper1Ready(true); }}
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
                            {solutions.map((solution, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border-2 !h-full min-h-[300px] sm:min-h-[380px] md:min-h-[420px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                        <div className="pb-3 sm:pb-[20px]">
                                            <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                {solution.icon}
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px]">
                                            {solution.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-5 sm:pb-[30px]">
                                            {solution.desc}
                                        </div>
                                        <div>
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
            <div className="pt-10 sm:pt-16 md:pt-[70px] max-w-4xl mx-auto text-center">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[55px] font-black">
                    <span className="text-[#F74B1C]">{partnerHeadlinePrefix}</span>
                    {partnerHeadlineAccent && (
                        <>
                            <span className="text-white">{partnerHeadlineAccent}</span>
                            {" "}
                        </>
                    )}
                    <span className="text-white">{partnerHeadlineSuffix}</span>
                </div>
                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] space-y-4 leading-relaxed">
                    {partnerParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                {(partnerCtaText || partnerCtaPhone) && (
                    <div className="pt-6 sm:pt-[30px] flex flex-wrap gap-3 sm:gap-4 justify-center">
                        {partnerCtaText && (
                            <Button text={partnerCtaText} icon={false} onClick={goToContact} />
                        )}
                        {partnerCtaPhone && (
                            <Button
                                text={partnerCtaPhone}
                                textClassName="!text-[#F74B1C]"
                                className="!bg-transparent"
                                hoverClassName="!bg-transparent"
                                icon={false}
                                onClick={() => { window.location.href = "tel:+15822335015"; }}
                            />
                        )}
                    </div>
                )}
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default WhatWeDoMobileSection;
