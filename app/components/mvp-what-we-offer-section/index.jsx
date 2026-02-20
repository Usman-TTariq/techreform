"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CARDS = [
    {
        title: "MVP Strategy and Validation",
        desc: "We provide expert MVP consulting for startups to process, refine, define core features, and simply prioritize value-adding functionality. Our product validation services provide simple, hassle-free early product testing to keep your concept relevant prior to development.",
    },
    {
        title: "Custom MVP Development",
        desc: "Our custom MVP development helps us focus on presenting secure solutions and performance-driven applications. We built an intuitive startup website and App MVP, even a custom software MVP for Entrepreneurs.",
    },
    {
        title: "Agile and Lean Product Development",
        desc: "Our experts follow a simplified iterative process for Agile MVP development and lean product development. This helps us implement continuous improvements and faster feedback cycles. Our iterative product development model, your MVP evolves based on real user insights.",
    },
    {
        title: "Rapid Prototyping and MVP Prototype Development",
        desc: "Development doesn’t begin instantly; there is a detailed prototyping process involved to make sure the product we deliver is what the client wants. Our experts visualize the product via Startup App Prototypes. This MVP Prototype Development service equips teams to test app credibility.",
    },
];

const MvpWhatWeOfferSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
                        </div>
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">End-to-End MVP </span>
                            <span className="text-[#F74B1C]">Development Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
                    {CARDS.map((card, i) => (
                        <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 min-w-0">
                            <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                                <div className="flex flex-col justify-between h-full min-h-0">
                                    <div className="pb-3 sm:pb-[20px]">
                                        <Image
                                            className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                            src="/images/gamingicon.png"
                                            alt={card.title}
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                        {card.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                        {card.desc}
                                    </div>
                                    <div className="pt-4 sm:pt-[30px] flex justify-start">
                                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user1.png"
                                alt="MVP"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user2.png"
                                alt="MVP"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user3.png"
                                alt="MVP"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div> */}
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default MvpWhatWeOfferSection;
