import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const AppDevelopmentSection = () => {
    return (
        <div className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
            <div className="container relative px-4 sm:px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Hire Our Native & Hybrid App </span>
                            <span className="text-[#F74B1C]">Development Experts </span>
                            <br />
                            <span className="text-[#F74B1C]">For User-Centric Apps with </span>
                            <span className="text-white">Secure Mobile App Architecture</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            We develop scalable mobile applications with intuitive UI/UX design, a feature-rich development approach, and ongoing support after launch. Our expertly curated mobile apps are built to offer cross-platform compatibility and seamless performance across devices.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-8 sm:pt-12 md:pt-[52px]">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    Game App Development
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                    Get an enterprise-grade mobile game solution that keeps the players hooked, engaged, and coming back for more. We design and develop gameplay, mechanics, and graphics based on user requirements to deliver smoother, more memorable gameplay.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    iOS App Development
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                    Secure premium mobile experiences with our certified iOS app development services. We build secure, scalable, high-performance mobile apps with seamless UI/UX and App Store compliance to help you gain more engagement and growth.
                                </div>
                                <div className="pt-6 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-8 sm:py-10 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                    Android App Development
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left">
                                Partner up with our results-driven Android app development company to attain powerful Android apps tailored to diverse devices. Our apps come with a perfect blend of intuitive design, high performance, and Google Play compliance.
                                </div>
                                <div className="pt-6 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-12 sm:pt-16 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-4">
                        <div>
                            <Image
                                className="w-[80%] sm:w-[90%] m-auto"
                                src="/images/user1.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                        <div>
                            <Image
                                className="w-[80%] sm:w-[90%] m-auto"
                                src="/images/user2.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                        <div>
                            <Image
                                className="w-[80%] sm:w-[90%] m-auto"
                                src="/images/user3.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDevelopmentSection;