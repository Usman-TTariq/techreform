"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const HireCaseStudiesSection = ({
  headlineWhite,
  headlineAccent,
  intro,
  stats,
  caseStudy,
}) => {
  const router = useRouter();

  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[46px] lg:leading-[50px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-white">{headlineWhite} </span>
              <span className="text-[#F74B1C]">{headlineAccent}</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="PORTFOLIO" secondWord="" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[18px] font-regular text-white leading-relaxed">
            {intro}
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-8 sm:pt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-britanicaBlack text-[26px] sm:text-[32px] md:text-[36px] text-[#F74B1C] leading-none">
                  {stat.value}
                </div>
                <div className="font-britanicaRegular text-[12px] sm:text-[13px] md:text-[14px] text-white/90 pt-1.5 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 pt-10 sm:pt-14 md:pt-[70px]">
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full flex items-center justify-center rounded-2xl border border-[#C380FE]/40 bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-6 sm:p-8">
              <Image
                className="w-full max-w-[280px] lg:max-w-none mx-auto"
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-2xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-7 md:p-8 flex flex-col">
              <div className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#F74B1C] pb-3">
                {caseStudy.category}
              </div>
              <h3 className="font-britanicaBlack text-[22px] sm:text-[26px] md:text-[30px] text-white leading-tight pb-4">
                {caseStudy.title}
              </h3>
              <p className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/90 leading-relaxed pb-6">
                {caseStudy.description}
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pb-6">
                {caseStudy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-4 text-center"
                  >
                    <div className="font-britanicaBlack text-[18px] sm:text-[22px] text-[#F74B1C] leading-none">
                      {metric.value}
                    </div>
                    <div className="font-britanicaRegular text-[11px] sm:text-[12px] text-white/80 pt-1.5 leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pb-6">
                {caseStudy.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-britanicaRegular bg-[#7724C1]/20 text-[#C380FE] border border-[#7724C1]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <Button
                  text="Read Full Case Study"
                  icon={false}
                  onClick={() => router.push("/portfolio")}
                  className="w-full sm:w-auto min-h-[52px] justify-center px-4"
                  textClassName="!text-[14px] sm:!text-[15px] !font-britanicaBlack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireCaseStudiesSection;
