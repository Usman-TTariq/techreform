import Image from "next/image";

const HRSolutionSection = () => {
    return (
        <div className="relative pt-[100px] pb-[100px]">
            <Image
                className="absolute -top-[10%] left-[0px] w-[35%]"
                src="/images/drivensolbk.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-5">
                        <div className="font-britanicaBlack text-[40px] leading-[42px] font-black pb-[26px]">
                            <span className="text-white">Data-Driven </span>
                            <span className="text-[#F74B1C]">HR </span>
                            <br />
                            <span className="text-[#F74B1C]">Solutions</span>
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="font-britanicaRegular text-[18px] font-regular text-white text-right pt-[0px]">
                            Our HRMS is designed to support data-backed decisions. Track workforce trends,<br /> monitor performance, and access real-time insights that help HR teams operate <br />strategically, not reactively.
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-[#7724c100] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                    <div className="flex justify-between items-center pb-[20px]">
                        <div className="w-[93%]">
                            <div className="font-britanicaRegular text-[22px] font-regular text-white text-left pb-[5px]">
                                Reduced HR Workload
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[15%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="font-britanicaRegular text-[32px] font-regular text-white text-right">
                                15%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-[20px]">
                        <div className="w-[93%]">
                            <div className="font-britanicaRegular text-[22px] font-regular text-white text-left pb-[5px]">
                                Improved Employee Retention
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[25%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="font-britanicaRegular text-[32px] font-regular text-white text-right">
                                30d
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-[20px]">
                        <div className="w-[93%]">
                            <div className="font-britanicaRegular text-[22px] font-regular text-white text-left pb-[5px]">
                                Faster HR Processes
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[80%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="font-britanicaRegular text-[32px] font-regular text-white text-right">
                                80%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-[93%]">
                            <div className="font-britanicaRegular text-[22px] font-regular text-white text-left pb-[5px]">
                                Higher Compliance Accuracy
                            </div>
                            <div className="relative w-full h-[4px] bg-[#fff]">
                                <div className="absolute top-0 left-0 w-[80%] h-full bg-[#7724C1]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="font-britanicaRegular text-[32px] font-regular text-white text-right">
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
