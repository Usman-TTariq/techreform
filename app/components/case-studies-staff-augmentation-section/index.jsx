import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CaseStudiesStaffAugmentationSection = () => {
    return (
        <div className="relative pb-[80px]">
            <div className="container relative">
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-10">
                        <div className="font-britanicaBlack text-[50px] leading-[42px] font-black pb-[26px] text-left">
                            <span className="text-[#F74B1C]">Case Studies </span>
                            <span className="text-white">That Show How Our </span>
                            <br />
                            <span className="text-white">Staff Augmentation </span>
                            <span className="text-[#F74B1C]">Delivers in the Real World </span>
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
                                src="/images/aa1.png"
                                alt="Staff augmentation case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-6 my-auto">
                        <div className="">
                            <Image
                                className="w-[100%] my-auto"
                                src="/images/aa3.png"
                                alt="Staff augmentation case study"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Discover our 100+ real-world case studies that demonstrate how our staff augmentation services helped businesses accelerate product development, reduce hiring time, and meet critical deadlines.
                        </div>
                        <div className="pt-[30px]">
                            <Button text="Check The Full Case" icon={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesStaffAugmentationSection;
