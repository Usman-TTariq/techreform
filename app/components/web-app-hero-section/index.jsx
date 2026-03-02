import Image from "next/image";
import GeneralHeroSection from "../general-hero-section";
import FreeConsultationForm from "../free-consultation-form";

const WebAppHeroSection = () => {
    return (
        <div className="relative">
            <GeneralHeroSection firstWord="Custom" secondWord="Mobile Application" thirdWord="" forthWord="" fifthWord="Development" sixthWord="Services" para="Tailored mobile solutions designed to elevate your business operations and user engagement."
                buttonText="Request a Free Quote"
                compact
            />
            <div className="container relative -mt-[150px]">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 my-auto">
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
                    <div className="col-span-4">
                        <FreeConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebAppHeroSection;
