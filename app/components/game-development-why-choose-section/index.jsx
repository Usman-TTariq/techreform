"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WHY_CHOOSE = [
    {
        title: "Creative & Experienced Team",
        desc: "Work with a skilled game development agency that genuinely understands gameplay mechanics, current design trends, and smart monetization strategies. We focus on building games that players enjoy and remember.",
    },
    {
        title: "Cost-Effective Gaming Solutions",
        desc: "Our custom game development services in the USA are structured to suit a range of budgets without sacrificing quality. Whether you're a startup or an established studio, we deliver high-performance games tailored to your business needs.",
    },
    {
        title: "Multi-Platform Expertise",
        desc: "From iOS, Android, to Console Game Development and PC solutions, we build games for all major platforms. Your game runs efficiently across all devices, delivering a consistent experience.",
    },
    {
        title: "Secure and High-Performance Development",
        desc: "We follow proven industry standards to deliver secure coding, reliable performance, and scalable architecture, ensuring a stable, smooth-running system that is ready to grow as your user base expands.",
    },
];

const GameDevelopmentWhyChooseSection = () => {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const swiper = swiperRef.current;
        if (!section || !swiper || !swiperReady) return;

        const handleWheel = (e) => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const inView = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;
            if (!inView) return;

            if (e.deltaY > 0) {
                if (!swiper.isBeginning) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper.slidePrev();
                }
            } else if (e.deltaY < 0) {
                if (!swiper.isEnd) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper.slideNext();
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
        return () => window.removeEventListener("wheel", handleWheel, { capture: true });
    }, [swiperReady]);

    return (
        <div ref={sectionRef} className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
                alt="Decorative purple gradient behind why choose us for game development section"
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
                        <span className="text-[#F74B1C]">Why Choose </span>
                        <br />
                        <span className="text-white">Us?</span>
                    </div>
                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        As a trusted game development company, we create gaming experiences that are not only innovative but also built to grow with your audience. Our experienced professional game developers combine creativity, technical skill, and a deep understanding of player behavior to make sure your game truly stands out in today's competitive market.
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; swiper.slideTo(1, 0); setSwiperReady(true); }}
                            initialSlide={1}
                            spaceBetween={16}
                            slidesPerView={1.05}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 12,
                                },
                                640: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 10,
                                },
                                1280: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                                1530: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {WHY_CHOOSE.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border-2 !h-full min-h-[300px] sm:min-h-[380px] md:min-h-[420px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                        <div className="pb-3 sm:pb-[20px]">
                                            <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px]">
                                            {item.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-5 sm:pb-[30px]">
                                            {item.desc}
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setPopupOpen(true)}
                                                className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]"
                                            >
                                                Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default GameDevelopmentWhyChooseSection;
