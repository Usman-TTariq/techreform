import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CaseStudiesMvpSection = () => {
    return (
        <div className="relative pb-12 pt-22 sm:pb-16 md:pb-[80px] overflow-hidden w-full min-w-0">
            <Image
                className="w-full h-full absolute top-0 left-0"
                src="/images/mvpbk.png"
                alt="MVP case study"
                width={1000}
                height={1000}
            />
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border z-10">
                <div className="grid grid-cols-12 justify-between gap-4 items-start">
                    <div className="col-span-12 md:col-span-10 min-w-0 order-1">
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] lg:text-[50px] md:leading-[42px] font-black pb-4 sm:pb-[26px] text-left break-words">
                            <span className="text-[#F74B1C]">Scalable MVP Case Studies </span>
                            <span className="text-white"> Across Industries </span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 min-w-0 order-2 md:order-2 flex justify-start md:justify-end">
                        <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-0 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-[70px]">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1">
                        <div className="h-full flex items-center justify-center">
                            <Image
                                className="w-full max-w-full h-auto"
                                src="/images/mvp1.png"
                                alt="MVP case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 my-auto order-2">
                        <div>
                            <Image
                                className="w-full max-w-full h-auto"
                                src="/images/mvp2.png"
                                alt="MVP case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                            Explore real-world examples of how our MVP Development to Validate Business Ideas has helped startups secure funding, achieve product-market fit, and scale successfully.
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

export default CaseStudiesMvpSection;
