"use client";

import { useState } from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const CARDS = [
  {
    title: "Expert Consulting",
    desc: "Before committing to a direction, it pays to think it through. Our IoT consulting service gives you a structured assessment of your use case, existing infrastructure, and connectivity requirements. You leave with a clear architecture recommendation and a realistic picture of what delivery looks like.",
  },
  {
    title: "Custom IoT Solution Development",
    desc: "Every IoT project has its own constraints, environments, and goals. We build custom IoT solutions from the ground up, and cover sensor selection, firmware, backend logic, and the interface your team will actually use. No off-the-shelf templates stretched to fit.",
  },
  {
    title: "Embedded IoT System Integration",
    desc: "Connecting physical devices to digital systems requires deep technical knowledge of both. Our engineers work across embedded systems development, IoT sensor integration, and device management, ensuring every node in your network communicates reliably and at the right frequency.",
  },
  {
    title: "UI/UX and Dashboard Design",
    desc: "Raw data is only useful when it is presented clearly. We design IoT dashboards and control interfaces tailored to the people who will use them daily, operators, managers, or end customers, with layouts and logic agreed upon before a single line of code is written.",
  },
];

const IotWhatWeOfferSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
            </div>
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">IoT Development Services </span>
              <span className="text-[#F74B1C]">Across the Full Stack</span>
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

export default IotWhatWeOfferSection;
