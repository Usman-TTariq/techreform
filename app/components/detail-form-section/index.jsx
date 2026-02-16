"use client";

import React from "react";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";
import FreeConsultationForm from "../free-consultation-form";

const DetailFormSection = () => {
  return (
    <div className="container pb-[60px] -mt-[150px]">
      <div className="relative bg-[#161616] rounded-2xl py-[70px] px-[30px]">
        <Image
          className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[90%]"
          src="/images/formbk.png"
          alt="Hero Background"
          width={1000}
          height={1000}
        />
        <div className="grid grid-cols-12 gap-1 relative z-10">
          <div className="col-span-4 my-auto">
            <div className="pb-[10px]">
              <CapsuleLabel firstWord="Contact" secondWord="Us" />
            </div>
            <div className="font-britanicaBlack text-[28px] leading-[35px] font-black">
              <span className="text-white">Partner with Us for</span>
              <br />
              <span className="text-[#F74B1C]">Custom App Development and</span>
              <br />
              <span className="text-white">Better Resource Management</span>
            </div>
            <div className="flex items-center justify-start gap-2 py-[30px]">
              <Image
                className="w-[40px]"
                src="/images/callusicon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-white font-britanicaRegular text-[18px]">
                Call us at:{" "}
              </div>
              <div className="text-white font-britanicaRegular font-bold text-[18px]">
                (213) 262-5357
              </div>
            </div>
            <div className="relative p-[1px] rounded-2xl benefit-border-wrap mr-[10px]">
              <Image
                className="absolute -bottom-[20px] -right-[10px] w-[40px]"
                src="/images/redirectarrow.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="benefit-module rounded-2xl py-[40px] px-[15px]">
                <div className="flex items-center justify-start gap-1 pb-[20px]">
                  <span className="text-white font-britanicaBlack font-bold text-[26px]">Your</span>
                  <span className="text-[#9340FF] font-britanicaBlack font-bold text-[26px]">Benefits</span>
                </div>
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Native Builds</div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Release Management</div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Game Mechanics</div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Commerce Enablement</div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Team Extension</div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center justify-start gap-2">
                      <div className="w-[8px] h-[8px] bg-[#9340FF] rounded-full"></div>
                      <div className="text-white font-britanicaRegular text-[16px] max-2xl:text-[14px]">Backend Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <FreeConsultationForm />
          </div>
          <div className="col-span-4 my-auto">
            <div className="pl-[30px]">
              <div className="font-britanicaBlack text-[32px] leading-[45px] font-black">
                <span className="text-white">What </span>
                <span className="text-[#F74B1C]">happens</span>
                <br />
                <span className="text-white">next?</span>
              </div>
              <div className="pt-[30px]">
                <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-[30px] pb-[30px]">
                  <Image
                    className="absolute -top-[10px] -left-[17px] w-[35px]"
                    src="/images/step1.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                  />
                  <div className="text-white font-britanicaRegular text-[22px]">
                    We Schedule a call at your convenience
                  </div>
                </div>
                <div className="relative flex justify-start items-start border-l border-[#F74B1C] border-dashed pl-[30px] pb-[30px]">
                  <Image
                    className="absolute -top-[10px] -left-[17px] w-[35px]"
                    src="/images/step2.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                  />
                  <div className="text-white font-britanicaRegular text-[22px]">
                    We do a discovery and consulting meeting
                  </div>
                </div>
                <div className="relative flex justify-start items-start  pl-[30px] pb-[0px]">
                  <Image
                    className="absolute -top-[10px] -left-[17px] w-[35px]"
                    src="/images/step3.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                  />
                  <div className="text-white font-britanicaRegular text-[22px]">
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
