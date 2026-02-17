"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        id: 1,
        question: "What is staff augmentation meaning?",
        answer: (
            <>
                Staff augmentation meaning refers to a flexible outsourcing strategy where businesses hire external professionals to temporarily fill skill gaps within their existing teams. Instead of full-time hiring, companies use staff augmentation services to access specialized talent for specific projects or timeframes.
            </>
        ),
    },
    {
        id: 2,
        question: "What is the cost of IT staff augmentation services?",
        answer: (
            <>
                The cost depends on factors such as expertise level, project complexity, duration, and technology stack. Estimated monthly ranges are:
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Junior-Level Professionals:</strong> $2,000 – $4,000</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Mid-Level Professionals:</strong> $4,000 – $8,000</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Senior-Level Experts:</strong> $8,000 onward</span>
                    </li>
                </ul>
                <p className="mt-4">For an accurate estimate tailored to your requirements, contact our IT staff augmentation services experts.</p>
            </>
        ),
    },
    {
        id: 3,
        question: "How quickly can you provide augmented staff?",
        answer: (
            <>
                Depending on the required skill set, we can typically provide pre-vetted candidates within 1–2 weeks. For highly specialized roles, the process may take slightly longer.
            </>
        ),
    },
    {
        id: 4,
        question: "Do you offer customized staff augmentation services?",
        answer: (
            <>
                Yes, we provide fully customized staff augmentation services based on your project requirements. Our services include:
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>IT Staff Augmentation</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Dedicated Developers</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Project-Based Hiring</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Remote Development Teams</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>QA & Testing Specialists</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>DevOps Engineers</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>UI/UX Designers</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Full-Stack Developers</span>
                    </li>
                </ul>
            </>
        ),
    },
];

const FaqStaffAugmentationSection = () => {
    const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
    return (
        <section className="relative py-[60px] bg-[#0E0E0E]">
            <div className="container">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-4">
                        <CapsuleLabel firstWord="FAQ" secondWord="" />
                        <h2 className="font-britanicaBlack text-[36px] md:text-[42px] leading-[1.15] font-black pt-4">
                            <span className="text-white">Frequently Asked </span>
                            <br />
                            <span className="text-[#F74B1C]">Questions</span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="flex flex-col gap-3">
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
                                            className="w-full cursor-pointer flex items-center justify-between gap-4 py-4 px-5 text-left"
                                        >
                                            <span className="font-britanicaExtraBold text-[17px] text-white pr-4">
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
                                                <div className="font-britanicaRegular text-[16px] text-white/85 leading-relaxed pb-5 px-5 pt-0 border-t border-white/10">
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

export default FaqStaffAugmentationSection;
