"use client";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";
import CapsuleLabel from "../common/capsule-label";
import FreeConsultationForm from "../free-consultation-form";
import Image from "next/image";

const WebLPHeroSection = () => {
    return (
        <div className="relative pb-[100px] max-sm:pb-[0px]">
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[20%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="/images/frame.png"
                alt="Decorative frame graphic on web landing hero"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[20%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="/images/frame2.png"
                alt="Secondary decorative frame on web landing hero"
                width={1000}
                height={1000}
            />
            <div className="container relative">
                <div className="grid grid-cols-12 pt-12 sm:pt-[90px] md:pt-[100px] lg:pt-[120px] max-sm:pt-[20px] relative z-20">
                    <div className="col-span-8 max-xl:col-span-7 max-sm:col-span-12 my-auto">
                        <div className="pb-4 sm:pb-[20px]">
                            <CapsuleLabel firstWord="CUSTOM " secondWord="WEB" thirdWord="DEVELOPMENT" />
                        </div>
                        <h1 className="font-britanicaBlack text-[26px] leading-[1.2] sm:text-[36px] md:text-[40px] lg:text-[45px] xl:text-[60px] lg:leading-[55px] xl:leading-[65px] font-black">
                            <span className="text-white">Custom </span>
                            <span className="text-[#F74B1C]">Web Development</span>
                            <br />
                            <span className="text-[#F74B1C]">That Converts </span>
                            <span className="text-white">Visitors</span>
                            <br />  
                            <span className="text-[#F74B1C]">Into </span>
                            <span className="text-white">Customers</span>
                        </h1>
                        <div className="font-britanicaRegular text-[14px] sm:text-[18px] md:text-[20px] font-regular text-white pt-3 sm:pt-[22px] max-w-xl">
                            We help startups and tech businesses build fast, reliable websites that work seamlessly on any device.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Contact Our Team" icon={false} onClick={goToContact} />
                        </div>
                        <div className="grid grid-cols-12 pt-[30px] max-sm:pt-[10px]">
                            <div className="col-span-4">
                                <div>
                                    <div className="font-britanicaBlack text-[44px] max-sm:text-[20px] font-black">
                                        <span className="text-[#F74B1C]">20K+</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[20px] max-sm:text-[16px] font-regular text-white -mt-[10px]">
                                        Amazing graduates
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div>
                                    <div className="font-britanicaBlack text-[44px] max-sm:text-[20px] font-black">
                                        <span className="text-[#F74B1C]">97%</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[20px] max-sm:text-[16px] font-regular text-white -mt-[10px]">
                                        Hiring rate
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 max-sm:col-span-5">
                                <div className="max-sm:text-end">
                                    <div className="font-britanicaBlack text-[44px] max-sm:text-[20px] font-black">
                                        <span className="text-[#F74B1C]">195+</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[20px] max-sm:text-[16px] font-regular text-white -mt-[10px]">
                                        Corporate Partners
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 max-xl:col-span-5 max-sm:col-span-12 my-auto">
                        <FreeConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebLPHeroSection;