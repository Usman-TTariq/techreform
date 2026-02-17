import Image from "next/image";
import React from "react";
import CapsuleLabel from "../common/capsule-label";

const AboutWeDoSection = () => {
  return (
    <div className="relative pt-[100px]">
      <Image
        className="absolute -top-[20%] right-[0px] w-[40%]"
        src="/images/bk.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-22">
          <div className="col-span-7 my-auto">
            <div>
              <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="DO" />
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                All of our services are constructed to offer business operations and digital conversion optimization. We focus on actions that:
              </div>
              <ul className="list-none mt-3 space-y-2 font-britanicaRegular text-[20px] text-white">
                <li className="flex gap-2">
                  <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                  <span>Drive Real Results</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                  <span>Qualified Leads</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                  <span>Stronger Engagement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#F74B1C] font-britanicaExtraBold shrink-0">•</span>
                  <span>Higher Sales</span>
                </li>
              </ul>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Every website, app, and marketing campaign is designed to perform.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                We don&apos;t believe in cookie-cutter digital solutions. Instead, we build tailored, data-driven services that turn visitors into repeat customers, then translate that transition into long-term revenue, helping your business grow with confidence and clarity.
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="pb-[10px]">
              <Image
                className="w-[100%]"
                src="/images/about1.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <Image
                className="w-[100%]"
                src="/images/about2.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWeDoSection;
