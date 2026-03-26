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
        <div className="relative pb-[120px]">
            <div className="container relative">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-4">
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
                                alt=""
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                Marker-based apps use visual triggers—like QR codes or symbols—to display specific digital content on a device's screen. Because you can create an unlimited number of markers and pair them with unique digital elements, the system is highly scalable. This approach is ideal for linking digital information to specific physical objects, such as interactive 3D anatomical models or enhanced museum exhibits.
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 my-auto">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="OUR" secondWord="EXPERTISE" />
                        </div>
                        <div className="font-britanicaBlack text-center text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">A </span>
                            <span className="text-[#F74B1C]">Quick Dive</span>
                            <br />
                            <span className="text-white">Into Our</span>
                            <br />
                            <span className="text-white">Technology</span>
                            <br />
                            <span className="text-[#F74B1C]">Expertise</span>
                        </div>
                        <div className="font-britanicaRegular text-center text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            AR App types for smartphones, tablets, and AR glasses
                        </div>
                        <div className="pt-4 flex justify-center">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
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
                                alt=""
                                width={1000}
                                height={1000}
                            />
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[18px] font-regular text-white pt-4">
                                Markerless augmented reality applications leverage a combination of GPS, internal device sensors, and advanced computer vision algorithms to achieve accurate spatial positioning. This dynamic approach is utilized when augmentations must adapt to variable environments, enabling functionalities such as virtual furniture staging, location-based navigational overlays, and targeted retail promotions.
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
