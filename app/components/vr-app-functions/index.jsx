"use client";
import { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";

const VrAppFunctions = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-[100px] max-sm:pb-[0px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-5 max-lg:col-span-12">
                        <div className="max-sm:flex max-sm:justify-center">
                            <CapsuleLabel firstWord="OUR" secondWord="APPROACH" />
                        </div>
                        <div className="font-britanicaRegular max-sm:text-center pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                            Tech Reforms is a trusted VR Development Company that turns your imaginative dreams into immersive virtual experiences. We build practical, scalable Enterprise VR Solutions that help businesses train, engage, and innovate faster.
                        </div>
                    </div>
                    <div className="col-span-7 max-lg:col-span-12">
                        <div className="flex justify-end max-sm:justify-center">
                            <div className="font-britanicaBlack max-sm:text-center text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[45px] 2xl:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-right">
                                <span className="text-white">Our End-to-End </span>
                                <span className="text-[#F74B1C]">VR Software Development Approach</span>
                                <br className="max-sm:hidden" />
                                {/* <span className="text-[#F74B1C]">Approach </span> */}
                                {/* <span className="text-white">VR App</span> */}
                            </div>
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
                        alt="VR app functions diagram background"
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute max-sm:relative top-0 left-0 w-full pt-[30px] z-10">
                        <div className="flex justify-between w-full max-sm:flex-col">
                            <div className="relative bg-white w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] ">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:top-[60%] -translate-y-1/2 left-[100%]"
                                    src="/images/firstpoint.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                                <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">01</h6>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 uppercase">Top-Notch VR graphic design</div>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Tech Reform’s expert end-to-end VR development team curates striking visuals that hook viewers and keep them on screen.
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:-left-[54%] -translate-y-1/2 -left-[80%] z-20"
                                    src="/images/thirdpoint.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                                <div className="bg-white w-[350px] max-sm:w-full max-sm:hidden border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
                                    <Image
                                        src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
                                        alt="Background illustration for VR function feature card"
                                        width={1000}
                                        height={1000}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                    <div className="relative z-10">
                                        <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</h6>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2 uppercase">Customized VR Solutions</div>
                                        <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                            If you have a view and a unique VR concept, we have an incredibly intelligent, scalable VR solution to bring it to life.
                                        </div>
                                    </div>
                                </div>
                                <div className="relative hidden max-sm:block w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
                                    <Image
                                        className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                                        src="/images/secondpoint.png"
                                        alt=""
                                        width={1000}
                                        height={1000}
                                    />
                                    <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">02</h6>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2 uppercase">High Development Quality</div>
                                    <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        Our experts at Tech Reforms develop and test all iterations to deliver high-quality projects while integrating instant feedback for 100% satisfaction.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full pt-[30px] max-sm:pt-[10px]  max-sm:flex-col">
                            <div className="relative max-sm:hidden w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                                    src="/images/secondpoint.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                                <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">02</h6>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2 uppercase">High Development Quality</div>
                                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    Our experts at Tech Reforms develop and test all iterations to deliver high-quality projects while integrating instant feedback for 100% satisfaction.
                                </div>
                            </div>
                            <div className="bg-white w-[350px] max-sm:w-full max-sm:block hidden max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
                                <Image
                                    src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
                                    alt="Background illustration for VR function feature card"
                                    width={1000}
                                    height={1000}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                <div className="relative z-10">
                                    <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</h6>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2 uppercase">Customized VR Solutions</div>
                                    <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                        If you have a view and a unique VR concept, we have an incredibly intelligent, scalable VR solution to bring it to life.
                                    </div>
                                </div>
                            </div>
                            <div className="relative bg-white w-[350px] max-sm:w-full border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px]">
                                <Image
                                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[50%] max-2xl:top-[40%] -translate-y-1/2 -left-[80%] max-2xl:-left-[50%]"
                                    src="/images/forthpoint.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                                <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">04</h6>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 uppercase">Impressive Tech-Stack</div>
                                <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    At Tech Reforms, we hire expert VR developers who employ market-leading tools and technologies to offer market-ready VR products.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default VrAppFunctions;
