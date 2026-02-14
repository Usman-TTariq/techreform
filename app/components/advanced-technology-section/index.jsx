"use client";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import CostIcon from "../what-we-do-section/svg/cost-icon";

const WhatWeDoMobileSection = () => {
    const solutions = [
        {
            title: "AI And ML",
            desc: "We embed ML models and AI APIs in mobile apps to automate decisions, personalize journeys, and keep control with human review paths always.",
            icon: <CostIcon className="w-[30px]" />,
        },
        {
            title: "IOT",
            desc: "IoT connectivity brings sensor and device data into mobile workflows, enabling tracking, alerts, and remote actions in real time reliably.",
            icon: <CostIcon className="w-[20px]" />,
        },
        {
            title: "CI/CD & Automation",
            desc: "CI/CD and automated QA run tests on every change, speeding releases while preventing regressions across iOS and Android versions too.",
            icon: <CostIcon className="w-[20px]" />,
        },
        {
            title: "Zero-Trust Security",
            desc: "Zero-trust security uses encryption, least privilege access, and secure storage, reducing breach risk and audit friction for regulated teams too.",
            icon: <CostIcon className="w-[20px]" />,
        },
    ];
    return (
        <div className="container relative pb-[120px]">
            <Image
                className="w-[50%] absolute -top-[40%] left-[0%]"
                src="/images/whatwedobk.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-5">
                    <div className="pb-[40px]">
                        <CapsuleLabel firstWord="What" secondWord="We" thirdWord="Do" />
                    </div>
                    <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                        <span className="text-white">Advanced</span>
                        <br />
                        <span className="text-[#F74B1C]">Technologies to</span>
                        <br />
                        <span className="text-white">for a complex world.</span>
                    </div>
                    {/* <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
            Tech Reforms empowers businesses with smart, secure, and scalable
            digital solutions. From cloud to mobile, security to advanced tech —
            we transform ideas into reliable technology.
          </div> */}
                    <div className="pt-[30px]">
                        <Button text="Learn More" icon={false} />
                    </div>
                </div>
                <div className="col-span-7">
                    <div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={2.2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 10,
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
                                    <div className="bg-white border-2 border-[#7724C1] rounded-2xl p-[30px]">
                                        <div className="pb-[20px]">
                                            <div className="w-[70px] h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                {solution.icon}
                                            </div>
                                        </div>
                                        <div className="text-[24px] font-britanicaBlack text-black pb-[10px]">
                                            {solution.title}
                                        </div>
                                        <div className=" font-britanicaRegular text-[#373636] text-[16px] pb-[30px]">
                                            {solution.desc}
                                        </div>
                                        <div>
                                            <Link
                                                href="/"
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
            <div className="grid grid-cols-12 gap-5 pt-[70px]">
                <div className="col-span-7">
                    <div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={2.2}
                            initialSlide={solutions.length - 1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 10,
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
                                    <div className="bg-white border-2 border-[#7724C1] rounded-2xl p-[30px]">
                                        <div className="pb-[20px]">
                                            <div className="w-[70px] h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                {solution.icon}
                                            </div>
                                        </div>
                                        <div className="text-[24px] font-britanicaBlack text-black pb-[10px]">
                                            {solution.title}
                                        </div>
                                        <div className=" font-britanicaRegular text-[#373636] text-[16px] pb-[30px]">
                                            {solution.desc}
                                        </div>
                                        <div>
                                            <Link
                                                href="/"
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
                <div className="col-span-5">
                    {/* <div className="pb-[40px]">
                        <CapsuleLabel firstWord="What" secondWord="We" thirdWord="Do" />
                    </div> */}
                    <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                        {/* <span className="text-white">Advanced</span>
                        <br /> */}
                        <span className="text-[#F74B1C]">Mobile Development </span>
                        <br />
                        <span className="text-white">Services</span>
                    </div>
                    <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                        Game apps that keep players engaged, paying, and returning. We shape mechanics, progression, and content updates around your audience. Expect smooth play, fair rewards, and store launches handled end-to-end today.
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
