"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CloudCaseStudiesSection = () => {
  const router = useRouter();
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px]">
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[42px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
              <span className="text-[#F74B1C]">Our Work </span>
              {/* <span className="text-white">That Show How Our </span>
              <br className="max-sm:hidden" />
              <span className="text-white">Cloud Solutions Perform in the </span>
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
              <Image
                className="w-full max-w-[280px] md:max-w-none mx-auto"
                src="/images/iphone.png"
                alt="iPhone mockup showing cloud solutions case study screens"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image
              className="w-full my-auto"
              src="/images/phones.png"
              alt="Multiple smartphone mockups for cloud app case studies"
              width={1000}
              height={1000}
            />
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-sm:text-center">
            We have delivered 300+ loud development projects across a broad range of industries and use cases within our tenure. Browse our portfolio to see how we approach different types of products and the results we have produced for our clients.
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

export default CloudCaseStudiesSection;
