"use client";

import Image from "next/image";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { useState } from "react";
// import { getImagePath } from "../../utils/imagePath";

const ArHeroSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative w-full min-w-0 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] pb-4 sm:pb-8 md:pb-0 overflow-hidden bg-[#0E0E0E]">
            <Image
                className="absolute -top-[5%] right-2 sm:right-4 w-[22%] sm:w-[28%] md:right-12 md:w-[30%] lg:right-[200px] hidden sm:block"
                src="https://ik.imagekit.io/sajib4aqc/frame_da1r9p.webp"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-0 w-[22%] sm:w-[28%] md:w-[30%] hidden sm:block"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772822480/frame2_h4xmpf.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 pt-12 sm:pt-[90px] md:pt-[100px] lg:pt-[120px] relative z-20">
                    <div className="col-span-12 lg:col-span-6 min-w-0 order-1">
                        <div className="font-britanicaBlack text-[24px] leading-[1.25] sm:text-[36px] md:text-[42px] lg:text-[48px] lg:leading-[52px] font-black">
                            <span className="text-white">Custom Augmented Reality </span>
                            <span className="text-[#F74B1C]">App Development Services</span>
                            <br />
                            <span className="text-white">for Businesses</span>
                        </div>
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] font-regular text-white pt-3 sm:pt-[22px] max-w-full lg:max-w-xl leading-relaxed break-words">
                            We provide professional Augmented Reality App Development Services that help businesses build immersive and interactive digital experiences. Our experienced AR developers create scalable applications across mobile, web, and wearable platforms using modern AR frameworks and 3D technologies.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Hire Expert App Developers Today" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 min-w-0 order-1">
                        <div className="flex justify-end">
                            <Image
                                className="w-[80%]"
                                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1773851023/Group_2147225265_b2neyu.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
}

export default ArHeroSection;