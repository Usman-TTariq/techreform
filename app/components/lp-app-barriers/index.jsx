"use client";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import { Brain, Cog, Search, CircleDollarSign, ArrowUpRight } from "lucide-react";
import BrainIcon from "./svg/brain-icon";
import PuzzleIcon from "./svg/puzzle-icon";
import SearchEye from "./svg/search-eye";
import DollarStack from "./svg/dollar-stack";

const barriers = [
    {
        title: "Unclear Idea",
        description: "We shape your concept into a clear, actionable product plan.",
        Icon: <BrainIcon className="w-[50px]" />,
    },
    {
        title: "Tech Confusion",
        description: "We help you choose the right tools for your goals.",
        Icon: <PuzzleIcon className="w-[50px]" />,
    },
    {
        title: "Too Much to Manage",
        description: "We handle strategy, design, development, and delivery.",
        Icon: <SearchEye className="w-[50px]" />,
    },
    {
        title: "Budget Concerns",
        description: "Our streamlined process saves time, money, and resources.",
        Icon: <DollarStack className="w-[50px]" />,
    },
];

const LpAppBarriers = () => {
    return (
        <div className="relative pb-[100px] max-sm:pb-[40px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-8 max-sm:gap-0">
                    <div className="col-span-7 max-sm:col-span-12 my-auto">
                        <div className="benefit-border-wrap2 p-[1px] rounded-3xl">
                            <div className="bg-black p-[36px] max-sm:p-[10px] rounded-3xl">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 sm:pb-8">
                                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[58px] font-black text-left">
                                        <span className="text-white">Simple Solutions </span>
                                        <span className="text-[#F74B1C]">for Common Issues</span>
                                    </div>
                                    <div className="pt-[16px]">
                                        <CapsuleLabel firstWord="OUR" secondWord="VALUES" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-sm:grid-cols-1">
                                    {barriers.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="rounded-xl border border-[#7724C1] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 flex flex-col h-full shadow-[0_0_12px_rgba(119,36,193,0.15)]"
                                            >
                                                <div className="flex items-start justify-between gap-3 mb-3">
                                                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#7724C1]/40 shrink-0">
                                                        {item.Icon}
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#444] flex items-center justify-center text-white hover:bg-[#7724C1]/30 transition-colors shrink-0"
                                                        aria-label="Learn more"
                                                    >
                                                        <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                                                    </button>
                                                </div>
                                                <div className="font-britanicaBlack text-[18px] sm:text-[20px] font-black text-white leading-tight">
                                                    {item.title}
                                                </div>
                                                <div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/90 pt-2 leading-relaxed">
                                                    {item.description}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-span-5 my-auto max-sm:col-span-8 max-sm:col-start-2">
                        <div>
                            <Image
                                className="w-full"
                                src="/images/barrier.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpAppBarriers;