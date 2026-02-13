import Image from "next/image";
import FooterLogo from "./svg/footer-logo";

const Footer = () => {
    return (
        <div className="relative pt-[60px] overflow-hidden ">
            <Image
                className="absolute top-[0%] left-0 w-[25%]"
                src="/images/footerbk1.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <Image
                className="absolute bottom-0 right-0 w-[35%]"
                src="/images/footerbk2.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <Image
                    className="w-[24%] absolute top-[50%] -translate-y-1/2 right-0"
                    src="/images/footercircle.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <div className="font-britanicaBlack text-[50px] leading-[42px] font-black">
                    <span className="text-white">READY TO GROW YOUR BRAND?</span><br /><span className="text-[#F74B1C]"></span>
                </div>
                <div className="font-britanicaRegular text-[18px] font-regular text-white pt-[22px]">
                    Let’s take your brand to the next level. Get in touch!
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <div className="flex items-center justify-start gap-12 pb-[100px]">
                            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">Solutions</div>
                            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">Company</div>
                            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">Portfolio</div>
                            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">Blog</div>
                            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">Resource</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-britanicaRegular text-[32px] font-regular text-white">
                        info@techreforms.com
                    </div>
                    <div>
                        <FooterLogo className="w-[450px]" />
                    </div>
                </div>
                <div className="pt-[40px]">
                    <Image
                        className="w-[100%]"
                        src="/images/footerline.png"
                        alt="Hero Background"
                        width={1000}
                        height={1000}
                    />
                    <div className="flex items-center justify-between py-[16px]">
                        <div className="font-britanicaRegular text-[16px] font-regular text-white">
                            Copyright © 2026 Tech Reforms. All rights reserved.
                        </div>
                        <div className="font-britanicaRegular text-[16px] font-regular text-white">Terms & Conditions  |  Privacy Policy</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;