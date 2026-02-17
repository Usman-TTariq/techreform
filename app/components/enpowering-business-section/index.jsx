import Image from "next/image";
import Button from "../common/button";

const EnpoweringBusinessSection = () => {
    return (
        <div className="relative pt-8 sm:pt-12 md:pt-[50px] pb-12 sm:pb-16 md:pb-[100px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute -top-[25%] right-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/empowerbk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12 justify-between gap-6">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-2 md:order-1">
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] font-regular text-white text-left pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                            Discover how our HRMS platform enables organizations of all sizes to streamline operations, enhance employee experience, and drive sustainable growth.
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1 md:order-2 text-left md:text-right">
                        <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[40px] md:leading-[42px] font-black pb-4 sm:pb-[26px] break-words">
                            <span className="text-white">Empowering </span>
                            <span className="text-[#F74B1C]">Businesses </span>
                            <br />
                            <span className="text-[#F74B1C]">to </span>
                            <span className="text-[#F74B1C]">Succeed </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-6 sm:pt-8">
                    <div className="col-span-12 md:col-span-6 min-w-0 order-1">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#ffffff50] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="min-w-0">
                                <div className="font-britanicaBlack font-bold text-[22px] sm:text-[28px] md:text-[32px] font-regular text-white text-left pb-2 sm:pb-[5px] break-words">
                                    Employee Management
                                </div>
                                <div className="font-britanicaRegular text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                    Simplify complex HR processes with our intelligent HRMS solution. From employee management and payroll to performance tracking and analytics, our platform centralizes everything in one powerful system — helping you save time, reduce errors, and focus on strategic growth.
                                </div>
                                <div className="pt-5 sm:pt-[30px] flex justify-start">
                                    <Button text="See How It Works" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 min-w-0 order-2">
                        <div className="h-full min-h-[200px] sm:min-h-[280px] border border-[#7724C1] rounded-2xl overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src="/images/Background.png"
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

export default EnpoweringBusinessSection;
