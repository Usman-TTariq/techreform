"use client";
import Image from "next/image";
import Button from "../common/button";

const HowWeBuildMobileSection = () => {
    return (
        <div className="relative pb-[150px] max-sm:pb-[0px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 max-lg:col-span-12">
                        <div>
                            <Image
                                className="w-[100%] scale-150"
                                src="https://ik.imagekit.io/sajib4aqc/Group%20233.png"
                                alt="Illustration for how we build high-performing mobile apps"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-7 my-auto max-lg:col-span-12">
                        <div>
                            <div className="font-britanicaBlack text-[24px] leading-[1.2] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] xl:leading-[52px] font-black break-words max-lg:text-center">
                                <span className="text-white">How We Build </span>
                                <span className="text-[#F74B1C]">Mobile Apps That Actually Perform?</span>
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            We’re not here to ship “an app.” We’re here to ship something people keep opening fast, stable, and secure enough that you’re not nervous when traffic spikes or you add the next feature.
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            We work in short, practical cycles of coding and testing. This way, our clients don’t have to sit around and guess what’s happening. You get something real to look at early, and if you learn something new midstream, we can pivot without any hassle. The app improves in steady steps rather than landing all at once with one nerve-wracking “ta-da.”
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            We build for Android and iOS, and pick the stack that fits what you’re trying to do. We work with React Native, Flutter, Kotlin, Swift, and so much more. So, it feels fast and polished, where users notice, not like a shortcut that shows.
                            </div>
                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                            Whether you’re validating an idea, rolling out something company-wide, or building something nobody’s built quite your way yet, we care about the boring parts too: clear communication, careful execution, and delivery you can plan around, so your product can compete in a crowded market without feeling rushed or fragile.
                            </div>
                        </div>
                        <div className="pt-5 sm:pt-[30px]">
                            <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeBuildMobileSection;
