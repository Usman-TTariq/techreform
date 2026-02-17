"use client";

import Link from "next/link";
import MainLogo from "./svg/MainLogo";
import Button from "../common/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileKey, setExpandedMobileKey] = useState(null);
    const [mobileNavVisible, setMobileNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const checkMobile = () => setIsMobileView(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobileView) return;
        const handleScroll = () => {
            const y = window.scrollY;
            if (y <= 80) {
                setMobileNavVisible(true);
            } else if (y > lastScrollY) {
                setMobileNavVisible(false);
            } else {
                setMobileNavVisible(true);
            }
            setLastScrollY(y);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileView, lastScrollY]);

    const hideNav = isMobileView && !mobileNavVisible && !mobileMenuOpen;

    return (
        <div
            className={`sticky top-0 z-40 w-full relative backdrop-blur-sm bg-[#0a0a0a]/95 transition-transform duration-300 ease-out ${hideNav ? "-translate-y-full" : "translate-y-0"} lg:!translate-y-0`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            {/* Desktop: full-width dropdown below nav */}
            {activeDropdown && MEGA_MENU[activeDropdown] && (
                <div
                    className="hidden lg:block absolute top-full left-0 right-0 z-40 border-t border-white/20 bg-[#0a0a0a]/98 backdrop-blur-sm min-h-[160px] p-5 shadow-xl"
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

            <div className="container py-4 sm:py-[22px] lg:py-[30px] relative">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="flex-shrink-0">
                        <MainLogo className="w-[140px] sm:w-[160px] lg:w-[200px]" />
                    </Link>

                    {/* Desktop nav – hidden on mobile/tablet */}
                    <nav className="hidden lg:block">
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
                    </nav>

                    {/* Desktop CTA – hidden on small screens */}
                    <div className="hidden lg:block flex-shrink-0">
                        <Button icon={true} />
                    </div>

                    {/* Mobile: hamburger button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((o) => !o)}
                            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-[#f74b1c] transition-colors rounded-lg border border-white/20 p-2"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay + drawer */}
            <div
                className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? "visible" : "invisible"}`}
                aria-hidden={!mobileMenuOpen}
            >
                {/* Solid dark overlay - no blur, blocks content behind */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileMenuOpen ? "opacity-90" : "opacity-0"}`}
                    onClick={() => setMobileMenuOpen(false)}
                />
                {/* Sidebar panel - fully opaque, no transparency at bottom */}
                <div
                    className={`absolute top-0 right-0 z-10 min-h-[100dvh] h-full w-full max-w-[320px] bg-[#0a0a0a] flex flex-col transition-transform duration-300 ease-out shadow-[ -8px_0_24px_rgba(0,0,0,0.5)] ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white/15 flex-shrink-0 bg-[#0a0a0a]">
                        <span className="text-white font-britanicaExtraBold text-[18px] tracking-tight">Menu</span>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#F74B1C] hover:text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Nav list */}
                    <nav className="flex-1 min-h-[260px] overflow-y-auto overflow-x-hidden px-4 py-3 flex flex-col bg-[#0a0a0a]">
                        <ul className="flex flex-col gap-0 flex-1">
                            {DROPDOWN_ITEMS.map(({ key, label, href }) => {
                                const mega = MEGA_MENU[key];
                                const hasSections = mega?.sections?.length;
                                const isExpanded = expandedMobileKey === key;
                                return (
                                    <li key={key} className="list-none border-b border-white/10 last:border-b-0">
                                        {hasSections ? (
                                            <>
                                                <div className="flex items-center justify-between gap-2 py-1 pr-1 min-h-[48px]">
                                                    {href && href !== "#" ? (
                                                        <Link
                                                            href={href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="flex-1 py-3 px-3 text-white font-britanicaRegular text-[15px] hover:bg-white/8 hover:text-[#F74B1C] rounded-lg transition-colors font-medium min-h-[44px] flex items-center"
                                                        >
                                                            {label}
                                                        </Link>
                                                    ) : (
                                                        <span className="flex-1 py-3 px-3 font-medium text-white font-britanicaRegular text-[15px]">
                                                            {label}
                                                        </span>
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={() => setExpandedMobileKey((k) => (k === key ? null : key))}
                                                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                                        aria-label={isExpanded ? "Collapse" : "Expand"}
                                                    >
                                                        <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                                                    </button>
                                                </div>
                                                {isExpanded && mega.sections && (
                                                    <div className="pb-3 pl-3 pr-2 pt-1 space-y-4 bg-[#111] rounded-lg mx-2 mb-2">
                                                        {mega.sections.map(({ heading, items }) => (
                                                            <div key={heading}>
                                                                <div className="text-[#F74B1C] font-britanicaExtraBold text-[12px] uppercase tracking-wide mb-1.5">{heading}</div>
                                                                <ul className="flex flex-col gap-0.5">
                                                                    {items.map(({ label: subLabel, href: subHref }) => (
                                                                        <li key={subLabel}>
                                                                            <Link
                                                                                href={subHref}
                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                className="block py-2 px-2 text-white/90 font-britanicaRegular text-[14px] hover:text-[#F74B1C] rounded-md transition-colors"
                                                                            >
                                                                                {subLabel}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : href === "#" ? (
                                            <span className="block py-3.5 px-3 text-white/90 font-britanicaRegular text-[15px]">
                                                {label}
                                            </span>
                                        ) : (
                                            <Link
                                                href={href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block py-3.5 px-3 text-white font-britanicaRegular text-[15px] hover:bg-white/8 hover:text-[#F74B1C] rounded-lg transition-colors min-h-[48px] flex items-center"
                                            >
                                                {label}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    {/* CTA + bottom filler - fully solid to screen edge */}
                    <div
                        className="flex-shrink-0 border-t border-white/15 bg-[#0a0a0a] pt-4 px-4 pb-4"
                        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px) + 1rem)" }}
                    >
                        <Button icon={true} />
                    </div>
                    {/* Extra solid strip so no transparency at bottom on any device */}
                    <div className="flex-shrink-0 h-[env(safe-area-inset-bottom,0px)] min-h-[8px] bg-[#0a0a0a]" aria-hidden />
                </div>
            </div>
        </div>
    );
};

export default Header;
