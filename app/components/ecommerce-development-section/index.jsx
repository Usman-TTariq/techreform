"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const EcommerceDevelopmentSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHAT"
                                secondWord="WE"
                                thirdWord="OFFER"
                            />
                        </div>
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">Simple & Secure </span>
                            <span className="text-[#F74B1C]">e-Commerce Website Development</span>
                            <br />
                            <span className="text-[#F74B1C]">For High </span>
                            <span className="text-white">Conversion and Sales</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            We develop scalable mobile applications with intuitive UI/UX design, a feature-rich development approach, and ongoing support after launch. Our expertly curated mobile apps are built to offer cross-platform compatibility and seamless performance across devices.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image
                                        className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                        src="/images/gamingicon.png"
                                        alt=""
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                    Custom e-commerce website development
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                    We offer high-yielding ecommerce solutions that are fast, secure, and user-friendly. All features are customized to your business requirements and logistics.
                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">Shopify and WooCommerce</div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">We set up professional Shopify and WooCommerce stores that offer complete design, product uploads, and payment integration.</div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">Mobile Responsible Design</div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">All e-commerce websites are highly responsible for the phone to deliver high conversion rates, whether on desktop or mobile.</div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user1.png" alt="" width={1000} height={1000} />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user2.png" alt="" width={1000} height={1000} />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user3.png" alt="" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default EcommerceDevelopmentSection;
