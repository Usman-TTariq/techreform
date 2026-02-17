import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CaseStudiesEcommerceSection = () => {
    return (
        <div className="relative pb-[80px]">
            <div className="container relative">
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-10">
                        <div className="font-britanicaBlack text-[50px] leading-[42px] font-black pb-[26px] text-left">
                            <span className="text-[#F74B1C]">Case Studies </span>
                            <span className="text-white">That Show How Our </span>
                            <br />
                            <span className="text-white">E-Commerce Solutions </span>
                            <span className="text-[#F74B1C]">Perform in the Real World </span>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-12 pt-[70px]">
                    <div className="col-span-6">
                        <div className="h-full flex items-center justify-center">
                            <Image
                                className="!!w-[100%]"
                                src="/images/ec.png"
                                alt="E-commerce case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-6 my-auto">
                        <div className="">
                            <Image
                                className="w-[100%] my-auto"
                                src="/images/ec2.png"
                                alt="E-commerce case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Discover our 100+ real-world case studies that display our work ethic and the quality of our intuitive e-commerce platforms. Our process goes beyond curating basic e-commerce platforms. See how our stores offer consistent sales and offer high-yield results.
                        </div>
                        <div className="pt-[30px]">
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
