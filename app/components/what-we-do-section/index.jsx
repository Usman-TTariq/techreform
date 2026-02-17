"use client";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import CostIcon from "./svg/cost-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import PersonBook from "./svg/person-book";
import Square from "./svg/square";
import PersonBook2 from "./svg/person-bbok-2";

const WhatWeDoSection = () => {
  const solutions = [
    {
      title: "Client-First Delivery",
      desc: "We prioritize your goals, timelines, and product vision, and offer scalable digital products that fit your current business scale and growth plan.",
      icon: <CostIcon className="w-[30px]" />,
    },
    {
      title: "Specialized Mobile Expertise",
      desc: "Our iOS and Android development experts build enterprise mobile app solutions with high performance, security, and scalability to meet your users' needs.",
      icon: <PersonBook className="w-[35px]" />,
    },
    {
      title: "Flexible Team Scaling",
      desc: "We connect you with vetted engineers and dedicated development teams that integrate seamlessly into your workflow and adapt to your needs.",
      icon: <Square className="w-[40px]" />,
    },
    {
      title: "Proven Enterprise Experience",
      desc: "We understand the technical aspects of building WRM and HRMS. Our specialist can effectively handle complex workflows, data security, and long-term scalability needs.",
      icon: <PersonBook2 className="w-[36px]" />,
    },
  ];
  return (
    <div className="container relative pb-12 sm:pb-20 md:pb-[100px] lg:pb-[120px] px-4 sm:px-4 overflow-hidden">
      <Image
        className="w-[80%] sm:w-[60%] md:w-[50%] absolute -top-[15%] sm:-top-[40%] left-0 opacity-50 sm:opacity-60"
        src="/images/whatwedobk.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-6 lg:gap-5">
        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
          <div className="pb-4 sm:pb-[20px]">
            <CapsuleLabel firstWord="What" secondWord="We" thirdWord="Do" />
          </div>
          <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[42px] lg:text-[50px] lg:leading-[52px] font-black">
            <span className="text-white">Building</span>
            <br />
            <span className="text-[#F74B1C]">Scalable Apps with </span>
            <br />
            <span className="text-white">Teams You Can Trust</span>
          </div>
          <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-xl">
            Our digital agency develops and scales mobile and e-commerce solutions with the ultimate blend of expert engineers, proven processes, and flexible teams aligned to your business goals.
          </div>
          <div className="pt-6 sm:pt-[30px]">
            <Button text="Learn More" icon={false} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 min-w-0">
          <div className="overflow-hidden">
            <Swiper
              spaceBetween={16}
              slidesPerView={1.05}
              breakpoints={{
                480: { slidesPerView: 1.2, spaceBetween: 14 },
                640: { slidesPerView: 1.3, spaceBetween: 14 },
                768: { slidesPerView: 1.8, spaceBetween: 12 },
                1024: { slidesPerView: 1.8, spaceBetween: 10 },
                1280: { slidesPerView: 2.1, spaceBetween: 10 },
                1530: { slidesPerView: 2.1, spaceBetween: 10 },
              }}
            >
              {solutions.map((solution, index) => (
                <SwiperSlide key={index} className="!h-full">
                  <div className="bg-white !h-full min-h-[300px] sm:min-h-[380px] md:min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                    <div className="pb-3 sm:pb-[20px]">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                        {solution.icon}
                      </div>
                    </div>
                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight">
                      {solution.title}
                    </div>
                    <div className="font-britanicaRegular text-[#373636] text-[13px] sm:text-[16px] leading-relaxed pb-4 sm:pb-[30px]">
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
    </div>
  );
};

export default WhatWeDoSection;
