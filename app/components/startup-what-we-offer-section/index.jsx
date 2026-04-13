"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CARDS = [
  {
    title: "Startup App Consulting",
    desc: "We help founders validate ideas and plan the right product approach before starting development. Our Startup App Consulting Services turn concepts into clear technical roadmaps.",
    points: [
      {
        text: "Product Strategy"
      },
      {
        text: "Product Planning"
      },
      {
        text: "Technology Stack Guidance"
      },
      {
        text: "Market Validation Insights"
      }
    ]
  },
  {
    title: "UI/UX Design",
    desc: "Great apps start with great experiences. Our Custom Startup App Development process includes simple, intuitive designs built around real user behavior.",
    points: [
      {
        text: "Wireframing & Prototyping"
      },
      {
        text: "User Journey Design"
      },
      {
        text: "Responsive Mobile Interfaces"
      }
    ]
  },
  {
    title: "Mobile App Development for Startups",
    desc: "Our engineers build scalable apps tailored for startup growth. As experienced App Developers for Startups, we develop fast, reliable mobile applications for modern businesses.",
    points: [
      {
        text: "iOS and Android Development"
      },
      {
        text: "High-Performance Mobile Architecture"
      },
      {
        text: "Scalable Infrastructure"
      }
    ]
  },
  {
    title: "Cross-Platform Development",
    desc: "Launch faster using shared codebases while maintaining strong performance across devices.",
    points: [
      {
        text: "Flutter and React Native development"
      },
      {
        text: "Unified Code Architecture"
      },
      {
        text: "Multi-Device Compatibility"
      }
    ]
  },
  {
    title: "Backend Development & Integration",
    desc: "Strong backend systems power successful startups. Our End-to-End Startup App Development approach includes secure and scalable backend development.",
    points: [
      {
        text: "Custom API Development"
      },
      {
        text: "Cloud Infrastructure Setup"
      },
      {
        text: "Third-Party Service Integration"
      }
    ]
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Every app goes through structured testing before launch. This ensures performance, security, and stability across platforms.",
    points: [
      {
        text: "Functional Testing"
      },
      {
        text: "Security Testing"
      },
      {
        text: "Performance Testing"
      },
      {
        text: "Bug Tracking Optimization"
      }
    ]
  },
  {
    title: "App Maintenance & Support",
    desc: "Startups need continuous improvement after launch. Our Dedicated Startup App Development Team keeps your product running smoothly.",
    points: [
      {
        text: "Performance Monitoring"
      },
      {
        text: "Feature Updates"
      },
      {
        text: "Technical Support"
      }
    ]
  },
  {
    title: "MVP App Development for Startups",
    desc: "For early-stage founders, we build lean MVPs to quickly validate ideas. Our MVP App Development for Startups helps launch faster and test your concept before full-scale development. This also includes On-Demand App Development for Startups.",
  },
];

const StartupWhatWeOfferSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
            </div>
            {/* <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Startup App Development Services </span>
              <span className="text-[#F74B1C]">Built for Speed &amp; Scale</span>
            </div> */}
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
              We offer real Startup Application Development solutions customized to your app idea, not cookie-cutter templates.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
          {CARDS.map((card, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 min-w-0">
              <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                <div className="flex flex-col justify-between h-full min-h-0">
                  <div className="pb-3 sm:pb-[20px]">
                    <Image
                      className="w-12 h-12 sm:w-[70px] sm:h-[70px] max-sm:mx-auto"
                      src="/images/gamingicon.png"
                      alt={card.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words max-sm:text-center">
                    {card.title}
                  </div>
                  <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed max-sm:text-center">
                    {card.desc}
                  </div>
                  {Array.isArray(card.points) && card.points.length > 0 && (
                    <ul className="list-none mt-3 space-y-1.5 sm:space-y-2 min-w-0 w-full">
                      {card.points.map((p) => (
                        <li key={p.text} className="flex gap-2 min-w-0">
                          <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0 pt-0.5">•</span>
                          <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-white/95 text-left leading-relaxed min-w-0 break-words">
                            {p.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="pt-4 sm:pt-[30px] flex justify-start max-sm:justify-center">
                    <Button text="Learn More" icon={false} onClick={() => setPopupOpen(true)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default StartupWhatWeOfferSection;
