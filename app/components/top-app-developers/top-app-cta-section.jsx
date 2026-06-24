"use client";

import { useState } from "react";
import Button from "../common/button";
import HireExpertPopup from "../hire-expert-popup";
import { goToContact } from "@/app/utils/goToContact";

const TopAppCtaSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="relative pb-12 sm:pb-16 md:pb-[100px]">
        <div className="container px-4 sm:px-4">
          <div className="rounded-2xl sm:rounded-3xl border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c130_0%,_#44444433_84%)] px-6 sm:px-10 md:px-16 py-10 sm:py-14 md:py-16 text-center">
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] font-black text-white break-words">
              Ready to Build Your Next App with Us?
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[18px] text-white/85 pt-4 sm:pt-5 max-w-2xl mx-auto leading-relaxed">
              Whether you have a clear vision or just an idea, we&apos;re here to help you bring it to life.
              Let&apos;s build something great together.
            </p>
            <div className="pt-6 sm:pt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                text="Schedule Free Consultation"
                icon={false}
                onClick={() => setPopupOpen(true)}
              />
              <Button
                text="Get a Quote"
                icon={false}
                onClick={goToContact}
                textClassName="!text-[#F74B1C]"
                className="!bg-transparent border border-[#C380FE]"
              />
            </div>
          </div>
        </div>
      </section>
      <HireExpertPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default TopAppCtaSection;
