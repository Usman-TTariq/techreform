"use client";
import Image from "next/image";
import { useState } from "react";

const EcommerceTabsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="relative text-white pb-[60px]">
            <div className="container">
                <div className="bg-[3C3C3C] rounded-xl px-[40px] py-[30px] border border-[#7724C1]">
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setActiveTab(0)}
                            className={`rounded-full px-[20px] text-[11px] cursor-pointer py-[10px] font-semibold transition-colors capitalize ${activeTab === 0 ? "bg-[#F74B1C] text-white" : "bg-[#474747] text-white hover:bg-[#555]"}`}
                        >
                            E-COMMERCE MOBILE APP DEVELOPMENT
                        </button>
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`rounded-full px-[20px] text-[11px] py-[10px] cursor-pointer font-semibold transition-colors capitalize ${activeTab === 1 ? "bg-[#F74B1C] text-white" : "bg-[#474747] text-white hover:bg-[#555]"}`}
                        >
                            E-COMMERCE WEB DEVELOPMENT
                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`rounded-full px-[20px] text-[11px] py-[10px] cursor-pointer font-semibold transition-colors capitalize ${activeTab === 2 ? "bg-[#F74B1C] text-white" : "bg-[#474747] text-white hover:bg-[#555]"}`}
                        >
                            PWA FOR E-COMMERCE
                        </button>
                        <button
                            onClick={() => setActiveTab(3)}
                            className={`rounded-full px-[20px] text-[11px] py-[10px] cursor-pointer font-semibold transition-colors capitalize ${activeTab === 3 ? "bg-[#F74B1C] text-white" : "bg-[#474747] text-white hover:bg-[#555]"}`}
                        >
                            E-COMMERCE CMS SOLUTION
                        </button>
                    </div>
                    <div className="grid grid-cols-12 pt-[60px] max-sm:gap-6">
                        <div className="col-span-7 max-lg:col-span-12 my-auto">
                            {activeTab === 0 && (
                                <>
                                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                                        <span className="text-white">E-Commerce</span>
                                        <br />
                                        <span className="text-[#F74B1C]"> Mobile App Development</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[14px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                        Tech Reforms is a leading e-commerce mobile app company in the USA. We offer reliable mobile solutions across diverse industries. Most of our e-commerce apps come with multiple features, including:
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Easy Onboarding
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Product Categories
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Product Navigation
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Shopping Carts
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Multiple Payment Options
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Multilingual Support
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Ad Section
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Feedback Feature
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Notifications
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Filtering Option
                                            </div>
                                        </div>
                                        <div className="pt-2">All you have to do is connect with our e-commerce app development company, and we’ll guide you to the right features for your custom e-commerce app.</div>
                                    </div>
                                </>
                            )}
                            {activeTab === 1 && (
                                <>
                                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                                        <span className="text-white">E-Commerce</span>
                                        <br />
                                        <span className="text-[#F74B1C]">Web Development</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[14px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                        E-commerce web development is the ultimate key to get personalized solution to all e-commerce problems. Despite demographic restrictions, we have e-commerce websites that have successfully revolutionized how customers purchase products and services online.<br />
                                        We are a top-notch e-commerce web development solution provider in the USA, offering websites built with a sound business strategy and advanced development technologies. <br />
                                        Hire our expert developers to get a customized e-commerce with a Smart B2B or B2C e-commerce storefront.
                                        <div className="flex flex-col gap-3 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Complete Customization
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Personalized Dashboards
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Real-time Updates
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Track Inventory
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === 2 && (
                                <>
                                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                                        <span className="text-white">PWA for </span>
                                        {/* <br /> */}
                                        <span className="text-[#F74B1C]">E-commerce</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[14px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                        Attain a smart e-commerce solution built via AngularJS and ReactJS web app themes and start building a PWA App for E-commerce without any guesswork. Want personalized excellence? Tech Reforms offers diverse e-commerce platforms that deeply integrate Intuitive and scalable progressive web app themes. Using a simple, clean UI/UX, we build intuitive e-commerce solutions for better customer engagement.<br />
                                        PWAs are the optimal choice for businesses looking for seamless e-commerce platforms with:

                                        <div className="flex flex-col gap-1 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Instant Transitions
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Easy Navigation
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Clear Listing
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === 3 && (
                                <>
                                    <div className="font-britanicaBlack text-[14px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                                        <span className="text-white">E-commerce </span>
                                        {/* <br /> */}
                                        <span className="text-[#F74B1C]">CMS Solution</span>
                                    </div>
                                    <div className="font-britanicaRegular text-[18px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                        Every scaling business needs the right e-commerce platform to grow properly, but it can be a bit puzzling given the wide  catalogue of e-commerce platforms:
                                        <div className="flex flex-col gap-1 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                CMS
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Magento
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                PrestaShop
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                WooCommerce
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Shopify
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                OpenCart
                                            </div>
                                        </div>
                                        <div className="pt-2">Our development team selects the best e-commerce CMS solution to enable your business to manage your online store with powerful, easy-to-use tools. Our e-commerce CMS platform helps you store as much user information as possible, including:
                                            Identifiers
                                        </div>
                                        <div className="flex flex-col gap-1 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Names
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Session Data
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Delivery Addresses
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-[8px] w-[8px] shrink-0 bg-[#F74B1C] rounded-full"></div>
                                                Invoice Addresses
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="col-span-5 max-lg:col-span-12 my-auto">
                            {activeTab === 0 && (
                                <Image
                                    className="w-full"
                                    src="/images/shopnowcart.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            )}
                            {activeTab === 1 && (
                                <Image
                                    className="w-full"
                                    src="/images/shopnowcart.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            )}
                            {activeTab === 2 && (
                                <Image
                                    className="w-full"
                                    src="/images/shopnowcart.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            )}
                            {activeTab === 3 && (
                                <Image
                                    className="w-full"
                                    src="/images/shopnowcart.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommerceTabsSection;
