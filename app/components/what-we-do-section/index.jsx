"use client";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import CostIcon from "./svg/cost-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const WhatWeDoSection = () => {
  const solutions = [
    {
      title: "Cost-effectiveness",
      desc: "We offer affordable digital solutions that help you reduce costs and improve your bottom line.",
      icon: <CostIcon className="w-[30px]" />,
    },
    {
      title: "InnovativeTechnology",
      desc: "We offer affordable digital solutions that help you reduce costs and improve your bottom line.",
      icon: <CostIcon className="w-[20px]" />,
    },
    {
      title: "Cost-effectiveness",
      desc: "We offer affordable digital solutions that help you reduce costs and improve your bottom line.",
      icon: <CostIcon className="w-[20px]" />,
    },
    {
      title: "Cost-effectiveness",
      desc: "We offer affordable digital solutions that help you reduce costs and improve your bottom line.",
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
            <span className="text-white">Simplifying</span>
            <br />
            <span className="text-[#F74B1C]">Digital Solutions</span>
            <br />
            <span className="text-white">for a complex world.</span>
          </div>
          <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
            Tech Reforms empowers businesses with smart, secure, and scalable
            digital solutions. From cloud to mobile, security to advanced tech —
            we transform ideas into reliable technology.
          </div>
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
    </div>
  );
};

export default WhatWeDoSection;
