"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HandsIcon from "./svg/hands-icon";

const cardHoverStyle = {
    background: 'linear-gradient(to right, #6E44A3 0%, #6E44A3 70%, #9F79CA 100%)',
    boxShadow: '0 4px 30px rgba(110, 68, 163, 0.25)',
};

const LpWebSaving = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        setIsMobile(mq.matches);
        const handler = () => setIsMobile(mq.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return (
        <div className="relative py-[60px]">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6  relative z-10">
                        <div
                            className="glass-card2 rounded-xl p-4 border border-white mb-6 transition-all duration-300"
                            style={{
                                transform: isMobile ? undefined : 'translateX(5.35rem)',
                                ...(hoveredCard === 1 ? cardHoverStyle : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(1)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex justify-between items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <HandsIcon className="w-[24px]" />
                                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[28px] font-bold text-[#fff] leading-relaxed">
                                            Development Cost Savings
                                        </div>
                                    </div>
                                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                        We offer on-premise and nearshore development options that are custom-made to meet all of your business needs.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-britanicaRegular text-[30px] font-regular text-white leading-[1px]">
                                        UPTO
                                    </div>
                                    <div className="font-britanicaBlack text-[44px] font-black">
                                        <span className="text-[#F74B1C]">75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="glass-card2 rounded-xl p-4 border border-white mb-6 transition-all duration-300"
                            style={{
                                transform: isMobile ? undefined : 'translateX(2.35rem)',
                                ...(hoveredCard === 2 ? cardHoverStyle : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(2)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex justify-between items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <HandsIcon className="w-[24px]" />
                                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[28px] font-bold text-[#fff] leading-relaxed">
                                            Accelerate Time to Market
                                        </div>
                                    </div>
                                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                        Launch Faster With Agile & Scalable Development
                                    </div>
                                </div>
                                <div>
                                    <div className="font-britanicaRegular text-[30px] font-regular text-white leading-[1px]">
                                        UPTO
                                    </div>
                                    <div className="font-britanicaBlack text-[44px] font-black">
                                        <span className="text-[#F74B1C]">50%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="glass-card2 rounded-xl p-4 border border-white transition-all duration-300"
                            style={{
                                ...(hoveredCard === 3 ? cardHoverStyle : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(3)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="flex justify-between items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <HandsIcon className="w-[24px]" />
                                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[28px] font-bold text-[#fff] leading-relaxed">
                                            Development Time Reduced
                                        </div>
                                    </div>
                                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                        Gain access to development expertise across 40+ industries for faster and more credible development services.
                                    </div>
                                </div>
                                <div>
                                    <div className="font-britanicaRegular text-[30px] font-regular text-white leading-[1px]">
                                        UPTO
                                    </div>
                                    <div className="font-britanicaBlack text-[44px] font-black">
                                        <span className="text-[#F74B1C]">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image
                            className="w-full scale-150 pt-[50px]"
                            style={{ transformOrigin: 'right' }}
                            src="https://ik.imagekit.io/sajib4aqc/laptop1_ivssw7.webp"
                            alt="Laptop mockup for web development cost savings section"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpWebSaving;