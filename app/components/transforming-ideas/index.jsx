import React from "react";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const TransformingIdeas = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/images/idea1.png"
        alt=""
        width={1000}
        height={1000}
        className="absolute -top-[20%] sm:-top-[35%] right-0 w-[55%] sm:w-[45%] hidden sm:block opacity-80"
      />
      <Image
        src="/images/idea2.png"
        alt=""
        width={1000}
        height={1000}
        className="absolute -bottom-[20%] sm:-bottom-[30%] left-0 w-[60%] sm:w-[50%] hidden sm:block opacity-80"
      />
      <div className="container pb-12 sm:pb-16 md:pb-[80px] relative z-10 px-4 sm:px-4">
        <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[52px] font-black text-center pb-8 sm:pb-[50px]">
          <span className="text-white">Scale Your Business </span>
          <span className="text-[#F74B1C]">with</span>
          <br />
          <span className="text-white">Growth-Focused Services</span>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-3">
          <div className="col-span-12 lg:col-span-4">
            <div className="-mt-0 lg:-mt-[70px]">
              <div className="pb-2 sm:pb-[10px]">
                <CapsuleLabel firstWord="Our" secondWord="Services" />
              </div>
              <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                Our digital solutions are made to offer high-end features that help you scale up and get consistent results with well-managed expert teams, user-friendly mobile apps, and intuitive e-commerce solutions.
              </div>
              <div className="pt-6 sm:pt-[30px]">
                <Button text="Explore Our Services" icon={false} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] h-full">
              <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">01</div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">Mobile App Development</div>
              <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                We offer optimized mobile apps with strong architecture, intuitive UX, and performance-focused engineering to boost accessibility.
              </div>
              <div className="pb-4 sm:pb-[20px]">
                <Link href="/" className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 h-full">
            <div className="bg-[#F74B1C] relative border-2 border-white rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] h-full overflow-hidden min-h-[280px]">
              <Image
                src="/images/2.png"
                alt=""
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="relative z-10">
                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-white">02</div>
                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">E-Commerce <br /> Solutions</div>
                <div className="font-britanicaRegular text-white text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                  Access eCommerce development at its best. Get intuitive platforms focused on conversions, scalability, and seamless user journeys with secure payments, inventory, and analytics systems.
                </div>
                <div className="pb-4 sm:pb-[20px]">
                  <Link href="/" className="text-white hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                    Learn More <ArrowRight className="w-[16px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-3 pt-6 sm:pt-[30px]">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl relative py-5 sm:py-6 overflow-hidden px-4 sm:px-[20px] -mt-0 lg:-mt-[50px]">
              <Image
                src="/images/3.png"
                alt=""
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="relative z-10">
                <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#fff]">03</div>
                <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">Staff Augmentation</div>
                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                  Access our vetted engineers through specialized staff augmentation. Our engineers work as your remote development team to help you scale quickly while maintaining full control over app development and delivery.
                </div>
                <div className="pb-4 sm:pb-[20px]">
                  <Link href="/" className="text-[#fff] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                    Learn More <ArrowRight className="w-[16px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] mt-0 lg:mt-[50px]">
              <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">04</div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">Game Development</div>
              <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                We develop immersive games designed to drive user retention through optimized performance, smooth mechanics, scalable backends, and engaging experiences.
              </div>
              <div className="pb-4 sm:pb-[20px]">
                <Link href="/" className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="bg-transparent border-2 border-[#3b3b3b] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px]">
              <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">05</div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-white pb-2">WRM</div>
              <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                WRM simply manages workflows, work assignments, reporting, and real-time insights to improve overall productivity and operational efficiency.
              </div>
              <div className="pb-4 sm:pb-[20px]">
                <Link href="/" className="text-[#fff] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
                  Learn More <ArrowRight className="w-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="bg-white border-2 border-[#0E0E0E] rounded-2xl sm:rounded-4xl py-5 sm:py-6 px-4 sm:px-[20px] mt-0 lg:mt-[50px]">
              <div className="font-britanicaRegular font-semibold text-[36px] sm:text-[44px] md:text-[50px] text-[#F74B1C]">06</div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-britanicaBlack text-black pb-2">HRMS</div>
              <div className="font-britanicaRegular text-[#373636] text-[14px] sm:text-[16px] pb-4 sm:pb-[20px]">
                HRMS simplifies with a centralized system. It handles employee data, payroll, attendance, and performance management to help you automate HR processes and make better decisions.
              </div>
              <div className="pb-4 sm:pb-[20px]">
                <Link href="/" className="text-[#0E0E0E] hover:underline flex items-center gap-2 justify-start font-bold font-britanicaRegular text-[14px] sm:text-[16px]">
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
