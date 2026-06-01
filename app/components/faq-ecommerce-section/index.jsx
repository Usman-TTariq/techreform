"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How long will it take to build my e-commerce website?",
        answer: (
            <>
                The timeline ranges from 3 to 8 weeks, depending on complexity, number of products, custom features, and required integrations. Note that if your project is custom, it may take longer than usual.
            </>
        ),
    },
    {
        id: 2,
        question: "Which e-commerce shops do you specialize in?",
        answer: (
            <>
                We work with leading platforms such as Shopify, WooCommerce, and BigCommerce. These are the most popular platforms used by major enterprises.
            </>
        ),
    },
    {
        id: 3,
        question: "Do you offer custom e-commerce development services?",
        answer: (
            <>
                Yes, we offer fully customized e-commerce development services tailored to your business needs and operational requirements.
            </>
        ),
    },
];

const FaqEcommerceSection = () => {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

    return (
        <section className="relative py-8 sm:py-12 md:py-[60px] bg-[#0E0E0E] overflow-x-hidden">
            <div className="container px-4 sm:px-4 w-full max-w-[100vw] box-border min-w-0">
                <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
                    <div className="col-span-12 lg:col-span-4 min-w-0">
                        <CapsuleLabel firstWord="FAQ" secondWord="" />
                        <h2 className="font-britanicaBlack text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] font-black pt-4 break-words">
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
                                        className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenId(isOpen ? null : item.id)}
                                            className="w-full cursor-pointer flex items-center justify-between gap-3 py-3 sm:py-4 px-4 sm:px-5 text-left min-w-0"
                                        >
                                            <span className="font-britanicaExtraBold text-[15px] sm:text-[17px] text-white pr-3 sm:pr-4 min-w-0 break-words">
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

export default FaqEcommerceSection;
