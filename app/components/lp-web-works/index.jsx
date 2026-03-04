import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const LpWebWorks = () => {
    return (
        <div className="relative py-[80px] max-sm:pt-[0px] max-sm:pb-[30px]">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-3 my-auto">
                        <div>
                            <Image
                                className="w-full scale-250 max-sm:scale-100 max-sm:pt-[0px] relative z-10 pt-[50px]"
                                style={{ transformOrigin: 'left' }}
                                src="/images/laptop2.png"
                                alt="Facilities Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9 mt-[20px]">
                        <div className="border relative border-[#9340FF] rounded-xl h-full p-[40px] overflow-hidden pl-[180px] max-sm:pl-[0px]">
                            <Image
                                className="w-full absolute top-0 left-0 h-full"
                                src="/images/facilitiesbk.png"
                                alt="Facilities Background"
                                width={1000}
                                height={1000}
                            />
                            <div className="relative z-10 pl-[15px]">
                                <CapsuleLabel firstWord="HOW IT" secondWord="WORKS" />
                                <div className="pl-[60px] max-sm:pl-[0px]">
                                    <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[55px] lg:leading-[60px] font-black pt-[10px]">
                                        <span className="text-white">How </span>
                                        <span
                                            className="inline-block"
                                            style={{
                                                background: 'linear-gradient(to right, rgb(118, 36, 193) 0%, rgb(255, 64, 64) 35%, rgb(255, 51, 51) 60%, rgb(245, 37, 37) 100%)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                            }}
                                        >
                                            Tech Reforms{" "}
                                        </span>
                                        <span className="text-white"> Makes</span>
                                        <br />
                                        <span className="text-white">Your Website Better</span>
                                    </div>
                                    <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white py-2 sm:pt-[22px] pl-[150px] max-sm:pl-[10px]">
                                        We combine technical mastery with creative thinking to deliver a digital experience that is visually pleasing and powerful
                                    </div>
                                    <div className="grid grid-cols-12 pt-[20px]">
                                        <div className="col-span-12 md:col-span-6 pb-[40px] h-full">
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-full h-[2px] bg-[linear-gradient(46deg,#F74B1C_0%,rgba(0,0,0,0)_100%)]"></div>
                                                <div className="flex items-center gap-3">
                                                    <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[35px] font-regular text-[#F74B1C] text-left pb-1 sm:pb-[5px]">01</div>
                                                    <div>
                                                        <div className="font-britanicaRegular text-[13px] leading-tight sm:text-[24px] text-white text-left font-bold">Custom Design</div>
                                                    </div>
                                                </div>
                                                <div className="font-britanicaRegular text-[13px] sm:text-[18px] text-white">
                                                    Our designers craft easy-to-use interfaces with strong visual appeal, guaranteed to speak to your audience.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 pb-[40px] h-full">
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-full h-[2px] bg-[linear-gradient(46deg,#F74B1C_0%,rgba(0,0,0,0)_100%)]"></div>
                                                <div className="flex items-center gap-3">
                                                    <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[35px] font-regular text-[#F74B1C] text-left pb-1 sm:pb-[5px]">02</div>
                                                    <div>
                                                        <div className="font-britanicaRegular text-[13px] leading-tight sm:text-[24px] text-white text-left font-bold">Full-Stack Expertise</div>
                                                    </div>
                                                </div>
                                                <div className="font-britanicaRegular text-[13px] sm:text-[18px] text-white">
                                                    From front-end frameworks to back-end databases and APIs, our developers bring extensive knowledge and expertise to every layer.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6"></div>
                                        <div className="col-span-12 md:col-span-6 pb-[40px] h-full">
                                            <div className="h-full flex flex-col justify-between">
                                                <div className="w-full h-[2px] bg-[linear-gradient(46deg,#F74B1C_0%,rgba(0,0,0,0)_100%)]"></div>
                                                <div className="flex items-center gap-3">
                                                    <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[35px] font-regular text-[#F74B1C] text-left pb-1 sm:pb-[5px]">03</div>
                                                    <div>
                                                        <div className="font-britanicaRegular text-[13px] leading-tight sm:text-[24px] text-white text-left font-bold">Optimization & Support</div>
                                                    </div>
                                                </div>
                                                <div className="font-britanicaRegular text-[13px] sm:text-[18px] text-white">
                                                    Our support team monitors, maintains, refines, and scales your site as your business evolves.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpWebWorks;