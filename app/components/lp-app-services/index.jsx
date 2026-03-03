"use client";
import { useRef, useEffect } from "react";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";
import ArrowIcon from "./svg/arrow-icon";

const LpAppServices = () => {
    const sectionRef = useRef(null);
    const columnRef = useRef(null);
    const sectionCompletedRef = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            if (sectionCompletedRef.current) return;

            const section = sectionRef.current;
            const col = columnRef.current;
            if (!section || !col) return;

            const sectionTop = section.getBoundingClientRect().top;
            const sectionAtTop = sectionTop <= 0;

            if (!sectionAtTop) return;

            const { scrollTop, clientHeight, scrollHeight } = col;
            const atTop = scrollTop <= 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 2;

            const speed = 2.2;
            const delta = e.deltaY * speed;
            if (e.deltaY > 0) {
                if (!atBottom) {
                    col.scrollTop += delta;
                    e.preventDefault();
                } else {
                    sectionCompletedRef.current = true;
                }
            } else if (e.deltaY < 0) {
                if (!atTop) {
                    col.scrollTop += delta;
                    e.preventDefault();
                }
            }
        };
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    const services = [
        {
            title: "SERVICE 01",
            heading1: "Mobile App ",
            heading2: "Strategy & Consulting",
            description: "Get your idea analyzed and mapped into practical, actionable steps to build your app, with a better understanding of its technology stack, monetization models, and go-to-market plan.",
            features: [
                {
                    title: "Product Roadmapping",
                },
                {
                    title: "Tech Architecture Design",
                },
                {
                    title: "Feasibility Analysis",
                }
            ]
        },
        {
            title: "SERVICE 02",
            heading1: "UI/UX ",
            heading2: "Design",
            description: "Build apps with simple, modern, and easy-to-understand, intuitive interfaces and experiences, grounded in the behavior and preferences of your core audiences.",
            features: [
                {
                    title: "Wireframing & Prototyping",
                },
                {
                    title: "Responsive Design",
                },
                {
                    title: "UX Audits & User Journey Mapping",
                }
            ]
        },
        {
            title: "SERVICE 03",
            heading1: "Native ",
            heading2: "App Development",
            description: "Develop high-performance mobile applications that are custom-made specifically for iOS and Android platforms.",
            features: [
                {
                    title: "Custom IOS App Development",
                },
                {
                    title: "Personalized Android app development",
                },
                {
                    title: "Platform-Specific Optimization",
                }
            ]
        },
        {
            title: "SERVICE 04",
            heading1: "Cross-Platform ",
            heading2: "App Development",
            description: "Launch apps faster with unified codebases that work across multiple platforms without errors and lag.",
            features: [
                {
                    title: "Flutter & React Native Development",
                },
                {
                    title: "Shared Code Architecture",
                },
                {
                    title: "Cross-Device Compatibility Testing",
                }
            ]
        },
        {
            title: "SERVICE 05",
            heading1: "Backend Development ",
            heading2: "& API Integration",
            description: "Power your app with secure, scalable backend systems and all the required, smooth third-party integrations.",
            features: [
                {
                    title: "Custom API Development",
                },
                {
                    title: "Cloud Infrastructure Setup",
                },
                {
                    title: "Third-Party Service Integration",
                }
            ]
        },
        {
            title: "SERVICE 06",
            heading1: "Testing ",
            heading2: "& Quality Assurance",
            description: "Enjoy flawless performance through rigorous testing across devices, platforms, and environments to drive user engagement.",
            features: [
                {
                    title: "Manual and Automated Testing",
                },
                {
                    title: "Performance Testing",
                },
                {
                    title: "Security Testing",
                },
                {
                    title: "Bug Tracking Optimization",
                }
            ]
        },
        {
            title: "SERVICE 07",
            heading1: "App Maintenance ",
            heading2: "& Support",
            description: "Keep your application secure, up to date, and optimized long after launch with 24/7 reliable maintenance and support.",
            features: [
                {
                    title: "Performance Monitoring",
                },
                {
                    title: "Version Upgrades",
                },
                {
                    title: "Ongoing Technical Support",
                }
            ]
        },
        {
            title: "SERVICE 08",
            heading1: "App Store ",
            heading2: "Deployment & Optimization",
            description: "Publish with a worry with expert guidance on store compliance and visibility improvement for better app store engagement.",
            features: [
                {
                    title: "App Store & Google Play Submission",
                },
                {
                    title: "ASO (App Store Optimization)",
                },
                {
                    title: "Post-Launch Performance Tracking",
                }
            ]
        }
    ]

    return (
        <div className="min-h-[100vh]">
            <div
                ref={sectionRef}
                className="sticky top-0 min-h-screen relative pb-[150px]"
            >
                <div className="container relative">
                    <div className="grid grid-cols-12 justify-between gap-4">
                        <div className="col-span-8 max-lg:col-span-12">
                            <div className="flex justify-start">
                                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-left">
                                    <span className="text-[#F74B1C]">End-to-End </span>
                                    <span className="text-white">Custom Mobile</span>
                                    <br />
                                    <span className="text-[#fff]">Application Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 max-lg:col-span-12">
                            <div className="flex justify-end items-end flex-col">
                                <CapsuleLabel firstWord="OUR" secondWord="SERVICES" />
                                <div className="font-britanicaRegular text-[14px] text-right sm:text-[16px] md:text-[18px] font-regular text-white pt-3 leading-relaxed break-words">
                                    We offer real solutions with apps tailored specifically to your brand, not old cookie-cutter solutions wrapped in a new wrapping under the pretense of innovation.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-8 pt-[10px]">
                        <div className="col-span-4">
                            <div>
                                <Image
                                    className="w-full"
                                    src="/images/lp-app-services.png"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                />
                                <div className="flex justify-end">
                                    <ArrowIcon className="w-[100px]" />
                                </div>
                                <div className="flex justify-start">
                                    <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-left">
                                        <span className="text-[#F74B1C]">6 More </span>
                                        <span className="text-white">Sections</span>
                                        <br />
                                        <span className="text-[#fff]">On Scroll</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={columnRef} className="col-span-8 max-h-[730px] overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <div className="pb-2">
                                {
                                    services.map((service, index) => (
                                        <div key={index} className="bg-[3C3C3C] rounded-xl px-[40px] py-[30px] border border-[#7724C1] mb-[20px]">
                                            <div>
                                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-[#F74B1C]  max-w-full leading-relaxed">
                                                    {service.title}
                                                </div>
                                                <div className="font-britanicaBlack flex items-center gap-3 text-[40px] leading-tight md:leading-[52px] font-black break-words">
                                                    <span className="text-white">{service.heading1}</span>
                                                    <span className="text-[#F74B1C]">{service.heading2}</span>
                                                </div>
                                                <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
                                                    {service.description}
                                                </div>
                                                <div className="flex flex-wrap justify-start items-center gap-4 pt-[30px]">
                                                    {service.features?.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="">
                                                            <span className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,rgb(245_133_226_/_42%)_0%,rgba(147,64,255,0.52)_50%,rgb(147_61_132)_100%)] px-5 py-2.5 text-white capitalize shadow-[0_0_12px_rgba(119,36,193,0.4)]">
                                                                <span className="h-2 w-2 shrink-0 rounded-full bg-white"></span>
                                                                {feature.title}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpAppServices;
