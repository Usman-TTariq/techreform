"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const STATS = [
  { value: "100+", label: "Flutter projects" },
  { value: "50+", label: "Flutter engineers" },
  { value: "98%", label: "On-time delivery" },
];

const CASE_METRICS = [
  { value: "10 wks", label: "Delivered in" },
  { value: "40%", label: "Cost vs native" },
  { value: "4.8★", label: "App store rating" },
];

const TECH_TAGS = ["Flutter SDK", "Dart", "Firebase", "Stripe API"];

const HireFlutterCaseStudiesSection = () => {
  const router = useRouter();

  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[46px] lg:leading-[50px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-white">Real Flutter Apps. </span>
              <span className="text-[#F74B1C]">Real Results Delivered by Tech Reforms</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="PORTFOLIO" secondWord="" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[18px] font-regular text-white leading-relaxed">
            These aren&apos;t portfolio screenshots. Each case study below reflects a measurable Flutter project outcome — delivered on time, within scope, and built to scale on both iOS and Android.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-8 sm:pt-10">
          {STATS.map((stat) => (
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
                src="/images/phones.png"
                alt="Cross-platform Flutter e-commerce shopping app case study mockups"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-2xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-7 md:p-8 flex flex-col">
              <div className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#F74B1C] pb-3">
                E-Commerce · USA
              </div>
              <h3 className="font-britanicaBlack text-[22px] sm:text-[26px] md:text-[30px] text-white leading-tight pb-4">
                Cross-Platform Shopping App Built in 10 Weeks
              </h3>
              <p className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/90 leading-relaxed pb-6">
                The client needed a Flutter app with real-time inventory sync, payment gateway integration, and a unified codebase for iOS and Android — all within a 10-week delivery window.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pb-6">
                {CASE_METRICS.map((metric) => (
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
                {TECH_TAGS.map((tag) => (
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

export default HireFlutterCaseStudiesSection;
