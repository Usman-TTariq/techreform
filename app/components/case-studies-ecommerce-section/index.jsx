import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CaseStudiesEcommerceSection = () => {
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[80px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 justify-between gap-4 items-start">
                    <div className="col-span-12 md:col-span-10 min-w-0 order-1">
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] lg:text-[50px] md:leading-[42px] font-black pb-4 sm:pb-[26px] text-left break-words">
                            <span className="text-[#F74B1C]">Case Studies </span>
                            <span className="text-white">That Show How Our </span>
                            <br />
                            <span className="text-white">E-Commerce Solutions </span>
                            <span className="text-[#F74B1C]">Perform in the Real World </span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 min-w-0 order-2 md:order-2 flex justify-start md:justify-end">
                        <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-0 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-[70px] ">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1">
                        <div className="h-full flex items-center justify-center">
                            {/* <Image
                                className="w-full max-w-full h-auto"
                                src="/images/ec.png"
                                alt=""
                                width={1000}
                                height={1000}
                            /> */}
                             <Image
                                className="w-full max-w-full h-auto"
                                src="/images/aa1.png"
                                alt="Staff augmentation case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 my-auto order-2">
                        <div>
                            {/* <Image
                                className="w-full max-w-full h-auto"
                                src="/images/ec2.png"
                                alt=""
                                width={1000}
                                height={1000}
                            /> */}
                             <Image
                                className="w-full max-w-full h-auto"
                                src="/images/aa3.png"
                                alt="Staff augmentation case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                            Discover our 100+ real-world case studies that display our work ethic and the quality of our intuitive e-commerce platforms. Our process goes beyond curating basic e-commerce platforms. See how our stores offer consistent sales and offer high-yield results.
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Check The Full Case" icon={false} />
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-12 gap-12 pt-[70px]">
                    <div className="col-span-6">
                        <div className="">
                            <Image
                                className="w-[100%]"
                                src="/images/backphone1.png"
                                alt="E-commerce case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <Image
                                className="w-[100%]"
                                src="/images/phones1.png"
                                alt="E-commerce case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Explore our e-commerce projects that deliver SEO-friendly storefronts, smooth checkout experiences, and scalable platforms that grow with your brand and catalog.
                        </div>
                        <div className="pt-[30px]">
                            <Button text="Check The Full Case" icon={false} />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CaseStudiesEcommerceSection;
