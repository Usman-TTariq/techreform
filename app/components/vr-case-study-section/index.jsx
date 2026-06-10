import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const VrCaseStudySection = () => {
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[80px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 justify-between gap-4 items-start">
                    <div className="col-span-12 md:col-span-10 min-w-0 order-1">
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] lg:text-[50px] md:leading-[42px] font-black pb-4 sm:pb-[26px] text-left break-words">
                            <span className="text-[#F74B1C]">Case Study </span>
                            <span className="text-white"></span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 min-w-0 order-2 md:order-2 flex justify-start md:justify-end">
                        <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-[70px]">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1">
                        <div className="h-full flex items-center justify-center">
                            <Image
                                className="w-full max-w-full h-auto"
                                src="/images/VR%20png.webp"
                                alt="Game development case study gameplay showcase"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 my-auto order-2">
                        <div>
                            <Image
                                className="w-full max-w-full h-auto"
                                src="/images/VR-casestudy.webp"
                                alt="Vr development case study showcase"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        Explore over 100 examples of how our custom VR solutions power immersive training sims. Powered by 50+ certified developers, we have helped businesses cut travel, shorten ramp time, and practice high-stakes skills safely.
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        Discover VR worlds tuned for comfort and confidence via thoughtful locomotion, strong performance targets, and scalable scenes that stay believable as your programs grow.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="CASE STUDIES" icon={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VrCaseStudySection;
