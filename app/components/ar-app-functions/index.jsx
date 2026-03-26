"use client";
import { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";

const ArAppFunctions = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-[100px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-5 max-lg:col-span-12">
                        <CapsuleLabel firstWord="OUR" secondWord="FUNCTIONS" />
                        <div className="font-britanicaRegular pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                            Tech Reforms delivers innovative, scalable, and high-performance mobile game development solutions tailored to your vision. From concept to launch and beyond
                        </div>
                    </div>
                    <div className="col-span-7 max-lg:col-span-12">
                        <div className="flex justify-end">
                            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-right">
                                <span className="text-white">Functions We </span>
                                <span className="text-[#F74B1C]">Can Build</span>
                                <br />
                                <span className="text-[#F74B1C]">Into An </span>
                                <span className="text-white">AR App</span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="w-full scale-120"
                        src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1773854017/Group_2147225217_1_2_lujffv.png"
                        alt="AR App Functions"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute top-0 left-0 w-full pt-[30px] z-10">
                        <div className="flex justify-between w-full">
                            <div className="relative bg-white w-[300px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] ">
                                <Image
                                    className="w-[280px] absolute top-[70%] -translate-y-1/2 left-[100%]"
                                    src="/images/firstpoint.png"
                                    alt="AR App Functions"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">01</div>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">SCENE DETECTION</div>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our AR applications analyze real-world environments through the camera, convert captured visuals into coordinate-based data, and generate accurate depth maps to ensure precise and realistic 3D model placement.
                                </div>
                            </div>
                            <div className="bg-white w-[350px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
                                <Image
                                    src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772823391/3_qsiqie.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                <div className="relative z-10">
                                    <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</div>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">IMAGE & OBJECT RECOGNITION</div>
                                    <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        In addition to scene understanding, our AR applications can be trained to recognize specific 2D images and real-world 3D objects, enhancing them with relevant text or 3D model data directly on the device screen.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full pt-[30px]">
                            <div className="relative w-[300px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
                                {/* <Image
                                    className="w-[280px] absolute top-[70%] -translate-y-1/2 left-[100%]"
                                    src="/images/firstpoint.png"
                                    alt="AR App Functions"
                                    width={1000}
                                    height={1000}
                                /> */}
                                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">02</div>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">MOTION TRACKING</div>
                                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our motion tracking solutions enable precise object placement and interaction within AR environments. We work closely with your team, ensuring seamless integration and optimal performance.
                                </div>
                            </div>
                            <div className="relative bg-white w-[350px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px]">
                                {/* <Image
                                    className="w-[280px] absolute top-[70%] -translate-y-1/2 left-[100%]"
                                    src="/images/firstpoint.png"
                                    alt="AR App Functions"
                                    width={1000}
                                    height={1000}
                                /> */}
                                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">04</div>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">LIGHT ESTIMATION</div>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                Our light estimation techniques ensure that virtual objects interact realistically with real-world lighting conditions. We use advanced rendering methods and algorithms to create believable AR experiences with shadows, reflections, and ambient lighting.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArAppFunctions;
