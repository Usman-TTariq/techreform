"use client";
import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Button from "../common/button";
import Image from "next/image";

const IndustriesMobile = () => {
    const industries = [
        {
            title: "Financing",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries1.png",
            link: "/financing"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries2.png",
            link: "/travel"
        },
        {
            title: "E-Commerce",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries3.png",
            link: "/e-commerce"
        },
        {
            title: "Education",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries4.png",
            link: "/education"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries1.png",
            link: "/travel"
        },
        {
            title: "E-Commerce",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries3.png",
            link: "/e-commerce"
        },
        {
            title: "Financing",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries2.png",
            link: "/financing"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/industries4.png",
            link: "/travel"
        },
    ];

    return (
        <div className="relative pb-[150px]">
            <div className="container">
                <div className="">
                    <div className="grid grid-cols-12 justify-between gap-4">
                        <div className="col-span-2 max-lg:col-span-12">
                            <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
                        </div>
                        <div className="col-span-10 max-lg:col-span-12">
                            <div className="flex justify-end">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left">
                                    <span className="text-[#F74B1C]">Industries </span>
                                    <span className="text-white">We Have </span>
                                    <span className="text-[#F74B1C]">Served</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[40px]">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={15}
                            slidesPerView={4}
                            navigation
                        >
                            {
                                industries.map((industry, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                                            <div className="flex flex-col justify-between h-full">
                                                <div className="pb-[10px]">
                                                    <Image
                                                        className="w-full"
                                                        src={industry.image}
                                                        alt="Hero Background"
                                                        width={1000}
                                                        height={1000}
                                                    />
                                                    <div className="flex justify-center -mt-[30px]">
                                                        <Image
                                                            className="w-[85px] h-[85px]"
                                                            src="/images/globe-icon.png"
                                                            alt="Hero Background"
                                                            width={1000}
                                                            height={1000}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px]">
                                                    {industry.title}
                                                </div>
                                                <div className="font-britanicaRegular text-[16px] font-regular text-white text-left">
                                                    {industry.description}
                                                </div>
                                                <div className="pt-[30px] flex justify-start">
                                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustriesMobile;
