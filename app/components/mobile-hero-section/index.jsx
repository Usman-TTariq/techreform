"use client";

import Image from "next/image";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const MobileHeroSection = () => {
    return (
        <div className="relative w-full min-w-0 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[110vh] pb-4 sm:pb-8 md:pb-0 overflow-hidden bg-[#0E0E0E]">
            <Image
                className="absolute top-[15%] left-[50%] translate-x-[-50%] w-[45%] sm:w-[32%] md:w-[28%] lg:w-[35%] sm:left-[60%] max-w-[200px] sm:max-w-none hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/mobilehero_luf4jr.webp"
                alt="Mobile app mockup for custom mobile app development hero"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[22%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/Group%202147225267.png"
                alt="Decorative abstract accent on mobile app development hero"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[22%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/frame2_h4xmpf.webp"
                alt="Decorative frame on mobile app development hero"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="absolute top-[52%] sm:top-[50%] translate-y-[90%] right-4 sm:right-8 lg:right-0 hidden sm:block">
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">Leading App</div>
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white capitalize leading-tight">Developers</div>
                    <div className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-britanicaBlack text-white leading-tight">in The USA</div>
                </div>
                <div className="grid grid-cols-12 pt-12 sm:pt-[90px] md:pt-[100px] lg:pt-[120px] relative z-20">
                    <div className="col-span-12 lg:col-span-6 min-w-0 order-1">
                        <h1 className="font-britanicaBlack text-[24px] leading-[1.25] sm:text-[36px] md:text-[42px] lg:text-[48px] lg:leading-[52px] font-black">
                            <span className="text-white">Custom </span>
                            <span className="text-[#F74B1C]">Mobile App Development Services</span>
                            <br className="max-sm:hidden"/>
                            <span className="text-white">for Intuitive, High-Growth Apps</span>
                        </h1>
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-[22px] max-w-full lg:max-w-xl leading-relaxed break-words">
                            Looking for a trusted mobile app development firm to build powerful apps for your growing business? <br />
                            Tech Reforms has 20 years of experience delivering innovative mobile solutions with 350+ successful app launches across industries. Our expert team builds secure and high-performing apps designed to drive user engagement, accelerate growth, and ensure long-term success on every device.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Hire Expert App Developers Today" icon={false} onClick={goToContact} />
                        </div>
                    </div>
                </div>
                {/* Mobile only: phone image below text */}
                <div className="sm:hidden flex justify-center pt-6 pb-4">
                    <Image
                        className="w-[70%] max-w-[280px] h-auto"
                        src="https://ik.imagekit.io/sajib4aqc/mobilehero_luf4jr.webp"
                        alt="Mobile app mockup on mobile viewport for app development hero"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    );
}

export default MobileHeroSection;