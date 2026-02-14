import Image from "next/image";
import Button from "../common/button";

const MobileHeroSection = () => {
    return (
        <div className="relative h-[110vh]">
            <Image
                className="absolute top-0 left-[60%] translate-x-[-50%] w-[25%]"
                src="/images/mobilehero.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[5%] right-[200px] w-[30%]"
                src="/images/frame.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 left-[0px] w-[30%]"
                src="/images/frame2.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="absolute top-[50%] translate-y-[90%] right-[0px]">
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">Leading App</div>
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">Developers</div>
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">in USA</div>
                </div>
                <div className="grid grid-cols-12 pt-[120px]">
                    <div className="col-span-6">
                        <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                            <span className="text-white">Mobile</span>
                            <span className="text-[#F74B1C]">App</span><br/>
                            <span className="text-[#F74B1C]">Development</span><br/>
                            <span className="text-[#fff]">Solutions</span><br/>
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                        Our mobile app development firm partners with <br/> innovative startups and tech-driven businesses to <br/> create apps that are reliable, high-performing, and <br/> seamless across all devices and operating systems.
                        </div>
                        <div className="pt-[30px]">
                            <Button text="Schedule a Free Consultation" icon={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeroSection;