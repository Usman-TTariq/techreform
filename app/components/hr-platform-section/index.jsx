import Image from "next/image";
import Button from "../common/button";

const HRPlatformSection = () => {
    return (
        <div className="relative pb-[60px]">
            <Image
                className="absolute top-[10%] left-[0px] w-[35%]"
                src="/images/hrbk1.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[10%] right-[0px] w-[35%]"
                src="/images/hrbk2.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                            <span className="text-white">One Centralized </span>
                            <span className="text-[#F74B1C]">HR Platform </span>
                            <span className="text-white">for</span>
                            <br />
                            <span className="text-white">Modern </span>
                            <span className="text-[#F74B1C]">Teams</span>
                        </div>
                    </div>
                    <div className="col-span-8 col-start-3 text-center ">
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            From employee records to attendance, performance, and analytics — our HRMS brings everything together in a single, easy-to-use dashboard.
                        </div>
                        <div className="pt-[30px] flex justify-center">
                            <Button text="Get a Call Back" icon={false} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[50px]">
                    <div className="col-span-12">
                        <div className="rounded-xl bg-[#7724c100] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 my-auto">
                                    <div className="flex justify-start gap-[18px] pb-[32px]">
                                        <Image
                                            className="w-[65px] h-[65px]"
                                            src="/images/hricon.png"
                                            alt="Hero Background"
                                            width={1000}
                                            height={1000}
                                        />
                                        <div>
                                            <div className="font-britanicaBlack font-bold text-[32px] font-regular text-white text-left pb-[5px]">
                                                Employee Management
                                            </div>
                                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                                Streamline performance evaluations, goal- <br />
                                                setting, and feedback processes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-[18px] pb-[32px]">
                                        <Image
                                            className="w-[65px] h-[65px]"
                                            src="/images/hricon.png"
                                            alt="Hero Background"
                                            width={1000}
                                            height={1000}
                                        />
                                        <div>
                                            <div className="font-britanicaBlack font-bold text-[32px] font-regular text-white text-left pb-[5px]">
                                                Attendance & Leave Tracking
                                            </div>
                                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                                Automated attendance, leave requests, <br /> approvals, and real-time tracking.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-[18px] pb-[32px]">
                                        <Image
                                            className="w-[65px] h-[65px]"
                                            src="/images/hricon.png"
                                            alt="Hero Background"
                                            width={1000}
                                            height={1000}
                                        />
                                        <div>
                                            <div className="font-britanicaBlack font-bold text-[32px] font-regular text-white text-left pb-[5px]">
                                                Payroll & Compensation
                                            </div>
                                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                                Accurate payroll processing with fewer errors and better transparency.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-[18px] pb-[32px]">
                                        <Image
                                            className="w-[65px] h-[65px]"
                                            src="/images/hricon.png"
                                            alt="Hero Background"
                                            width={1000}
                                            height={1000}
                                        />
                                        <div>
                                            <div className="font-britanicaBlack font-bold text-[32px] font-regular text-white text-left pb-[5px]">
                                                Payroll & Compensation
                                            </div>
                                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                                Accurate payroll processing with fewer errors and better transparency.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 my-auto">
                                    <Image
                                        className="w-[100%]"
                                        src="/images/hrright.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HRPlatformSection;