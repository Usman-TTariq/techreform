import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import FooterLogo from "./svg/footer-logo";
import {
    APP_DEVELOPMENT_ITEMS,
    COMPANY_ITEMS,
    ECOMMERCE_ITEMS,
    INDUSTRIES_ITEMS,
    LOCATION_ITEMS,
    MOBILE_SERVICE_ITEMS,
    SOLUTIONS_ITEMS,
    STAFF_SERVICE_ITEMS,
} from "@/app/constants/site-nav";

const FOOTER_CONTACT_ITEMS = [
    {
        icon: "/images/phone-icon.png",
        alt: "Phone icon for support contact",
        content: (
            <a href="tel:+15822335015" className="hover:text-[#F74B1C] transition-colors">
                <span className="block text-white/80">For Support</span>
                <span className="whitespace-nowrap">(582) 233-5015</span>
            </a>
        ),
    },
    {
        icon: "/images/phone-icon.png",
        alt: "Phone icon for sales contact",
        content: (
            <a href="tel:+15822335015" className="hover:text-[#F74B1C] transition-colors">
                <span className="block text-white/80">For Sales</span>
                <span className="whitespace-nowrap">(582) 233-5015</span>
            </a>
        ),
    },
    {
        icon: "/images/mail-icon.png",
        alt: "Email contact icon",
        content: (
            <a href="mailto:info@techreforms.com" className="hover:text-[#F74B1C] transition-colors break-all">
                info@techreforms.com
            </a>
        ),
    },
    {
        icon: "/images/location.png",
        alt: "Office location map pin icon",
        content: (
            <span className="leading-snug">
                811 Wilshire Boulevard, Los Angeles, CA 90017
            </span>
        ),
    },
];

