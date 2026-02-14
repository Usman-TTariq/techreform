import Image from "next/image";
import Button from "../common/button";

const EnpoweringBusinessSection = () => {
    return (
        <div className="relative pt-[50px] pb-[100px]">
            <Image
                className="absolute -top-[25%] right-[0px] w-[35%]"
                src="/images/empowerbk.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-6">
                        <div className="font-britanicaRegular text-[18px] font-regular text-white text-left pt-[22px]">
                            Discover how our HRMS platform enables organizations of all sizes to streamline operations, enhance employee experience, and drive sustainable growth.
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="font-britanicaBlack text-[40px] leading-[42px] font-black pb-[26px] text-right">
                            <span className="text-white">Empowering </span>
                            <span className="text-[#F74B1C]">Businesses </span>
                            <br />
                            <span className="text-[#F74B1C]">to </span>
                            <span className="text-[#F74B1C]">Succeed </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#ffffff50] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div>
                                <div className="font-britanicaBlack font-bold text-[32px] font-regular text-white text-left pb-[5px]">
                                    Employee Management
                                </div>
                                <div className="font-britanicaRegular text-[18px] font-regular text-white text-left">
                                    Simplify complex HR processes with our intelligent HRMS solution. From employee management and payroll to performance tracking and analytics, our platform centralizes everything in one powerful system — helping you save time, reduce errors, and focus on strategic growth.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="See How It Works" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="h-full border border-[#7724C1] rounded-2xl overflow-hidden">
                            <Image
                                className="w-[100%] h-[100%] object-cover"
                                src="/images/Background.png"
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

export default EnpoweringBusinessSection;
