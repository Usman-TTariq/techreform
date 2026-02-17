"use client";

import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";

const WhatWeDoEcommerceSection = () => {
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
        <div className="container relative pb-[120px]">
            <Image
                className="w-[50%] absolute -top-[40%] left-[0%]"
                src="/images/whatwedobk.png"
                alt="Background"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-5">
                    <div className="pb-[40px]">
                        <CapsuleLabel firstWord="Our" secondWord="E-Commerce" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[42px] leading-[45px] font-black">
                        <span className="text-white">Seamless Process For</span>
                        <br />
                        <span className="text-[#F74B1C]">Fully Responsive E-commerce Website</span>
                        <br />
                        <span className="text-white">With Advanced Features</span>
                    </div>
                    <div className="pt-[30px]">
                        <Button text="Learn More" icon={false} />
                    </div>
                </div>
                <div className="col-span-7">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.2}
                        breakpoints={{
                            640: { slidesPerView: 1.2, spaceBetween: 10 },
                            768: { slidesPerView: 1.8, spaceBetween: 10 },
                            1024: { slidesPerView: 1.8, spaceBetween: 10 },
                            1280: { slidesPerView: 2.1, spaceBetween: 10 },
                            1530: { slidesPerView: 2.1, spaceBetween: 10 },
                        }}
                    >
                        {solutions.map((solution, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white border-2 !h-full min-h-[420px] border-[#7724C1] rounded-2xl p-[30px]">
                                    <div className="pb-[20px]">
                                        <div className="w-[70px] h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                            {solution.icon}
                                        </div>
                                    </div>
                                    <div className="text-[24px] font-britanicaBlack text-black pb-[10px]">
                                        {solution.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[30px]">
                                        {solution.desc}
                                    </div>
                                    <div>
                                        <Link
                                            href="/ecommerce"
                                            className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                                        >
                                            Learn More <ArrowRight className="w-[16px]" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 pt-[70px]">
                <div className="col-span-7">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.2}
                        initialSlide={solutions.length - 1}
                        breakpoints={{
                            640: { slidesPerView: 1.2, spaceBetween: 10 },
                            768: { slidesPerView: 1.8, spaceBetween: 10 },
                            1024: { slidesPerView: 1.8, spaceBetween: 10 },
                            1280: { slidesPerView: 2.1, spaceBetween: 10 },
                            1530: { slidesPerView: 2.1, spaceBetween: 10 },
                        }}
                    >
                        {whyPartner.map((solution, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white !h-full min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-[30px]">
                                    <div className="pb-[20px]">
                                        <div className="w-[70px] h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                            {solution.icon}
                                        </div>
                                    </div>
                                    <div className="text-[24px] font-britanicaBlack text-black pb-[10px]">
                                        {solution.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[30px]">
                                        {solution.desc}
                                    </div>
                                    <div>
                                        <Link
                                            href="/ecommerce"
                                            className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                                        >
                                            Learn More <ArrowRight className="w-[16px]" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="col-span-5">
                    <div className="font-britanicaBlack text-[50px] leading-[55px] font-black">
                        <span className="text-[#F74B1C]">Why Partner </span>
                        <br />
                        <span className="text-white"> With Us</span>
                    </div>
                    <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                    As a leading E-commerce platform development agency, we take pride in the platforms we deliver. Modern designs, an easy-to-understand user flow, and SEO-friendly end-to-end e-commerce websites.<br/>
                    So, begin your journey to the smartest and most accessible dedicated team of scalable app developers by clicking a few buttons and paying an upfront fee.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoEcommerceSection;
