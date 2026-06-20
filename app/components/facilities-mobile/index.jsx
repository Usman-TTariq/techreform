"use client";

import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const DEFAULT_HEADLINE_PREFIX = "We Create ";
const DEFAULT_HEADLINE_ACCENT = "Mobile Apps ";
const DEFAULT_HEADLINE_SUFFIX = (
    <>
        <span className="text-white">That</span>
        <br />
        <span className="text-white">Deliver Results!</span>
    </>
);
const DEFAULT_PARAGRAPHS = [
    "As a forward-thinking digital product studio based in the USA, we build impactful, scalable applications. Our establishment works on a structured workflow that works overtime to convert your vision into a sleek, easy-to-use mobile app. Our maestros: expert product consultants, UI/UX designers, developers, and quality analysts design, draft, and implement your apps for 100% validty and performance.",
];

const scrollToHowWeWork = () => {
    document.getElementById("how-we-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FacilitiesMobile = ({
    headlinePrefix,
    headlineAccent,
    headlineSuffix,
    stackedHeadline = false,
    paragraphs,
    ctaText,
    ctaAction,
}) => {
    const resolvedHeadlinePrefix = headlinePrefix ?? DEFAULT_HEADLINE_PREFIX;
    const resolvedHeadlineAccent = headlineAccent ?? DEFAULT_HEADLINE_ACCENT;
    const resolvedHeadlineSuffix = headlineSuffix ?? DEFAULT_HEADLINE_SUFFIX;
    const resolvedParagraphs = paragraphs ?? DEFAULT_PARAGRAPHS;
    const resolvedCtaText = ctaText ?? null;
    const useStackedHeadline = stackedHeadline || (headlinePrefix != null && headlineAccent != null && headlineSuffix === "");
    const handleCtaClick = () => {
        if (ctaAction === "scroll-how-we-work") {
            scrollToHowWeWork();
        }
    };

    return (
        <div className="relative pt-[100px] max-sm:pt-[40px] mb-[160px] max-sm:mb-[50px]">
            <Image
                className="w-full absolute top-0 left-0 h-full"
                src="/images/facilitiesbk.png"
                alt="Background graphic for Facilities mobile apps section"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="FACILITIES" />
                        </div>
                        <h2 className="font-britanicaBlack text-[24px] leading-[1.2] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px] xl:leading-[1.2] font-black break-words max-w-5xl mx-auto px-1">
                            {useStackedHeadline ? (
                                <>
                                    <span className="text-white block">{resolvedHeadlinePrefix.trim()}</span>
                                    <span className="text-[#F74B1C] block mt-1">{resolvedHeadlineAccent.trim()}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-white">{resolvedHeadlinePrefix}</span>
                                    <span className="text-[#F74B1C]">{resolvedHeadlineAccent}</span>
                                    {resolvedHeadlineSuffix}
                                </>
                            )}
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
                        {resolvedParagraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                        {resolvedCtaText && (
                            <div className="pt-6 sm:pt-[30px] flex justify-center">
                                <Button text={resolvedCtaText} icon={false} onClick={handleCtaClick} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="pt-[80px] max-sm:pt-[30px]">
                    <Image
                        className="w-full"
                        src="/images/bulletpoints.png"
                        alt="Facilities and workflow bullet points infographic"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    );
};

export default FacilitiesMobile;
