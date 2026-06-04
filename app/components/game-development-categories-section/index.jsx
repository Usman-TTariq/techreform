"use client";

import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import { goToContact } from "@/app/utils/goToContact";
import {
  Check,
  Glasses,
  Landmark,
  Monitor,
  Puzzle,
  Swords,
  Trophy,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

const HIGHLIGHTS = [
  "Unity & Unreal Engine 5",
  "iOS, Android, PC & Console",
  "100+ Games Launched",
  "Full IP Ownership",
];

const CATEGORIES = [
  {
    title: "Hyper-Casual Games",
    subtitle: "Unity · iOS & Android",
    badge: "Most Popular",
    Icon: Zap,
  },
  {
    title: "Action Games",
    subtitle: "Unity / UE5 · All Platforms",
    Icon: Swords,
  },
  {
    title: "Role-Playing Games",
    subtitle: "Unity · iOS & Android",
    Icon: UserRound,
  },
  {
    title: "Multiplayer / PvP",
    subtitle: "Photon · Cross-Platform",
    badge: "Trending",
    Icon: Users,
  },
  {
    title: "Puzzle & Casual",
    subtitle: "Unity · AdMob + IAP",
    Icon: Puzzle,
  },
  {
    title: "PC & Console Games",
    subtitle: "Unreal 5 · Steam · PS5 · Xbox",
    Icon: Monitor,
  },
  {
    title: "AR / VR Games",
    subtitle: "Meta Quest · Apple Vision",
    Icon: Glasses,
  },
  {
    title: "Sports & Racing",
    subtitle: "Unity Physics · All Platforms",
    Icon: Trophy,
  },
  {
    title: "Strategy & Simulation",
    subtitle: "Unity · PC & Mobile",
    Icon: Landmark,
  },
];

const CategoryCard = ({ title, subtitle, badge, Icon }) => (
  <div className="relative overflow-hidden rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-5 md:p-6 min-h-[128px] sm:min-h-[142px] md:min-h-[152px] flex flex-col justify-end">
    <Icon
      className="absolute top-3.5 right-3.5 w-11 h-11 sm:w-12 sm:h-12 text-[#C380FE]/45 pointer-events-none"
      strokeWidth={1.5}
      aria-hidden
    />
    {badge && (
      <span className="absolute top-3.5 left-3.5 inline-flex rounded-full border border-[#7724C1]/50 bg-[#7724C1]/25 px-2.5 py-0.5 text-[10px] sm:text-xs font-britanicaRegular font-bold text-[#C380FE]">
        {badge}
      </span>
    )}
    <div className={badge ? "pt-7" : ""}>
      <h3 className="font-britanicaBlack text-[15px] sm:text-[17px] md:text-[18px] text-white leading-tight">
        {title}
      </h3>
      <p className="font-britanicaRegular text-[11px] sm:text-xs md:text-[13px] text-white/60 pt-1 leading-snug">
        {subtitle}
      </p>
    </div>
  </div>
);

const GameDevelopmentCategoriesSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="col-span-12 lg:col-span-5 min-w-0">
            <div className="flex justify-center sm:justify-start pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="GAME" secondWord="CATEGORIES" />
            </div>
            <h2 className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[48px] lg:leading-[1.1] font-black">
              <span className="text-white">TechReforms&apos; Game Development </span>
              <span className="text-[#F74B1C]">Categories</span>
            </h2>
            <p className="font-britanicaRegular text-white/80 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed pt-5 sm:pt-6 max-w-md">
              From hyper-casual mobile hits to AAA console titles, we build games across every major genre and
              platform. Each project gets a dedicated team, engine expertise, and a clear path to launch.
            </p>
            <ul className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50 shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#C380FE]" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="font-britanicaRegular text-white text-[15px] sm:text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 sm:pt-10">
              <Button text="Build Your Game" icon={false} onClick={goToContact} />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-[18px]">
              {CATEGORIES.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDevelopmentCategoriesSection;
