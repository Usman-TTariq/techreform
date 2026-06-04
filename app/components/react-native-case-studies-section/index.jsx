"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const ReactNativeCaseStudiesSection = () => {
  const router = useRouter();
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-[#F74B1C]">React Native </span>
              <span className="text-white">Project Portfolio </span>
              {/* <br className="max-sm:hidden"/>
              <span className="text-white">React Native Apps Perform in the </span>
              <span className="text-[#F74B1C]">Real World </span> */}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 max-sm:flex max-sm:justify-center">
            <CapsuleLabel firstWord="PORTFOLIO" secondWord="" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pt-10 sm:pt-16 md:pt-[70px]">
          <div className="col-span-12 md:col-span-6">
            <div className="h-full flex items-center justify-center">
              <Image className="w-full max-w-[280px] md:max-w-none mx-auto" src="/images/iphone.png" alt="iPhone mockup showing React Native app case study screens" width={1000} height={1000} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image className="w-full my-auto" src="/images/phones.png" alt="Multiple smartphone mockups for React Native app case studies" width={1000} height={1000} />
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-sm:text-center">
            Take a look at what we have built. Our portfolio includes React Native apps across mobile commerce, healthcare platforms, fintech tools, and more, each one a reflection of the care and craft our team puts into every project.
            </div>
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-sm:text-center">
            Dive deeper into our methodologies and approach to deliver nothing less than excellence. Our team is dedicated to built react native apps that make business operations go 10x smoother and faster.
            </div>
            <div className="pt-6 sm:pt-[30px] max-sm:flex max-sm:justify-center">
              <Button text="View Our Work" icon={false} onClick={() => router.push("/portfolio")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeCaseStudiesSection;
