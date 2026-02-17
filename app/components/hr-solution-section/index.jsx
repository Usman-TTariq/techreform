import Image from "next/image";

const HRSolutionSection = () => {
    return (
        <div className="relative pt-10 sm:pt-16 md:pt-[100px] pb-10 sm:pb-16 md:pb-[100px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute -top-[10%] left-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/drivensolbk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 justify-between gap-6">
                    <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                        <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[40px] md:leading-[42px] font-black pb-4 sm:pb-[26px] break-words">
                            <span className="text-white">Data-Driven </span>
                            <span className="text-[#F74B1C]">HR </span>
                            <br />
                            <span className="text-[#F74B1C]">Solutions</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 min-w-0 order-2 text-left md:text-right">
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] font-regular text-white pt-0 leading-relaxed max-w-full">
                            Our HRMS is designed to support data-backed decisions. Track workforce trends, monitor performance, and access real-time insights that help HR teams operate strategically, not reactively.
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-[#7724c100] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px] mt-6">
                    <div className="flex justify-between items-center gap-2 pb-4 sm:pb-[20px]">
                        <div className="min-w-0 flex-1 pr-2">
                            <div className="font-britanicaRegular text-[16px] sm:text-[20px] md:text-[22px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                Reduced HR Workload
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[15%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="font-britanicaRegular text-[24px] sm:text-[32px] font-regular text-white text-right">
                                15%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2 pb-4 sm:pb-[20px]">
                        <div className="min-w-0 flex-1 pr-2">
                            <div className="font-britanicaRegular text-[16px] sm:text-[20px] md:text-[22px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                Improved Employee Retention
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[25%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="font-britanicaRegular text-[24px] sm:text-[32px] font-regular text-white text-right">
                                30d
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2 pb-4 sm:pb-[20px]">
                        <div className="min-w-0 flex-1 pr-2">
                            <div className="font-britanicaRegular text-[16px] sm:text-[20px] md:text-[22px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                Faster HR Processes
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[80%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="font-britanicaRegular text-[24px] sm:text-[32px] font-regular text-white text-right">
                                80%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className="min-w-0 flex-1 pr-2">
                            <div className="font-britanicaRegular text-[16px] sm:text-[20px] md:text-[22px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                Higher Compliance Accuracy
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[80%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="font-britanicaRegular text-[24px] sm:text-[32px] font-regular text-white text-right">
                                95%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HRSolutionSection;
