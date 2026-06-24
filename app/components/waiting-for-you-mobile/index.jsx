"use client";
import Image from "next/image";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const DEFAULT_HEADLINE_PREFIX = "Start Your ";
const DEFAULT_HEADLINE_ACCENT = "Free App ";
const DEFAULT_HEADLINE_SUFFIX = (
    <>
        <br className="max-sm:hidden" />
        <span className="text-[#F74B1C]">Estimation </span>
        <span className="text-white">Today!</span>
    </>
);
const DEFAULT_BODY =
    "There's so much potential in your idea — don't let it go unnoticed. Share it with the world and create something truly meaningful. Take the first step by clicking the button below.";
const DEFAULT_CTA_TEXT = "Get Started";
const DEFAULT_CTA_PHONE = "(582) 233-5015";

const DEFAULT_IMAGE = "/images/waiting.png";
const DEFAULT_IMAGE_ALT = "Free app estimation illustration for mobile development CTA";

const WaitingForYouMobile = ({
    headlinePrefix,
    headlineAccent,
    headlineSuffix,
    stackedHeadline = false,
    body,
    ctaText,
    ctaPhone,
    imageSrc,
    imageAlt,
}) => {
    const resolvedHeadlinePrefix = headlinePrefix ?? DEFAULT_HEADLINE_PREFIX;
    const resolvedHeadlineAccent = headlineAccent ?? DEFAULT_HEADLINE_ACCENT;
    const resolvedHeadlineSuffix = headlineSuffix ?? DEFAULT_HEADLINE_SUFFIX;
    const resolvedBody = body ?? DEFAULT_BODY;
    const resolvedCtaText = ctaText ?? DEFAULT_CTA_TEXT;
    const resolvedCtaPhone = ctaPhone ?? DEFAULT_CTA_PHONE;
    const resolvedImageSrc = imageSrc ?? DEFAULT_IMAGE;
    const resolvedImageAlt = imageAlt ?? DEFAULT_IMAGE_ALT;
    const useStackedHeadline = stackedHeadline || (headlinePrefix != null && headlineAccent != null && headlineSuffix === "");

    return (
        <div className="relative bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)] py-[2px] mt-[100px] max-sm:mt-[40px] mb-[220px] max-sm:mb-[50px]">
            <div className="bg-black">
                <div className="relative container px-4 sm:px-4 overflow-visible">
                    <Image
                        className="pointer-events-none w-[420px] lg:w-[550px] max-sm:pt-[30px] max-lg:relative max-lg:top-0 max-lg:translate-y-0 max-lg:w-[70%] max-lg:mx-auto max-lg:mb-6 max-lg:z-auto lg:absolute lg:top-[50%] lg:right-0 lg:translate-y-[-50%] lg:z-20"
                        src={resolvedImageSrc}
                        alt={resolvedImageAlt}
                        width={1000}
                        height={1000}
                    />
                    <div className="relative z-10 grid grid-cols-12 gap-12 max-sm:gap-0 py-[80px] max-sm:pt-[10px] max-sm:pb-[30px] lg:pointer-events-none">
                        <div className="col-span-12 lg:col-span-7 my-auto lg:pointer-events-auto">
                            <div className="max-w-3xl max-lg:mx-auto max-lg:text-center lg:pr-8">
                                <h2 className="font-britanicaBlack text-[24px] leading-[1.2] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] xl:leading-[1.15] font-black break-words">
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
                                <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed">
                                    {resolvedBody}
                                </p>
                                <div className="pt-5 sm:pt-[30px] flex flex-wrap gap-3 sm:gap-4 justify-start max-lg:justify-center">
                                    <Button text={resolvedCtaText} icon={false} onClick={goToContact} />
                                    <Button
                                        text={resolvedCtaPhone}
                                        textClassName="!text-[#F74B1C]"
                                        className="!bg-transparent"
                                        hoverClassName="!bg-transparent"
                                        icon={false}
                                        onClick={() => { window.location.href = "tel:+15822335015"; }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:col-span-5" aria-hidden />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingForYouMobile;
