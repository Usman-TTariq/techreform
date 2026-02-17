import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const EcommerceDevelopmentSection = () => {
    return (
        <div className="relative pb-[120px]">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-[22px]">
                            <CapsuleLabel
                                firstWord="WHAT"
                                secondWord="WE"
                                thirdWord="OFFER"
                            />
                        </div>
                        <div className="font-britanicaBlack text-[42px] leading-[52px] font-black">
                            <span className="text-white">Simple & Secure </span>
                            <span className="text-[#F74B1C]">e-Commerce Website Development</span>
                            <br />
                            <span className="text-[#F74B1C]">For High </span>
                            <span className="text-white">Conversion and Sales</span>
                        </div>
                    </div>
                    <div className="col-span-8 col-start-3 text-center ">
                        <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                            We develop scalable mobile applications with intuitive UI/UX design, a feature-rich development approach, and ongoing support after launch. Our expertly curated mobile apps are built to offer cross-platform compatibility and seamless performance across devices.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[52px]">
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="E-commerce platform"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Custom e-commerce website development
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    We offer high-yielding ecommerce solutions that are fast, secure, and user-friendly. All features are customized to your business requirements and logistics.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Online store"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Shopify and WooCommerce
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    We set up professional Shopify and WooCommerce stores that offer complete design, product uploads, and payment integration.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[30px] py-[46px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="pb-[20px]">
                                    <Image
                                        className="w-[70px]"
                                        src="/images/gamingicon.png"
                                        alt="Custom e-commerce"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="font-britanicaBlack font-bold text-[24px] font-regular text-white text-left pb-[5px]">
                                    Mobile Responsible Design
                                </div>
                                <div className="font-britanicaRegular text-[14px] font-regular text-white text-left">
                                    All e-commerce websites are highly responsible for the phone to deliver high conversion rates, whether on desktop or mobile.
                                </div>
                                <div className="pt-[30px] flex justify-start">
                                    <Button text="Learn More" icon={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[90px] items-center justify-center">
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user1.png"
                                alt="E-commerce solution"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user2.png"
                                alt="E-commerce solution"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div>
                            <Image
                                className="w-[90%] m-auto"
                                src="/images/user3.png"
                                alt="E-commerce solution"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcommerceDevelopmentSection;
