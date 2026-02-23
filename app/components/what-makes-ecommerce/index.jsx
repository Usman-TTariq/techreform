import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const WhatMakesEcommerce = () => {
    return (
        <div className="relative">
            <div className="container">
                <div className="bg-[3C3C3C] rounded-xl px-[40px] py-[30px] border border-[#7724C1]">
                    <div className="grid grid-cols-12 gap-5 pt-[60px]">
                        <div className="col-span-4 max-lg:col-span-12 my-auto">
                            <Image
                                className="w-full"
                                src="/images/wemake.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="col-span-8 max-lg:col-span-12">
                            <div>
                                <div className="flex justify-start pb-4 sm:pb-[22px]">
                                    <CapsuleLabel
                                        firstWord="WHAT"
                                        secondWord="MAKEs"
                                    />
                                </div>
                                <div className="font-britanicaBlack flex items-center gap-3 text-[58px] leading-tight  md:leading-[52px] font-black break-words">
                                    <span className="text-white">Our</span>
                                    <span className="text-[#F74B1C]">E-Commerce</span>
                                </div>
                                <div className="font-britanicaBlack pt-[12px] flex items-end justify-end gap-3 text-[58px] leading-tight  md:leading-[52px] font-black break-words">
                                    <span className="text-white">Services</span>
                                    <span className="text-[#F74B1C]">Different?</span>
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                    As a leading e-commerce web and app development company in the USA, we analyze your business requirements and make improvements to your business schema for business logistics optimization.
                                </div>
                                <div className="flex flex-wrap justify-start items-center gap-6">
                                    <div className="pt-4 sm:pt-6">
                                        <span className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-5 py-2.5 text-white capitalize shadow-[0_0_12px_rgba(119,36,193,0.4)]">
                                            <span className="h-2 w-2 shrink-0 rounded-full bg-white"></span>
                                            Custom Development
                                        </span>
                                    </div>
                                    <div className="pt-4 sm:pt-6">
                                        <span className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-5 py-2.5 text-white capitalize shadow-[0_0_12px_rgba(119,36,193,0.4)]">
                                            <span className="h-2 w-2 shrink-0 rounded-full bg-white"></span>
                                            Scalable Solutions
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-start items-center gap-6">
                                    <div className="pt-4 sm:pt-6">
                                        <span className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-5 py-2.5 text-white capitalize shadow-[0_0_12px_rgba(119,36,193,0.4)]">
                                            <span className="h-2 w-2 shrink-0 rounded-full bg-white"></span>
                                            Transparent Pricing
                                        </span>
                                    </div>
                                    <div className="pt-4 sm:pt-6">
                                        <span className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-5 py-2.5 text-white capitalize shadow-[0_0_12px_rgba(119,36,193,0.4)]">
                                            <span className="h-2 w-2 shrink-0 rounded-full bg-white"></span>
                                            Streamlined E-commerce Logistics
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatMakesEcommerce;
