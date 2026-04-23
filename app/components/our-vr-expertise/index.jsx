"use client";
import Image from "next/image";
import SquareIcon from "../our-ar-expertise/svg/square-icon";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import TableIcon from "../our-ar-expertise/svg/table-icon";
import { useState } from "react";
import HireExpertPopup from "../hire-expert-popup";

const OurVRExpertise = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-[120px] max-sm:pb-[30px]">
            <div className="container relative">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-12 md:col-span-4 order-2 md:order-1">
                        <div className="!bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border-2 border-[#ffffff24] rounded-2xl p-5 h-full">
                            <div className="flex items-center justify-start gap-4">
                                <SquareIcon className="w-[40px]" />
                                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[24px] font-semibold text-white">
                                    Standalone VR
                                </div>
                            </div>
                            <Image
                                className="w-full rounded-3xl mt-5"
                                src="/images/expertise01.jpeg"
                                alt="VR expertise showcase visual one"
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                Standalone VR application development will be undertaken to create simplified training simulations, product demonstrations, and immersive business experiences. As a VR app development company, we build solutions that run directly on VR headsets without requiring additional external hardware. These Virtual Reality Development Services make deployment easier and accessible for businesses.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 my-auto sm:col-span-12 order-1 md:order-2">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="OUR" secondWord="EXPERTISE" />
                        </div>
                        <div className="font-britanicaBlack text-center text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">A </span>
                            <span className="text-[#F74B1C]">Quick Dive </span>
                            <br className="max-sm:hidden" />
                            <span className="text-white">Into Our </span>
                            <br className="max-sm:hidden" />
                            <span className="text-white">VR Technology </span>
                            <br className="max-sm:hidden" />
                            <span className="text-[#F74B1C]">Expertise</span>
                        </div>
                        <div className="font-britanicaRegular text-center text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-sm:text-center">
                            VR App types for enhanced virtual experiences
                        </div>
                        <div className="pt-4 flex justify-center">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-4 order-3 md:order-3">
                        <div className="!bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border-2 border-[#ffffff24] rounded-2xl p-5 h-full">
                            <div className="flex items-center justify-start gap-4">
                                <TableIcon className="w-[40px]" />
                                <div>
                                    <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[24px] font-semibold text-white">
                                        PC-Powered VR
                                    </div>
                                    {/* <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-normal text-[#FF5A2D]">
                                        (Wireless Headsets)
                                    </div> */}
                                </div>
                            </div>
                            <Image
                                className="w-full rounded-3xl mt-5"
                                src="/images/expertise02.jpeg"
                                alt="VR expertise showcase visual two"
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                PC-powered VR equips our experts to develop simulations, gaming environments, and complex enterprise applications. Through expert VR Software Development, these experiences effectively connect VR headsets to powerful computers. This connection enables highly detailed environments, realistic interactions, and high-performance virtual worlds that help your business to scale faster.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default OurVRExpertise;
