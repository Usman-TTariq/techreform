"use client";
import React, { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import ClaendarIcon from "./svg/calendar-icon";
import Button from "../common/button";

const LpAppprocess = () => {
    const [popupOpen, setPopupOpen] = useState(false);
  const processes = [
    {
      title: "Discovery & Planning",
      desc: "Understand client requirements and define project scope.",
    },
    {
      title: "Design & Prototyping",
      desc: "Create intuitive UI/UX designs aligned with user expectations.",
    },
    {
      title: "Development, Testing & QA",
      desc: "Ensure the app is bug-free and performs seamlessly across devices",
    },
    {
      title: "Deployment & Support",
      desc: "Launch the app and provide ongoing maintenance and updates.",
    },
  ];
  return (
    <div className="relative pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="OUR" secondWord="PROCESS" />
            </div>
            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Our </span>
              <span className="text-[#F74B1C]">Development </span>
              <span className="text-white">Process</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
              From enhancing customer engagement to modernizing legacy systems,
              industry-specific mobile solutions are enabling organizations to
              adapt and thrive in an increasingly digital world.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 pt-[40px]">
          {processes.map((process, index) => (
            <div key={index} className="col-span-3">
              <div className="flex justify-center">
                <div className="border border-[#B96BFE] rounded-2xl p-5">
                  <ClaendarIcon className="w-[30px] h-[30px]" />
                </div>
              </div>
              <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-center py-1 sm:py-[10px]">
                {process.title}
              </div>
              <div className="font-britanicaRegular text-[16px] font-regular text-white text-center">
                {process.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-[50px]">
            <Button text="Schedule a Free Consultation" icon={false} onClick={() => buttonText && setPopupOpen(true)} />
        </div>
      </div>
    </div>
  );
};

export default LpAppprocess;
