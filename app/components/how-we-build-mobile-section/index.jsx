"use client";
import Image from "next/image";
import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const DEFAULT_HEADLINE_PREFIX = "How We Build ";
const DEFAULT_HEADLINE_ACCENT = "Mobile Apps That Actually Perform?";
const DEFAULT_PARAGRAPHS = [
    "We're not here to ship \"an app.\" We're here to ship something people keep opening fast, stable, and secure enough that you're not nervous when traffic spikes or you add the next feature.",
    "We work in short, practical cycles of coding and testing. This way, our clients don't have to sit around and guess what's happening. You get something real to look at early, and if you learn something new midstream, we can pivot without any hassle. The app improves in steady steps rather than landing all at once with one nerve-wracking \"ta-da.\"",
    "We build for Android and iOS, and pick the stack that fits what you're trying to do. We work with React Native, Flutter, Kotlin, Swift, and so much more. So, it feels fast and polished, where users notice, not like a shortcut that shows.",
    "Whether you're validating an idea, rolling out something company-wide, or building something nobody's built quite your way yet, we care about the boring parts too: clear communication, careful execution, and delivery you can plan around, so your product can compete in a crowded market without feeling rushed or fragile.",
];
const DEFAULT_CTA_TEXT = "Get a Free Quote";

const HowWeBuildMobileSection = ({
    headlinePrefix,
    headlineAccent,
    stackedHeadline = false,
    paragraphs,
    ctaText,
}) => {
    const resolvedHeadlinePrefix = headlinePrefix ?? DEFAULT_HEADLINE_PREFIX;
    const resolvedHeadlineAccent = headlineAccent ?? DEFAULT_HEADLINE_ACCENT;
    const resolvedParagraphs = paragraphs ?? DEFAULT_PARAGRAPHS;
    const resolvedCtaText = ctaText ?? DEFAULT_CTA_TEXT;
    const useStackedHeadline = stackedHeadline || (headlinePrefix != null && headlineAccent != null);

    return (
        <div className="relative pb-[150px] max-sm:pb-[0px]">
            <div className="container px-4 sm:px-4">
                <div className="grid grid-cols-12 gap-3 lg:gap-8 items-center">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="max-lg:max-w-md max-lg:mx-auto">
                            <Image
                                className="w-full max-lg:max-w-[320px] max-lg:mx-auto lg:scale-150 lg:origin-center"
                                src="/images/buildmobile.png"
                                alt="Illustration for how we build high-performing mobile apps"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 my-auto">
                        <div className="max-lg:text-center">
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
                                    </>
                                )}
                            </h2>
                            {resolvedParagraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="pt-5 sm:pt-[30px] max-lg:flex max-lg:justify-center">
                            <Button text={resolvedCtaText} icon={false} onClick={goToContact} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeBuildMobileSection;
