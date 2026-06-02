"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const PlatformExpertiseSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel
                                firstWord="PLATFORM"
                                secondWord="EXPERTISE"
                                thirdWord=""
                            />
                        </div>
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">Scalable </span>
                            <span className="text-[#F74B1C]">e-Commerce Solutions </span>
                            <br />
                            <span className="text-[#F74B1C]">Built For Modern </span>
                            <span className="text-white">Business Growth</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
                            {/* <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            We develop a scalable e-commerce platform with an intuitive UI/UX design, a feature-rich development approach, and ongoing support after launch. Our expertly curated systems are built to offer cross-platform compatibility and seamless performance across devices.
                            </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image
                                        className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="App or game service icon"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                Magento (Adobe Commerce)
                                </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                At Tech Reforms, we help businesses build powerful online stores via Magento. If you’re looking for a platform that can handle large product catalogs, multiple stores, and advanced features, Magento is exactly the framework you need to tailor to your business needs.
                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="App or game service icon" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">Kentico Solutions</div>
                                <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">We use Kentico to create websites that offer more than appealing looks. We build comprehensive digital solutions that help businesses connect more effectively with their customers. Our Kentico e-commerce systems come with optimized management.                                </div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="App or game service icon" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">Zend (Laminas) Development</div>
                                <div className="font-britanicaRegular text-[13px] sm:text-  [14px] font-regular text-white text-left leading-relaxed">We use the Zend Framework for businesses that need secure, dependable web applications and customized solutions. Our goal is simple: to create systems that run smoothly and support your growth over time.</div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="App or game service icon" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">WooCommerce Development</div>
                                <div className="font-britanicaRegular text-[13px] sm:text-  [14px] font-regular text-white text-left leading-relaxed">Want to turn your WordPress site into an online store? We make it easy with WooCommerce. At Tech Reforms, we design and develop user-friendly eCommerce websites that are simple to manage and ready to grow with your business.</div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 min-w-0">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                            <div className="flex flex-col justify-between h-full min-h-0">
                                <div className="pb-3 sm:pb-[20px]">
                                    <Image className="w-12 h-12 sm:w-[70px] sm:h-[70px]" src="/images/gamingicon.png" alt="App or game service icon" width={70} height={70} />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">Open-Cart Framework Solutions </div>
                                <div className="font-britanicaRegular text-[13px] sm:text-  [14px] font-regular text-white text-left leading-relaxed">We also work with leading open-source technologies to build flexible, cost-effective eCommerce platforms. This means you get a solution that’s customizable, scalable, and built around your unique business goals.</div>
                                <div className="pt-4 sm:pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user1.png" alt="Platform expertise client testimonial portrait one" width={1000} height={1000} />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user2.png" alt="Platform expertise client testimonial portrait two" width={1000} height={1000} />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image className="w-[90%] max-w-[200px] sm:max-w-none m-auto" src="/images/user3.png" alt="Platform expertise client testimonial portrait three" width={1000} height={1000} />
                        </div>
                    </div>
                </div> */}
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
};

export default PlatformExpertiseSection;
