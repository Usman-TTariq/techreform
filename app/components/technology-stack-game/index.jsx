import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TechnologyStackGame = () => {
    return (
        <div className="relative mb-[140px] max-sm:mb-[50px]">
            <div className="container">
                <div className="bg-black overflow-hidden rounded-[50px]">
                    <div className="grid grid-cols-12 px-[50px] py-[60px] max-sm:px-[20px] max-sm:py-[30px]">
                        <div className="col-span-3 max-lg:col-span-12 max-sm:mx-auto max-sm:text-center">
                            <CapsuleLabel firstWord="TECHNOLOGIES" secondWord="WE USE" />
                        </div>
                        <div className="col-span-9 max-lg:col-span-12">
                            <div className="flex justify-end max-sm:justify-center max-sm:pt-[20px]">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[52px] font-black pb-4 sm:pb-[26px] text-left">
                                    <span className="text-white">Game Development Technologies Used by </span>
                                    <span className="text-[#F74B1C]">Our Expert Team </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="w-full"
                            src="/images/game-development-tech-stack.webp"
                            alt="Mobile app development technology stack logos and tools"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyStackGame;
