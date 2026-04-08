"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const FALLBACK_CARDS = [
    { title: "Tech Insights", excerpt: "Deep dives into mobile app development, frameworks, and best practices. Learn how to build scalable, secure applications that users love.", image: "/images/aa3.png" },
    { title: "Industry News", excerpt: "Keep up with e-commerce trends, digital transformation, and how businesses are leveraging technology to stay competitive and grow.", image: "/images/industries4.png" },
    { title: "Development Tips", excerpt: "Practical guides and how-tos for developers and product teams. From MVP strategies to deployment and maintenance, we share what works.", image: "/images/Background.png" },
];

const BlogContentSection = ({ blogs = [] }) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const showStrapi = Array.isArray(blogs) && blogs.length > 0;
    const cards = showStrapi
        ? blogs.map((b) => ({
            title: b.title,
            excerpt: b.metaDescription || b.excerpt || "",
            image: b.coverUrl || "/images/Background.png",
            imageAlt: b.altText || b.title,
            slug: b.slug,
        }))
        : <div className="col-span-12 text-center font-britanicaBlack font-bold text-[20px] text-white">No blogs found</div>;
    // : FALLBACK_CARDS.map((c) => ({ ...c, imageAlt: c.title, slug: null }));

    return (
        <div className="relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[120px]">
            <div className="container relative px-4 sm:px-4">
                {/* <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="SHARE" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Explore Our </span>
                            <span className="text-[#F74B1C]">Blog </span>
                            <br />
                            <span className="text-[#F74B1C]">Insights & Updates </span>
                            <span className="text-white">From the Tech World</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            Stay ahead with the latest articles on mobile development, e-commerce, digital strategy, and industry trends. Our blog brings you actionable insights to help your business grow.
                        </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-12 gap-4 pt-8 sm:pt-12 md:pt-[52px]">
                    {
                        cards && cards.length > 0 ? (
                            cards.map((card, i) => (
                                <div key={card.slug || i} className="col-span-12 md:col-span-6 lg:col-span-4">
                                    <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-2 sm:p-3 md:p-[20px] py-8 sm:py-10 md:py-[32px]">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="pb-[20px]">
                                                <Image
                                                    className="w-full object-cover aspect-video"
                                                    src={card.image}
                                                    alt={card.imageAlt ?? card.title}
                                                    width={1000}
                                                    height={1000}
                                                    unoptimized={card.image.startsWith("http")}
                                                />
                                            </div>
                                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                                {card.title}
                                            </div>
                                            <div className="font-britanicaRegular text-[16px] font-regular text-white text-left line-clamp-3">
                                                {card.excerpt}
                                            </div>
                                            <div className="pt-6 sm:pt-[30px] flex justify-start">
                                                {card.slug ? (
                                                    <Link
                                                        href={`/blog/${card.slug}`}
                                                        className="group relative overflow-hidden bg-white hover:bg-transparent rounded-full px-2 py-2 cursor-pointer flex items-center gap-0 border border-[#F74B1C] w-fit"
                                                    >
                                                        <span className="absolute inset-0 bg-[#F74B1C] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                                                        <span className="text-[#0E0E0E] relative z-10 text-[20px] font-britanicaExtraBold px-[10px] group-hover:text-white transition-colors duration-300 max-2xl:text-[16px] max-sm:text-[14px]">Read More</span>
                                                    </Link>
                                                ) : (
                                                    <Button text="Read More" icon={false} onClick={() => setPopupOpen(true)} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ): <div className="col-span-12 text-center font-britanicaBlack font-bold text-[20px] text-white">No blogs found</div>
                    }
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default BlogContentSection;
