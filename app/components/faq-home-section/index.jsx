"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How do you make sure the quality of your applications is not subpar?",
        answer: (
            <>
                We follow a standard development process. This involves:
                <ul className="list-none mt-3 space-y-2 min-w-0">
                    <li className="flex gap-2 min-w-0">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span className="min-w-0 break-words">Code Reviews</span>
                    </li>
                    <li className="flex gap-2 min-w-0">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span className="min-w-0 break-words">Testing Cycles</span>
                    </li>
                    <li className="flex gap-2 min-w-0">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span className="min-w-0 break-words">Performance Optimization</span>
                    </li>
                </ul>
                <p className="mt-4 min-w-0 break-words">This scheme is to make sure all of our deliveries are done properly and aren&apos;t subpar.</p>
            </>
        ),
    },
    {
        id: 2,
        question: "Do you build apps from scratch or work on revamping existing products?",
        answer: (
            <>
                We do it all—recreating and revamping is the most common work we do. However, we&apos;ve made many from-scratch products, including MVP.
            </>
        ),
    },
    {
        id: 3,
        question: "How do you handle project communication and transparency?",
        answer: (
            <>
                We maintain clear communication. We actively update our clients via shared tools and sprint reviews.
            </>
        ),
    },
    {
        id: 4,
        question: "What are the industries and types of products you've mastered?",
        answer: (
            <>
                We are master crafters of mobile apps, games, e-commerce platforms, and enterprise systems.
            </>
        ),
    },
    {
        id: 5,
        question: "What changes can you make during the project?",
        answer: (
            <>
                You can request changes at any stage. We assess the impact of the process and proceed with caution.
            </>
        ),
    },
];

const FaqHomeSection = () => {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

    return (
        <section className="relative py-[60px] bg-[#0E0E0E] overflow-x-hidden">
            <div className="container min-w-0 overflow-x-hidden px-4 sm:px-4">
                <div className="grid grid-cols-12 gap-8 max-sm:gap-0 min-w-0 w-full max-w-full overflow-x-hidden">
                    <div className="col-span-12 lg:col-span-4 min-w-0">
                        <CapsuleLabel firstWord="FAQ" />
                        <h2 className="font-britanicaBlack text-[36px] md:text-[42px] leading-[1.15] font-black pt-4">
                            <span className="text-white">Frequently Asked </span>
                            <br />
                            <span className="text-[#F74B1C]">Questions</span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
                        <div className="flex flex-col gap-3 min-w-0">
                            {FAQ_ITEMS.map((item) => {
                                const isOpen = openId === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25 min-w-0 w-full"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenId(isOpen ? null : item.id)}
                                            className="w-full min-w-0 cursor-pointer flex items-center justify-between gap-4 py-4 px-5 text-left"
                                        >
                                            <span className="font-britanicaExtraBold text-[17px] text-white pr-4 min-w-0 break-words">
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`max-sm:block sm:grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "max-sm:block sm:grid-rows-[1fr]" : "max-sm:hidden sm:grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden min-w-0 w-full">
                                                <div className="font-britanicaRegular text-[16px] text-white/85 leading-relaxed pb-5 px-5 pt-0 border-t border-white/10 break-words min-w-0 w-full max-w-full overflow-x-hidden">
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

export default FaqHomeSection;
