"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import AppDevelopmentCostTable from "./app-development-cost-table";

const FaqLink = ({ href, children }) => (
    <Link href={href} className="text-[#F74B1C] hover:underline">
        {children}
    </Link>
);

const FAQ_ITEMS = [
    {
        id: 1,
        question: "How much does mobile app development cost in 2026?",
        answer: (
            <>
                <p>
                    $3K–$80K+ depending on platform, features, and complexity. See our full cost breakdown below.
                </p>
                <AppDevelopmentCostTable />
            </>
        ),
    },
    {
        id: 2,
        question: "How long does it take to build a mobile app?",
        answer: (
            <>
                <p>Timelines vary by scope:</p>
                <ul className="list-none mt-3 space-y-2">
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>
                            <strong className="text-white">Simple apps:</strong> 4–8 weeks — ideal for an{" "}
                            <FaqLink href="/mvp">MVP launch</FaqLink>
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span><strong className="text-white">Medium apps (with API/backend):</strong> 2–4 months</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                        <span>
                            <strong className="text-white">Complex/enterprise apps:</strong> 4–6 months — see our{" "}
                            <FaqLink href="/erp">ERP development</FaqLink> approach for large-scale builds
                        </span>
                    </li>
                </ul>
                <p className="mt-4">
                    We work in agile cycles so you see real progress early — no waiting until the end to find out what you&apos;re getting.
                </p>
            </>
        ),
    },
    {
        id: 3,
        question: "Do you build both iOS and Android apps?",
        answer: (
            <>
                Yes. We develop native <FaqLink href="/ios">iOS (Swift)</FaqLink>, native Android (Kotlin), and{" "}
                <FaqLink href="/cross-platform">cross-platform apps</FaqLink> using{" "}
                <FaqLink href="/react-native">React Native</FaqLink> and <FaqLink href="/flutter">Flutter</FaqLink>. We recommend the right approach based on your audience, budget, and performance requirements.
            </>
        ),
    },
    {
        id: 4,
        question: "What industries do you serve?",
        answer: (
            <>
                We&apos;ve built apps across{" "}
                Health &amp; Wellness,{" "}
                Retail, Finance, Education, Hospitality,{" "}
                Food &amp; Beverage, and more. With 30+ industry verticals covered and{" "}
                350+ live apps launched, we understand the unique compliance and UX demands of each sector.
            </>
        ),
    },
    {
        id: 5,
        question: "Do you offer custom mobile app development, or only templates?",
        answer: (
            <>
                100% custom. We don&apos;t use pre-built templates. Every app is designed and developed from scratch — custom UI/UX, custom backend, tailored features — built around your specific business goals. Explore our{" "}
                <FaqLink href="/portfolio">portfolio</FaqLink> to see recent work.
            </>
        ),
    },
    {
        id: 6,
        question: "What technologies do you use for mobile app development?",
        answer: (
            <>
                Our stack includes <FaqLink href="/react-native">React Native</FaqLink>, <FaqLink href="/flutter">Flutter</FaqLink>,{" "}
                <FaqLink href="/ios">Swift (iOS)</FaqLink>, Kotlin (Android), Node.js backend, and integrations with AI/ML,{" "}
                <FaqLink href="/ar-development">AR</FaqLink>/<FaqLink href="/vr-development">VR</FaqLink>, Blockchain, and Voice Command interfaces. We pick the right stack for your use case, not the one that&apos;s easiest for us.
            </>
        ),
    },
    {
        id: 7,
        question: "Will my app be scalable as my business grows?",
        answer: (
            <>
                Yes. Scalability is built into the architecture from day one. Whether you&apos;re launching an{" "}
                <FaqLink href="/mvp">MVP</FaqLink> or rolling out enterprise-wide with our{" "}
                <FaqLink href="/erp">ERP solutions</FaqLink>, we design systems that can handle growing users, features, and traffic without rebuilding.
            </>
        ),
    },
    {
        id: 8,
        question: "Do you provide post-launch support and maintenance?",
        answer: (
            <>
                Absolutely. After launch, we offer ongoing maintenance, performance monitoring, security updates, and feature additions through{" "}
                <FaqLink href="/staff-augmentation">staff augmentation</FaqLink> and dedicated support. You won&apos;t be left without support after go-live.
            </>
        ),
    },
    {
        id: 9,
        question: "Can you integrate AI features into my mobile app?",
        answer: (
            <>
                Yes — AI &amp; ML is one of our core integration offerings. We build smart features like personalized recommendations, real-time responses, smart search, voice interactions, and behavior-based insights directly into your app. See our{" "}
                AI-native mobile development capabilities for details.
            </>
        ),
    },
    {
        id: 10,
        question: "How do I get started with Tech Reforms?",
        answer: (
            <>
                Simple — fill out the{" "}
                <FaqLink href="/">contact form</FaqLink> or call{" "}
                <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">
                    (582) 233-5015
                </a>
                . We schedule a discovery call, run a consulting session, and prepare a detailed proposal. No commitment needed to start the conversation. You can also{" "}
                <FaqLink href="/about">learn more about our team</FaqLink> before reaching out.
            </>
        ),
    },
];

/**
 * @param {Object} props
 * @param {{ id?: number, question: string, answer: string | React.ReactNode }[]} [props.items] - Optional CMS/blog FAQ items (question + answer). When provided, used instead of default FAQ_ITEMS.
 */
const FaqSection = ({ items: itemsProp }) => {
    const items = Array.isArray(itemsProp) && itemsProp.length > 0
        ? itemsProp.map((item, i) => ({ id: i + 1, question: item.question ?? "", answer: item.answer ?? "" }))
        : FAQ_ITEMS;
    const [openId, setOpenId] = useState(items[0]?.id ?? null);

    return (
        <section className="relative py-[60px] bg-[#0E0E0E] overflow-x-hidden">
            <div className="container min-w-0">
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
                            {items.map((item) => {
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
                                                <div className="font-britanicaRegular text-[16px] text-white/85 leading-relaxed pb-5 px-5 pt-0 border-t border-white/10 break-words min-w-0">
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

export default FaqSection;
