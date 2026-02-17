import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const StaffAugmentationDevelopmentSection = () => {
    return (
        <div className="relative pb-[120px]">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHAT"
                                secondWord="WE"
                                thirdWord="OFFER"
                            />
                        </div>
                        <div className="font-britanicaBlack text-[42px] leading-[52px] font-black">
                            <span className="text-white">Simple & Scalable </span>
                            <span className="text-[#F74B1C]">Staff Augmentation Services </span>
                            {/* <br />
                            <span className="text-[#F74B1C]">Experts for </span>
                            <span className="text-white">Flexible, Scalable Teams</span> */}
                        </div>
                    </div>
                    <div className="col-span-8 col-start-3 text-center ">
                        {/* <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            We provide reliable staff augmentation services that help organizations fill skill gaps with highly qualified professionals. Our flexible engagement models ensure you get the right talent at the right time — without the complexities of traditional hiring.
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[52px]">
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Dedicated talent"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    For Faster Delivery and Higher Productivity
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    We provide reliable staff augmentation services that help organizations fill skill gaps with highly qualified professionals. Our flexible engagement models ensure you get the right talent at the right time — without the complexities of traditional hiring
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Flexible engagement"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    IT Staff Augmentation
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    Our IT staff augmentation services give you access to skilled developers, engineers, designers, QA specialists, DevOps experts, and project managers. We help you scale your tech team quickly while maintaining full control over your project.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Quick scaling"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Dedicated Development Teams
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    Need long-term support? Our dedicated professionals work as an extension of your in-house team, aligned with your goals, processes, and culture.
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
                                alt="Staff augmentation"
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
                                alt="Staff augmentation"
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
