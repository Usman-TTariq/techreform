"use client";
import { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import HireExpertPopup from "../hire-expert-popup";

const LpAppHire = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const developers = [
        {
            number: "01",
            title1: "AI-Powered",
            title2: "Augmented Reality Apps",
            desc: "Leveraging the latest Augmented Reality (AR) and Artificial Intelligence (AI) technologies, we develop smart and interactive mobile applications to detect and track real-world objects.",
            buttonText: "Start Your AR App Project"
        },
        {
            number: "02",
            title1: "Natural Language",
            title2: "Processing Chatbots",
            desc: "Improve customer communication and engagement through the latest AI-powered chatbots. Via Natural Language Processing (NLP), we build chatbots that understand human language, context, and sentiment.",
            buttonText: "Build Your AI Chatbot"
        },
        {
            number: "03",
            title1: "RPA Data-Entry App",
            title2: "Solutions",
            desc: "We built RPA-powered data entry solutions to optimize and automate repetitive tasks, reduce errors, and improve operational efficiency. Such apps simply streamline data validation, extraction, and seamless system integration.",
            buttonText: "Automate Your Data Entry"
        },
        {
            number: "04",
            title1: "Data-Intensive",
            title2: "Machine Learning Apps",
            desc: "We develop applications using the most recent data-driven machine learning models and algorithms, along with large datasets, to deliver accurate predictions and intelligent automation.",
            buttonText: "Build Your AI Solution"
        },
        {
            number: "05",
            title1: "Medical Treatment",
            title2: "AI Apps",
            desc: "Our AI-powered medical applications transform healthcare delivery through intelligent diagnostics and treatment planning. We leverage AI and machine learning to analyze medical data for better diagnostic accuracy.",
            buttonText: "Build a Healthcare AI App"
        },
        {
            number: "06",
            title1: "AI & IoT Integrated",
            title2: "Mobile Apps",
            desc: "Create intelligent, connected ecosystems via custom AI-powered mobile applications integrated with smart IoT devices. Simply process data and perform analytics for a personalized user experience.",
            buttonText: "Create Your Smart IoT App"
        },
    ];

    return (
        <div className="relative pb-[100px] max-sm:pb-[40px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6 my-auto">
                        <div className="flex justify-start max-sm:justify-center pb-2">
                            <CapsuleLabel firstWord="AI" secondWord="DEVELOPER" />
                        </div>
                        <p className="font-britanicaRegular text-[13px] sm:text-[16px] text-white max-sm:text-center">
                            Businesses must stay updated on new technologies. <br /> Our experts leverage AI for app development to <br /> transform industries and enhance user experiences.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex lg:justify-end max-sm:justify-center my-auto">
                        <div className="font-britanicaBlack text-[22px] max-sm:text-center leading-tight sm:text-[28px] md:text-[36px] lg:text-[52px] lg:leading-[55px] font-black text-left lg:text-right">
                            <span className="text-white">Hire an </span>
                            <span className="text-[#F74B1C]">Artificial</span>
                            <br />
                            <span className="text-[#F74B1C]">Intelligence </span>
                            <span className="text-white">App Developer</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pt-[50px] items-start max-sm:pt-[20px]">
                    {
                        developers.map((developer, index) => (
                            <div className="col-span-12 lg:col-span-4 pb-[40px] h-full max-sm:pb-[10px]" key={index}>
                                <div className="h-full flex flex-col justify-between">
                                    <div className="w-full max-sm:mb-5 h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]"></div>
                                    <div className="flex items-center gap-6">
                                        <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[75px] font-regular text-[#9340FF] text-left pb-1 sm:pb-[5px]">{developer.number}</div>
                                        <div>
                                            <div className="font-britanicaRegular text-[13px] leading-tight sm:text-[24px] text-white text-left font-bold">{developer.title1}</div>
                                            <div className="font-britanicaRegular text-[13px] leading-tight sm:text-[24px] text-white text-left font-bold">{developer.title2}</div>
                                        </div>
                                    </div>
                                    <div className="font-britanicaRegular text-[13px] sm:text-[18px] text-white">
                                        {developer.desc}
                                    </div>
                                    <div className="pt-[20px]">
                                        <Button text={developer.buttonText} icon={false} onClick={() => setPopupOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    )
}

export default LpAppHire;
