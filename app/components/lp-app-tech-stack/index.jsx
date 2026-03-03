import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const LpAppTechStack = () => {
    return (
        <div className="relative mb-[140px]">
            <div className="container">
                <div className="bg-black overflow-hidden rounded-[50px]">
                    <div className="grid grid-cols-12 px-[40px] py-[60px]">
                        <div className="col-span-9 max-lg:col-span-12">
                            <div className="flex justify-start">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left">
                                    <span className="text-[#F74B1C]">Our Robust </span>
                                    <span className="text-white">Tech Stack</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 max-lg:col-span-12">
                            <div className="flex justify-end">
                                <CapsuleLabel firstWord="TECHNOLOGIES" secondWord="WE USE" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="w-full"
                            src="/images/techstack.png"
                            alt="Technology Stack"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LpAppTechStack;
