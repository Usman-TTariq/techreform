"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const cellClass =
  "px-3 sm:px-4 py-2.5 sm:py-3 text-center text-white border border-[#444444] font-britanicaRegular text-sm sm:text-[15px]";

const ValueCell = ({ children, tone = "default" }) => {
  const toneClass =
    tone === "accent"
      ? "text-[#C380FE]"
      : tone === "positive"
        ? "text-[#66BB6A]"
        : "text-white";

  return (
    <td className={`${cellClass} ${toneClass}`}>
      <span className="inline-flex items-center justify-center gap-1.5 flex-wrap font-britanicaExtraBold">
        {children}
      </span>
    </td>
  );
};

const ENGINES = [
  {
    name: "Unity Engine",
    image: "/images/unity.png",
    rows: [
      { label: "Best For", value: "Mobile, Casual, 2D" },
      { label: "Language", value: "C#" },
      { label: "Performance", value: "Excellent mobile", tone: "accent", icon: "check" },
      { label: "Royalty", value: "None (post-2024 plan)" },
    ],
    recommendation: "Choose Unity for mobile games, hyper-casual, cross-platform, and 2D titles.",
  },
  {
    name: "Unreal Engine 5",
    image: "/images/unreal.jpg",
    rows: [
      { label: "Best For", value: "PC, Console, AAA 3D" },
      { label: "Language", value: "C++ / Blueprints" },
      { label: "Graphics", value: "Nanite + Lumen", tone: "accent", icon: "check" },
      { label: "Royalty", value: "5% after $1M revenue" },
    ],
    recommendation: "Choose Unreal 5 for PC/console, photorealistic 3D, open world, and AAA-quality visuals.",
  },
];

const RECOMMENDATION_CLASS = "border-[#C380FE] bg-[#7824c12c] text-[#E8D4FF]";

const GameDevelopmentEngineComparisonSection = () => {
  return (
    <section className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="ENGINE" secondWord="COMPARISON" />
            </div>
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Unity vs Unreal Engine — </span>
              <span className="text-[#F74B1C]">Which Is Right for Your Game?</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto">
              Both engines power world-class games. Compare the essentials side by side, then pick the stack that fits your platform, budget, and creative vision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-[52px]">
          {ENGINES.map((engine) => (
            <div key={engine.name} className="col-span-12 lg:col-span-6">
              <div className="h-full rounded-xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px]">
                <div className="group flex items-center gap-3 pb-4 sm:pb-5 w-fit cursor-default">
                  <Image
                    src={engine.image}
                    alt={`${engine.name} logo`}
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-md object-contain"
                  />
                  <span className="font-britanicaBlack text-[22px] sm:text-[26px] text-white group-hover:text-[#F74B1C] transition-colors duration-300">
                    {engine.name}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[280px] border-collapse border border-[#444444]">
                    <thead>
                      <tr className="bg-[#F74B1C] text-white">
                        <th className={`${cellClass} font-britanicaExtraBold w-[45%]`}>Factor</th>
                        <th className={`${cellClass} font-britanicaExtraBold`}>{engine.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {engine.rows.map((row) => (
                        <tr key={row.label} className="bg-black">
                          <td className={`${cellClass} font-britanicaExtraBold text-white/90`}>{row.label}</td>
                          <ValueCell tone={row.tone}>
                            {row.icon === "check" && <Check className="w-4 h-4 shrink-0" strokeWidth={3} />}
                            {row.value}
                          </ValueCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p
                  className={`mt-4 sm:mt-5 rounded-lg border px-4 py-3 text-sm sm:text-[15px] font-britanicaRegular leading-relaxed ${RECOMMENDATION_CLASS}`}
                >
                  {engine.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDevelopmentEngineComparisonSection;
