"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { User, TrendingUp } from "lucide-react";
import Image from "next/image";

const TAB_CONTENT = [
    {
        id: "employee",
        label: "Employee Empowerment",
        heading: "Employee Empowerment",
        description: "Mobile apps let teams track key business processes with easy, real-time access to data.",
        bullets: [
            "Seamless Connectivity",
            "Stronger Team Collaboration",
            "Clear Communication Channels",
            "Instant Feedback",
            "Higher Productivity",
        ],
    },
    {
        id: "nimble",
        label: "Nimble Management",
        heading: "Nimble Management",
        description: "Mobile apps give businesses real-time visibility, enabling faster, smarter decisions.",
        bullets: [
            "Instant Updates",
            "Better Coordination",
            "Agile Planning",
            "Smoother Workflows",
            "Stronger Control",
        ],
    },
    {
        id: "customer",
        label: "Customer Loyalty",
        heading: "Customer Loyalty",
        description: "Mobile apps offer accessibility that creates lasting relationships through custom experiences.",
        bullets: [
            "Tailored Offers",
            "Timely Notifications",
            "Rewards Programs",
            "Higher Retention",
        ],
    },
    {
        id: "usecases",
        label: "Use Cases",
        heading: "Use Cases",
        description: "Mobile apps adapt to different industries and can effectively solve practical business challenges.",
        bullets: [
            "Process Automation",
            "Task Tracking",
            "Data Collection",
            "Performance Insights",
        ],
    },
    {
        id: "partnerships",
        label: "Nurture Partnerships",
        heading: "Nurture Partnerships",
        description: "Mobile apps strengthen collaboration with partners through shared access and communication.",
        bullets: [
            "Centralized Information",
            "Secure Sharing",
            "Faster Coordination",
            "Long-Term Value",
        ],
    },
];

const StatCard = ({ icon: Icon, label, percent, amount }) => (
    <div className="rounded-xl border border-[#444] bg-[#1a1a1a]/80 px-4 py-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#F74B1C]" strokeWidth={2} />
            <span className="font-britanicaRegular text-[12px] text-white/90">{label}</span>
        </div>
        <span className="text-[#F74B1C] font-britanicaBlack text-[14px]">{percent}</span>
        <div className="h-8 w-full flex items-end">
            <svg viewBox="0 0 60 20" className="w-full h-full text-[#F74B1C]" preserveAspectRatio="none">
                <polyline points="0,18 15,14 30,10 45,6 60,2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        </div>
        <span className="font-britanicaRegular text-[11px] text-white/70">{amount}</span>
    </div>
);

const LpAppWhyCustom = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [popupOpen, setPopupOpen] = useState(false);
    const content = TAB_CONTENT[activeTab];

    return (
        <div className="relative text-white pb-[100px] max-sm:pb-[40px]">
            <div className="container">
                <div className="rounded-xl border border-[#7724C1] bg-[#3c3c3c4f] px-6 max-sm:px-3 sm:px-8 md:px-[40px] py-6 sm:py-8 md:py-[30px] shadow-[0_0_24px_rgba(119,36,193,0.12)]">
                    {/* Header: capsule + intro left, title right */}
                    <div className="grid grid-cols-12 gap-4 items-start">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="flex justify-start pb-2">
                                <CapsuleLabel firstWord="ADVANCED" secondWord="TECHNOLOGIES" />
                            </div>
                            <p className="font-britanicaRegular text-[13px] sm:text-[20px] text-white/90 max-sm:text-center">
                                Let's see what makes custom mobile application <br /> development services the need of the hour
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 flex lg:justify-end max-sm:justify-center">
                            <div className="font-britanicaBlack text-[22px] leading-tight sm:text-[28px] md:text-[36px] lg:text-[52px] lg:leading-[55px] font-black text-left max-sm:text-center lg:text-right">
                                <span className="text-white">Why </span>
                                <span className="text-[#F74B1C]">Custom Mobile </span>
                                <br />
                                <span className="text-[#F74B1C]">Apps </span>
                                <span className="text-white">Matter Now</span>
                            </div>
                        </div>
                    </div>

                    {/* Tabs: outer orange-bordered container, no borders on inactive tabs */}
                    <div className="pt-6 sm:pt-8">
                        <div className="rounded-[10px] border-1 border-[#F74B1C] bg-[#2a2a2a] p-3 sm:p-4">
                            <div className="flex flex-wrap justify-between gap-2">
                                {TAB_CONTENT.map((tab, index) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`rounded-xl max-sm:w-full px-[30px] py-2.5 text-[11px] sm:text-[14px] cursor-pointer font-semibold transition-colors capitalize ${activeTab === index
                                            ? "bg-[#F74B1C] text-white shadow-[0_0_12px_rgba(247,75,28,0.35)]"
                                            : "bg-[#474747] text-white hover:bg-[#555]"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Two columns: content left, chart + stats right */}
                    <div className="grid grid-cols-12 gap-6 pt-8 sm:pt-10 md:pt-[60px]">
                        <div className="col-span-12 lg:col-span-7 my-auto">
                            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[28px] md:text-[36px] md:leading-[44px] font-black text-white break-words">
                                {content.heading}
                            </div>
                            <p className="font-britanicaRegular text-[14px] sm:text-[20px] text-white pt-3 sm:pt-4 leading-relaxed">
                                {content.description}
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4 sm:pt-6">
                                {content.bullets.map((bullet, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-4 py-2 text-white text-[13px] sm:text-[14px] shadow-[0_0_12px_rgba(119,36,193,0.25)]"
                                    >
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white font-britanicaRegular" />
                                        {bullet}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-6 sm:pt-8">
                                <Button
                                    text="Request a Free Quote"
                                    icon={false}
                                    onClick={() => setPopupOpen(true)}
                                    className="!bg-white border-white"
                                    textClassName="!text-[#0E0E0E] group-hover:!text-white "
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 my-auto">
                            <Image
                                className="w-full"
                                src="https://ik.imagekit.io/sajib4aqc/Group%202147225282.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default LpAppWhyCustom;
