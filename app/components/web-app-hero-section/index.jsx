import Image from "next/image";
import GeneralHeroSection from "../general-hero-section";
import FreeConsultationForm from "../free-consultation-form";

const WebAppHeroSection = ({ autoHeight }) => {
    return (
        <div className="relative bg-[#00000033]">
            <GeneralHeroSection firstWord="Custom" secondWord="Mobile Application Development" thirdWord="" forthWord="" fifthWord="for iOS & Android" sixthWord="Fast, Scalable & Affordable" para="Custom Intuitive mobile solutions designed for easier monetization, accessibility, and high user engagement."
                buttonText="Book a Free App Strategy Call"
                compact
                space={true}
                autoHeight={autoHeight}
                callOnClick
            />
            <div className="container relative -mt-[60px] max-sm:mt-0">
                <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
                    <div className="col-span-8 mt-auto max-sm:col-span-12">
                        <div>
                            <Image
                                className="w-full"
                                src="/images/app-hero-section.png"
                                alt=""  
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-4 translate-y-[30px] max-sm:col-span-12">
                        <FreeConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebAppHeroSection;
