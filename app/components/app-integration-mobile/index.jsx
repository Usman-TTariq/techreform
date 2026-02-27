import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const AppIntegrationMobile = () => {
    const integrations = [
        {
            title: "AI & ML",
            desc: "We utilize AI & ML technologies to build smarter mobile applications with personalized user experiences, advanced security, and intelligent automation. From predictive analytics to smart recommendations, our solutions help analyze user behavior and deliver relevant content in real time. AI integration also enhances features like chat support, translation, and voice-enabled interactions.",
        },
        {
            title: "Voice Command Interface",
            desc: "Enhance user convenience with voice-enabled functionality powered by NLP and speech recognition. We integrate seamless voice command systems that allow hands-free interaction and faster task completion. This improves accessibility and enables compatibility with smart assistants like Siri and Google Assistant.",
        },
        {
            title: "AR & VR",
            desc: "We integrate AR & VR technologies to create immersive and interactive mobile experiences. Whether it's product visualization, virtual tours, or interactive learning, these features boost engagement and provide users with a more dynamic digital environment aligned with modern trends.",
        },
        {
            title: "Blockchain",
            desc: "Our blockchain integration ensures secure, transparent, and decentralized mobile app solutions. From smart contracts to secure transactions and data protection, we implement blockchain technology to enhance trust, efficiency, and reliability in your app’s backend system.",
        },
    ]

    return (
        <div className="relative pb-[150px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-5 max-lg:col-span-12">
                        <CapsuleLabel firstWord="APP" secondWord="INTEGRATION" />
                        <div className="font-britanicaRegular pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
                            Our mobile app solutions integrate advanced technologies to enhance performance, security, and user experience—delivering smarter, faster, and more engaging digital products.
                        </div>
                    </div>
                    <div className="col-span-7 max-lg:col-span-12">
                        <div className="flex justify-end">
                            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-left">
                                <span className="text-white">We Integrate </span>
                                <span className="text-[#F74B1C]">Advanced</span>
                                <br />
                                <span className="text-[#F74B1C]">Mobile App </span>
                                <span className="text-white">Technologies</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-10">
                    {
                        integrations.map((integration, index) => (
                            <div key={index} className="col-span-12 md:col-span-6">
                                <div className="rounded-xl bg-[#3c3c3c52] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 h-full">
                                    <div>
                                        <Image
                                            className="w-full"
                                            src="/images/integrationimg.png"
                                            alt=""
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="font-britanicaBlack font-bold text-[16px] pt-6 sm:text-[16px] md:text-[28px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                                        {integration.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[14px] pb-4 sm:text-[18px] font-regular text-white text-left leading-relaxed">
                                        {integration.desc}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AppIntegrationMobile;
