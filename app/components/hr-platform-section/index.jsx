import Image from "next/image";
import Button from "../common/button";

const HRPlatformSection = () => {
    return (
        <div className="relative pb-10 sm:pb-16 md:pb-[60px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute top-[10%] left-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/hrbk1.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[10%] right-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/hrbk2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-20 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black break-words">
                            <span className="text-white">One Centralized </span>
                            <span className="text-[#F74B1C]">HR Platform </span>
                            <span className="text-white">for</span>
                            <br />
                            <span className="text-white">Modern </span>
                            <span className="text-[#F74B1C]">Teams</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            From employee records to attendance, performance, and analytics — our HRMS brings everything together in a single, easy-to-use dashboard.
                        </div>
                        <div className="pt-5 sm:pt-[30px] flex justify-center">
                            <Button text="Get a Call Back" icon={false} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-8 sm:pt-12 md:pt-[50px]">
                    <div className="col-span-12 min-w-0">
                        <div className="rounded-xl bg-[#7724c100] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-1">
                                    <div className="flex justify-start gap-3 sm:gap-[18px] pb-6 sm:pb-[32px]">
                                        <Image
                                            className="w-12 h-12 sm:w-[65px] sm:h-[65px] shrink-0"
                                            src="/images/hricon.png"
                                            alt=""
                                            width={65}
                                            height={65}
                                        />
                                        <div className="min-w-0">
                                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[28px] md:text-[32px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                                Employee Management
                                            </div>
                                            <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                                Streamline performance evaluations, goal-setting, and feedback processes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-3 sm:gap-[18px] pb-6 sm:pb-[32px]">
                                        <Image
                                            className="w-12 h-12 sm:w-[65px] sm:h-[65px] shrink-0"
                                            src="/images/hricon.png"
                                            alt=""
                                            width={65}
                                            height={65}
                                        />
                                        <div className="min-w-0">
                                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[28px] md:text-[32px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                                Attendance & Leave Tracking
                                            </div>
                                            <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                                Automated attendance, leave requests, approvals, and real-time tracking.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-3 sm:gap-[18px] pb-6 sm:pb-[32px]">
                                        <Image
                                            className="w-12 h-12 sm:w-[65px] sm:h-[65px] shrink-0"
                                            src="/images/hricon.png"
                                            alt=""
                                            width={65}
                                            height={65}
                                        />
                                        <div className="min-w-0">
                                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[28px] md:text-[32px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                                Payroll & Compensation
                                            </div>
                                            <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                                Accurate payroll processing with fewer errors and better transparency.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-2">
                                    <Image
                                        className="w-full max-w-full h-auto"
                                        src="/images/hrright.png"
                                        alt=""
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