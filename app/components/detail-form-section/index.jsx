"use client";

import React from "react";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";
import FreeConsultationForm from "../free-consultation-form";

const DetailFormSection = ({ formIntro = undefined }) => {
  return (
    <div id="contact" className="container pb-10 sm:pb-12 md:pb-[60px] -mt-8 sm:-mt-12 md:-mt-[100px] lg:-mt-[150px] px-4 sm:px-4">
      <div className="relative bg-[#161616] rounded-2xl py-8 sm:py-12 md:py-[70px] px-4 sm:px-6 md:px-[30px] overflow-visible">
        <Image
          className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[100%] md:w-[90%] object-cover opacity-60 md:opacity-100"
          src="/images/formbk.png"
          alt=""
          width={1000}
          height={1000}
        />
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-1 relative z-10">
          <div className="col-span-12 lg:col-span-4 my-auto order-1">
            <div className="pb-2 sm:pb-[10px]">
              <CapsuleLabel firstWord="Contact" secondWord="Us" />
            </div>
            <div className="font-britanicaBlack text-[22px] leading-tight sm:text-[26px] sm:leading-[32px] md:text-[28px] md:leading-[35px] font-black">
              <span className="text-white">Partner with Us for</span>
              <br />
              <span className="text-[#F74B1C]">Custom App Development and</span>
              <br />
              <span className="text-white">Better Resource Management</span>
            </div>
            <div className="flex items-center justify-start gap-2 py-5 sm:py-6 md:py-[30px] flex-wrap">
              <Image
                className="w-8 h-8 sm:w-[40px] sm:h-[40px] flex-shrink-0"
                src="/images/callusicon.png"
                alt=""
                width={40}
                height={40}
              />
              <div className="text-white font-britanicaRegular text-base sm:text-[18px]">
                Call us at:{" "}
              </div>
              <div className="text-white font-britanicaRegular font-bold text-base sm:text-[18px]">
                (213) 262-5357
              </div>
            </div>
            <div className="relative p-[1px] rounded-2xl benefit-border-wrap mr-0 lg:mr-[10px]">
              <Image
                className="absolute -bottom-3 -right-2 sm:-bottom-[20px] sm:-right-[10px] w-8 h-8 sm:w-[40px] sm:h-[40px]"
                src="/images/redirectarrow.png"
                alt=""
                width={40}
                height={40}
              />
              <div className="benefit-module rounded-2xl py-6 sm:py-8 md:py-[40px] px-4 sm:px-[15px]">
                <div className="flex items-center justify-start gap-1 pb-4 sm:pb-[20px]">
                  <span className="text-white font-britanicaBlack font-bold text-[20px] sm:text-[24px] md:text-[26px]">Your</span>
                  <span className="text-[#9340FF] font-britanicaBlack font-bold text-[20px] sm:text-[24px] md:text-[26px]">Benefits</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Native Builds</div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Release Management</div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Game Mechanics</div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Commerce Enablement</div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Team Extension</div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#9340FF] rounded-full flex-shrink-0"></div>
                    <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px]">Backend Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 order-2">
            {formIntro && (
              <p className="font-britanicaRegular text-white/85 text-sm sm:text-base mb-4 sm:mb-6">
                {formIntro}
              </p>
            )}
            <FreeConsultationForm />
          </div>
          <div className="col-span-12 lg:col-span-4 my-auto order-3 pt-6 lg:pt-0 min-w-0 pl-2 sm:pl-0">
            <div className="pl-0 md:pl-6 lg:pl-[30px] overflow-visible">
              <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[28px] md:text-[32px] md:leading-[45px] font-black break-words">
                <span className="text-white">What </span>
                <span className="text-[#F74B1C]">happens</span>
                <br />
                <span className="text-white">next?</span>
              </div>
              <div className="pt-6 sm:pt-[30px]">
                <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-10 sm:pl-[30px] pb-5 sm:pb-[30px] min-w-0">
                  <Image
                    className="absolute -top-0.5 left-0 sm:-left-[17px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10"
                    src="/images/step1.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                    We Schedule a call at your convenience
                  </div>
                </div>
                <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-10 sm:pl-[30px] pb-5 sm:pb-[30px] min-w-0">
                  <Image
                    className="absolute -top-0.5 left-0 sm:-left-[17px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10"
                    src="/images/step2.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                    We do a discovery and consulting meeting
                  </div>
                </div>
                <div className="relative flex justify-start items-start pl-10 sm:pl-[30px] pb-0 min-w-0">
                  <Image
                    className="absolute -top-0.5 left-0 sm:-left-[17px] w-7 h-7 sm:w-[35px] sm:h-[35px] flex-shrink-0 z-10"
                    src="/images/step3.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <div className="text-white font-britanicaRegular text-[14px] sm:text-[18px] md:text-[22px] leading-snug break-words min-w-0">
                    We prepare a proposal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFormSection;
