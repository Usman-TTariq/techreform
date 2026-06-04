"use client";

import CapsuleLabel from "../common/capsule-label";
import { Box, DollarSign, Layers, Puzzle, Swords, Users } from "lucide-react";

const TAG_STYLES = {
  purple: "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50",
  green: "bg-[#16A34A]/20 text-[#B8F5C8] border border-[#16A34A]/40",
  blue: "bg-[#2563EB]/20 text-[#93C5FD] border border-[#2563EB]/40",
  orange: "bg-[#EA580C]/20 text-[#FDBA74] border border-[#EA580C]/40",
};

const CARDS = [
  {
    title: "Multiplayer / PvP Games",
    desc: "Build real-time multiplayer game development experiences with PvP battles, co-op modes, and live leaderboards — powered by Photon Network or custom dedicated server integration for seamless, lag-free competitive gameplay.",
    tags: [
      { label: "Photon", style: "blue" },
      { label: "Mirror", style: "blue" },
    ],
    Icon: Users,
  },
  {
    title: "RPG & Action Games",
    desc: "We craft immersive RPG game development with deep character systems, quest engines, inventory management, skill trees, and combat mechanics — built for both 2D and 3D worlds that keep players engaged.",
    tags: [
      { label: "Unity", style: "purple" },
      { label: "Unreal 5", style: "purple" },
    ],
    Icon: Swords,
  },
  {
    title: "Puzzle & Casual Games",
    desc: "From match-3 to tower defense and word games, our casual game development delivers fun, addictive experiences — fully optimized with AdMob ad monetization and in-app purchases for maximum revenue.",
    tags: [
      { label: "AdMob", style: "green" },
      { label: "IAP", style: "green" },
    ],
    Icon: Puzzle,
  },
  {
    title: "Cross-Platform Games",
    desc: "One codebase, all platforms. Unity multiplatform export — iOS, Android, PC, WebGL.",
    tags: [
      { label: "Unity", style: "purple" },
      { label: "WebGL", style: "green" },
    ],
    Icon: Layers,
  },
  {
    title: "2D & 3D Game Art",
    desc: "Character design, environments, animation rigging, VFX. Spine & Blender workflow.",
    tags: [
      { label: "Blender", style: "orange" },
      { label: "Spine", style: "orange" },
    ],
    Icon: Box,
  },
  {
    title: "Game Monetization",
    desc: "Maximize revenue with game monetization development — in-app purchases, rewarded ads, battle pass, and subscription models built directly into your game architecture for seamless, scalable, and player-friendly earning systems.",
    tags: [
      { label: "IAP", style: "green" },
      { label: "AdMob", style: "green" },
    ],
    Icon: DollarSign,
  },
];

const GameDevelopmentWhatWeOfferSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
            </div>
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Genre + Engine </span>
              <span className="text-[#F74B1C]">Specific Game Development</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px]">
          {CARDS.map((card) => (
            <div key={card.title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                <div className="flex flex-col h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 text-white shrink-0">
                      <card.Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                  <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                    {card.title}
                  </div>
                  <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed flex-1">
                    {card.desc}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 sm:pt-5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-britanicaRegular ${TAG_STYLES[tag.style]}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDevelopmentWhatWeOfferSection;
