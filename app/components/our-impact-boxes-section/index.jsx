"use client";

import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import { useState } from "react";

const cards = [
  { value: "20+", label: "Years of Experience", rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]" },
  { value: "150+", label: "In-house App Experts", rounded: "" },
  { value: "30+", label: "Industry Verticals", rounded: "" },
  { value: "350+", label: "Live Apps", rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]" },
];

const OurImpactBoxesSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] pt-0 sm:pt-10 md:pt-[50px] px-4 sm:px-4">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src="/images/reviewEllipse.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        <div className="col-span-12 pb-6 sm:pb-[30px] flex justify-center">
          <CapsuleLabel firstWord="OUR" secondWord="IMPACT" />
        </div>
        {cards.map((card, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveCard(activeCard === index ? null : index); } }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`group relative h-full rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] transition-all duration-300 cursor-pointer touch-manipulation ${card.rounded} ${activeCard === index ? "bg-[#7724C1]" : "bg-white"} hover:bg-[#7724C1]`}
            >
              <Image
                className={`w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] transition-all duration-300 ${activeCard === index ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
                src="/images/hover-logo.png"
                alt=""
                width={1000}
                height={1000}
              />
              <Image
                className={`w-[35%] h-full absolute top-0 right-0 transition-all duration-300 ${activeCard === index ? "opacity-100" : "opacity-0"} group-hover:opacity-100 ${index === 3 ? "rounded-tr-[130px]" : ""}`}
                src="/images/hovertext.png"
                alt=""
                width={1000}
                height={1000}
              />
              <div className={`text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-center transition-all duration-300 ${activeCard === index ? "text-white" : "text-black"} group-hover:text-white`}>
                {card.value}
              </div>
              <div className={`font-britanicaRegular text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 ${activeCard === index ? "text-white" : "text-[#373636]"} group-hover:text-white`}>
                {card.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpactBoxesSection;
