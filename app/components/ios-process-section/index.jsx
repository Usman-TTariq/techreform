"use client";

import { Clock, FileCheck } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import Image from "next/image";
import { goToContact } from "@/app/utils/goToContact";

const PROCESSES = [
  {
    step: "01",
    title: "Discovery & Tech Stack Decision",
    desc: "We define your app concept, target users, required Apple APIs (ARKit, HealthKit, Core ML), and whether Swift native or Flutter cross-platform is the right choice. You get a detailed scope document before development starts.",
    timeline: "1–2 weeks",
    deliverable: "Scope doc + tech recommendation",
  },
  {
    step: "02",
    title: "UI/UX Design — Apple HIG Compliant",
    desc: "Wireframes and high-fidelity designs following Apple Human Interface Guidelines. Designed for all screen sizes — iPhone 15, iPad Pro, and Apple Watch. Prototypes tested before a single line of code is written.",
    timeline: "1–3 weeks",
    deliverable: "Figma prototypes — HIG compliant",
  },
  {
    step: "03",
    title: "iOS Development in Swift / SwiftUI",
    desc: "Built in Swift 6 with SwiftUI or UIKit depending on requirements. Weekly builds delivered via TestFlight — you test on your real device throughout development. Agile sprints with continuous QA.",
    timeline: "4–16 weeks",
    deliverable: "Weekly TestFlight builds",
  },
  {
    step: "04",
    title: "QA & Device Testing",
    desc: "Tested on iPhone 13, 14, 15, iPad Pro, and older devices. Performance profiling with Instruments, memory leak detection, battery usage optimization. App Store Review Guidelines compliance check before submission.",
    timeline: "1–2 weeks",
    deliverable: "QA report + device matrix",
  },
  {
    step: "05",
    title: "App Store Submission & Launch",
    desc: "We handle complete App Store submission — screenshots, metadata, privacy labels, age ratings, and review communication. We know common rejection reasons and prevent them upfront. Average approval time: 1–3 days.",
    timeline: "1–2 weeks",
    deliverable: "Live on App Store",
  },
  {
    step: "06",
    title: "Post-Launch Support & iOS Updates",
    desc: "Every new iOS version can break existing apps. We provide ongoing support — iOS compatibility updates, performance monitoring, bug fixes, and new feature development. App Store rating management support included.",
    timeline: "Ongoing",
    deliverable: "Monthly maintenance reports",
  },
];

const stepCardClass =
  "group relative rounded-xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-6 md:p-7 transition-all duration-200 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const IosProcessSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-[100px] overflow-hidden w-full min-w-0">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/Group%202147225255.png"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />

      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="OUR" secondWord="iOS" thirdWord="PROCESS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Our iOS App </span>
              <span className="text-[#F74B1C]">Development Process</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] leading-relaxed">
              A structured 6-step iOS delivery process — with timelines, deliverables, and
              Apple-specific milestones like TestFlight betas, App Store submission, and
              post-launch iOS compatibility support. No generic app workflow.
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
                <article key={process.step} className={stepCardClass}>
                  <div className="flex gap-4 sm:gap-5">
                    <div className="shrink-0 relative z-10">
                      <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#C380FE] bg-[#7724C1]/40 font-britanicaBlack text-[13px] sm:text-[15px] text-[#C380FE] group-hover:bg-[#7724C1]/60 transition-colors">
                        {process.step}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-britanicaBlack text-[17px] sm:text-[20px] md:text-[22px] text-white leading-snug pb-2 sm:pb-3 group-hover:text-[#F74B1C] transition-colors">
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
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10 sm:pt-12 md:pt-[50px]">
          <Button text="Schedule a Free Consultation" icon={false} onClick={goToContact} />
        </div>
      </div>
    </section>
  );
};

export default IosProcessSection;
