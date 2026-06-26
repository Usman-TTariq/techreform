"use client";
import { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";

const ArAppFunctions = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-[100px] max-sm:pb-[0px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-5 max-lg:col-span-12">
                        <div className="max-sm:flex max-sm:justify-center">
                            <CapsuleLabel firstWord="OUR" secondWord="FUNCTIONS" />
                        </div>
                        <div className="font-britanicaRegular max-sm:text-center pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                            Tech Reforms builds practical, high-quality Enterprise AR solutions designed around real user needs and business goals. We offer reliable AR Development Services for Businesses that require innovation and creative AR app deployment.
                        </div>
                    </div>
                    <div className="col-span-7 max-lg:col-span-12">
                        <div className="flex justify-end max-sm:justify-center">
                            <h2 className="font-britanicaBlack max-sm:text-center text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[45px] 2xl:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-right">
                                <span className="text-white">Functions We </span>
                                <span className="text-[#F74B1C]">Can Build </span>
                                <br className="max-sm:hidden" />
                                <span className="text-[#F74B1C]">Into An </span>
                                <span className="text-white">AR App</span>
                            </h2>
                        </div>
                        <div className="flex justify-end max-sm:justify-center">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
                <div className="relative max-xl:pb-[120px] max-sm:pb-[0px]">
                    <Image
                        className="w-full scale-120 max-sm:hidden"
                        src="https://ik.imagekit.io/sajib4aqc/Group%202147225217.png"
                        alt="Overview diagram of AR app functions we can build"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute max-sm:relative top-0 left-0 w-full pt-[30px] z-10">
                        <div className="flex justify-between w-full max-sm:flex-col">
                            <div className="relative bg-white w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] ">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:top-[60%] -translate-y-1/2 left-[100%]"
                                    src="/images/firstpoint.png"
                                    alt="Connector graphic for Scene Detection AR function"
                                    width={1000}
                                    height={1000}
                                />
                                <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">01</span>
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">SCENE DETECTION</h3>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our AR-based business applications analyze real-world environments using your device’s camera, convert captured visuals into coordinate-based data, and generate accurate depth maps to attain realistic 3D model placement.
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:-left-[54%] -translate-y-1/2 -left-[80%] z-20"
                                    src="/images/thirdpoint.png"
                                    alt="Connector graphic for Image and Object Recognition AR function"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="bg-white w-[350px] max-sm:w-full max-sm:hidden border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
                                    <Image
                                        src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
                                        alt="Background illustration for Image and Object Recognition AR function card"
                                        width={1000}
                                        height={1000}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                    <div className="relative z-10">
                                        <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</span>
                                        <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">IMAGE & OBJECT RECOGNITION</h3>
                                        <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        With expert custom AR app development, users can train our AR applications to recognize specific 2D images and real-world 3D objects. Such apps can also enhance inputs with relevant text or 3D model data directly on the device screen.
                                        </div>
                                    </div>
                                </div>
                                <div className="relative hidden max-sm:block w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
                                    <Image
                                        className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                                        src="/images/secondpoint.png"
                                        alt="Connector graphic for Motion Tracking AR function on mobile"
                                        width={1000}
                                        height={1000}
                                    />
                                    <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">02</span>
                                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">MOTION TRACKING</h3>
                                    <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        Our motion-tracking features provide precise object placement and interactions within AR environments. As an experienced AR software development company, we collaborate with your team to deliver seamless integration for optimal performance.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full pt-[30px] max-sm:pt-[10px]  max-sm:flex-col">
                            <div className="relative max-sm:hidden w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                                    src="/images/secondpoint.png"
                                    alt="Connector graphic for Motion Tracking AR function"
                                    width={1000}
                                    height={1000}
                                />
                                <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">02</span>
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">MOTION TRACKING</h3>
                                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our motion-tracking features provide precise object placement and interactions within AR environments. As an experienced AR software development company, we collaborate with your team to deliver seamless integration for optimal performance.
                                </div>
                            </div>
                            <div className="bg-white w-[350px] max-sm:w-full max-sm:block hidden max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
                                <Image
                                    src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
                                    alt="Background illustration for Image and Object Recognition AR function card on mobile"
                                    width={1000}
                                    height={1000}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                <div className="relative z-10">
                                    <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</span>
                                    <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">IMAGE & OBJECT RECOGNITION</h3>
                                    <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        With expert custom AR app development, users can train our AR applications to recognize specific 2D images and real-world 3D objects. Such immersive apps can also enhance inputs with relevant text or 3D model data directly on the device screen.
                                    </div>
                                </div>
                            </div>
                            <div className="relative bg-white w-[350px] max-sm:w-full border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px]">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[50%] max-2xl:top-[40%] -translate-y-1/2 -left-[80%] max-2xl:-left-[50%]"
                                    src="/images/forthpoint.png"
                                    alt="Connector graphic for Light Estimation AR function"
                                    width={1000}
                                    height={1000}
                                />
                                <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">04</span>
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">LIGHT ESTIMATION</h3>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our apps ensure that all virtual objects interact realistically with real-world lighting conditions. We pair strategic AR development services with advanced rendering methods, light estimation techniques, and algorithms to create believable AR experiences for businesses.
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