const FooterNavSection = ({ title, items, className = "" }) => (
    <div className={className}>
        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[20px] font-bold text-white pt-2 text-left">
            {title}
        </div>
        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[16px] font-regular text-white pt-2 space-y-1">
            {items.map(({ label, href }) => (
                <li key={label}>
                    <Link href={href} className="hover:text-[#F74B1C] transition-colors">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="relative w-full min-w-0 pt-10 sm:pt-12 md:pt-[60px] overflow-hidden bg-[#0E0E0E] max-sm:pt-[0px]">
            <Image
                className="absolute top-0 left-0 w-[40%] sm:w-[30%] md:w-[25%]"
                src="/images/footerbk1.png"
                alt="Footer decorative gradient background top left"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 right-0 w-[50%] sm:w-[40%] md:w-[35%]"
                src="/images/footerbk2.png"
                alt="Footer decorative gradient background bottom right"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 w-full max-w-[100vw] box-border">
                {/* <div className="w-[250px] max-sm:hidden max-sm:w-[20px] h-[250px] max-sm:h-[20px] right-[5%] max-2xl:w-[200px] max-2xl:h-[200px] rounded-full bg-[#7724C1] border border-[#7724C1] absolute top-[40%] max-sm:top-[70%] max-2xl:top-[45%] -translate-y-1/2 pointer-events-none">

                </div>
                <Image
                    className="footer-dot-spin w-[20%] sm:w-[26%] md:w-[20%] absolute top-[70%] -translate-y-1/2 right-2 sm:right-0 opacity-70 sm:opacity-80 md:opacity-100 pointer-events-none"
                    src="/images/circlewithdot.png"
                    alt="Animated circular graphic with center dot"
                    width={1000}
                    height={1000}
                /> */}
                <div className="flex items-center justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4">
                    <div className="min-w-0">
                        {/* <a
                            href="mailto:info@techreforms.com"
                            className="font-britanicaRegular text-[18px] sm:text-[20px] md:text-[28px] font-regular text-white break-all sm:break-normal hover:text-[#F74B1C] transition-colors inline-block"
                        >
                            info@techreforms.com
                        </a> */}
                        <Link href="/" className="block w-full max-w-[100%] min-w-0">
                            <FooterLogo className="w-full max-w-[160px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[450px] h-auto" />
                        </Link>
                    </div>
                    <div>
                        <div className="font-britanicaBlack max-sm:text-center text-[16px] max-xl:text-right leading-tight sm:text-[20px] md:text-[30px] lg:text-[42px] lg:leading-[42px] font-black pr-0 sm:pr-0">
                            <span className="text-white max-sm:text-center max-xl:text-right">READY TO GROW YOUR BRAND?</span><br /><span className="text-[#F74B1C]"></span>
                        </div>
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 text-right max-sm:text-center">
                            Let’s take your brand to the next level. Get in touch!
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 mt-3 justify-end max-sm:justify-center">
                            <Link href="https://www.facebook.com/techreforms.1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-0 group">
                                <div className="w-[40px] h-[40px] bg-[#7826c3] rounded-full flex items-center justify-center">
                                    <Facebook className="text-white group-hover:text-[#f74b1c] transition-colors" />
                                </div>
                            </Link>
                            <Link href="https://www.instagram.com/tech.reforms/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-0 group">
                                <div className="w-[40px] h-[40px] bg-[#7826c3] flex rounded-full items-center justify-center">
                                    <Instagram className="text-white group-hover:text-[#f74b1c] transition-colors" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-full pt-8"
                        src="/images/footerline.png"
                        alt="Decorative horizontal divider line in footer"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="grid grid-cols-12 gap-6 sm:gap-8 pt-[20px]">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <FooterNavSection title="Services" items={MOBILE_SERVICE_ITEMS} />
                        <FooterNavSection title="Location" items={LOCATION_ITEMS} className="pt-4" />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <FooterNavSection title="Native & Cross-Platform" items={APP_DEVELOPMENT_ITEMS} />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <FooterNavSection title="Hire / Staff Augmentation" items={STAFF_SERVICE_ITEMS} />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <FooterNavSection title="Industries" items={INDUSTRIES_ITEMS} />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <FooterNavSection title="Solutions" items={SOLUTIONS_ITEMS} />
                        <FooterNavSection title="Ecommerce" items={ECOMMERCE_ITEMS} className="pt-4" />
                        <FooterNavSection title="Company" items={COMPANY_ITEMS} className="pt-4" />
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2 relative overflow-hidden pb-8 lg:pb-16">
                        <div className="pointer-events-none absolute -bottom-6 -right-6 z-0 hidden sm:block">
                            <div className="w-[90px] h-[90px] rounded-full bg-[#7724C1] border border-[#7724C1] opacity-80" />
                        </div>
                        <Link
                            href="/"
                            className="pointer-events-auto absolute bottom-0 right-0 z-0 hidden lg:block w-[72px] opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <Image
                                className="footer-dot-spin w-full"
                                src="/images/circlewithdot.png"
                                alt="Animated circular graphic with center dot"
                                width={1000}
                                height={1000}
                            />
                        </Link>

                        <div className="relative z-10">
                            <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[20px] font-bold text-white pt-2 text-left">
                                Get In Touch
                            </div>
                            <ul className="space-y-4 pt-3">
                                {FOOTER_CONTACT_ITEMS.map((item) => (
                                    <li key={item.alt} className="flex items-start gap-3 min-w-0">
                                        <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                                            <Image
                                                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                                                src={item.icon}
                                                alt={item.alt}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="font-britanicaRegular text-[13px] sm:text-[14px] md:text-[15px] font-regular text-white min-w-0 pt-1.5 leading-snug">
                                            {item.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 sm:pt-[40px]">
                    <Image
                        className="w-full"
                        src="/images/footerline.png"
                        alt="Decorative horizontal divider line in footer"
                        width={1000}
                        height={1000}
                    />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-4 sm:py-[16px] relative z-10">
                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] font-regular text-white order-2 sm:order-1">
                            Copyright © 2026 Tech Reforms. All rights reserved.
                        </div>
                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] font-regular text-white order-1 sm:order-2 relative z-20">
                            <Link href="/terms-conditions" className="hover:text-[#F74B1C] transition-colors">Terms & Conditions</Link>
                            <span className="mx-2">|</span>
                            <Link href="/privacy-policy" className="hover:text-[#F74B1C] transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;