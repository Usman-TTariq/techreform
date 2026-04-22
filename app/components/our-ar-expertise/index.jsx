"use client";
import Image from "next/image";
import SquareIcon from "./svg/square-icon";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import TableIcon from "./svg/table-icon";
import { useState } from "react";
import HireExpertPopup from "../hire-expert-popup";

const OurARExpertise = () => {
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
                                    Marker-Based
                                </div>
                            </div>
                            <Image
                                className="w-full rounded-3xl mt-5"
                                src="/images/expertise01.jpeg"
                                alt="AR expertise showcase visual one"
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                Marker-based AR applications are widely used in AR product visualization development and custom augmented reality apps for business solutions. These apps display specific digital content on a device's screen via visual triggers such as QR codes or symbols. This way, you can create an unlimited number of markers and link them to unique digital elements; the system is highly scalable and flexible.
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
                            <br className="max-sm:hidden"/>
                            <span className="text-white">Into Our </span>
                            <br className="max-sm:hidden"/>
                            <span className="text-white">Technology </span>
                            <br className="max-sm:hidden"/>
                            <span className="text-[#F74B1C]">Expertise</span>
                        </div>
                        <div className="font-britanicaRegular text-center text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-sm:text-center">
                            Marker-based AR applications are commonly used for product visualization and marketing campaigns. These apps trigger digital content using visual markers such as QR codes, images, or symbols
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
                                        Markerless
                                    </div>
                                    <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-normal text-[#FF5A2D]">
                                        (Location-Based)
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="w-full rounded-3xl mt-5"
                                src="/images/expertise02.jpeg"
                                alt="AR expertise showcase visual two"
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                Markerless AR technology is mainly used in AR development for startups and affordable AR app development projects that require flexible, real-world interaction. These applications rely on GPS, internal device sensors, and advanced computer vision algorithms to understand the surrounding environment and accurately position digital elements.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default OurARExpertise;
