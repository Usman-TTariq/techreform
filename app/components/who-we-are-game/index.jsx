"use client";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";
import CapsuleLabel from "../common/capsule-label";
import { useState } from "react";
import Button from "../common/button";

const WhoWeAreGame = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px]">
            <Image
                className="absolute -top-[20%] left-0 w-[50%] sm:w-[40%] md:w-[35%] opacity-60"
                src="/images/bk1.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative px-4 sm:px-4">
                <div className="grid grid-cols-12 pt-12 sm:pt-16 md:pt-[100px]">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHO"
                                secondWord="WE"
                                thirdWord="ARE"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
                            Are you looking to hire game developers in the USA? We can help!
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
                            As a trusted custom game development firm, Tech Reform helps businesses design, develop, and launch high-performance games tailored to their target audiences.
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
                            Our experienced team specializes in 2D and 3D mobile games, high-resolution PC games, and advanced console gaming solutions. We focus on building scalable and revenue-driven gaming experiences that players love.

                        </div>
                        {/* <div className="pt-4 sm:pt-[30px] w-full flex justify-center items-center">
                            <div className="w-full max-w-[320px] sm:max-w-none mx-auto flex justify-center">
                                <Button text="Hire Game Developers Today" icon={false} onClick={() => setPopupOpen(true)} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default WhoWeAreGame;
