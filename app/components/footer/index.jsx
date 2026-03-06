import Image from "next/image";
import Link from "next/link";
import FooterLogo from "./svg/footer-logo";

const Footer = () => {
    return (
        <footer className="relative w-full min-w-0 pt-10 sm:pt-12 md:pt-[60px] overflow-hidden bg-[#0E0E0E] max-sm:pt-[0px]">
            <Image
                className="absolute top-0 left-0 w-[40%] sm:w-[30%] md:w-[25%]"
                src="/images/footerbk1.png"
                alt=""
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 right-0 w-[50%] sm:w-[40%] md:w-[35%]"
                src="/images/footerbk2.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 w-full max-w-[100vw] box-border">
                {/* <div className="w-[250px] max-sm:hidden max-sm:w-[20px] h-[250px] max-sm:h-[20px] right-[5%] max-2xl:w-[200px] max-2xl:h-[200px] rounded-full bg-[#7724C1] border border-[#7724C1] absolute top-[40%] max-sm:top-[70%] max-2xl:top-[45%] -translate-y-1/2 pointer-events-none">

                </div>
                <Image
                    className="footer-dot-spin w-[20%] sm:w-[26%] md:w-[20%] absolute top-[70%] -translate-y-1/2 right-2 sm:right-0 opacity-70 sm:opacity-80 md:opacity-100 pointer-events-none"
                    src="/images/circlewithdot.png"
                    alt=""
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
                        <div className="font-britanicaBlack max-sm:text-center text-[16px] leading-tight sm:text-[20px] md:text-[30px] lg:text-[42px] lg:leading-[42px] font-black pr-0 sm:pr-0">
                            <span className="text-white max-sm:text-center">READY TO GROW YOUR BRAND?</span><br /><span className="text-[#F74B1C]"></span>
                        </div>
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 text-right max-sm:text-center">
                            Let’s take your brand to the next level. Get in touch!
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-full pt-8"
                        src="/images/footerline.png"
                        alt=""
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="grid grid-cols-12 gap-6 sm:gap-8 pt-[20px]">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-2 text-left">
                            Mobile Services
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/mobile-app-development" className="hover:text-[#F74B1C] transition-colors">App Development</Link></li>
                            <li><Link href="/game-development" className="hover:text-[#F74B1C] transition-colors">Game App Development</Link></li>
                            <li><Link href="/mvp" className="hover:text-[#F74B1C] transition-colors">MVP Development</Link></li>
                            <li><Link href="/mobile-app-development#ar" className="hover:text-[#F74B1C] transition-colors">AR Development</Link></li>
                            <li><Link href="/mobile-app-development#vr" className="hover:text-[#F74B1C] transition-colors">VR Development</Link></li>
                            <li><Link href="/mobile-app-development#maintenance" className="hover:text-[#F74B1C] transition-colors">App Maintenance Support</Link></li>
                            <li><Link href="/lp/app" className="hover:text-[#F74B1C] transition-colors">Web App Development</Link></li>
                            <li><Link href="/mobile-app-development#startup" className="hover:text-[#F74B1C] transition-colors">Apps For Startup</Link></li>
                        </ul>
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-6 text-left">
                            Products
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/erp" className="hover:text-[#F74B1C] transition-colors">ERP</Link></li>
                            {/* <li><Link href="/products" className="hover:text-[#F74B1C] transition-colors">HRMS</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-2 text-left">
                            Staff Services
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/staff-augmentation" className="hover:text-[#F74B1C] transition-colors">Staff Augmentation</Link></li>
                            <li><Link href="/staff-augmentation#flutter" className="hover:text-[#F74B1C] transition-colors">Hire Flutter Developer</Link></li>
                            <li><Link href="/staff-augmentation#java" className="hover:text-[#F74B1C] transition-colors">Hire Java Developer</Link></li>
                            <li><Link href="/staff-augmentation#magento" className="hover:text-[#F74B1C] transition-colors">Hire Magento Developer</Link></li>
                            <li><Link href="/staff-augmentation#python" className="hover:text-[#F74B1C] transition-colors">Hire Python Developer</Link></li>
                            <li><Link href="/staff-augmentation#laravel" className="hover:text-[#F74B1C] transition-colors">Hire Laravel Developer</Link></li>
                            <li><Link href="/staff-augmentation#node" className="hover:text-[#F74B1C] transition-colors">Hire Node Js Developer</Link></li>
                            <li><Link href="/staff-augmentation#spring-boot" className="hover:text-[#F74B1C] transition-colors">Hire Spring Boot Developer</Link></li>
                            <li><Link href="/staff-augmentation#power-bi" className="hover:text-[#F74B1C] transition-colors">Power Bi Developer</Link></li>
                            <li><Link href="/staff-augmentation#golang" className="hover:text-[#F74B1C] transition-colors">Golang Developer</Link></li>
                            <li><Link href="/staff-augmentation#llm" className="hover:text-[#F74B1C] transition-colors">LLM Developer</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-2 text-left">
                            E-commerce Services
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/ecommerce" className="hover:text-[#F74B1C] transition-colors">E-Commerce Solutions</Link></li>
                            <li><Link href="/ecommerce" className="hover:text-[#F74B1C] transition-colors">Online Store</Link></li>
                        </ul>
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-3 text-left">
                            Company
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/about" className="hover:text-[#F74B1C] transition-colors">About Us</Link></li>
                            {/* <li><Link href="/careers" className="hover:text-[#F74B1C] transition-colors">Careers</Link></li> */}
                            <li><Link href="/blog" className="hover:text-[#F74B1C] transition-colors">Blog</Link></li>
                            {/* <li><Link href="/#testimonials" className="hover:text-[#F74B1C] transition-colors">Testimonials</Link></li> */}
                            {/* <li><Link href="/contact" className="hover:text-[#F74B1C] transition-colors">Contact Us</Link></li> */}
                            {/* <li><Link href="/privacy-policy" className="hover:text-[#F74B1C] transition-colors">Privacy Policy</Link></li> */}
                            {/* <li><Link href="/terms" className="hover:text-[#F74B1C] transition-colors">Terms & Conditions</Link></li> */}
                        </ul>
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-3 text-left">
                            LP
                        </div>
                        <ul className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-2 space-y-1">
                            <li><Link href="/lp/app" className="hover:text-[#F74B1C] transition-colors">lp app</Link></li>
                            {/* <li><Link href="/careers" className="hover:text-[#F74B1C] transition-colors">Careers</Link></li> */}
                            <li><Link href="/lp/web" className="hover:text-[#F74B1C] transition-colors">lp web</Link></li>
                            {/* <li><Link href="/#testimonials" className="hover:text-[#F74B1C] transition-colors">Testimonials</Link></li> */}
                            {/* <li><Link href="/contact" className="hover:text-[#F74B1C] transition-colors">Contact Us</Link></li> */}
                            {/* <li><Link href="/privacy-policy" className="hover:text-[#F74B1C] transition-colors">Privacy Policy</Link></li> */}
                            {/* <li><Link href="/terms" className="hover:text-[#F74B1C] transition-colors">Terms & Conditions</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 relative">
                        <div className="w-[120px] h-[120px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-[#7724C1] border border-[#7724C1] absolute bottom-[0%] right-[80px] max-sm:right-[40px] max-sm:bottom-[-3%] pointer-events-none">
                        </div>
                        <Image
                            className="footer-dot-spin w-[20%] sm:w-[26%] md:w-[45%] absolute bottom-[-20%] right-0 pointer-events-none"
                            src="/images/circlewithdot.png"
                            alt=""
                            width={1000}
                            height={1000}
                        />
                        <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[24px] font-bold text-white pt-2 text-left">
                            Get In Touch
                        </div>
                        <div className="flex items-center gap-0 translate-x-[-11px]">
                            <div>
                                <Image
                                    className="w-[60px] translate-y-[10px] max-sm:w-[50px]"
                                    src="/images/phone-icon.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white translate-x-[-8px]">
                                <a href="tel:+15822335015" className="hover:text-[#F74B1C] transition-colors">For Support: (582) 233-5015</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-0 translate-x-[-11px] translate-y-[-14px]">
                            <div>
                                <Image
                                    className="w-[60px] translate-y-[10px] max-sm:w-[50px]"
                                    src="/images/phone-icon.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white translate-x-[-8px]">
                                <a href="tel:+15822335015" className="hover:text-[#F74B1C] transition-colors">For Sales: (582) 233-5015</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-0 translate-x-[-11px] translate-y-[-28px]">
                            <div>
                                <Image
                                    className="w-[60px] translate-y-[10px] max-sm:w-[50px]"
                                    src="/images/mail-icon.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white translate-x-[-8px]">
                                <a href="mailto:info@techreforms.com" className="hover:text-[#F74B1C] transition-colors">info@techreforms.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-0 translate-x-[-11px] translate-y-[-32px]">
                            <div className="shrink-0">
                                <Image
                                    className="w-[60px] translate-y-[10px] max-sm:w-[50px]"
                                    src="/images/location.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white translate-x-[-8px]">
                                <div className="">811 Wilshire Boulevard, Los Angeles, CA 90017</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 sm:pt-[40px]">
                    <Image
                        className="w-full"
                        src="/images/footerline.png"
                        alt=""
                        width={1000}
                        height={1000}
                    />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-4 sm:py-[16px]">
                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] font-regular text-white order-2 sm:order-1">
                            Copyright © 2026 Tech Reforms. All rights reserved.
                        </div>
                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] font-regular text-white order-1 sm:order-2">
                            <Link href="/terms" className="hover:text-[#F74B1C] transition-colors">Terms & Conditions</Link>
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