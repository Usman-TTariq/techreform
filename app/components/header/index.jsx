"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import MainLogo from "./svg/MainLogo";
import Button from "../common/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { DROPDOWN_ITEMS, MEGA_MENU } from "./nav-config";

const MobileMenu = dynamic(() => import("./mobile-menu"), { ssr: false });

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(true);
    const lastScrollYRef = useRef(0);
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
        if (isMobileView) {
            document.body.style.paddingTop = mobileNavVisible || mobileMenuOpen ? "72px" : "0";
        } else {
            document.body.style.paddingTop = "80px";
        }
        return () => {
            document.body.style.paddingTop = "";
        };
    }, [isMobileView, mobileNavVisible, mobileMenuOpen]);

    useEffect(() => {
        const checkMobile = () => setIsMobileView(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobileView) return;
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                const last = lastScrollYRef.current;
                if (y <= 60) {
                    setMobileNavVisible(true);
                } else if (y > last) {
                    setMobileNavVisible(false);
                } else {
                    setMobileNavVisible(true);
                }
                lastScrollYRef.current = y;
                ticking = false;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileView]);

    const hideNav = isMobileView && !mobileNavVisible && !mobileMenuOpen;

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-sm bg-[#0a0a0a]/95 transition-transform duration-300 ease-out ${hideNav ? "-translate-y-full" : "translate-y-0"}`}
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
                                                        {href ? (
                                                            <Link
                                                                href={href}
                                                                className="text-white/80 font-britanicaRegular text-[14px] hover:text-[#f74b1c] transition-colors"
                                                            >
                                                                {label}
                                                            </Link>
                                                        ) : (
                                                            <span className="text-white/60 font-britanicaRegular text-[14px] cursor-not-allowed">
                                                                {label}
                                                            </span>
                                                        )}
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

            <div className="container py-4 sm:py-5 lg:py-5 relative max-w-[1320px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-3 lg:gap-4">
                    <Link href="/" className="flex-shrink-0" aria-label="Tech Reforms home">
                        <MainLogo className="w-[150px] sm:w-[165px] lg:w-[175px] xl:w-[190px]" aria-hidden="true" focusable="false" />
                    </Link>

                    {/* Desktop nav – hidden on mobile/tablet */}
                    <nav className="hidden lg:flex flex-1 justify-center min-w-0 px-2 xl:px-4">
                        <ul className="flex items-center justify-center gap-3 xl:gap-4 2xl:gap-5 text-white font-britanicaRegular text-[13px] xl:text-[14px] 2xl:text-[15px]">
                            {DROPDOWN_ITEMS.map(({ key, label, href }) => (
                                <li
                                    key={key}
                                    onMouseEnter={() => href ? null : setActiveDropdown(key)}
                                    className="relative shrink-0"
                                >
                                    {href ? (
                                        <Link href={href} className="flex items-center gap-1 whitespace-nowrap hover:text-[#f74b1c] transition-colors cursor-pointer">
                                            {label}
                                        </Link>
                                    ) : (
                                        <span className="flex items-center gap-1 whitespace-nowrap hover:text-[#f74b1c] transition-colors cursor-pointer">
                                            {label} <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                                        </span>
                                    )}
                                </li>
                                // <li
                                //     key={key}
                                //     onMouseEnter={() => setActiveDropdown(key)}
                                //     className="relative"
                                // >
                                //     {href === "#" ? (
                                //         <span className="flex items-center gap-1 hover:text-[#f74b1c] transition-colors cursor-pointer">
                                //             {label} {key !== "portfolio" && <ChevronDown className="w-[14px]" />}
                                //         </span>
                                //     ) : (
                                //         <Link
                                //             href={href}
                                //             className="flex items-center gap-1 hover:text-[#f74b1c] transition-colors cursor-pointer"
                                //         >
                                //             {label} {key !== "portfolio" && <ChevronDown className="w-[14px]" />}
                                //         </Link>
                                //     )}
                                // </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA – hidden on small screens */}
                    <div className="hidden lg:block flex-shrink-0">
                        <Button
                            text="Call Now +1 (582) 233-5015"
                            icon={true}
                            className="!px-1.5"
                            textClassName="!text-[13px] xl:!text-[14px] 2xl:!text-[16px] !px-2"
                            onClick={() => window.location.href = "tel:+15822335015"}
                        />
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

            {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
        </div>
    );
};

export default Header;
