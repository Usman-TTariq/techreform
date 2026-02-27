"use client";
import Image from "next/image";
import React from "react";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import { useState } from "react";

const PortfolioOne = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pt-[10px] mb-[100px] overflow-hidden">
      <Image
        className="absolute top-[20%] right-[0px] w-[30%]"
        src="/images/bk.png"
        alt="Portfolio Background"
        width={1000}
        height={1000}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[20px]">
              <CapsuleLabel firstWord="WEB" secondWord="APP" />
              <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                <span className="text-white">TR </span>
                <span className="text-[#F74B1C]">HRMS</span>
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                The TechReform Human Resource Management System (CR HRMS) is a comprehensive platform designed to enhance HR operations and streamline workforce management. It offers a wide range of features, including employee record management, medical tracking, performance evaluations, and loan request processing. Employees can easily access their pay slips, ensuring transparency in compensation.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                The system also provides advanced financial reporting tools, a centralized calendar for efficient scheduling, and a dynamic newsfeed for company-wide updates. With integrated modules for account and project management, employee grievance handling, attendance tracking, and leave management, CR HRMS simplifies HR processes and empowers businesses to build stronger, more efficient human resource strategies.
              </div>
              <div className="pt-5 sm:pt-6">
                <Button text="Check the full case" icon={false} onClick={() => setPopupOpen(true)} />
              </div>
            </div>
          </div>
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[10px]">
              <Image
                className="w-[100%]"
                src="/images/port1.png"
                alt="Portfolio Project"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 pt-[120px]">
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[10px]">
              <Image
                className="w-[100%]"
                src="/images/port2.png"
                alt="Portfolio Project"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[20px]">
              <CapsuleLabel firstWord="APP" secondWord="MOBILE" />
              <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                <span className="text-white">Finexa</span>
                {/* <span className="text-[#F74B1C]">HRMS</span> */}
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Riyal Ride is an innovative travel platform offering seamless booking solutions for city and intercity buses, as well as ferry services. Designed to deliver a smooth and user-friendly experience, the platform serves both passengers looking for convenient travel options and drivers managing routes and bookings.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Built in collaboration with TechReform, Riyal Ride is a fully integrated system that enhances online ticket booking, streamlines route management, and simplifies overall travel operations.With a focus on scalability, efficiency, and ease of use, Riyal Ride is redefining modern transportation—where convenience meets smart technology.
              </div>
              <div className="pt-5 sm:pt-6">
                <Button text="Check the full case" icon={false} onClick={() => setPopupOpen(true)} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 pt-[120px]">
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[20px]">
              <CapsuleLabel firstWord="MOBILE APP WEB" secondWord="APP" />
              <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                <span className="text-white">Apex </span>
                <span className="text-[#F74B1C]">Fitness</span>
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                Apex Fitness is a powerful health and wellness platform available as both a Mobile App and Web Application, designed to help users achieve peak performance anytime, anywhere. With a modern design and user-friendly interface, Apex Fitness allows users to book workout sessions, join live or recorded classes, and track their fitness progress seamlessly across devices.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                The platform offers personalized workout plans, yoga sessions, strength training programs, and detailed performance analytics.Whether accessed through a smartphone or desktop, Apex Fitness ensures a smooth, synchronized, and engaging experience.Designed and developed by our team, the app delivers flexibility, convenience, and smart fitness management—all in one integrated solution.
              </div>
              <div className="pt-5 sm:pt-6">
                <Button text="Check the full case" icon={false} onClick={() => setPopupOpen(true)} />
              </div>
            </div>
          </div>
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[10px]">
              <Image
                className="w-[100%]"
                src="/images/port3.png"
                alt="Portfolio Project"
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

export default PortfolioOne;

