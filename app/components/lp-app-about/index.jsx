import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const LpAppAbout = () => {
    return (
        <div className="relative pt-[100px] mb-[160px]">
            
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="ABOUT" secondWord="US" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">We Are </span>
                            <span className="text-[#F74B1C]">Mobile App </span>
                            <span className="text-white"></span>
                            <br />
                            <span className="text-[#F74B1C]">Development </span>
                            <span className="text-[#fff]">Services?</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            As a leading mobile app development company in the USA, we provide quality solutions. Our agile approach brings your app idea to life with speed. Our team includes consultants, designers, developers, and QA specialists for every development stage.
                        </div>
                    </div>

                </div>
                <div className="pt-[80px]">
                    <Image
                        className="w-full"
                        src="/images/bulletpoints.png"
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
