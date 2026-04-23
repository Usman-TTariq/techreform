"use client";
import React from "react";
import CapsuleLabel from "../common/capsule-label";
import ClaendarIcon from "../lp-app-process/svg/calendar-icon";
import Button from "../common/button";
import Image from "next/image";

const VrProcess = () => {
    const processes = [
        {
            title: "Course Design",
            desc: "VR development is tricky; it doesn't start as it is. First, we begin with a consultation to help our experts identify the business's main goal.",
        },
        {
            title: "Research",
            desc: "We then conduct research to compile a list of all the key functionalities we’d require to build your ideal VR experience.",
        },
        {
            title: "Script",
            desc: "We chart the user's entire journey during the VR experience using a detailed script.",
        },
        {
            title: "Resource Allocation",
            desc: "We curate a specialized team tailored to the complexity of your VR Project.",
        },
        {
            title: "Creative / Video",
            desc: "We create additional visual assets, including illustrations, graphics, video editing, and 3D models.",
        },
        {
            title: "Development",
            desc: "The VR experience is designed and coded based on 3D asset and character modeling, as well as interactive session development.",
        },
        {
            title: "Assembly",
            desc: "We curate the additional assembly work included in the VR to account for exception paths.",
        },
        {
            title: "Testing",
            desc: "We examine the VR experience for any bugs and anomalies. In case of bugs, we reiterate, fix, and deploy.",
        },
        {
            title: "Deployment",
            desc: "The highly optimized VR experience is deployed across platforms, devices, and operating systems to maximize reach.",
        },
        {
            title: "Support",
            desc: "We offer comprehensive post-deployment support to address any issues that arise, ensuring VR users get the best possible experience.",
        },
    ];
    return (
        <div className="relative py-[100px] max-sm:pt-[30px] max-sm:pb-[40px]">
            <Image
                className="absolute top-0 left-0 w-full h-full"
                src="https://ik.imagekit.io/sajib4aqc/Group%202147225255.png"
                alt="Supporting illustration for Tech Reforms VR process section"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="OUR" secondWord="PROCESS" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Our </span>
                            <span className="text-[#F74B1C]">VR Development </span>
                            <span className="text-white">Process</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            From training simulations to customer-facing experiences, structured VR delivery keeps scope, comfort, and performance aligned so your organization can ship confidently on the hardware that matters.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3 pt-[40px]">
                    {processes.map((process, index) => (
                        <div key={index} className="col-span-3 max-sm:col-span-12">
                            <div className="flex justify-center">
                                <div className="border border-[#B96BFE] rounded-2xl p-5">
                                    <ClaendarIcon className="w-[30px] h-[30px]" />
                                </div>
                            </div>
                            <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] font-regular text-white text-center py-1 sm:py-[10px]">
                                {process.title}
                            </div>
                            <div className="font-britanicaRegular text-[16px] font-regular text-white text-center pb-[10px]">
                                {process.desc}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-[50px] max-sm:pt-[20px]">
                    <Button text="Schedule a Free Consultation" icon={false} onClick={() => { window.location.href = "tel:+15822335015"; }} />
                </div>
            </div>
        </div>
    );
};

export default VrProcess;
