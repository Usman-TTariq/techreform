import Image from "next/image";

const EffortlessEmployeeSection = () => {
    return (
        <div className="relative pb-[150px]">
            <Image
                className="absolute -top-[25%] left-[0px] w-[45%]"
                src="/images/effort1.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-[0%] right-[0px] w-[35%]"
                src="/images/effort2.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6">
                        <div>
                            <div className="font-britanicaBlack text-[40px] leading-[42px] font-black pb-[26px] text-left">
                                <span className="text-white">Effortless Employee </span>
                                <br />
                                <span className="text-[#F74B1C]">Onboarding </span>
                            </div>
                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                Simplify complex HR processes with our intelligent HRMS solution. From employee management and payroll to performance tracking and analytics, our platform centralizes everything in one powerful system — helping you save time, reduce errors, and focus on strategic growth.
                            </div>
                        </div>
                        <div className="pt-[40px]">
                            <div className="rounded-xl mb-[20px] h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                                <div>
                                    <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                        Onboarding & System Setup
                                    </div>
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Easily configure your HR workflows and import employee data without manual complexity. Our guided setup ensures a seamless transition from recruitment to active employment.
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px] pt-[30px]">
                                    <Image
                                        className="w-[30px]"
                                        src="/images/checkitkc.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Centralized document management
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px] pt-[30px]">
                                    <Image
                                        className="w-[30px]"
                                        src="/images/checkitkc.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Automated role and access assignment
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px] pt-[30px]">
                                    <Image
                                        className="w-[30px]"
                                        src="/images/checkitkc.png"
                                        alt="Hero Background"
                                        width={1000}
                                        height={1000}
                                    />
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Policy acknowledgment tracking
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl mb-[20px] h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[36px]">
                                <div>
                                    <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                        Smooth Implementation
                                    </div>
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Launch your HR processes with clarity and structure.
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl h-full bg-[#7724c100] border border-[#FF976C] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[36px]">
                                <div>
                                    <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                        Analysis & Continuous Improvement
                                    </div>
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                        Monitor onboarding performance, identify bottlenecks, and optimize workflows to create a better employee experience from day one.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="h-full border border-[#7724C1] rounded-2xl overflow-hidden">
                            <Image
                                className="w-[100%] h-[100%] object-cover"
                                src="/images/empowering.png"
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

export default EffortlessEmployeeSection;
