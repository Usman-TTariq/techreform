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
          <span className="text-white">Scale Your Business </span>
          <span className="text-[#F74B1C]">with</span>
          <br />
          <span className="text-white">Growth-Focused Services</span>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <div className="-mt-[70px]">
              <div className="pb-[10px]">
                <CapsuleLabel firstWord="Our" secondWord="Services" />
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Our digital solutions are made to offer high-end features that help you scale up and get consistent results with well-managed expert teams, user-friendly mobile apps, and intuitive e-commerce solutions.
              </div>
              <div className="pt-[30px]">
                <Button text="Explore Our Services" icon={false} />
              </div>
            </div>
          </div>
          <div className="col-span-3 f-full">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-4xl py-[0px] px-[20px] h-full">
              <div className="font-britanicaRegular font-semibold text-[50px] text-[#F74B1C]">
                01
              </div>
              <div className="text-[24px] font-britanicaBlack text-black pb-[0px]">
                Mobile App Development
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                We offer optimized mobile apps with strong architecture, intuitive UX, and performance-focused engineering to boost accessibility.
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
                  E-Commerce <br /> Solutions
                </div>
                <div className="font-britanicaRegular text-white text-[16px] pb-[20px]">
                  Access eCommerce development at its best. Get intuitive platforms focused on conversions, scalability, and seamless user journeys with secure payments, inventory, and analytics systems.
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
                  Staff Augmentation
                </div>
                <div className="font-britanicaRegular text-[#fff] text-[16px] pb-[20px]">
                  Access our vetted engineers through specialized staff augmentation. Our engineers work as your remote development team to help you scale quickly while maintaining full control over app development and delivery.
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
                Game Development
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                We develop immersive games designed to drive user retention through optimized performance, smooth mechanics, scalable backends, and engaging experiences.
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
                WRM
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[16px] pb-[20px]">
                WRM simply manages workflows, work assignments, reporting, and real-time insights to improve overall productivity and operational efficiency.
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
                HRMS
              </div>
              <div className="font-britanicaRegular text-[#373636] text-[16px] pb-[20px]">
                HRMS simplifies with a centralized system. It handles employee data, payroll, attendance, and performance management to help you automate HR processes and make better decisions.
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
