import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const LpAppAbout = () => {
    return (
        <div className="relative pt-[100px] max-sm:pt-[60px] mb-[160px] max-sm:mb-[50px]">
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="ABOUT" secondWord="US" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Smart Mobile </span>
                            <span className="text-[#F74B1C]">Development for </span>
                            <span className="text-white"></span>
                            <br />
                            <span className="text-[#F74B1C]">High Scalability </span>
                            <span className="text-[#fff]">and Speed</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                        Tech Reforms launches custom iOS and Android apps 10x faster, at lower cost, with a hassle-free approach. We are a leading mobile app development agency providing tailored solutions for your business.
                        </div>
                    </div>
                </div>
                <div className="pt-[80px] max-sm:pt-[40px]">
                    <Image
                        className="w-full"
                        src="https://ik.imagekit.io/sajib4aqc/bulletpoints_buwrvm.webp"
                        alt="Hero Background"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}

export default LpAppAbout;
