"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        id: 1,
        question: "What is the cost of an e-commerce website development?",
        answer: (
            <>
                There isn&apos;t a fixed price, as the final cost depends on features, platform selection, integrations, and the level of customization. The estimated cost range is:
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Normal Development:</strong> $2,500 – $7,000</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Medium Development:</strong> $7,000 – $20,000</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Advanced Development:</strong> $25,000 onward</span>
                    </li>
                </ul>
                <p className="mt-4">For an accurate cost estimate, contact our e-commerce development experts.</p>
            </>
        ),
    },
    {
        id: 2,
        question: "How long will it take to develop my e-commerce website?",
        answer: (
            <>
                The development timeline depends on the store&apos;s complexity, number of products, custom features, and integrations.
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Simple E-commerce Store:</strong> 4–6 weeks</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Medium E-commerce Store:</strong> 2–3 months</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Advanced E-commerce Platform:</strong> 4–6 months</span>
                    </li>
                </ul>
                <p className="mt-4">We ensure timely delivery without compromising performance or quality.</p>
            </>
        ),
    },
    {
        id: 3,
        question: "Do you offer custom e-commerce development services?",
        answer: (
            <>
                Yes, we offer fully customized e-commerce development services tailored to your business needs and operational requirements. Our services include:
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Shopify Development</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>WooCommerce Development</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Magento / Adobe Commerce Development</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Custom Ecommerce Solutions</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>Payment Gateway Integration</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>API Integration</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>End-to-End E-commerce Development</span>
                    </li>
                </ul>
            </>
        ),
    },
];

const FaqEcommerceSection = () => {
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

export default FaqEcommerceSection;
