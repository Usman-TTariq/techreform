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
        alt="Decorative background for portfolio case studies section"
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
              The Tech Reform Human Resource Management System (TR HRMS) is a comprehensive platform that is designed to help you manage HR operations. Such solutions are designed to smartly streamline workforce management without much hassle. It features employee record management, medical tracking, performance evaluations, and loan request processing to help both employees and employers.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              Such intuitively designed HRMS systems enable employees to access their pay slips, for maintaining transparency in compensation. In addition to other features, it also acts as an all-in-one advanced financial reporting tool. It has a centralized calendar for scheduling, a dynamic news feed for company-wide updates, and integrated modules for account and project management, employee grievance handling, attendance tracking, and leave management.
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
                alt="TR HRMS web application portfolio screenshot"
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
                alt="Finexa mobile app portfolio screenshot"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-6 max-lg:col-span-12 my-auto">
            <div className="pb-[20px]">
              <CapsuleLabel firstWord="MOBILE" secondWord="APP" />
              <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                <span className="text-white">Finexa</span>
                {/* <span className="text-[#F74B1C]">HRMS</span> */}
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              Riyal Ride is a travel financing platform that helps users book city and intercity buses and ferries without the guesswork. This app is built to be accessible and easy to use, knowing the age demographics range from 18 to 60’s. The interface is intuitive, simple, and easy to get used to. It helps you navigate through the cities with convenient local options, hence cost-effective. This app also emerges as a convenient option for drivers with easy road management and booking.
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              Built in collaboration with TechReform, Finexa is a fully integrated system that enhances online ticket booking, streamlines route management, and simplifies overall travel operations. This smart solution makes traveling both convenient and budget-friendly for new travelers.
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
              <CapsuleLabel firstWord="MOBILE & WEB" secondWord="APP" />
              <div className="font-britanicaBlack text-[28px] pt-[10px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
                <span className="text-white">Apex </span>
                <span className="text-[#F74B1C]">Fitness</span>
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              Apex Fitness is a convenient web and mobile app solution that makes staying healthy a bit simpler. It is an innovative tool that changes how users view health management. It is made to work seamlessly on both mobile phones and computer screens for high accessibility. The system was basically designed to help users achieve peak performance anytime, anywhere. This app allows users to:
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                <ul className="list-disc list-inside">
                  <li>Book Workout Sessions</li>
                  <li>Join Live</li>
                  <li>Access Recorded Classes</li>
                  <li>Track Fitness Progress</li>
                </ul>
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
                src="https://ik.imagekit.io/sajib4aqc/port3_taye1m.webp"
                alt="Apex Fitness mobile and web app portfolio screenshot"
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

