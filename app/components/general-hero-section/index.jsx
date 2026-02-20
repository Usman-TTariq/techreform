"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";

const GeneralHeroSection = ({ firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord, fifthWordWhite, para, para2, para3, buttonText, compact }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className={`relative w-full min-w-0 overflow-hidden ${compact ? "min-h-0 pt-6 sm:pt-0 pb-4 sm:pb-12 md:pb-0 sm:min-h-[60vh] md:min-h-[60vh]" : "min-h-[60vh] sm:min-h-[60vh] md:min-h-[60vh] pb-8 sm:pb-12 md:pb-0"}`}>
      <Image
        className="absolute -top-[10%] right-4 w-[28%] sm:w-[32%] md:right-12 md:w-[35%] lg:right-[100px] hidden sm:block"
        src="/images/frame.png"
        alt=""
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -bottom-[15%] left-0 w-[28%] sm:w-[30%] hidden sm:block"
        src="/images/frame2.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className={`grid grid-cols-12 ${compact ? "pt-10 sm:pt-[100px] md:pt-[120px]" : "pt-12 sm:pt-[100px] md:pt-[120px]"}`}>
          <div className="col-span-12 text-center min-w-0">
            <div className="font-britanicaBlack text-[22px] leading-[1.25] sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[52px] font-black break-words">
              <span className="text-white">{firstWord} </span>
              <span className="text-[#F74B1C]">{secondWord} </span>
              <span className="text-white">{thirdWord} </span>
              <span className="text-white">{forthWord}</span>
              <br />
              <span className={fifthWordWhite ? "text-white" : "text-[#F74B1C]"}>{fifthWord}</span>
              {sixthWord != null && sixthWord !== "" && (
                <>
                  <br />
                  <span className="text-[#F74B1C]">{sixthWord}</span>
                </>
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0 flex flex-col items-center">
            <div className="font-britanicaRegular text-[14px] sm:text-[17px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full sm:max-w-3xl mx-auto leading-relaxed w-full">
              {para && <>{para} <br /></>}
              {para2 && <>{para2} <br /></>}
              {para3}
            </div>
            {
              buttonText && (
                <div className="pt-4 sm:pt-[30px] w-full flex justify-center items-center">
                  <div className="w-full max-w-[320px] sm:max-w-none mx-auto flex justify-center">
                    <Button text={buttonText} icon={false} onClick={() => buttonText && setPopupOpen(true)} />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      {buttonText && <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />}
    </div>
  );
};

export default GeneralHeroSection;
