"use client";

import Image from "next/image";
import { useState } from "react";

const ReviewSections = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      type: "clutch",
      rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
    },
    {
      type: "stat",
      value: "3+ Years",
      label: "Proven Track Record",
      rounded: "",
    },
    {
      type: "stat",
      value: "1.5k+",
      label: "Projects We've Done",
      rounded: "",
    },
    {
      type: "stat",
      value: "3 Mins",
      label: "Average Answer Time",
      rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
    },
  ];

  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-[120px] px-4 sm:px-4">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src="/images/reviewEllipse.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {cards.map((card, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(activeCard === index ? null : index);
                }
              }}
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
              {card.type === "clutch" ? (
                <>
                  <div>
                    <Image
                      className={`w-[40%] m-auto transition-all duration-300 ${activeCard === index ? "brightness-[15]" : ""} group-hover:brightness-[15]`}
                      src="/images/clutch-logo.png"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2 sm:pt-[10px]">
                    <Image
                      className={`w-[80px] sm:w-[100px] transition-all duration-300 ${activeCard === index ? "brightness-[2]" : ""} group-hover:brightness-[2]`}
                      src="/images/stars.png"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                    <div
                      className={`font-britanicaRegular text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] transition-all duration-300 ${activeCard === index ? "text-white" : "text-[#373636]"} group-hover:text-white`}
                    >
                      20K reviews
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-center transition-all duration-300 ${activeCard === index ? "text-white" : "text-black"} group-hover:text-white`}
                  >
                    {card.value}
                  </div>
                  <div
                    className={`font-britanicaRegular text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 ${activeCard === index ? "text-white" : "text-[#373636]"} group-hover:text-white`}
                  >
                    {card.label}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSections;
