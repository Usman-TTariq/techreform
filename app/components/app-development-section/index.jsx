import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const AppDevelopmentSection = () => {
    return (
        <div className="relative pb-[120px]">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHAT"
                                secondWord="WE"
                                thirdWord="BELIEVE"
                            />
                        </div>
                        <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                            <span className="text-white">App Development </span>
                            <span className="text-[#F74B1C]">Services </span>
                            <br />
                            <span className="text-[#F74B1C]">Designed </span>
                            <span className="text-white">for Flawless Execution</span>
                        </div>
                    </div>
                    <div className="col-span-8 col-start-3 text-center ">
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            Our tailored mobile app development solutions include planning, UI/UX design, development, and ongoing support after launch. Our experienced full-stack developers create iOS, Android, and cross-platform applications.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[52px]">
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div>
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Game App Development
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    Game apps that keep players engaged, paying, and returning. We shape mechanics, progression, and content updates around your audience. Expect smooth play, fair rewards, and store launches handled end-to-end today.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div>
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    iOS App Development
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    Game apps that keep players engaged, paying, and returning. We shape mechanics, progression, and content updates around your audience. Expect smooth play, fair rewards, and store launches handled end-to-end today.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div>
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Android App Development
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    Game apps that keep players engaged, paying, and returning. We shape mechanics, progression, and content updates around your audience. Expect smooth play, fair rewards, and store launches handled end-to-end today.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[90px] items-center justify-center">
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user1.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user2.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user3.png"
                                alt="Hero Background"
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