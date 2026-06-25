"use client";

import { useState } from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";
import HireExpertPopup from "../hire-expert-popup";

const TAG_CLASS =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-britanicaRegular bg-[#7724C1]/20 text-[#7724C1] border border-[#7724C1]/30";

const TAG_CLASS_LIGHT =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-britanicaRegular bg-white/15 text-white border border-white/25";

const CapabilityTags = ({ tags, light = false }) => (
  <div className="flex flex-wrap gap-1.5 sm:gap-2">
    {tags.map((tag) => (
      <span key={tag} className={light ? TAG_CLASS_LIGHT : TAG_CLASS}>
        {tag}
      </span>
    ))}
  </div>
);

const VR_CAPABILITIES = [
  {
    number: "01",
    title: "Real-Time 3D Environment Development",
    desc: "We build photorealistic VR worlds using Unreal Engine 5 Nanite and Lumen — or optimized Unity XR environments for standalone headsets. PBR materials, dynamic lighting, and LOD optimization for smooth 72–120fps on all target devices.",
    tags: ["Unity XR", "Unreal 5", "Nanite", "Lumen"],
  },
  {
    number: "02",
    title: "Motion Tracking & Haptic Integration",
    desc: "6DOF controller tracking, hand tracking via Meta Hand SDK, eye tracking on PSVR2 and Vision Pro. Haptic feedback integration for realistic touch response — critical for training simulations and medical VR.",
    tags: ["6DOF", "Hand SDK", "Eye Tracking", "Haptics"],
  },
  {
    number: "03",
    title: "Multiplayer VR & Social Presence",
    desc: "Real-time multi-user VR environments with avatar systems, voice communication, and synchronized interactions. Built on Photon Network or Mirror — supporting co-presence for training, collaboration, and gaming.",
    tags: ["Photon Network", "Mirror", "Avatar Systems"],
  },
  {
    number: "04",
    title: "VR Analytics & LMS Integration",
    desc: "Track user behavior, completion rates, and performance inside VR. SCORM and xAPI compliant for integration with Moodle, TalentLMS, Cornerstone, and custom LMS platforms — essential for enterprise training ROI.",
    tags: ["xAPI", "SCORM", "Moodle", "TalentLMS"],
  },
];

const WhiteCard = ({ card }) => (
  <div className="relative bg-white w-[300px] sm:w-[350px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px]">
    <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">
      {card.number}
    </h6>
    <div className="text-[16px] sm:text-[20px] md:text-[22px] font-britanicaBlack text-black pb-2 leading-snug">
      {card.title}
    </div>
    <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-3 sm:pb-4 leading-relaxed">
      {card.desc}
    </div>
    <CapabilityTags tags={card.tags} />
  </div>
);

const DarkCard = ({ card }) => (
  <div className="relative w-[300px] max-sm:w-full max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
    <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">
      {card.number}
    </h6>
    <div className="text-[16px] sm:text-[20px] md:text-[22px] font-britanicaBlack text-white pb-2 leading-snug">
      {card.title}
    </div>
    <div className="font-britanicaRegular text-white/90 text-[14px] sm:text-[16px] pb-3 sm:pb-4 leading-relaxed">
      {card.desc}
    </div>
    <CapabilityTags tags={card.tags} light />
  </div>
);

const ImageCard = ({ card }) => (
  <div className="bg-white w-[350px] max-sm:w-full border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px]">
    <Image
      src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
      alt="Background illustration for VR capability card"
      width={1000}
      height={1000}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="relative z-10">
      <h6 className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-white">
        {card.number}
      </h6>
      <div className="text-[16px] sm:text-[20px] md:text-[22px] font-britanicaBlack text-white pb-2 leading-snug">
        {card.title}
      </div>
      <div className="font-britanicaRegular text-white/90 text-[14px] sm:text-[16px] pb-3 sm:pb-4 leading-relaxed">
        {card.desc}
      </div>
      <CapabilityTags tags={card.tags} light />
    </div>
  </div>
);

const VrAppFunctions = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [card01, card02, card03, card04] = VR_CAPABILITIES;

  return (
    <div className="relative pb-[100px] max-sm:pb-[0px]">
      <div className="container">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-5 max-lg:col-span-12">
            <div className="max-sm:flex max-sm:justify-center">
              <CapsuleLabel firstWord="OUR" secondWord="APPROACH" />
            </div>
            <div className="font-britanicaRegular max-sm:text-center pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
              Tech Reforms delivers complete VR development — from VR Experience Design Documentation
              and 3D environment creation to headset deployment and post-launch support. We don&apos;t just
              build immersive experiences; we build VR solutions that deliver measurable business outcomes.
            </div>
          </div>
          <div className="col-span-7 max-lg:col-span-12">
            <div className="flex justify-end max-sm:justify-center">
              <div className="font-britanicaBlack max-sm:text-center text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[45px] 2xl:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-right">
                <span className="text-white">Our End-to-End </span>
                <span className="text-[#F74B1C]">VR Development Approach</span>
              </div>
            </div>
            <div className="flex justify-end max-sm:justify-center">
              <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>
        </div>
        <div className="relative max-xl:pb-[120px] max-sm:pb-[0px]">
          <Image
            className="w-full scale-120 max-sm:hidden"
            src="https://ik.imagekit.io/sajib4aqc/Group%202147225217.png"
            alt="VR development approach diagram background"
            width={1000}
            height={1000}
          />
          <div className="absolute max-sm:relative top-0 left-0 w-full pt-[30px] z-10">
            <div className="flex justify-between w-full max-sm:flex-col">
              <div className="relative">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:top-[60%] -translate-y-1/2 left-[100%]"
                  src="/images/firstpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
                <WhiteCard card={card01} />
              </div>
              <div className="relative">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:-left-[54%] -translate-y-1/2 -left-[80%] z-20"
                  src="/images/thirdpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
                <div className="max-sm:hidden">
                  <ImageCard card={card03} />
                </div>
                <div className="hidden max-sm:block relative">
                  <Image
                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                    src="/images/secondpoint.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <DarkCard card={card02} />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full pt-[30px] max-sm:pt-[10px] max-sm:flex-col">
              <div className="relative max-sm:hidden">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%]"
                  src="/images/secondpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
                <DarkCard card={card02} />
              </div>
              <div className="max-sm:block hidden">
                <ImageCard card={card03} />
              </div>
              <div className="relative">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[50%] max-2xl:top-[40%] -translate-y-1/2 -left-[80%] max-2xl:-left-[50%]"
                  src="/images/forthpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
                <WhiteCard card={card04} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default VrAppFunctions;
