"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const LpWebPortfolioCase = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div className="relative py-12 sm:py-16 mb-[200px] max-sm:mb-[0px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-8 pt-[50px]">
                    <div className="col-span-6 max-lg:col-span-12 my-auto max-sm:col-span-10">
                        <div className="pb-[20px]">
                            <CapsuleLabel firstWord="MOBILE APP WEB" secondWord="APP" />
                            <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                                <span className="text-white">Apex </span>
                                <span className="text-[#F74B1C]">Fitness</span>
                            </div>
                            <div className="font-britanicaRegular text-[20px] max-sm:text-[16px] max-sm:pr-[0px] font-regular text-white pt-[22px]">
                                Apex Fitness is a powerful health and wellness platform available as both a Mobile App and Web Application, designed to help users achieve peak performance anytime, anywhere. With a modern design and user-friendly interface, Apex Fitness allows users to book workout sessions, join live or recorded classes, and track their fitness progress seamlessly across devices.
                            </div>
                            <div className="font-britanicaRegular text-[20px] font-regular max-sm:text-[16px] max-sm:pr-[00px] text-white pt-[22px]">
                                The platform offers personalized workout plans, yoga sessions, strength training programs, and detailed performance analytics. Whether accessed through a smartphone or desktop, Apex Fitness ensures a smooth, synchronized, and engaging experience.
                            </div>
                            <div className="font-britanicaRegular text-[20px] pt-[12px] max-sm:text-[16px] max-sm:pr-[90px]">
                                <span className="text-white">Andrew Kmett, </span>
                                <span className="text-[#F74B1C]"> Director of a Company</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 max-lg:col-span-12 my-auto max-sm:col-span-10">
                        <div className="pb-[10px]">
                            <Image
                                className="w-[100%]"
                                src="/images/port3.png"
                                alt="Apex Fitness Portfolio Project"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpWebPortfolioCase;
