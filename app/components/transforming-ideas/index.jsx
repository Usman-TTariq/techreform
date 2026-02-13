import React from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const TransformingIdeas = () => {
  return (
    <div className="relative">
      <Image
        src="/images/idea1.png"
        alt="Transforming Ideas"
        width={1000}
        height={1000}
        className="absolute -top-[35%] right-0 w-[45%]"
      />
      <Image
        src="/images/idea2.png"
        alt="Transforming Ideas"
        width={1000}
        height={1000}
        className="absolute -bottom-[30%] left-0 w-[50%]"
      />
      <div className="container pb-[80px] relative z-10">

        <div className="font-britanicaBlack text-[50px] leading-[52px] font-black text-center pb-[50px]">
          <span className="text-white">Transforming </span>
          <span className="text-[#F74B1C]">Ideas</span>
          <br />
          <span className="text-white">into Technology</span>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <div className="-mt-[50px]">
              <div className="pb-[10px]">
                <CapsuleLabel firstWord="How" secondWord="We" thirdWord="Do" />
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Tech Reforms is your trusted partner in data security and cloud
                technology, committed to transforming your business operations to
                save you time and money.
              </div>
              <div className="pt-[30px]">
                <Button text="Get Started" icon={false} />
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-4xl py-[0px] px-[20px]">
              <div className="font-britanicaRegular font-semibold text-[50px] text-[#F74B1C]">
                01
              </div>
              <div className="text-[24px] font-britanicaBlack text-black pb-[0px]">
                Cloud Solutions
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                With our expertise in cloud technologies, we can help you find the
                right cloud solutions that meet your business needs and goals.
              </div>
              <div className=" pb-[20px]">
                <Link
                  href="/"
                  className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                >
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-5 h-full">
            <div className="bg-[#F74B1C] relative border-2 border-white rounded-4xl py-[0px] px-[20px] h-full overflow-hidden">
              <Image
                src="/images/2.png"
                alt="Transforming Ideas"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="relative z-10">
                <div className="font-britanicaRegular font-semibold text-[50px] text-white">
                  02
                </div>
                <div className="text-[24px] font-britanicaBlack text-white pb-[0px]">
                  Software <br /> Development
                </div>
                <div className="font-britanicaRegular text-white text-[16px] pb-[20px]">
                  Our software development services can help you establish an impactful online presence and reach your target audience effectively.
                </div>
                <div className=" pb-[20px]">
                  <Link
                    href="/"
                    className="text-white hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                  >
                    Learn More <ArrowRight className="w-[16px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 pt-[30px]">
          <div className="col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-4xl relative py-[0px] overflow-hidden px-[20px] -mt-[50px]">
              <Image
                src="/images/3.png"
                alt="Transforming Ideas"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="relative z-10">
                <div className="font-britanicaRegular font-semibold text-[50px] text-[#fff]">
                  03
                </div>
                <div className="text-[24px] font-britanicaBlack text-white pb-[0px]">
                  Privacy & Security
                </div>
                <div className="font-britanicaRegular text-[#fff] text-[16px] pb-[20px]">
                  Protecting Your Data with Cutting-Edge Privacy and Security Solutions. Ensure your information is secure and your privacy maintained.
                </div>
                <div className=" pb-[20px]">
                  <Link
                    href="/"
                    className="text-[#fff] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                  >
                    Learn More <ArrowRight className="w-[16px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-4xl py-[0px] px-[20px] mt-[50px]">
              <div className="font-britanicaRegular font-semibold text-[50px] text-[#F74B1C]">
                04
              </div>
              <div className="text-[24px] font-britanicaBlack text-black pb-[0px]">
                Mobile Development
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.
              </div>
              <div className=" pb-[20px]">
                <Link
                  href="/"
                  className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                >
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-transparent border-2 border-[#3b3b3b] rounded-4xl py-[0px] px-[20px]">
              <div className="font-britanicaRegular font-semibold text-[50px] text-[#F74B1C]">
                05
              </div>
              <div className="text-[24px] font-britanicaBlack text-white pb-[0px]">
                Digital Marketing
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[16px] pb-[20px]">
                Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.
              </div>
              <div className=" pb-[20px]">
                <Link
                  href="/"
                  className="text-[#fff] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                >
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-4xl py-[0px] px-[20px] mt-[50px]">
              <div className="font-britanicaRegular font-semibold text-[50px] text-[#F74B1C]">
                06
              </div>
              <div className="text-[24px] font-britanicaBlack text-black pb-[0px]">
                Advanced Technology
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                Unlock potential with Advanced Technology. Our cutting-edge solutions drive innovation, enhance efficiency, and transform your business.
              </div>
              <div className=" pb-[20px]">
                <Link
                  href="/"
                  className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[16px]"
                >
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformingIdeas;
