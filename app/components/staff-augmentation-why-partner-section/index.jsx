"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";

const whyPartner = [
    {
        title: "Flexible Workforce",
        desc: "Hire an experienced NDA-protected development team without long-term commitments. Easily scale your workforce based on project timelines and business demands.",
        icon: <AiIcon className="w-[40px]" />,
    },
    {
        title: "Cost-Effective Solutions",
        desc: "Reduce recruitment costs, overhead, and lengthy hiring processes with our hassle-free model, which lets you scale with top talent faster without the hefty price tags.",
        icon: <AiIcon className="w-[40px]" />,
    },
    {
        title: "Industry-Focused Expertise",
        desc: "Our experts bring hands-on experience across diverse industries, including fintech, healthcare, e-commerce, SaaS, and enterprise systems, to deliver actionable plans and error-free execution for 98% client retention rate.",
        icon: <AiIcon className="w-[40px]" />,
    },
    {
        title: "Secure and Compliant",
        desc: "We prioritize data protection and confidentiality. All of our teams operate under strict security standards, and we follow ISO/GDPR-compliant development practices to safeguard your data.",
        icon: <AiIcon className="w-[40px]" />,
    },
];

const StaffAugmentationWhyPartnerSection = () => {
    return (
        <div className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
                {/* Mobile: text first. Desktop: cards left (order-1), text right (order-2) */}
                <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
                        <span className="text-[#F74B1C]">Why Choose </span>
                        <br />
                        <span className="text-white">Us?</span>
                    </div>
                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        As a trusted provider of accessible, expert IT staff augmentation services, we deliver reliable, high-performing professionals who create measurable impact. No matter what you need, we offer it all, from specialized Fintech development and Healthcare IT outsourcing to a SaaS development team extension.
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        breakpoints={{
                            480: { slidesPerView: 1.2, spaceBetween: 12 },
                            640: { slidesPerView: 1.2, spaceBetween: 12 },
                            768: { slidesPerView: 1.8, spaceBetween: 10 },
                            1024: { slidesPerView: 1.8, spaceBetween: 10 },
                            1280: { slidesPerView: 2.1, spaceBetween: 10 },
                            1530: { slidesPerView: 2.1, spaceBetween: 10 },
                        }}
                        className="!overflow-visible"
                    >
                        {whyPartner.map((solution, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white h-full min-h-0 md:!min-h-[420px] border-2 border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                    <div className="pb-3 sm:pb-[20px]">
                                        <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center shrink-0">
                                            <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                        </div>
                                    </div>
                                    <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight break-words">
                                        {solution.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[30px] leading-relaxed">
                                        {solution.desc}
                                    </div>
                                    <div>
                                        <Link
                                            href="/staff-augmentation"
                                            className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]"
                                        >
                                            Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default StaffAugmentationWhyPartnerSection;
