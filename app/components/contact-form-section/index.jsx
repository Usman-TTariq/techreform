"use client";

import React from "react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import ContactForm from "../contact-form";

const CONTACT_ITEMS = [
  {
    icon: "/images/phone-icon.png",
    alt: "Phone icon",
    label: "Call us at:",
    href: "tel:+15822335015",
    value: "(582) 233-5015",
  },
  {
    icon: "/images/mail-icon.png",
    alt: "Email icon",
    label: "Email us at:",
    href: "mailto:info@techreforms.com",
    value: "info@techreforms.com",
  },
  {
    icon: "/images/location.png",
    alt: "Location icon",
    label: "Visit us at:",
    value: "811 Wilshire Boulevard, Los Angeles, CA 90017",
  },
];

const ContactFormSection = () => {
  return (
    <div className="container pb-10 sm:pb-12 md:pb-[60px] pt-2 sm:pt-4 md:pt-6 px-4 sm:px-4">
      <div className="relative bg-[#161616] rounded-2xl py-8 sm:py-12 md:py-[70px] px-4 sm:px-6 md:px-[30px] overflow-visible">
        <Image
          className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[100%] md:w-[90%] object-cover opacity-60 md:opacity-100"
          src="/images/formbk.png"
          alt="Dark textured background behind contact form"
          width={1000}
          height={1000}
        />
        <div className="grid grid-cols-12 gap-1 lg:gap-12 relative z-10">
          <div className="col-span-12 lg:col-span-5 my-auto">
            <div className="pb-2 sm:pb-[10px] max-sm:flex max-sm:justify-center">
              <CapsuleLabel firstWord="Contact" secondWord="Us" />
            </div>
            <div className="font-britanicaBlack text-[22px] leading-tight sm:text-[26px] sm:leading-[32px] md:text-[28px] md:leading-[35px] font-black max-sm:text-center">
              <span className="text-white">Let&apos;s Start a</span>
              <br />
              <span className="text-[#F74B1C]">Conversation</span>
            </div>
            <p className="font-britanicaRegular text-white/80 text-[14px] sm:text-[16px] md:text-[18px] pt-4 sm:pt-6 max-sm:text-center">
              Have a project in mind or a question for our team? Fill out the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex max-sm:flex-col items-center gap-3 max-sm:justify-center max-sm:mb-8">
                  <Image
                    className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex-shrink-0"
                    src={item.icon}
                    alt={item.alt}
                    width={50}
                    height={50}
                  />
                  <div className="min-w-0 max-sm:text-center">
                    <div className="text-white/70 font-britanicaRegular text-[14px] sm:text-[16px]">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-britanicaRegular font-bold text-[14px] sm:text-[16px] md:text-[18px] hover:text-[#F74B1C] transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-britanicaRegular text-[14px] sm:text-[16px] md:text-[18px] break-words">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
