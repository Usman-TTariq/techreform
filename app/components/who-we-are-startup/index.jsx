"use client";

import Image from "next/image";
import { useState } from "react";
import HireExpertPopup from "../hire-expert-popup";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const WhoWeAreStartup = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[120px]">
      <Image
        className="absolute -top-[20%] left-0 w-[50%] sm:w-[40%] md:w-[35%] opacity-60"
        src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772827382/bk1_qqglcc.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 pt-12 sm:pt-16 md:pt-[100px]">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="WHO" secondWord="WE" thirdWord="ARE" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="font-britanicaBlack text-[22px] leading-tight sm:text-[28px] md:text-[34px] lg:text-[38px] font-black text-white break-words">
              <span className="text-white">A Startup App Development Company That </span>
              <span className="text-[#F74B1C]">Builds Products, Not Just Apps</span>
            </h2>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-5 sm:pt-6 md:pt-[26px] max-w-full leading-relaxed">
              Tech Reforms helps founders turn ideas into working products. As a trusted Startup App Development Company, we focus on practical development,
              scalable architecture, and user-friendly design.
            </div>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
              Our Startup App Development Services are built for startups that need speed, clarity, and a reliable tech partner. From planning to launch, our team
              handles the entire process so founders can focus on growing their business.
            </div>
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full leading-relaxed">
              Whether you&apos;re building your first MVP or scaling an existing product, our Startup Mobile App Solutions are designed to move your idea forward.
            </div>
            {/* <div className="pt-4 sm:pt-[30px] w-full flex justify-center items-center">
              <div className="w-full max-w-[320px] sm:max-w-none mx-auto flex justify-center">
                <Button text="Hire Startup App Developers Today" icon={false} onClick={() => setPopupOpen(true)} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default WhoWeAreStartup;
