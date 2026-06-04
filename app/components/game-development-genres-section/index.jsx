"use client";

import CapsuleLabel from "../common/capsule-label";
import { Dices, Gamepad2, Globe, Puzzle, Swords, Trophy } from "lucide-react";

const GENRES = [
  {
    title: "Hyper-Casual",
    desc: "Simple one-tap mechanics. Fast dev cycle 6–8 weeks. AdMob monetization optimized.",
    Icon: Gamepad2,
  },
  {
    title: "RPG & Action",
    desc: "Character progression, inventory systems, quest engines. Unity or UE5.",
    Icon: Swords,
  },
  {
    title: "Puzzle & Strategy",
    desc: "Match-3, tower defense, city builders. IAP + progression monetization.",
    Icon: Puzzle,
  },
  {
    title: "Multiplayer / PvP",
    desc: "Real-time PvP, co-op, MMO. Photon or custom dedicated server.",
    Icon: Trophy,
  },
  {
    title: "Casino & Card",
    desc: "Slots, poker, rummy. RNG certified. Social casino or real-money compliant.",
    Icon: Dices,
  },
  {
    title: "Simulation & Sports",
    desc: "Physics-based simulation, sports management, racing. Unity physics engine.",
    Icon: Globe,
  },
];

const GameDevelopmentGenresSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 min-w-0 pb-8 sm:pb-10 md:pb-[52px]">
            <div className="flex justify-center sm:justify-start pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="GAME" secondWord="GENRES" />
            </div>
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words text-center sm:text-left">
              <span className="text-white">Game Genres </span>
              <span className="text-[#F74B1C]">We Specialize In</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {GENRES.map((genre) => (
            <div key={genre.title} className="col-span-12 sm:col-span-6 lg:col-span-4 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                <div className="flex flex-col h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#7724C1]/40 text-white shrink-0">
                      <genre.Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                  <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                    {genre.title}
                  </div>
                  <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                    {genre.desc}
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

export default GameDevelopmentGenresSection;
