"use client";

import Link from "next/link";
import MainLogo from "./svg/MainLogo";
import Button from "../common/button";
// import { ChevronDown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DROPDOWN_ITEMS = [
    { key: "mobile", label: "Mobile", href: "/mobile-app-development" },
    { key: "ecommerce", label: "Ecommerce", href: "/ecommerce" },
    { key: "staff", label: "Staff Augmentation", href: "/staff-augmentation" },
    { key: "products", label: "Products", href: "/products" },
    { key: "portfolio", label: "Portfolio", href: "#" },
    { key: "company", label: "Company", href: "/about" },
];

const MEGA_MENU = {
    mobile: {
        sidebar: [
            { label: "Services" },
            { label: "Technology" },
            { label: "Industries" },
            { label: "Solution" },
            { label: "Location" },
        ],
        sections: [
            {
                heading: "Services",
                items: [
                    { label: "App Development", href: "/mobile-app-development" },
                    { label: "Game App Development", href: "#" },
                    { label: "MVP Startup Development", href: "#" },
                    { label: "AR Development", href: "#" },
                    { label: "VR Development", href: "#" },
                    { label: "Ipad App Development", href: "#" },
                    { label: "App Maintenance Support", href: "#" },
                    { label: "Web App Development", href: "#" },
                    { label: "Apps for Startup", href: "#" },
                ],
            },
            {
                heading: "Technology",
                items: [
                    { label: "Android", href: "#" },
                    { label: "IOS", href: "#" },
                    { label: "Flutter", href: "#" },
                    { label: "React Native", href: "#" },
                    { label: "Cross Platform", href: "#" },
                    { label: "Cloud", href: "#" },
                    { label: "IOT", href: "#" },
                ],
            },
            {
                heading: "Industries",
                items: [
                    { label: "Retail", href: "#" },
                    { label: "Healthcare", href: "#" },
                    { label: "Real Estate", href: "#" },
                    { label: "Ecommerce", href: "/ecommerce" },
                    { label: "Food", href: "#" },
                    { label: "Insurance", href: "#" },
                    { label: "Fintech", href: "#" },
                    { label: "Enterprise", href: "#" },
                    { label: "Dating", href: "#" },
                    { label: "Automotive", href: "#" },
                    { label: "Fitness", href: "#" },
                    { label: "Entertainment", href: "#" },
                    { label: "Event Management", href: "#" },
                    { label: "Car Wash", href: "#" },
                ],
            },
            {
                heading: "Solution",
                items: [
                    { label: "Doctor App", href: "#" },
                    { label: "Taxi App", href: "#" },
                    { label: "Grocery App", href: "#" },
                    { label: "Delivery App", href: "#" },
                    { label: "Travel App", href: "#" },
                    { label: "Restaurant App", href: "#" },
                    { label: "Education App", href: "#" },
                    { label: "Sports App", href: "#" },
                    { label: "Logistics App", href: "#" },
                ],
            },
        ],
    },
    ecommerce: {
        sidebar: [
            { label: "Services" },
            { label: "Industries" },
        ],
        sections: [
            { heading: "Services", items: [{ label: "Ecommerce Solutions", href: "/ecommerce" }, { label: "Online Store", href: "#" }] },
            { heading: "Industries", items: [{ label: "Retail", href: "#" }, { label: "B2B", href: "#" }] },
        ],
    },
    staff: {
        sidebar: [{ label: "Services" }],
        sections: [{ heading: "Services", items: [{ label: "Staff Augmentation", href: "/staff-augmentation" }] }],
    },
    products: {
        sidebar: [{ label: "Products" }],
        sections: [{ heading: "Products", items: [{ label: "Our Products", href: "/products" }] }],
    },
    portfolio: {
        sidebar: [{ label: "Work" }],
        sections: [{ heading: "Portfolio", items: [{ label: "Case Studies", href: "#" }] }],
    },
    company: {
        sidebar: [{ label: "Company" }],
        sections: [{ heading: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "#" }] }],
    },
};

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div
            className="sticky top-0 z-30 w-full relative backdrop-blur-sm"
            onMouseLeave={() => setActiveDropdown(null)}
        >
            {/* Full-width dropdown panel – visible when any nav item is hovered */}
            {activeDropdown && MEGA_MENU[activeDropdown] && (
                <div
                    className="w-full absolute top-[90px] left-0 border border-white/20 bg-[#0a0a0a]/98 backdrop-blur-sm min-h-[160px] p-5 shadow-xl"
                    onMouseEnter={() => setActiveDropdown(activeDropdown)}
                >
                    <div className="container">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-4 flex flex-col gap-1 pr-4 border-r border-white/10">
                                {(MEGA_MENU[activeDropdown].sidebar || []).map(({ label }) => (
                                        <div
                                            key={label}
                                            className="flex items-center gap-3 py-2.5 px-2 rounded text-white font-britanicaExtraBold text-[15px] hover:bg-white/5 hover:text-[#f74b1c] transition-colors cursor-default"
                                        >
                                            {/* <ChevronDown className="w-5 h-5 flex-shrink-0 text-white/70" /> */}
                                            <span>{label}</span>
                                        </div>
                                    ))}
                            </div>
                            <div className="col-span-8">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {(MEGA_MENU[activeDropdown].sections || []).map(({ heading, items }) => (
                                        <div key={heading}>
                                            <div className="text-white font-britanicaExtraBold text-[15px] text-[#f74b1c] mb-3">
                                                {heading}
                                            </div>
                                            <ul className="flex flex-col gap-1.5">
                                                {items.map(({ label, href }) => (
                                                    <li key={label}>
                                                        <Link
                                                            href={href}
                                                            className="text-white/80 font-britanicaRegular text-[14px] hover:text-[#f74b1c] transition-colors"
                                                        >
                                                            {label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container py-[30px] relative">
                <div className="flex items-center justify-between">
                    <Link href="/"><MainLogo className="w-[200px]" /></Link>
                    <div>
                        <ul className="flex items-center gap-6 text-white font-britanicaRegular text-[18px]">
                            {DROPDOWN_ITEMS.map(({ key, label, href }) => (
                                <li
                                    key={key}
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    className="relative"
                                >
                                    {href === "#" ? (
                                        <span className="flex items-center gap-1 hover:text-[#f74b1c] transition-colors cursor-pointer">
                                            {label} <ChevronDown className="w-[14px]" />
                                        </span>
                                    ) : (
                                        <Link
                                            href={href}
                                            className="flex items-center gap-1 hover:text-[#f74b1c] transition-colors cursor-pointer"
                                        >
                                            {label} <ChevronDown className="w-[14px]" />
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button icon={true} />
                </div>
            </div>
        </div>
    );
};

export default Header;
