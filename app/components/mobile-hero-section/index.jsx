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
                        <div className="font-britanicaBlack text-[48px] leading-[52px] font-black">
                            <span className="text-white">Custom Mobile </span>
                            <span className="text-[#F74B1C]"></span><br />
                            <span className="text-[#F74B1C]">App Development Company</span><br />
                            <span className="text-[#fff]">in the USA</span><br />
                        </div>
                        <div className="font-britanicaRegular text-[18px] max-2xl:text-[16px] font-regular text-white pt-[22px]">
                            Are you looking for a futuristic mobile app development services<br /> that can build innovative mobile applications for your scaling businesses? <br />
                            With years of experience in creating immersive and highly <br /> functional apps, Tech Reforms brings scalable mobile app solutions <br /> to your doorstep. Partner with us to get reliable, high-performing,<br /> seamless apps across all devices.<br />

                        </div>
                        <div className="pt-[30px]">
                            <Button text="Hire Expert App Developers Today" icon={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeroSection;