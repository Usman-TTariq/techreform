"use client";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
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
                            Off-the-shelf solutions might seem like the easier option, but in the long run, custom web applications give businesses an advantage by delivering tailored design, performance, and scalability. From seamless integrations to optimized performance, our development team transforms your vision into a fully functional platform built for success.
                        </div>
                    </div>
                </div>
                <div className="pt-[30px] flex justify-center">
                    <Button text="Schedule a Free Consultation" icon={false} onClick={() => setPopupOpen(true)} />
                </div>
            </div>
        </div>
    );
};

export default LpWebFacilities;
