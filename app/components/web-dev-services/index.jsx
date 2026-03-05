import Image from "next/image";

const WebDevelopmentServices = () => {
    return (
        <div className="relative pt-[100px] pb-[100px] max-sm:pt-[50px] max-sm:pb-[00px]">
            <div className="container relative">
                <div className="absolute cursor-pointer top-[0%] left-[50%] translate-x-[-50%] translate-y-[-10px]">
                    <div className="font-britanicaRegular whitespace-nowrap text-center text-[15px] max-sm:text-[22px] sm:text-[18px] md:text-[52px] font-black text-[#fff] leading-[30px]">
                        Web Development Services
                    </div>
                </div>
                <Image
                    className="w-full h-full max-sm:hidden absolute top-0 left-0"
                    src="/images/servicebk.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <div className="get-started-btn absolute max-sm:hidden cursor-pointer top-[50%] left-[50%] rounded-full translate-x-[-50%] p-[20px] translate-y-[-50%] z-20 bg-[#444444] transition-colors duration-300">
                    <div className="font-britanicaRegular text-center text-[15px] sm:text-[18px] md:text-[28px] font-bold text-[#fff] leading-[30px]">
                        Get<br />Started <br />
                        <Image
                            className="w-[25px] pt-2 mx-auto"
                            src="/images/Stroke-arrow.png"
                            alt="Hero Background"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 px-[20px] gap-6 relative z-10 pt-[90px] pb-[50px] max-sm:pt-[40px] max-sm:px-[0px]">
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://res.cloudinary.com/dtfy8a1wo/video/upload/v1772729977/firstvideo_x1gkgz.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label="Custom Web Application"
                                />
                            </div>
                            <div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[42px] font-bold text-[#fff] leading-[50px]">
                                    Custom Web Application
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Our team builds intentionally to reflect your brand and support the unique business processes that include ERP, CRM, eCommerce, Online training, and more.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://res.cloudinary.com/dtfy8a1wo/video/upload/v1772733276/secondvideo_dc0nok.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label="Custom Web Application"
                                />
                            </div>
                            <div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[42px] font-bold text-[#fff] leading-[50px]">
                                    Scalable Architecture
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Our web applications are designed to adapt to your business; whether you’re scaling operations, expanding features, or adding users, performance remains seamless.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://res.cloudinary.com/dtfy8a1wo/video/upload/v1772733393/thirdvideo_ycbqgk.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label="Custom Web Application"
                                />
                            </div>
                            <div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[42px] font-bold text-[#fff] leading-[50px]">
                                    Enterprise-Grade Security
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    We implement advanced security protocols to protect your data, customers, and operations from threats and breaches.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://res.cloudinary.com/dtfy8a1wo/video/upload/v1772733437/forthvideo_hmnmrx.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label="Custom Web Application"
                                />
                            </div>
                            <div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[42px] font-bold text-[#fff] leading-[50px]">
                                    Mobile-Ready & Responsive
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Capture leads and engage users across all screen sizes with fully optimized, mobile-first designs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WebDevelopmentServices;
