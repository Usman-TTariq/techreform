import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CaseStudiesSection = () => {
    return (
        <div className="relative pb-[80px]">
            <div className="container relative">
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-10">
                        <div className="font-britanicaBlack text-[50px] leading-[42px] font-black pb-[26px] text-left">
                            <span className="text-[#F74B1C]">Case Studies </span>
                            <span className="text-white">That Show How Our </span>
                            <br />
                            <span className="text-white">Apps Perform in the </span>
                            <span className="text-[#F74B1C]">Real World </span>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <CapsuleLabel firstWord="CASE" secondWord="STUDIES" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-12 pt-[70px]">
                    <div className="col-span-6">
                        <div>
                            <Image
                                className="w-[100%]"
                                src="/images/iphone.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <Image
                                className="w-[100%]"
                                src="/images/phones.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Discover real-world case studies that showcase how our mobile apps perform beyond development. See how our solutions drive user engagement, improve retention, and deliver measurable business results across different industries and markets.
                        </div>
                        <div className="pt-[30px]">
                            <Button text="Check The Full Case" icon={false} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-12 pt-[70px]">
                    <div className="col-span-6">
                        <div className="">
                            <Image
                                className="w-[100%]"
                                src="/images/backphone.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <Image
                                className="w-[100%]"
                                src="/images/33.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Discover real-world case studies that showcase how our mobile apps perform beyond development. See how our solutions drive user engagement, improve retention, and deliver measurable business results across different industries and markets.
                        </div>
                        <div className="pt-[30px]">
                            <Button text="Check The Full Case" icon={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesSection;