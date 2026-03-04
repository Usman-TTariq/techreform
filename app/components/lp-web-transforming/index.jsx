"use client";

import React, { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";

const LpWebTransforming = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative overflow-hidden pt-[100px] max-sm:pt-[30px]">
            <Image
                src="/images/idea1.png"
                alt=""
                width={1000}
                height={1000}
                className="absolute -top-[20%] sm:-top-[35%] right-0 w-[55%] sm:w-[45%] hidden sm:block opacity-80"
            />
            <Image
                src="/images/idea2.png"
                alt=""
                width={1000}
                height={1000}
                className="absolute -bottom-[20%] sm:-bottom-[30%] left-0 w-[60%] sm:w-[50%] hidden sm:block opacity-80"
            />
            <div className="container pb-12 sm:pb-16 md:pb-[80px] relative z-10 px-4 sm:px-4">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[52px] font-black text-center pb-8 sm:pb-[50px]">
                    <span className="text-white">AI-Powered </span>
                    <span className="text-[#F74B1C]">Web</span>
                    <br />
                    <span className="text-white">Development </span>
                    <span className="text-[#F74B1C]">Solutions</span>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-3">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="-mt-0 lg:-mt-[70px]">
                            <div className="pb-2 sm:pb-[10px]">
                                <CapsuleLabel firstWord="VAST" secondWord="SOLUTIONS" />
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                                Catalyze your web development journey with our cutting-edge AI solutions. From enhancing user experiences and automating development processes to optimizing content and deploying intelligent applications, our expert team harnesses the power of AI to drive innovation and success.
                            </div>
                            <div className="pt-6 sm:pt-[30px]">
                                <Button
                                    text="Hire Web App Developer"
                                    icon={false}
                                    onClick={() => setPopupOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full">
                        <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] h-full">
                            <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">01</div>
                            <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">Conversational Interface to Enhance UX</div>
                            <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.
                            </div>
                            <div className="pb-4 sm:pb-[20px]">
                                <button type="button" onClick={() => setPopupOpen(true)} className="text-[#0E0E0E] cursor-pointer hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                    Learn More <ArrowRight className="w-[16px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 h-full">
                        <div className="bg-[#F74B1C] relative border-2 border-white rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] h-full overflow-hidden min-h-[280px]">
                            <Image
                                src="/images/2.png"
                                alt=""
                                width={1000}
                                height={1000}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10">
                                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-white">02</div>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">AI-Generated Content <br />Creation and Optimization</div>
                                <div className="font-britanicaRegular text-white text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    We develop AI algorithms to streamline content creation by automatically generating articles, product descriptions, and image captions. AI optimizes content, product recommendations, and website interfaces by analyzing user behavior and demographics.
                                </div>
                                <div className="pb-4 sm:pb-[20px]">
                                    <button type="button" onClick={() => setPopupOpen(true)} className="text-white cursor-pointer hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                        Learn More <ArrowRight className="w-[16px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-3 pt-6 sm:pt-[30px]">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px] -mt-0 lg:-mt-[50px]">
                            <Image
                                src="/images/3.png"
                                alt=""
                                width={1000}
                                height={1000}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10">
                                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</div>
                                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">Development Process AI Automation</div>
                                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                    We implement AI algorithms that analyze data to identify patterns and trends, enabling informed decision-making and personalized marketing.
                                </div>
                                <div className="pb-4 sm:pb-[20px]">
                                    <button type="button" onClick={() => setPopupOpen(true)} className="text-[#fff] cursor-pointer hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                        Learn More <ArrowRight className="w-[16px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] mt-0">
                            <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">04</div>
                            <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">AI-Driven Insights and Analytics</div>
                            <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                                Our AI-powered testing tools automate testing web applications, efficiently identifying bugs and security vulnerabilities. Our AI developers use TensorFlow/PyTorch development frameworks to build and deploy Machine Learning models for various web applications.
                            </div>
                            <div className="pb-4 sm:pb-[20px]">
                                <button type="button" onClick={() => setPopupOpen(true)} className="text-[#0E0E0E] cursor-pointer hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                    Learn More <ArrowRight className="w-[16px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-6 my-auto">
                        <div>
                            <Image
                                src="/images/blocks.png"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-[90%] mx-auto"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpWebTransforming;
