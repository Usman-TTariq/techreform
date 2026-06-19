"use client";

import Image from "next/image";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const DEFAULT_CARDS = [
  {
    value: "350+",
    label: "Live Apps",
    action: "View Portfolio",
    href: "/portfolio",
    isLink: true,
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    value: "4.9★",
    label: "Clutch Rating",
    action: "See Reviews",
    href: "https://clutch.co/profile/tech-reforms",
    isLink: true,
    rounded: "",
  },
  {
    value: "$5K",
    label: "Starting Price",
    action: "Fixed-price",
    isLink: false,
    rounded: "",
  },
  {
    value: "4-8wk",
    label: "MVP Timeline",
    action: "Guaranteed",
    isLink: false,
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const OurImpactBoxesSection = ({ cards = DEFAULT_CARDS }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const displayedCard = hoveredIndex !== null ? hoveredIndex : activeCard;

  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] pt-0 sm:pt-10 md:pt-[50px] px-4 sm:px-4">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src="/images/reviewEllipse.png"
        alt="Soft gradient ellipse behind Our Impact stats section"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        <div className="col-span-12 pb-6 sm:pb-[30px] flex justify-center max-sm:mb-[50px]">
          <CapsuleLabel firstWord="OUR" secondWord="IMPACT" />
        </div>
        {cards.map((card, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <div
              role="button"
              tabIndex={0}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(activeCard === index ? null : index);
                }
              }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`group relative h-full rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] transition-all duration-300 cursor-pointer touch-manipulation ${card.rounded} ${displayedCard === index ? "bg-[#7724C1]" : "bg-white"}`}
            >
              <Image
                className={`w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] transition-all duration-300 ${displayedCard === index ? "opacity-100" : "opacity-0"}`}
                src="/images/hover-logo.png"
                alt={`Tech Reforms logo accent for ${card.label} impact stat`}
                width={1000}
                height={1000}
              />
              <Image
                className={`w-[35%] h-full absolute top-0 right-0 transition-all duration-300 ${displayedCard === index ? "opacity-100" : "opacity-0"} ${index === 3 ? "rounded-tr-[130px]" : ""}`}
                src="/images/hovertext.png"
                alt={`Decorative hover highlight for ${card.label}`}
                width={1000}
                height={1000}
              />
              <div
                className={`text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-center transition-all duration-300 ${displayedCard === index ? "text-white" : "text-[#7724C1]"}`}
              >
                {card.value}
              </div>
              <div
                className={`font-britanicaRegular text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 ${displayedCard === index ? "text-white" : "text-[#373636]"}`}
              >
                {card.label}
              </div>
              {card.action && (
              <div className="pt-3 sm:pt-4 flex justify-center">
                {card.isLink ? (
                  <Link
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1 font-britanicaRegular text-sm sm:text-base transition-all duration-300 hover:underline ${displayedCard === index ? "text-[#B8F5C8]" : "text-[#16A34A]"}`}
                  >
                    {card.action}
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
                  </Link>
                ) : (
                  <span
                    className={`font-britanicaRegular text-sm sm:text-base transition-all duration-300 ${displayedCard === index ? "text-[#B8F5C8]" : "text-[#16A34A]"}`}
                  >
                    {card.action}
                  </span>
                )}
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpactBoxesSection;
