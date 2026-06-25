"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import GameDevelopmentCostTable from "./game-development-cost-table";

const FaqLink = ({ href, children }) => (
    <Link href={href} className="text-[#F74B1C] hover:underline">
        {children}
    </Link>
);

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How much does game development cost in 2026?",
        answer: <GameDevelopmentCostTable />,
    },
    {
        id: 2,
        question: "How long does it take to develop a game?",
        answer: (
            <>
                The timeline depends on the complexity and features required. A simple MVP typically takes 4–8 weeks, while a full-featured game can take 3–6 months. We provide a clear project timeline before development begins.
            </>
        ),
    },
    {
        id: 3,
        question: "Do you build games for both iOS and Android?",
        answer: (
            <>
                Yes. We develop native iOS and Android apps as well as cross-platform solutions using Flutter and React Native — giving you maximum reach without doubling the budget.
            </>
        ),
    },
    {
        id: 4,
        question: "Can I hire dedicated game developers from Tech Reforms?",
        answer: (
            <>
                Absolutely. Hire dedicated Unity, Unreal, and mobile game developers on full-time, part-time, or project basis through our{" "}
                <FaqLink href="/hire-game-developer">Hire Game Developers</FaqLink> page.
            </>
        ),
    },
    {
        id: 5,
        question: "Will you help with game design (UI/UX) as well?",
        answer: (
            <>
                Yes, our team handles end-to-end development — from wireframes and UI/UX design to backend engineering and app store submission.
            </>
        ),
    },
    {
        id: 6,
        question: "Do you develop AI-powered games?",
        answer: (
            <>
                Yes. We integrate AI/ML features including chatbots, recommendation engines, and intelligent automation into mobile apps across industries.
            </>
        ),
    },
    {
        id: 7,
        question: "What happens after my game is launched?",
        answer: (
            <>
                We provide post-launch support, bug fixes, performance optimization, and feature updates. You won&apos;t be left alone after go-live.
            </>
        ),
    },
    {
        id: 8,
        question: "Do you sign an NDA before starting the project?",
        answer: (
            <>
                Yes. We sign a Non-Disclosure Agreement before any project discussion to ensure your idea and data remain fully confidential.
            </>
        ),
    },
    {
        id: 9,
        question: "What industries do you serve with your game development services?",
        answer: (
            <>
                We&apos;ve built apps for healthcare, eCommerce, education, fintech, logistics, real estate, and gaming — across both startups and established businesses.
            </>
        ),
    },
    {
        id: 10,
        question: "How do I get started?",
        answer: (
            <>
                Fill out the contact form or call us at{" "}
                <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">
                    (582) 233-5015
                </a>
                . Our team will schedule a free discovery call, understand your requirements, and send you a proposal within 48 hours.
            </>
        ),
    },
];

const FaqGameDevelopmentSection = () => {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
    return (
        <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
            <div className="container max-w-[1200px] mx-auto w-full min-w-0">
                <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
                    <div className="col-span-12 lg:col-span-4">
                        <CapsuleLabel firstWord="FAQ" secondWord="" />
                        <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4">
                            <span className="text-white">Frequently Asked </span>
                            <br />
                            <span className="text-[#F74B1C]">Questions</span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
                        <div className="flex flex-col gap-2 sm:gap-3">
                            {FAQ_ITEMS.map((item) => {
                                const isOpen = openId === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenId(isOpen ? null : item.id)}
                                            className="w-full cursor-pointer flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-5 text-left min-w-0"
                                        >
                                            <span className="font-britanicaExtraBold text-[15px] sm:text-[17px] text-white pr-2 sm:pr-4 min-w-0 break-words text-left">
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed pb-4 sm:pb-5 px-4 sm:px-5 pt-0 border-t border-white/10 break-words min-w-0">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqGameDevelopmentSection;
