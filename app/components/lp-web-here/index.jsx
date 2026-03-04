"use client";

import { useState } from "react";
import PencilIcon from "./svg/pencil-icon";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import CapsuleLabel from "../common/capsule-label";

const TITLE_GRADIENT = {
    background: 'linear-gradient(to right, rgb(118, 36, 193) 0%, rgb(255, 64, 64) 35%, rgb(255, 51, 51) 60%, rgb(245, 37, 37) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
};

const cards = [
    {
        title: "Custom Website Application Development",
        description: "We build tailored web applications that align with your brand and support unique business processes—from ERP and CRM to eCommerce and online training platforms.",
        highlighted: true,
    },
    {
        title: "Diverse Coding Experience",
        description: "Our team brings expertise across modern stacks and frameworks, delivering scalable, maintainable code that fits your technical requirements.",
        highlighted: false,
    },
    {
        title: "No Cookie-Cutter Solutions",
        description: "Every project is scoped and designed for your goals. We avoid templates and one-size-fits-all approaches to ensure your product stands out.",
        highlighted: false,
    },
    {
        title: "Content Management Systems",
        description: "We design and integrate CMS solutions so you can manage content with ease while keeping performance and security a priority.",
        highlighted: false,
    },
];

const LpWebHere = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div className="relative py-16 sm:py-20 bg-[#1A1A1A]">
            <div className="container relative">
                <div className="text-center">
                    <div className="flex justify-center pb-4">
                        <CapsuleLabel firstWord="HERE" secondWord="FOR" thirdWord="YOU" />
                    </div>
                    <div className="font-britanicaBlack text-[26px] leading-[1.2] sm:text-[36px] md:text-[40px] lg:text-[45px] xl:text-[60px] lg:leading-[55px] xl:leading-[65px] font-black">
                        <span className="text-white">Our </span>
                        <span className="text-[#F74B1C]">Web Development Company </span>
                        <span className="text-[#F74B1C]">Can </span>
                        <br />
                        <span className="text-white">Build Your Dream Web App</span>
                    </div>
                    <p className="font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] text-white/90 pt-4 max-w-3xl mx-auto leading-relaxed">
                        Our web development services can build a web application suited to your business needs. We design engaging and user-friendly web applications and websites that optimize the user experience. We deliver high-quality solutions for optimal business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-12 sm:pt-16">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border border-[#3F3F3F] p-6 flex flex-col min-h-0 ${!card.highlighted ? "bg-[#0E0E0E]" : ""}`}
                            style={
                                card.highlighted
                                    ? { background: 'linear-gradient(46deg, rgba(119,36,193,1) 0%, rgba(0,0,0,0) 100%)' }
                                    : undefined
                            }
                        >
                            <div className="flex gap-4 sm:gap-5 items-start flex-col">
                                <div className="text-[#F74B1C] shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                    <PencilIcon className="w-full h-full" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-britanicaBlack text-[16px] sm:text-[18px] md:text-[26px] font-black text-white leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="font-britanicaRegular text-[14px] sm:text-[15px] text-[#CCCCCC] pt-3 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-10 sm:pt-14">
                    <Button
                        text="Hire Web Developer"
                        icon={false}
                        onClick={() => setPopupOpen(true)}
                        className="!bg-white !border-white"
                        textClassName="!text-[#0E0E0E] group-hover:!text-white"
                    />
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpWebHere;
