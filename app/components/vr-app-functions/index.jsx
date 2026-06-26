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

const CARD_WIDTH =
  "w-full max-sm:w-full sm:w-[260px] md:w-[280px] lg:w-[240px] xl:w-[280px] 2xl:w-[350px]";

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
  <div
    className={`relative bg-white ${CARD_WIDTH} max-sm:mb-[10px] border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-4 sm:py-5 lg:py-4 xl:py-6 px-4 sm:px-5`}
  >
    <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] text-[#F74B1C] leading-none">
      {card.number}
    </span>
    <h3 className="text-[15px] sm:text-[18px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-britanicaBlack text-black pb-2 pt-1 leading-snug">
      {card.title}
    </h3>
    <div className="font-britanicaRegular text-[#373636] text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] pb-3 sm:pb-4 leading-relaxed">
      {card.desc}
    </div>
    <CapabilityTags tags={card.tags} />
  </div>
);

const DarkCard = ({ card }) => (
  <div
    className={`relative ${CARD_WIDTH} max-sm:mb-[10px] border-2 border-[#ffffff24] rounded-2xl sm:rounded-4xl py-4 sm:py-5 lg:py-4 xl:py-6 px-4 sm:px-5 !bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md`}
  >
    <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] text-[#F74B1C] leading-none">
      {card.number}
    </span>
    <h3 className="text-[15px] sm:text-[18px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-britanicaBlack text-white pb-2 pt-1 leading-snug">
      {card.title}
    </h3>
    <div className="font-britanicaRegular text-white/90 text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] pb-3 sm:pb-4 leading-relaxed">
      {card.desc}
    </div>
    <CapabilityTags tags={card.tags} light />
  </div>
);

const ImageCard = ({ card }) => (
  <div
    className={`bg-white ${CARD_WIDTH} border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-4 sm:py-5 lg:py-4 xl:py-6 overflow-hidden px-4 sm:px-5`}
  >
    <Image
      src="https://ik.imagekit.io/sajib4aqc/3_qsiqie.webp"
      alt="Background illustration for VR capability card"
      width={1000}
      height={1000}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="relative z-10">
      <span aria-hidden="true" className="font-britanicaRegular font-semibold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] text-white leading-none">
        {card.number}
      </span>
      <h3 className="text-[15px] sm:text-[18px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-britanicaBlack text-white pb-2 pt-1 leading-snug">
        {card.title}
      </h3>
      <div className="font-britanicaRegular text-white/90 text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] pb-3 sm:pb-4 leading-relaxed">
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
    <div className="relative pb-[100px] lg:pb-[260px] xl:pb-[200px] 2xl:pb-[100px] max-sm:pb-0 overflow-hidden w-full min-w-0">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-5 max-lg:col-span-12 min-w-0">
            <div className="max-sm:flex max-sm:justify-center">
              <CapsuleLabel firstWord="OUR" secondWord="APPROACH" />
            </div>
            <div className="font-britanicaRegular max-sm:text-center pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed">
              Tech Reforms delivers complete VR development — from VR Experience Design Documentation
              and 3D environment creation to headset deployment and post-launch support. We don&apos;t just
              build immersive experiences; we build VR solutions that deliver measurable business outcomes.
            </div>
          </div>
          <div className="col-span-7 max-lg:col-span-12 min-w-0">
            <div className="flex justify-end max-sm:justify-center">
              <h2 className="font-britanicaBlack max-sm:text-center text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] lg:leading-[50px] xl:leading-[65px] font-black pb-4 sm:pb-[26px] text-right max-sm:text-center">
                <span className="text-white">Our End-to-End </span>
                <span className="text-[#F74B1C]">VR Development Approach</span>
              </h2>
            </div>
            <div className="flex justify-end max-sm:justify-center">
              <Button text="Get a Free Quote" icon={false} onClick={() => setPopupOpen(true)} />
            </div>
          </div>
        </div>

        <div className="relative max-sm:pb-0 min-h-0 lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-0">
          <Image
            className="w-full scale-120 max-sm:hidden lg:scale-105 xl:scale-110 2xl:scale-120"
            src="https://ik.imagekit.io/sajib4aqc/Group%202147225217.png"
            alt="VR development approach diagram background"
            width={1000}
            height={1000}
          />
          <div className="absolute max-sm:relative top-0 left-0 w-full pt-[20px] lg:pt-[24px] xl:pt-[30px] z-10">
            <div className="flex justify-between w-full max-sm:flex-col gap-2 lg:gap-3 xl:gap-4">
              <div className="relative shrink min-w-0">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:top-[60%] -translate-y-1/2 left-[100%] pointer-events-none"
                  src="/images/firstpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                  aria-hidden
                />
                <WhiteCard card={card01} />
              </div>
              <div className="relative shrink min-w-0">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[190px] absolute top-[70%] max-2xl:-left-[54%] -translate-y-1/2 -left-[80%] z-20 pointer-events-none"
                  src="/images/thirdpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                  aria-hidden
                />
                <div className="max-sm:hidden">
                  <ImageCard card={card03} />
                </div>
                <div className="hidden max-sm:block relative">
                  <Image
                    className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%] pointer-events-none"
                    src="/images/secondpoint.png"
                    alt=""
                    width={1000}
                    height={1000}
                    aria-hidden
                  />
                  <DarkCard card={card02} />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full pt-[20px] lg:pt-[24px] xl:pt-[30px] max-sm:pt-[10px] max-sm:flex-col gap-2 lg:gap-3 xl:gap-4">
              <div className="relative max-sm:hidden shrink min-w-0">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[40%] -translate-y-1/2 left-[100%] pointer-events-none"
                  src="/images/secondpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                  aria-hidden
                />
                <DarkCard card={card02} />
              </div>
              <div className="max-sm:block hidden">
                <ImageCard card={card03} />
              </div>
              <div className="relative shrink min-w-0">
                <Image
                  className="w-[280px] max-xl:hidden max-2xl:w-[180px] absolute top-[50%] max-2xl:top-[40%] -translate-y-1/2 -left-[80%] max-2xl:-left-[50%] pointer-events-none"
                  src="/images/forthpoint.png"
                  alt=""
                  width={1000}
                  height={1000}
                  aria-hidden
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
