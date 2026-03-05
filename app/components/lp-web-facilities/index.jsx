"use client";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { useState } from "react";

const LpWebFacilities = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative py-[100px] mb-[60px] max-sm:pt-[30px] max-sm:pb-[30px] max-sm:mb-[30px]">
            <Image
                className="w-full absolute top-0 left-0 h-full object-cover"
                src="/images/facilitiesbk.png"
                alt="Facilities Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHY" secondWord="CHOOSE" thirdWord="US" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[55px] lg:leading-[52px] font-black">
                            <span className="text-white">Why Choose </span>
                            <span className="text-[#F74B1C]">Custom Web</span>
                            <br />
                            <span className="text-white">Development?</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            We aim to offer smart, conversion-ready solutions that combine innovation, technical expertise, and a client-first mindset. Our scalable apps are built simply to support your current growth and future plans. From mobile and e-commerce to enterprise systems, our flexible teams deliver secure, high-performing solutions with clear communication, proven processes, and long-term reliability you can trust.
                        </div>
                    </div>
                </div>
                <div className="pt-[30px] flex justify-center">
                    <Button text="Speak With a Developer" icon={false} onClick={() => setPopupOpen(true)} />
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpWebFacilities;
