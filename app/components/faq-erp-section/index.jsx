"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import ErpDevelopmentCostTable from "./erp-development-cost-table";

const FaqLink = ({ href, children }) => (
    <Link href={href} className="text-[#F74B1C] hover:underline">
        {children}
    </Link>
);

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How much does custom ERP development cost in 2026?",
        answer: (
            <>
                <p>
                    $8K–$500K+ depending on business size, modules, and platform. See our full cost breakdown below.
                </p>
                <ErpDevelopmentCostTable />
            </>
        ),
    },
    {
        id: 2,
        question: "How fast can you provide an ERP developer?",
        answer: (
            <>
                In most cases, we can onboard qualified ERP developers within 1–2 weeks, depending on the skills and experience required.
            </>
        ),
    },
    {
        id: 3,
        question: "Can I increase or reduce the development team anytime?",
        answer: (
            <>
                Yes. Our ERP development model is designed to be flexible, allowing you to scale your team based on your current project demands.
            </>
        ),
    },
    {
        id: 4,
        question: "Will the developer work in my time zone?",
        answer: (
            <>
                Absolutely. We align our remote ERP developers with your preferred US time zone to ensure smooth communication and collaboration.
            </>
        ),
    },
    {
        id: 5,
        question: "What ERP platforms do you specialize in?",
        answer: (
            <>
                We provide SAP development services, Oracle, Microsoft Dynamics ERP, Odoo ERP, NetSuite ERP, and tailored{" "}
                <FaqLink href="/cloud">cloud-based ERP solutions</FaqLink>.
            </>
        ),
    },
    {
        id: 6,
        question: "Do you offer ERP migration services?",
        answer: (
            <>
                Yes, our ERP migration services help businesses move from legacy systems to modern cloud-based environments with minimal disruption.
            </>
        ),
    },
    {
        id: 7,
        question: "How do I get started with Tech Reforms?",
        answer: (
            <>
                Fill out the <FaqLink href="/">contact form</FaqLink> or call{" "}
                <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">
                    (582) 233-5015
                </a>
                . We schedule a discovery call, review your modules and workflows, and prepare a detailed ERP proposal — no commitment needed to start the conversation.
            </>
        ),
    },
];

const FaqErpSection = () => {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
    return (
        <section className="relative py-[60px] bg-[#0E0E0E] overflow-x-hidden">
            <div className="container min-w-0 max-w-full px-4 sm:px-4 overflow-x-hidden">
                <div className="grid grid-cols-12 gap-8 max-sm:gap-0">
                    <div className="col-span-12 lg:col-span-4">
                        <CapsuleLabel firstWord="FAQ" secondWord="" />
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
                                        className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25"
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
                                            className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="font-britanicaRegular text-[16px] text-white/85 leading-relaxed pb-5 px-5 pt-0 border-t border-white/10 break-words min-w-0 max-w-full overflow-x-hidden">
                                                    {typeof item.answer === "string" ? <span className="whitespace-pre-line">{item.answer}</span> : item.answer}
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
