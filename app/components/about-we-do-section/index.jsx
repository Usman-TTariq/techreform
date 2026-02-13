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
                We help ambitious brands scale faster through high-impact
                marketing strategies built for growth, visibility, and revenue.
                Our approach blends strategy, creativity, and performance to
                position your brand where it wins attention and trust.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                From paid advertising and social media to content and conversion
                optimization, we focus on actions that drive real results —
                qualified leads, stronger engagement, and higher sales. Every
                campaign is designed to perform, not just look good.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                We don’t believe in generic marketing. We build tailored,
                data-driven solutions that turn attention into action and
                customers into long-term revenue, helping your business grow
                with confidence and clarity.
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
