"use client";

import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";

const WhatWeDoStaffAugmentationSection = () => {
    const solutions = [
        {
            title: "Requirement Analysis",
            desc: "Our process begins by understanding your technical requirements, team structure, and business objectives. We identify skill gaps and define the ideal candidate profile for your project.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Talent Sourcing & Screening",
            desc: "We carefully screen and shortlist candidates based on technical expertise, industry experience, and cultural fit. Only the top professionals are presented for your approval.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Onboarding & Integration",
            desc: "Selected professionals are onboarded quickly and integrated into your team. We ensure seamless communication, collaboration, and alignment with your existing workflows.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Ongoing Support & Optimization",
            desc: "We provide continuous support to ensure performance, productivity, and scalability. As your needs evolve, we help you scale your augmented team accordingly.",
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
                        <CapsuleLabel firstWord="Our" secondWord="Staff Augmentation" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[42px] leading-[45px] font-black">
                        <span className="text-white">Streamlined Process For</span>
                        <br />
                        <span className="text-[#F74B1C]">High-Performance Team Expansion</span>
                        <br />
                        <span className="text-white">With Scalable Engagement Models</span>
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
            </div>
        </div>
    );
};

export default WhatWeDoStaffAugmentationSection;
