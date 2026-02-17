"use client";

import Image from "next/image";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { useState } from "react";

const HeroSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative w-full min-w-0 min-h-[85vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[110vh] pb-16 sm:pb-12 md:pb-0 overflow-hidden bg-[#0E0E0E]">
            {/* Laptop: mobile par pehle wali position (55%), sm+ same */}
            <Image
                className="absolute top-[42%] sm:top-[38%] md:top-[30%] lg:top-[20%] left-[50%] translate-x-[-50%] w-[100%] max-w-[840px] sm:w-[78%] sm:max-w-none md:w-[75%] lg:w-[70%]"
                src="/images/herolaptop.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[20%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="/images/frame.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[20%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="/images/frame2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw]">
                {/* 98% box: mobile par aur neeche, sm+ par top-right */}
                <div className="absolute top-[99%] left-4 right-auto sm:top-[12%] sm:left-auto sm:right-8 md:right-12 lg:right-[200px] module-border-wrap w-[130px] sm:w-auto z-0">
                    <div className="bg-neutral-950 rounded-2xl md:rounded-4xl px-3 py-2.5 sm:px-4 md:px-[30px] md:py-[10px] glass-card">
                        <div className="text-[22px] sm:text-[32px] md:text-[36px] font-semibold tracking-tight text-white font-britanicaExtraBold">98%</div>
                        <div className="text-[11px] sm:text-[16px] md:text-[18px] font-light leading-tight text-white pb-2 sm:pb-4 md:pb-[40px] font-britanicaRegular">
                            Customer<br />Satisfaction
                        </div>
                    </div>
                </div>
                {/* "We reinvent" - hide on smallest, show from sm */}
                <div className="absolute top-[72%] sm:top-[50%] translate-y-[90%] right-4 sm:right-8 lg:right-0 hidden sm:block">
                    <div className="text-[14px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">we reinvent</div>
                    <div className="text-[14px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">business via</div>
                    <div className="text-[14px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">digital transformation</div>
                </div>
                <div className="grid grid-cols-12 pt-12 sm:pt-[90px] md:pt-[100px] lg:pt-[120px] relative z-20">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="font-britanicaBlack text-[26px] leading-[1.2] sm:text-[36px] md:text-[46px] lg:text-[50px] lg:leading-[52px] font-black">
                            <span className="text-white">Digitize Your Business</span><br /><span className="text-[#F74B1C]">Through Innovation</span>
                        </div>
                        <div className="font-britanicaRegular text-[14px] sm:text-[18px] md:text-[20px] font-regular text-white pt-3 sm:pt-[22px] max-w-xl">
                            We help businesses with advanced app development solutions for effective business management and growth.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Schedule a Free Consultation" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
}

export default HeroSection;