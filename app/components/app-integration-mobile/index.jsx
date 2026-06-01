import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const AppIntegrationMobile = () => {
    const integrations = [
        {
            title: "App Integration Accuracy",
            desc: "At Tech Reforms, we don’t develop apps; We offer solutions. Our experts build apps that are 10x smarter, safer, and easier to use than average apps on the market. The end-products simply improve performance, strengthen security, and create experiences by integrating the right technology.",
        },
        {
            title: "AI & Machine Learning",
            desc: "We use AI and machine learning to help apps think ahead. Our teams build features that respond in real time. This means it offers both personalized recommendations and behavior-based insights. AI also powers chat support, smart search, translations, and voice interactions for more intuitive and useful apps.",
        },
        {
            title: "Voice Command Interface",
            desc: "Voice features aren’t just trendy; they improve convenience and accessibility. We integrate reliable speech recognition and natural language processing, reliable navigation, and complete availability of hands-free task management. Your app can also connect smoothly with assistants like Siri and Google Assistant.",
        },
        {
            title: "AR & VR",
            desc: "We integrate AR and VR in practical ways for brands that want immersive experiences. Our immersive apps can host product previews, virtual tours, training simulations, and interactive learning. The goal is simple: higher engagement and memorable digital experiences.",
        },
        {
            title: "Blockchain",
            desc: "When security and transparency matter, blockchain makes a difference. We implement it for secure transactions, data protection, and smart contracts to help your app build trust and keep operations efficient behind the scenes.",
        },
    ]

    return (
        <div className="relative pb-[150px] max-sm:pb-[50px]">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-4">
                    <div className="col-span-5 max-lg:col-span-12">
                        <div className="max-sm:flex max-sm:justify-center">
                            <CapsuleLabel firstWord="APP" secondWord="INTEGRATION" />
                        </div>
                        <div className="font-britanicaRegular pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed max-sm:text-center">
                        Our mobile app solutions come with new and intuitive technologies integrated into them for better performance, security, and user experience.
                        </div>
                    </div>
                    <div className="col-span-7 max-lg:col-span-12 max-sm:mx-auto max-sm:text-center">
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
                                            alt="App integration and workflow illustration"
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
