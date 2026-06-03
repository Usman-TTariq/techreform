"use client";

import Image from "next/image";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const VrHeroSection = () => {
    return (
        <div className="relative w-full min-w-0 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] pb-4 sm:pb-8 md:pb-0 overflow-hidden bg-[#0E0E0E]">
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[22%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/Group%202147225267.png"
                alt="Decorative abstract accent on VR development hero"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[22%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/frame2_h4xmpf.webp"
                alt="Decorative frame on VR development hero"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 pt-[40px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] relative z-20">
                    <div className="col-span-12 lg:col-span-6 min-w-0 order-1">
                        <h1 className="font-britanicaBlack max-sm:text-center text-[24px] leading-[1.25] sm:text-[36px] md:text-[42px] lg:text-[48px] lg:leading-[52px] font-black">
                            <span className="text-white">On-Demand Virtual Reality </span>
                            <span className="text-[#F74B1C]">App Development Services </span>
                            <br className="max-xl:hidden" />
                            {/* <span className="text-white">for Businesses</span> */}
                        </h1>
                        <div className="font-britanicaRegular max-sm:text-center text-[14px] sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-[22px] max-w-full lg:max-w-xl leading-relaxed break-words">
                        Looking to hire VR developers? Tech Reforms provides innovative solutions built on the latest VR technologies to help you lead the market with ease. We test concepts and products using user feedback to deliver quick, simple custom virtual reality solutions. Curious? Get a quote to learn more!
                        </div>
                        <div className="pt-5 sm:pt-[30px] max-sm:flex max-sm:justify-center">
                            <Button text="Hire Expert VR App Developers Today" icon={false} onClick={goToContact} />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 min-w-0 order-1">
                        <div className="flex justify-end max-sm:justify-center max-sm:pt-[40px] max-sm:pb-[20px]">
                            <Image
                                className="w-[80%] max-sm:w-[60%]"
                                src="https://ik.imagekit.io/sajib4aqc/Group%202147225265.png"
                                alt="Supporting illustration for Tech Reforms VR development section"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VrHeroSection;
