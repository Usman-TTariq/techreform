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

const ARIndustries = () => {
    const industries = [
        {
            title: "Financing",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar1.jpeg",
            link: "/financing"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar2.jpeg",
            link: "/travel"
        },
        {
            title: "E-Commerce",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar3.jpeg",
            link: "/e-commerce"
        },
        {
            title: "Education",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar4.jpeg",
            link: "/education"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar2.jpeg",
            link: "/travel"
        },
        {
            title: "E-Commerce",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar4.jpeg",
            link: "/e-commerce"
        },
        {
            title: "Financing",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar2.jpeg",
            link: "/financing"
        },
        {
            title: "Travel",
            description: "Revolutionize banking, payments, and investments with our cutting-edge fintech solutions.",
            image: "/images/ar4.jpeg",
            link: "/travel"
        },
    ];

    return (
        <div className="relative pb-[150px] max-sm:pb-[30px]">
            <div className="container">
                <div className="">
                    <div className="grid grid-cols-12 justify-between gap-4">
                        <div className="col-span-8 max-lg:col-span-12">
                            <div className="flex justify-start max-sm:justify-center">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
                                    <span className="text-[#F74B1C]">Industries </span>
                                    <span className="text-white">Where We Achieve</span>
                                    <br />
                                    <span className="text-white">The </span>
                                    <span className="text-[#F74B1C]">Highest Impact </span>
                                    <span className="text-white">With AR</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 max-lg:col-span-12">
                            <div className="flex justify-start max-sm:justify-center">
                                <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
                            </div>
                            <div className="font-britanicaRegular pt-[20px] text-[18px] font-regular text-white text-left max-sm:text-center">
                                The immersive experiences enabled by AR and VR are being widely adopted across diverse industries.
                            </div>
                        </div>
                    </div>
                    <div className="pt-[40px] max-sm:pt-[10px]">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={15}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {
                                industries.map((industry, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                                            <div className="flex flex-col justify-between h-full">
                                                <div className="pb-[10px]">
                                                    <Image
                                                        className="w-full rounded-2xl"
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
                                                <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left max-sm:text-center pb-1 sm:pb-[5px]">
                                                    {industry.title}
                                                </div>
                                                <div className="font-britanicaRegular text-[16px] font-regular text-white text-left max-sm:text-center">
                                                    {industry.description}
                                                </div>
                                                <div className="pt-[30px] flex justify-start max-sm:justify-center">
                                                    <Button text="Learn More" icon={false} onClick={() => { }} />
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

export default ARIndustries;
