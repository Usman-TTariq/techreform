"use client";

import { useRef, useEffect, useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiIcon from "../advanced-technology-section/svg/ai-icon";
import HireExpertPopup from "../hire-expert-popup";

const WhatWeDoEcommerceSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const swiper1Ref = useRef(null);
    const swiper2Ref = useRef(null);
    const [swiper1Ready, setSwiper1Ready] = useState(false);
    const [swiper2Ready, setSwiper2Ready] = useState(false);

    useEffect(() => {
        const row1 = row1Ref.current;
        const row2 = row2Ref.current;
        const swiper1 = swiper1Ref.current;
        const swiper2 = swiper2Ref.current;
        if (!row1 || !row2 || !swiper1 || !swiper2 || !swiper1Ready || !swiper2Ready) return;

        const handleWheel = (e) => {
            const rect1 = row1.getBoundingClientRect();
            const rect2 = row2.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const inView1 = rect1.top < viewportHeight * 0.8 && rect1.bottom > viewportHeight * 0.2;
            const inView2 = rect2.top < viewportHeight * 0.8 && rect2.bottom > viewportHeight * 0.2;
            if (!inView1 && !inView2) return;

            const vpCenter = viewportHeight / 2;
            const center1 = rect1.top + rect1.height / 2;
            const center2 = rect2.top + rect2.height / 2;
            const useFirst = !inView2 || (inView1 && Math.abs(center1 - vpCenter) <= Math.abs(center2 - vpCenter));
            const swiper = useFirst ? swiper1 : swiper2;

            if (e.deltaY > 0) {
                if (!swiper.isEnd) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper.slideNext();
                }
            } else if (e.deltaY < 0) {
                if (!swiper.isBeginning) {
                    e.preventDefault();
                    e.stopPropagation();
                    swiper.slidePrev();
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [swiper1Ready, swiper2Ready]);
    const solutions = [
        {
            title: "Magento (Adobe Commerce)",
            desc: "At Tech Reforms, we help businesses build powerful online stores via Magento. If you’re looking for a platform that can handle large product catalogs, multiple stores, and advanced features, Magento is exactly the framework you need to tailor to your business needs.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Kentico Solutions",
            desc: "We use Kentico to create websites that offer more than appealing looks. We build comprehensive digital solutions that help businesses connect more effectively with their customers. Our Kentico e-commerce platforms come with optimized management.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Zend (Laminas) Development",
            desc: "We use the Zend Framework for businesses that need secure, dependable web applications and customized solutions. Our goal is simple: to create systems that run smoothly and support your growth over time.",
            icon: <AiIcon className="w-[40px]" />,
        },
        // {
        //     title: "Launch Support",
        //     desc: "Lastly, the maintenance and support phase begins after launch, with updates and ongoing maintenance to ensure your store grows effectively.",
        //     icon: <AiIcon className="w-[40px]" />,
        // }
    ];

    const whyPartner = [
        {
            title: "WooCommerce Development",
            desc: "Want to turn your WordPress site into an online store? We make it easy with WooCommerce. At Tech Reforms, we design and develop user-friendly eCommerce websites that are simple to manage and ready to grow with your business.",
            icon: <AiIcon className="w-[40px]" />,
        },
        {
            title: "Open-Cart Framework Solutions",
            desc: "We also work with leading open-source technologies to build flexible, cost-effective eCommerce platforms. This means you get a solution that’s customizable, scalable, and built around your unique business goals.",
            icon: <AiIcon className="w-[40px]" />,
        },
        // {
        //     title: "Industry-Focused Solutions",
        //     desc: "Our Industry-specific e-commerce apps are designed to meet your business needs, address unique market demands, and drive higher user engagement.",
        //     icon: <AiIcon className="w-[40px]" />,
        // },
    ];

    return (
        <div className="container relative pb-12 sm:pb-16 md:pb-[120px] px-4 sm:px-4 w-full max-w-[100vw] box-border overflow-hidden">
            <Image
                className="w-[70%] sm:w-[50%] absolute -top-[40%] left-0 opacity-60 sm:opacity-100"
                src="/images/whatwedobk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-0 relative z-10">
                <div className="col-span-12 md:col-span-5 min-w-0 order-1">
                    <div className="pb-6 sm:pb-[40px]">
                        <CapsuleLabel firstWord="Our" secondWord="E-Commerce" thirdWord="Process" />
                    </div>
                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[45px] font-black break-words">
                        <span className="text-white">Seamless Process For</span>
                        <br />
                        <span className="text-[#F74B1C]">Fully Responsive E-commerce Website</span>
                        <br />
                        <span className="text-white">With Advanced Features</span>
                    </div>
                    <div className="pt-5 sm:pt-[30px]">
                        <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                    </div>
                </div>
                <div ref={row1Ref} className="col-span-12 md:col-span-7 min-w-0 order-2">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiper1Ref.current = swiper; setSwiper1Ready(true); }}
                            spaceBetween={12}
                            slidesPerView={1.05}
                            breakpoints={{
                                480: { slidesPerView: 1.2, spaceBetween: 12 },
                                640: { slidesPerView: 1.2, spaceBetween: 12 },
                                768: { slidesPerView: 1.8, spaceBetween: 12 },
                                1024: { slidesPerView: 1.8, spaceBetween: 12 },
                                1280: { slidesPerView: 2.1, spaceBetween: 12 },
                                1530: { slidesPerView: 2.1, spaceBetween: 12 },
                                1536: { slidesPerView: 2.1, spaceBetween: 12 },
                            }}
                        >
                            {solutions.map((solution, index) => (
                                <SwiperSlide key={index} className="!h-full">
                                    <div className="bg-white border-2 !h-full min-h-[460px] max-2xl:min-h-[520px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                        <div className="pb-3 sm:pb-[20px]">
                                            <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight">{solution.title}</div>
                                        <div className="font-britanicaRegular text-[#373636] text-[13px] sm:text-[16px] pb-4 sm:pb-[30px] leading-relaxed">{solution.desc}</div>
                                        <div>
                                            <button type="button" onClick={() => setPopupOpen(true)} className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
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
            <div className="grid grid-cols-12 gap-6 sm:gap-5 pt-8 sm:pt-12 md:pt-[70px] relative z-10">
                <div ref={row2Ref} className="col-span-12 md:col-span-7 min-w-0 order-2 md:order-1">
                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => { swiper2Ref.current = swiper; setSwiper2Ready(true); }}
                            spaceBetween={12}
                            slidesPerView={1.05}
                            initialSlide={whyPartner.length - 1}
                            breakpoints={{
                                480: { slidesPerView: 1.2, spaceBetween: 12 },
                                640: { slidesPerView: 1.2, spaceBetween: 12 },
                                768: { slidesPerView: 1.8, spaceBetween: 12 },
                                1024: { slidesPerView: 1.8, spaceBetween: 12 },
                                1280: { slidesPerView: 1.8, spaceBetween: 12 },
                                1530: { slidesPerView: 1.8, spaceBetween: 12 },
                                1536: { slidesPerView: 1.8, spaceBetween: 12 },
                            }}
                        >
                            {whyPartner.map((solution, index) => (
                                <SwiperSlide key={index} className="!h-full">
                                    <div className="bg-white border-2 !h-full min-h-[460px] max-2xl:min-h-[500px] border-[#7724C1] rounded-2xl p-4 sm:p-6 md:p-[30px]">
                                        <div className="pb-3 sm:pb-[20px]">
                                            <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#f74b1c44] flex items-center justify-center">
                                                <AiIcon className="w-6 h-6 sm:w-[40px] sm:h-[40px]" />
                                            </div>
                                        </div>
                                        <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2 sm:pb-[10px] leading-tight">{solution.title}</div>
                                        <div className="font-britanicaRegular text-[#373636] text-[13px] sm:text-[16px] pb-4 sm:pb-[30px] leading-relaxed">{solution.desc}</div>
                                        <div>
                                            <button type="button" onClick={() => setPopupOpen(true)} className="text-[#7724C1] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                                                Learn More <ArrowRight className="w-4 sm:w-[16px]" />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 min-w-0 order-1 md:order-2">
                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[55px] font-black break-words">
                        <span className="text-[#F74B1C]">Why Partner </span>
                        <br />
                        <span className="text-white"> With Us</span>
                    </div>
                    <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                        As a leading E-commerce platform development agency, we take pride in the platforms we deliver. Modern designs, an easy-to-understand user flow, and SEO-friendly end-to-end e-commerce websites.<br />
                        So, begin your journey to the smartest and most accessible dedicated team of scalable app developers by clicking a few buttons and paying an upfront fee.
                    </div>
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default WhatWeDoEcommerceSection;
