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
      title: "Client-First Delivery",
      desc: "We prioritize your goals, timelines, and product vision, and offer scalable digital products that fit your current business scale and growth plan.",
      icon: <CostIcon className="w-[30px]" />,
    },
    {
      title: "Specialized Mobile Expertise",
      desc: "Our iOS and Android development experts build enterprise mobile app solutions with high performance, security, and scalability to meet your users' needs.",
      icon: <CostIcon className="w-[20px]" />,
    },
    {
      title: "Flexible Team Scaling",
      desc: "We connect you with vetted engineers and dedicated development teams that integrate seamlessly into your workflow and adapt to your needs.",
      icon: <CostIcon className="w-[20px]" />,
    },
    {
      title: "Proven Enterprise Experience",
      desc: "We understand the technical aspects of building WRM and HRMS. Our specialist can effectively handle complex workflows, data security, and long-term scalability needs.",
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
          <div className="pb-[20px]">
            <CapsuleLabel firstWord="What" secondWord="We" thirdWord="Do" />
          </div>
          <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
            <span className="text-white">Building</span>
            <br />
            <span className="text-[#F74B1C]">Scalable Apps with </span>
            <br />
            <span className="text-white">Teams You Can Trust</span>
          </div>
          <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
            Our digital agency develops and scales mobile and e-commerce solutions with the ultimate blend of expert engineers, proven processes, and flexible teams aligned to your business goals.
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
                <SwiperSlide key={index} className="!h-full">
                  <div className="bg-white !h-full min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-[30px]">
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
