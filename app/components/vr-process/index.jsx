"use client";

import { Clock, FileCheck } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import Image from "next/image";

const PROCESSES = [
  {
    step: "01",
    title: "Discovery & VR Experience Design Doc",
    desc: "We define your VR use case, target headset, interaction model, environment scope, and technical requirements. You receive a full VR Experience Design Document (VREDD) before development begins — no surprises.",
    timeline: "1–2 weeks",
    deliverable: "VR Experience Design Doc",
  },
  {
    step: "02",
    title: "3D Environment & Asset Creation",
    desc: "Our 3D artists build environments, characters, props, and animations in Blender or Maya. All assets are optimized for target headset — polygon budget, texture resolution, and draw calls managed from the start.",
    timeline: "2–6 weeks",
    deliverable: "Approved 3D scene assets",
  },
  {
    step: "03",
    title: "Playable Grey Box Prototype",
    desc: "A functional, interactive prototype built in Unity XR or Unreal Engine 5 — you experience the core VR interactions before full production. Locomotion, scale, comfort, and interaction feel validated early. Changes here cost a fraction of changes later.",
    timeline: "2–3 weeks",
    deliverable: "Playable headset build",
  },
  {
    step: "04",
    title: "Full VR Development & Integration",
    desc: "Full environment integration, interaction systems, multiplayer networking (if needed), backend connections, and LMS/analytics integration. Weekly builds delivered — you see progress every sprint. Agile development with continuous QA.",
    timeline: "4–16 weeks",
    deliverable: "Weekly VR builds",
  },
  {
    step: "05",
    title: "Device QA & Comfort Testing",
    desc: "Tested on all target headsets — frame rate pacing (72fps Quest, 90fps PC VR), comfort testing for motion sickness, controller mapping verification, and performance profiling. Bugs fixed before submission.",
    timeline: "2–3 weeks",
    deliverable: "QA-cleared headset builds",
  },
  {
    step: "06",
    title: "Deployment & Post-Launch Support",
    desc: "Published to Meta Store, SteamVR, PlayStation Store, or enterprise MDM — we handle submission. Post-launch: performance monitoring, content updates, OS compatibility patches, and feature additions.",
    timeline: "Ongoing",
    deliverable: "Live on all target platforms",
  },
];

const VrProcess = () => {
  return (
    <div className="relative py-[100px] max-sm:pt-[30px] max-sm:pb-[40px]">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        src="https://ik.imagekit.io/sajib4aqc/Group%202147225255.png"
        alt="Supporting illustration for Tech Reforms VR process section"
        width={1000}
        height={1000}
      />
      <div className="container relative z-10 px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="OUR" secondWord="PROCESS" />
            </div>
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Our </span>
              <span className="text-[#F74B1C]">VR Development </span>
              <span className="text-white">Process</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <p className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] text-white pt-4 sm:pt-[22px] leading-relaxed">
              A structured 6-step VR delivery process — from VREDD and grey box prototype to
              headset QA and store deployment. No generic app workflow. Every step is built for
              immersive VR.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto pt-10 sm:pt-12 md:pt-[52px]">
          <div className="relative">
            <div
              className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-px hidden sm:block"
              aria-hidden
            />
            <div className="flex flex-col gap-4 sm:gap-5">
              {PROCESSES.map((process) => (
                <div
                  key={process.step}
                  className="relative rounded-xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-6 md:p-7"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="shrink-0 relative z-10">
                      <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#C380FE] bg-[#7724C1]/40 font-britanicaBlack text-[13px] sm:text-[15px] text-[#C380FE]">
                        {process.step}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-britanicaBlack text-[17px] sm:text-[20px] md:text-[22px] text-white leading-snug pb-2 sm:pb-3">
                        {process.title}
                      </h3>
                      <p className="font-britanicaRegular text-[14px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed">
                        {process.desc}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-4 sm:pt-5">
                        <div className="flex items-center gap-2 min-w-0">
                          <Clock className="w-4 h-4 shrink-0 text-[#C380FE]" aria-hidden />
                          <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#C380FE]">
                            <span className="text-white/60">Timeline: </span>
                            {process.timeline}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <FileCheck className="w-4 h-4 shrink-0 text-[#66BB6A]" aria-hidden />
                          <span className="font-britanicaRegular text-[13px] sm:text-[14px] text-[#66BB6A]">
                            <span className="text-white/60">Deliverable: </span>
                            {process.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-[50px] max-sm:pt-[24px]">
          <Button text="Schedule a Free Consultation" icon={false} onClick={() => { window.location.href = "tel:+15822335015"; }} />
        </div>
      </div>
    </div>
  );
};

export default VrProcess;
