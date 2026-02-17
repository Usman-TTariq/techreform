"use client";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import AiIcon from "./svg/ai-icon";

const WhatWeDoMobileSection = () => {
    const solutions = [
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

    const solutionss = [
        {
            title: "Expert Development Team",
            desc: "Hire Mobile App Developers from our dedicated team of expert developers. They deliver high-performance app solutions with proven expertise, faster workflows, and scalable architecture.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Secure & Scalable Architecture",
            desc: "We build all our mobile apps on a secure architecture that delivers data protection, high performance, reliability, and improved scalability for growing startups and enterprises.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Industry-Focused Solutions",
            desc: "Our Industry-specific mobile applications are designed to meet your business needs, address unique market demands via higher user engagement, and accelerate digital transformation.",
            icon: <AiIcon className="w-[40px]" />,
        }
    ];

    return (
        <div className="container relative pb-16 sm:pb-20 md:pb-[100px] lg:pb-[120px] px-4 sm:px-4">
            <Image
                className="w-[70%] sm:w-[60%] md:w-[50%] absolute -top-[20%] sm:-top-[40%] left-0 opacity-60"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 lg:gap-5">
                <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="Our" secondWord="App Development" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[45px] font-black">
                        <span className="text-white">Simplified Process of</span>
                        <br />
                        <span className="text-[#F74B1C]">Building Scalable Apps</span>
                        <br />
                        <span className="text-white">Through Smart Strategies</span>
                    </div>
                    {/* <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
            Tech Reforms empowers businesses with smart, secure, and scalable
            digital solutions. From cloud to mobile, security to advanced tech —
            we transform ideas into reliable technology.
          </div> */}
                    <div className="pt-6 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                    <div>
                        <Swiper
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
                                            <Link
                                                href="/"
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
            <div className="grid grid-cols-12 gap-5 pt-10 sm:pt-16 md:pt-[70px]">
                <div className="col-span-12 lg:col-span-7">
                    <div>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1.05}
                            initialSlide={solutions.length - 1}
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
                            {solutionss.map((solution, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white !h-full min-h-[300px] sm:min-h-[380px] md:min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
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
                                            <Link
                                                href="/"
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
                <div className="col-span-12 lg:col-span-5">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[55px] font-black">
                        <span className="text-[#F74B1C]">Why Partner </span>
                        <br />
                        <span className="text-white"> With Us</span>
                    </div>
                    <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                        We take pride in delivering high-performance app solutions built on a secure architecture. Each application we build is designed to meet the current industry standard for dynamic mobile app development in the USA.
                    </div>
                    {/* <div className="pt-[30px]">
                        <Button text="Learn More" icon={false} />
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default WhatWeDoMobileSection;
