"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const BlogContentSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
            <div className="container relative px-4 sm:px-4">
                {/* <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="SHARE" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Explore Our </span>
                            <span className="text-[#F74B1C]">Blog </span>
                            <br />
                            <span className="text-[#F74B1C]">Insights & Updates </span>
                            <span className="text-white">From the Tech World</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            Stay ahead with the latest articles on mobile development, e-commerce, digital strategy, and industry trends. Our blog brings you actionable insights to help your business grow.
                        </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-12 gap-4 pt-8 sm:pt-12 md:pt-[52px]">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-2 sm:p-3 md:p-[20px] py-8 sm:py-10 md:py-[32px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-full"
                                        src="/images/aa3.png"
                                        alt="Tech Insights"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    Tech Insights
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                    Deep dives into mobile app development, frameworks, and best practices. Learn how to build scalable, secure applications that users love.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Read More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-2 sm:p-2 md:p-[20px] py-8 sm:py-10 md:py-[32px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-full"
                                        src="/images/industries4.png"
                                        alt="Industry News"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    Industry News
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                    Keep up with e-commerce trends, digital transformation, and how businesses are leveraging technology to stay competitive and grow.
                                </div>
                                <div className="pt-6 sm:pt-[30px] flex justify-start">
                                    <Button text="Read More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-2 sm:p-2 md:p-[20px] py-8 sm:py-10 md:py-[32px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-full"
                                        src="/images/Background.png"
                                        alt="Development Tips"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    Development Tips
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                    Practical guides and how-tos for developers and product teams. From MVP strategies to deployment and maintenance, we share what works.
                                </div>
                                <div className="pt-6 sm:pt-[30px] flex justify-start">
                                    <Button text="Read More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default BlogContentSection;
