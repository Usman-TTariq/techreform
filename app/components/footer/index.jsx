import Image from "next/image";
import FooterLogo from "./svg/footer-logo";

const Footer = () => {
    return (
        <footer className="relative w-full min-w-0 pt-10 sm:pt-12 md:pt-[60px] overflow-hidden bg-[#0E0E0E]">
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
                <Image
                    className="w-[20%] sm:w-[26%] md:w-[24%] absolute top-[50%] -translate-y-1/2 right-2 sm:right-0 opacity-70 sm:opacity-80 md:opacity-100 pointer-events-none"
                    src="/images/footercircle.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
                <div className="font-britanicaBlack text-[22px] leading-tight sm:text-[30px] md:text-[40px] lg:text-[50px] lg:leading-[42px] font-black pr-0 sm:pr-0">
                    <span className="text-white">READY TO GROW YOUR BRAND?</span><br /><span className="text-[#F74B1C]"></span>
                </div>
                <div className="font-britanicaRegular text-[14px] sm:text-base md:text-[18px] font-regular text-white pt-3 sm:pt-4 md:pt-[22px] max-w-[90%] sm:max-w-none">
                    Let’s take your brand to the next level. Get in touch!
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-start gap-3 sm:gap-6 md:gap-12 pb-10 sm:pb-16 md:pb-[100px]">
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white">Solutions</div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white">Company</div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white">Portfolio</div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white">Blog</div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white">Resource</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-0">
                    <div className="font-britanicaRegular text-[18px] sm:text-[24px] md:text-[32px] font-regular text-white break-all sm:break-normal">
                        info@techreforms.com
                    </div>
                    <div className="w-full max-w-[100%] min-w-0 pt-1">
                        <FooterLogo className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto" />
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
                        <div className="font-britanicaRegular text-[13px] sm:text-[16px] font-regular text-white order-1 sm:order-2">Terms & Conditions  |  Privacy Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;