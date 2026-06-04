"use client";

import Button from "../common/button";
import { goToContact } from "@/app/utils/goToContact";

const RetailCtaSection = () => {
  return (
    <div className="relative bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)] py-[2px] mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-10 md:mb-12">
      <div className="bg-black">
        <div className="container relative px-4 sm:px-4 py-12 sm:py-16 md:py-[80px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[42px] lg:text-[48px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Ready to Build Your </span>
              <span className="text-[#F74B1C]">Retail App?</span>
            </h2>
            <p className="font-britanicaBlack text-[20px] leading-tight sm:text-[26px] md:text-[32px] md:leading-[40px] font-black text-white pt-5 sm:pt-6 md:pt-8 break-words">
              Let&apos;s Turn Your Retail Vision into a{" "}
              <span className="text-[#F74B1C]">Product Worth Downloading!</span>
            </p>
            <p className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white/90 pt-5 sm:pt-6 md:pt-8 leading-relaxed">
              Whether you have a fully defined spec or just an idea you want to pressure-test, our retail app development team will help you map a clear path from concept to launch and beyond.
            </p>
            <div className="pt-8 sm:pt-10 flex justify-center">
              <Button
                text="Get Your Free Retail App Development Consultation"
                icon={false}
                onClick={goToContact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailCtaSection;
