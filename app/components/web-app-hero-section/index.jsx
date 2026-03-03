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
            />
            <div className="container relative -mt-[60px]">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 mt-auto">
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
                    <div className="col-span-4 translate-y-[30px]">
                        <FreeConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebAppHeroSection;
