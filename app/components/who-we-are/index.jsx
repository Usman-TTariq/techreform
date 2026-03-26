"use client";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";
import CapsuleLabel from "../common/capsule-label";
import { useState } from "react";
import Button from "../common/button";

const WhoWeAre = ({ p1, p2, buttonText }) => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px]">
            <Image
                className="absolute -top-[20%] left-0 w-[50%] sm:w-[40%] md:w-[35%] opacity-60"
                src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772827382/bk1_qqglcc.png"
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
                            {p1}
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
                            {p2}
                        </div>
                        <div className="pt-4 sm:pt-[30px] w-full flex justify-center items-center">
                            <div className="w-full max-w-[320px] sm:max-w-none mx-auto flex justify-center">
                                <Button text={buttonText} icon={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default WhoWeAre;
