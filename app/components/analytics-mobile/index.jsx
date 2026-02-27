"use client";
import Image from "next/image";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";

const AnalyticsMobile = () => {
    return (
        <div className="relative pb-10 sm:pb-16 md:pb-[160px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute top-[0%] left-0 w-[20%] sm:w-[20%] opacity-60 sm:opacity-100"
                src="/images/hrbk1.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[10%] right-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/hrbk2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-20 px-4 sm:px-4 w-full max-w-[100vw] box-border">

                <div className="grid grid-cols-12">
                    <div className="col-span-12 min-w-0">
                        <div className="rounded-xl bg-[#3c3c3c52] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-1">
                                    <div className="flex justify-start pb-4 sm:pb-[22px]">
                                        <CapsuleLabel firstWord="ANALYTICS" />
                                    </div>
                                    <div className="flex justify-start gap-3 sm:gap-[18px] pb-6 sm:pb-[32px]">
                                        <div className="min-w-0">
                                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[28px] md:text-[32px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                                Mobile App Development - Trends & Market Growth (2020-2026)
                                            </div>
                                            <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                                Mobile apps have transformed how businesses engage with customers, offering personalized experiences and streamlined services. Regardless of industry, a well-designed mobile app can enhance brand loyalty and drive revenue. As a leading mobile app development company, Tech Reforms ensures your app is built with a robust strategy and cutting-edge technologies.
                                            </div>
                                            <div className="font-britanicaRegular pt-[30px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                                Whether you need a consumer-facing app or an enterprise solution, partner with us to achieve exceptional results. Our skilled mobile app development team offers full customization to meet your specific business needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-[0px] flex justify-start">
                                        <Button text="Get in Touch Now!" icon={false} onClick={() => setPopupOpen(true)} />
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-2">
                                    <Image
                                        className="w-full max-w-full h-auto"
                                        src="/images/facilitiesright.png"
                                        alt=""
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsMobile;
