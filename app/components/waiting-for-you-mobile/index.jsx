"use client";
import Image from "next/image"
import Button from "../common/button";

const WaitingForYouMobile = () => {
    return (
        <div className="relative bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)] py-[2px] mt-[100px] mb-[220px]">
            <div className="bg-black">
                <div className="relative container">
                    <Image
                        className="w-[550px] absolute top-[50%] translate-y-[-50%] right-0"
                        src="/images/waiting.png"
                        alt="Hero Background"
                        width={1000}
                        height={1000}
                    />
                    <div className="grid grid-cols-12 gap-12 py-[80px]">
                        <div className="col-span-7 my-auto max-lg:col-span-12">
                            <div>
                                <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                                    <span className="text-white">Start Your </span>
                                    <span className="text-[#F74B1C]">Free App</span>
                                    <br />
                                    <span className="text-[#F74B1C]">Estimation </span>
                                    <span className="text-white">Today!</span>
                                </div>
                                <div className="font-britanicaRegular mr-[150px] text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                    There’s so much potential in your idea — don’t let it go unnoticed. Share it with the world and create something truly meaningful. Take the first step by clicking the button below.
                                </div>
                                <div className="pt-5 sm:pt-[30px] flex gap-4 justify-start">
                                    <Button text="Get Started" icon={false} onClick={() => setPopupOpen(true)} />
                                    <Button textClassName="!text-[#F74B1C]" className="!bg-transparent" hoverClassName="!bg-transparent" text="(213) 262-5357" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForYouMobile;