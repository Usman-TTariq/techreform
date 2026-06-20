"use client";
import Image from "next/image";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import { goToContact } from "@/app/utils/goToContact";

const DEFAULT_HEADLINE = "Mobile Development Growth Statistics from (2020 to Present)";
const DEFAULT_PARAGRAPHS = [
    "Mobile applications have readily simple automation and tweaks. In today's competitive business landscape, one concept still remains intact: a thoughtfully built app can significantly improve customer relationships and boost revenue. As a dedicated mobile app development partner, Tech Reforms combines strategic planning with modern technologies to create future-ready solutions.",
    "Regardless of the scale, we help businesses launch apps that perform. Our experienced development team tailors every feature to align perfectly with your goals, ensuring measurable impact and long-term scalability.",
];
const DEFAULT_CTA_TEXT = "Get in Touch Now!";

const AnalyticsMobile = ({
    headlinePrefix,
    headlineAccent,
    stackedHeadline = false,
    title,
    paragraphs,
    ctaText,
}) => {
    const useCustomHeadline = headlinePrefix != null && headlineAccent != null;
    const resolvedTitle = title ?? DEFAULT_HEADLINE;
    const resolvedParagraphs = paragraphs ?? DEFAULT_PARAGRAPHS;
    const resolvedCtaText = ctaText ?? DEFAULT_CTA_TEXT;

    return (
        <div className="relative pb-10 sm:pb-16 md:pb-[160px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute top-[0%] left-0 w-[20%] sm:w-[20%] opacity-60 sm:opacity-100"
                src="/images/reviewEllipse.png"
                alt="Decorative ellipse accent for mobile analytics section"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute -top-[10%] right-0 w-[50%] sm:w-[35%] opacity-60 sm:opacity-100"
                src="/images/Background.png"
                alt="Decorative graphic accent for mobile development growth statistics"
                width={1000}
                height={1000}
            />
            <div className="container relative z-20 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 min-w-0">
                        <div className="rounded-xl bg-[#3c3c3c52] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-1">
                                    <div className="flex justify-start pb-4 sm:pb-[22px] max-sm:justify-center">
                                        <CapsuleLabel firstWord="ANALYTICS" />
                                    </div>
                                    <div className="min-w-0 pb-6 sm:pb-8">
                                        {useCustomHeadline || stackedHeadline ? (
                                            <h2 className="font-britanicaBlack font-bold text-[20px] sm:text-[26px] md:text-[30px] text-white text-left pb-4 sm:pb-5 break-words max-sm:text-center leading-tight">
                                                <span className="text-white block">{headlinePrefix?.trim()}</span>
                                                <span className="text-[#F74B1C] block mt-1">{headlineAccent?.trim()}</span>
                                            </h2>
                                        ) : (
                                            <h2 className="font-britanicaBlack font-bold text-[20px] sm:text-[28px] md:text-[32px] text-white text-left pb-4 sm:pb-5 break-words max-sm:text-center leading-tight">
                                                {resolvedTitle}
                                            </h2>
                                        )}
                                        {resolvedParagraphs.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className={`font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] text-white text-left leading-relaxed max-sm:text-center ${index > 0 ? "pt-4 sm:pt-5" : ""}`}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex justify-start max-sm:justify-center">
                                        <Button text={resolvedCtaText} icon={false} onClick={goToContact} />
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 my-auto min-w-0 order-2">
                                    <Image
                                        className="w-full max-w-full h-auto"
                                        src="/images/dash1.png"
                                        alt="Mobile development growth statistics chart illustration"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsMobile;
