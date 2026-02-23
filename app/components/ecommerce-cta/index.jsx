"use client";
import { useState } from "react";
import Button from "../common/button";
import Image from "next/image";

const EcommerceCta = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative border border-[#7724C1] py-[70px]">
            <Image className="absolute top-[50%] translate-y-[-50%] right-0 w-[35%] " src="/images/shopify-icon.png" alt="Ecommerce Cta" width={1000} height={1000} />
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 max-lg:col-span-6">
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">Get A Dedicated </span>
                            <span className="text-[#F74B1C]">Dedicated</span>
                            <br />
                            <span className="text-white">E-commerce </span>
                            <span className="text-[#F74B1C]">Developers</span>
                            <br />
                            <span className="text-white">On-Board </span>
                            <span className="text-[#F74B1C]">Now!</span>
                        </div>
                        <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            Hire our e-commerce mobile app company USA to get hassle-free e-commerce store development that matches your needs. Whether you are a startup, SME, or an enterprise-grade organization, we help you accelerate your e-commerce growth in a short period.
                        </div>
                        <div className="pt-4 sm:pt-[30px] flex justify-start">
                            <Button text="Hire a E-commerce Developer" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcommerceCta;

