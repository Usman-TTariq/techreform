import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TechnologyStackMobile = () => {
    return (
        <div className="relative mb-[140px]">
            <div className="container">
                <div className="bg-black overflow-hidden rounded-[50px]">
                    <div className="grid grid-cols-12 px-[50px] py-[60px]">
                        <div className="col-span-3 max-lg:col-span-12">
                            <CapsuleLabel firstWord="TECHNOLOGIES" secondWord="WE USE" />
                        </div>
                        <div className="col-span-9 max-lg:col-span-12">
                            <div className="flex justify-end">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left">
                                    <span className="text-[#F74B1C]">Technology </span>
                                    <span className="text-white">Stack</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="w-full"
                            src="/images/techstack.png"
                            alt="Hero Background"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyStackMobile;
