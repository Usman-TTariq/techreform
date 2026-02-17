"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";

const whyPartner = [
    {
        title: "Flexible & Scalable Workforce",
        desc: "Hire expert professionals without long-term commitments. Scale your team up or down based on project demands.",
        icon: <AiIcon className="w-[40px]" />,
    },
    {
        title: "Cost-Effective Solutions",
        desc: "Reduce recruitment costs, overhead expenses, and onboarding time with our efficient IT staff augmentation services model.",
        icon: <AiIcon className="w-[40px]" />,
    },
    {
        title: "Industry-Focused Expertise",
        desc: "Our professionals bring experience across industries including fintech, healthcare, e-commerce, SaaS, and enterprise systems — ensuring domain-specific expertise tailored to your business.",
        icon: <AiIcon className="w-[40px]" />,
    },
];

const StaffAugmentationWhyPartnerSection = () => {
    return (
        <div className="container relative pb-[120px]">
            <Image
                className="w-[50%] absolute -top-[40%] left-[0%]"
                src="/images/whatwedobk.png"
                alt="Background"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-5 pt-[70px]">
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
                                            href="/staff-augmentation"
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
                        As a leading provider of staff augmentation services, we pride ourselves on delivering reliable, high-performing professionals who drive real business results. Our solutions are flexible, transparent, and designed to support both short-term projects and long-term growth strategies. <br />
                        Start your journey toward a smarter, more efficient workforce by partnering with a trusted IT staff augmentation provider.

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAugmentationWhyPartnerSection;
