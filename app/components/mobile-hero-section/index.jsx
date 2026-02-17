"use client";

import Image from "next/image";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { useState } from "react";

const MobileHeroSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative w-full min-w-0 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[110vh] pb-4 sm:pb-8 md:pb-0 overflow-hidden bg-[#0E0E0E]">
            <Image
                className="absolute top-[15%] sm:top-0 left-[50%] translate-x-[-50%] w-[45%] sm:w-[32%] md:w-[28%] lg:w-[25%] sm:left-[60%] max-w-[200px] sm:max-w-none"
                src="/images/mobilehero.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[22%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="/images/frame.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[22%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="/images/frame2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="absolute top-[52%] sm:top-[50%] translate-y-[90%] right-4 sm:right-8 lg:right-0 hidden sm:block">
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">Leading App</div>
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">Developers</div>
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">in USA</div>
                </div>
                <div className="grid grid-cols-12 pt-12 sm:pt-[90px] md:pt-[100px] lg:pt-[120px] relative z-20">
                    <div className="col-span-12 lg:col-span-6 min-w-0">
                        <div className="font-britanicaBlack text-[24px] leading-[1.25] sm:text-[36px] md:text-[42px] lg:text-[48px] lg:leading-[52px] font-black">
                            <span className="text-white">Custom Mobile </span>
                            <span className="text-[#F74B1C]">App Development Company</span>
                            <br />
                            <span className="text-white">in the USA</span>
                        </div>
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-[22px] max-w-full lg:max-w-xl leading-relaxed break-words">
                            Are you looking for futuristic mobile app development services that can build innovative mobile applications for your scaling businesses? With years of experience in creating immersive and highly functional apps, Tech Reforms brings scalable mobile app solutions to your doorstep. Partner with us to get reliable, high-performing, seamless apps across all devices.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Hire Expert App Developers Today" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
}

export default MobileHeroSection;