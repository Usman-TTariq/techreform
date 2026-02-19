"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How fast can you provide an ERP developer?",
        answer: (
            <>
                In most cases, we can onboard qualified ERP developers within 1–2 weeks, depending on the skills and experience required.
            </>
        ),
    },
    {
        id: 2,
        question: "Can I increase or reduce the development team anytime?",
        answer: (
            <>
                Yes. Our ERP development model is designed to be flexible, allowing you to scale your team based on your current project demands.
            </>
        ),
    },
    {
        id: 3,
        question: "Will the developer work in my time zone?",
        answer: (
            <>
                Absolutely. We align our remote ERP developers with your preferred US time zone to ensure smooth communication and collaboration.
            </>
        ),
    },
    {
        id: 4,
        question: "What ERP platforms do you specialize in?",
        answer: (
            <>
                We provide SAP development services, Oracle, Microsoft Dynamics ERP, Odoo ERP, NetSuite ERP, and tailored cloud-based ERP solutions.
            </>
        ),
    },
    {
        id: 5,
        question: "Do you offer ERP migration services?",
        answer: (
            <>
                Yes, our ERP migration services help businesses move from legacy systems to modern cloud-based environments with minimal disruption.
            </>
        ),
    },
];

const FaqErpSection = () => {
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

export default FaqErpSection;
