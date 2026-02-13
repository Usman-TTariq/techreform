import Image from "next/image";
import Button from "../common/button";

const HeroSection = () => {
    return (
        <div className="relative h-[110vh]">
            <Image
                className="absolute top-0 left-[50%] translate-x-[-50%] w-[70%]"
                src="/images/herolaptop.png"
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
                <div className="absolute top-[0%] right-[200px] module-border-wrap">
                    <div className="bg-neutral-950 rounded-4xl px-[30px] py-[10px] glass-card">
                        <div className="text-[36px] font-semibold tracking-tight text-white font-britanicaExtraBold">98%</div>
                        <div className="text-[18px] font-light leading-tight text-white pb-[40px] font-britanicaRegular">
                            Customer<br />Satisfaction
                        </div>
                    </div>
                </div>
                <div className="absolute top-[50%] translate-y-[90%] right-[0px]">
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">we reinvent</div>
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">business via</div>
                    <div className="text-[30px] font-britanicaBlack text-white capitalize leading-[34px]">digital transformation</div>
                </div>
                <div className="grid grid-cols-12 pt-[120px]">
                    <div className="col-span-6">
                        <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                            <span className="text-white">Digitize Your Business</span><br /><span className="text-[#F74B1C]">with Our Digital Solutions</span>
                        </div>
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            We help businesses with advanced app development solutions <br />
                            for effective business management and growth.
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

export default HeroSection;