"use client";
import Image from "next/image";
import Button from "../common/button";

const HowWeBuildMobileSection = () => {
    return (
        <div className="relative pb-[150px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 max-lg:col-span-12">
                        <div>
                            <Image
                                className="w-[100%] scale-150"
                                src="/images/buildmobile.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-7 my-auto max-lg:col-span-12">
                        <div>
                            <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                                <span className="text-white">How We Deliver </span>
                                <span className="text-[#F74B1C]">High-Performance Mobile Apps</span>
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                As a leading mobile app development company, we use advanced technologies to build secure, scalable, and high-performance mobile applications that grow with your business needs. Our focus is on creating user-friendly, innovative, and result-driven digital solutions tailored to your goals.
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                We follow an Agile development process that ensures faster delivery, flexibility, and continuous improvement at every stage. Our experienced developers specialize in modern technologies such as React Native, Flutter, Kotlin, and Swift to build powerful Android and iOS applications with seamless performance.
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                Whether you need a startup app, enterprise solution, or custom mobile application, our expert team ensures quality, precision, and on-time delivery — helping your business succeed in today’s competitive digital market.
                            </div>
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeBuildMobileSection;
