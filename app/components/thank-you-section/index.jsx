"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThankYouText from "./svg/thank-you-text";
import Button from "../common/button";

const ThankYouSection = () => {
    const router = useRouter();
    return (
        <div className="relative h-[90vh] overflow-hidden z-10">
            <Image className="absolute top-[50%] -translate-y-1/2 right-0 w-[40%]" src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772831281/thankyouimg_hwhncw.png" alt="Thank You" width={1000} height={1000} />
            <div className="container relative z-10 h-full">
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-7 my-auto">
                        <div>
                            <Image className="w-full" src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772832734/Group_2147225281_1_zd10gf.png" alt="Thank You" width={1000} height={1000} />
                        </div>
                        <div className="font-britanicaBlack pt-[10px] text-[26px] leading-[1.2] sm:text-[36px] md:text-[46px] lg:text-[60px] lg:leading-[52px] font-black">
                            <span className="text-white">For contacting us.</span>
                        </div>
                        <div>
                            <div className="font-britanicaRegular text-[14px] sm:text-[18px] md:text-[30px] font-regular text-white pt-3 sm:pt-[22px] max-w-xl">
                                <span className="text-white">What </span><span className="text-[#F74B1C]">happens </span><span className="text-white">next?</span>
                            </div>
                            <div className="pl-[14px]">
                                <div className="pt-6 sm:pt-[30px]">
                                    <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-10 sm:pl-[30px] pb-5 sm:pb-[30px] min-w-0">
                                        <Image
                                            className="absolute -top-0.5 left-0 max-sm:left-[-14px] sm:-left-[17px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-20"
                                            src="/images/step1.png"
                                            alt=""
                                            width={35}
                                            height={35}
                                        />
                                        <div className="absolute -top-0.5 left-0 max-sm:left-[-14px] sm:-left-[17px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_86%)]"></div>
                                        <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                                            We Schedule a call at your convenience
                                        </div>
                                    </div>
                                    <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-10 sm:pl-[30px] pb-5 sm:pb-[30px] min-w-0">
                                        <Image
                                            className="absolute -top-0.5 left-0 sm:-left-[17px] max-sm:left-[-14px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-20"
                                            src="/images/step2.png"
                                            alt=""
                                            width={35}
                                            height={35}
                                        />
                                        <div className="absolute -top-0.5 left-0 sm:-left-[17px] max-sm:left-[-14px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_86%)]"></div>
                                        <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                                            We do a discovery and consulting meeting
                                        </div>
                                    </div>
                                    <div className="relative flex justify-start items-start pl-10 sm:pl-[30px] pb-0 min-w-0">
                                        <Image
                                            className="absolute -top-0.5 left-0 sm:-left-[17px] max-sm:left-[-14px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-20"
                                            src="/images/step3.png"
                                            alt=""
                                            width={35}
                                            height={35}
                                        />
                                        <div className="absolute -top-0.5 left-0 sm:-left-[17px] max-sm:left-[-14px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_86%)]"></div>
                                        <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                                            We prepare a proposal
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 sm:pt-[30px]">
                                <Button
                                    text="Back To Home"
                                    icon={false}
                                    onClick={() => router.push("/")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouSection;
