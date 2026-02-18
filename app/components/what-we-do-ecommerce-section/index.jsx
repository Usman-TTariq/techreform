"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WhatWeDoEcommerceSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const solutions = [
        {
            title: "Requirement Analysis",
            desc: "Our process starts by understanding industry requirements and major competitors to curate a custom strategy that serves your target audience effectively.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Planning and Stretegy",
            desc: "We cultivate our approach and development process on platform selection. This includes WooCommerce, Shopify, and custom features.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Testing and Optimization",
            desc: "During development, our experts focus on testing each feature before the launch. This is done to ensure that speed, security, and performance meet requirements.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Launch Support",
            desc: "Lastly, the maintenance and support phase begins after launch, with updates and ongoing maintenance to ensure your store grows effectively.",
            icon: <AiIcon className="w-[40px]" />,
        }
    ];

    const whyPartner = [
        {
            title: "Dynamic E-commerce Platforms",
            desc: "Hire Expert E-commerce Developers to get hassle-free development of e-commerce platforms that offer high conversion and sales.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "High Visibility",
            desc: "Every e-commerce platform requires consistent traffic to offer high sales or profits. Our post-launch supports and marketing solutions help get and maintain high visibility.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Industry-Focused Solutions",
            desc: "Our Industry-specific e-commerce apps are designed to meet your business needs, address unique market demands, and drive higher user engagement.",
            icon: <AiIcon className="w-[40px]" />,
        },
    ];

    return (
        <div className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-0 relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="Our" secondWord="E-Commerce" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Seamless Process For</span>
                        <br />
                        <span className="text-[#F74B1C]">Fully Responsive E-commerce Website</span>
                        <br />
                        <span className="text-white">With Advanced Features</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2">
                    <Swiper
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
                            <SwiperSlide key={index}>
                                <div className="bg-white border-2 h-full min-h-0 md:!min-h-[420px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                    <div className="pb-3 sm:pb-[20px]">
                                        <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                                            <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                        </div>
                                    </div>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words">{solution.title}</div>
                                    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[30px] leading-relaxed">{solution.desc}</div>
                                    <div>
                                        <button type="button" onClick={() => setPopupOpen(true)} className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                            Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
                <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        initialSlide={solutions.length - 1}
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
                        {whyPartner.map((solution, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white h-full min-h-0 md:!min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                    <div className="pb-3 sm:pb-[20px]">
                                        <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                                            <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                        </div>
                                    </div>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words">{solution.title}</div>
                                    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[30px] leading-relaxed">{solution.desc}</div>
                                    <div>
                                        <button type="button" onClick={() => setPopupOpen(true)} className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                            Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
                        <span className="text-[#F74B1C]">Why Partner </span>
                        <br />
                        <span className="text-white"> With Us</span>
                    </div>
                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                    As a leading E-commerce platform development agency, we take pride in the platforms we deliver. Modern designs, an easy-to-understand user flow, and SEO-friendly end-to-end e-commerce websites.<br/>
                    So, begin your journey to the smartest and most accessible dedicated team of scalable app developers by clicking a few buttons and paying an upfront fee.
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default WhatWeDoEcommerceSection;
