import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const StaffAugmentationDevelopmentSection = () => {
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHAT"
                                secondWord="WE"
                                thirdWord="OFFER"
                            />
                        </div>
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">Simple & Scalable </span>
                            <span className="text-[#F74B1C]">Staff Augmentation Services </span>
                            {/* <br />
                            <span className="text-[#F74B1C]">Experts for </span>
                            <span className="text-white">Flexible, Scalable Teams</span> */}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
                        {/* <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            We provide reliable staff augmentation services that help organizations fill skill gaps with highly qualified professionals. Our flexible engagement models ensure you get the right talent at the right time — without the complexities of traditional hiring.
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image
                                        className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Dedicated talent"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                    For Faster Delivery and Higher Productivity
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                    We provide reliable staff augmentation services that help organizations fill skill gaps with highly qualified professionals. Our flexible engagement models ensure you get the right talent at the right time — without the complexities of traditional hiring
                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image
                                        className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Flexible engagement"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                    IT Staff Augmentation
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                    Our IT staff augmentation services give you access to skilled developers, engineers, designers, QA specialists, DevOps experts, and project managers. We help you scale your tech team quickly while maintaining full control over your project.
                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image
                                        className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Quick scaling"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                    Dedicated Development Teams
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                    Need long-term support? Our dedicated professionals work as an extension of your in-house team, aligned with your goals, processes, and culture.
                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user1.png"
                                alt="Staff augmentation"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user2.png"
                                alt="Staff augmentation"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user3.png"
                                alt="Staff augmentation"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAugmentationDevelopmentSection;
