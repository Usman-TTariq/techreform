import Image from "next/image";

const EffortlessEmployeeSection = () => {
    return (
        <div className="relative pb-12 sm:pb-20 md:pb-[150px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute -top-[25%] left-0 w-[60%] sm:w-[45%] opacity-60 sm:opacity-100 hidden sm:block"
                src="/images/effort1.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 right-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100 hidden sm:block"
                src="/images/effort2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1">
                        <div>
                            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[36px] md:text-[40px] md:leading-[42px] font-black pb-4 sm:pb-[26px] text-left break-words">
                                <span className="text-white">Effortless Employee </span>
                                <br />
                                <span className="text-[#F74B1C]">Onboarding </span>
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] font-regular text-white text-left leading-relaxed max-w-full">
                                Simplify complex HR processes with our intelligent HRMS solution. From employee management and payroll to performance tracking and analytics, our platform centralizes everything in one powerful system — helping you save time, reduce errors, and focus on strategic growth.
                            </div>
                        </div>
                        <div className="pt-6 sm:pt-[40px]">
                            <div className="rounded-xl mb-4 sm:mb-[20px] h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                                <div className="min-w-0">
                                    <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-2 sm:pb-[5px] break-words">
                                        Onboarding & System Setup
                                    </div>
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                        Easily configure your HR workflows and import employee data without manual complexity. Our guided setup ensures a seamless transition from recruitment to active employment.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-[10px] pt-4 sm:pt-[30px]">
                                    <Image className="w-6 h-6 sm:w-[30px] sm:h-[30px] shrink-0" src="/images/checkitkc.png" alt="" width={30} height={30} />
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left">Centralized document management</div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-[10px] pt-4 sm:pt-[30px]">
                                    <Image className="w-6 h-6 sm:w-[30px] sm:h-[30px] shrink-0" src="/images/checkitkc.png" alt="" width={30} height={30} />
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left">Automated role and access assignment</div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-[10px] pt-4 sm:pt-[30px]">
                                    <Image className="w-6 h-6 sm:w-[30px] sm:h-[30px] shrink-0" src="/images/checkitkc.png" alt="" width={30} height={30} />
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left">Policy acknowledgment tracking</div>
                                </div>
                            </div>
                            <div className="rounded-xl mb-4 sm:mb-[20px] h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-5 sm:py-[36px]">
                                <div className="min-w-0">
                                    <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-2 sm:pb-[5px] break-words">Smooth Implementation</div>
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">Launch your HR processes with clarity and structure.</div>
                                </div>
                            </div>
                            <div className="rounded-xl h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-5 sm:py-[36px]">
                                <div className="min-w-0">
                                    <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-2 sm:pb-[5px] break-words">Analysis & Continuous Improvement</div>
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">Monitor onboarding performance, identify bottlenecks, and optimize workflows to create a better employee experience from day one.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 order-2">
                        <div className="h-full min-h-[220px] sm:min-h-[300px] border border-[#7724C1] rounded-2xl overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src="/images/empowering.png"
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

export default EffortlessEmployeeSection;
