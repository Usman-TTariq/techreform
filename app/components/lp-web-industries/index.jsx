"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Button from "../common/button";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";
import { INDUSTRY_IMAGES } from "@/app/constants/industry-images";

const industries = [
    {
        title: "Healthcare",
        description: "HIPAA-compliant websites for patient portals, optimal scheduling, and records management.",
        image: INDUSTRY_IMAGES.healthWellness,
        link: "/financing",
    },
    {
        title: "E-Commerce & Retail",
        description: "Conversion-focused commerce platforms with secure payments, inventory, and analytics tools.",
        image: INDUSTRY_IMAGES.retail,
        link: "/travel",
    },
    {
        title: "FinTech",
        description: "Secure web applications for transactions, dashboards, and financial reporting.",
        image: INDUSTRY_IMAGES.finance,
        link: "/e-commerce",
    },
    {
        title: "Education",
        description: "Interactive web portals for courses, assessments, and student management.",
        image: INDUSTRY_IMAGES.education,
        link: "/education",
    },
    {
        title: "Logistics",
        description: "Web systems for tracking shipments, managing fleets, and route planning.",
        image: INDUSTRY_IMAGES.foodBeverage,
        link: "/travel",
    },
    {
        title: "Real Estate",
        description: "Modern property websites with listings, virtual tours, and CRM integration.",
        image: INDUSTRY_IMAGES.hospitality,
        link: "/e-commerce",
    },
    {
        title: "Education",
        description: "Interactive web portals for courses, assessments, and student management.",
        image: INDUSTRY_IMAGES.education,
        link: "/education",
    },
    {
        title: "Logistics",
        description: "Web systems for tracking shipments, managing fleets, and route planning.",
        image: INDUSTRY_IMAGES.foodBeverage,
        link: "/travel",
    },
];

const LpWebIndustries = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pt-[70px] max-sm:pt-[0px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-4 max-lg:col-span-12">
                        <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
                        <div className="font-britanicaRegular text-[14px] text-left sm:text-[16px] md:text-[18px] font-regular text-white pt-3 leading-relaxed break-words">
                            Custom web development helps your business get ahead in the competitive, ever-evolving business landscape by improving business performance, customer experiences, and adaptability.

                        </div>
                    </div>
                    <div className="col-span-8 max-lg:col-span-12">
                        <div className="flex justify-end">
                            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-right max-sm:text-center">
                                <span className="text-white">Every </span>
                                <span className="text-[#F74B1C]">Industry Benefits</span>
                                <br />
                                <span className="text-white">from Customized Software </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[40px] max-sm:pt-[10px]">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={15}
                        slidesPerView={4}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {industries.map((industry, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-xl h-full border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="pb-[10px]">
                                            <Image
                                                className="w-full"
                                                src={industry.image}
                                                alt={industry.title}
                                                width={1000}
                                                height={1000}
                                            />
                                            <div className="flex justify-center -mt-[30px]">
                                                <Image
                                                    className="w-[85px] h-[85px]"
                                                    src="/images/globe-icon.png"
                                                    alt="Globe icon representing global industries coverage"
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                        </div>
                                        <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                            {industry.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[16px] font-regular text-white text-left">
                                            {industry.description}
                                        </div>
                                        <div className="pt-[30px] flex justify-start">
                                            <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="pt-5 sm:pt-[30px] flex justify-center">
                    <Button text="Find Out More About Customized Software" icon={false} onClick={() => setPopupOpen(true)} />
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpWebIndustries;
