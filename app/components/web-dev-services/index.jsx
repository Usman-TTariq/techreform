import Image from "next/image";
import Link from "next/link";

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
                <Link href="/" className="get-started-btn absolute max-sm:hidden cursor-pointer top-[50%] left-[50%] rounded-full translate-x-[-50%] p-[20px] translate-y-[-50%] z-20 !bg-[#f74b1c] transition-colors duration-300 block hover:bg-[#555]">
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
                </Link>
                <div className="grid grid-cols-12 px-[20px] gap-6 relative z-10 pt-[90px] pb-[50px] max-sm:pt-[40px] max-sm:px-[0px]">
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://ik.imagekit.io/sajib4aqc/From%20Main%20Klickpin%20CF-%20Video%20Pinterest%20-%206mwdLHeAG.mp4"
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
                                    Custom Website Application
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Custom websites built around your business goals to increase engagement and conversions.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://ik.imagekit.io/sajib4aqc/vid%202.mp4"
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
                                    E-Commerce Development
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Access secure, scalable online stores and e-commerce platforms with smooth checkout, product management, and integrated payment.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://ik.imagekit.io/sajib4aqc/vid%203.mp4"
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
                                    Responsive & Mobile-Friendly Design
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Gain design websites that look and perform amazingly on every screen, regardless of the user's device, for a better and seamless browsing experience.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 h-full">
                        <div className="flex justify-between max-sm:flex-col items-center gap-6 bg-[#000000] border border-[#323232] rounded-3xl p-3 h-full">
                            <div className="w-[220px] h-[220px] rounded-xl overflow-hidden shrink-0">
                                <video
                                    src="https://ik.imagekit.io/sajib4aqc/From%20Main%20Klickpin%20CF-%20Pinterest%20Video%20-%203muApHQYM.mp4"
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
                                    Web Application Development
                                </div>
                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[16px] font-regular text-white pt-3 leading-relaxed">
                                    Streamline business logistics with dynamic web apps featuring interactive features, real-time functionality, and robust backend systems.
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
