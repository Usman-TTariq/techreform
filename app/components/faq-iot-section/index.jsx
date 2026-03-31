"use client";

import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What does an IoT system actually consist of?",
    answer: (
      <>
        A complete IoT system has four core layers: sensors or devices that collect data; a connectivity layer that transmits it; a cloud processing layer that
        analyzes it; and a user interface that presents it in an actionable form. The complexity of each layer depends on your use case, data volume, and
        operational environment.
      </>
    ),
  },
  {
    id: 2,
    question: "What industries do you serve?",
    answer: (
      <>
        We have built IoT solutions for clients across manufacturing and IIoT, healthcare and remote patient monitoring, property management and smart home
        technology, retail and inventory tracking, logistics and fleet operations, and energy management. If your industry involves physical environments and data,
        IoT development likely has a role to play.
      </>
    ),
  },
  {
    id: 3,
    question: "How does IoT actually improve business performance?",
    answer: (
      <>
        The impact shows up in several ways: fewer manual processes, reduced equipment downtime through predictive maintenance, better visibility into inventory and
        assets, improved worker safety, and faster, more accurate decision-making at every level of the organization.
      </>
    ),
  },
  {
    id: 4,
    question: "Can IoT connect to the software tools we already use?",
    answer: (
      <>
        Integrating IoT data with existing ERP systems, CRMs, and operational platforms is a routine part of our work. We assess your current tech environment
        during discovery and design the integration so that data flows where it needs to go without friction.
      </>
    ),
  },
  {
    id: 5,
    question: "What about IoT security?",
    answer: (
      <>
        IoT security is designed into the system architecture from the start. That means encrypted data transmission, authenticated device access, secure cloud
        connectivity, and ongoing monitoring, not a checklist to be ticked off at the end of the project.
      </>
    ),
  },
  {
    id: 6,
    question: "Can you help if we already have a partial IoT setup in place?",
    answer: (
      <>
        Yes. If you have existing hardware, a legacy platform, or a partially built system, we can assess what you have, identify the gaps, and take the project
        forward from wherever it currently stands.
      </>
    ),
  },
];

const FaqIotSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4 max-sm:text-center">
              <span className="text-white">Frequently Asked </span>
              <br />
              <span className="text-[#F74B1C]">Questions</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-white/15 rounded-lg bg-white/[0.03] overflow-hidden transition-colors hover:border-white/25"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full cursor-pointer flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-5 text-left min-w-0"
                    >
                      <span className="font-britanicaExtraBold text-[15px] sm:text-[17px] text-white pr-2 sm:pr-4 min-w-0 break-words text-left">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="font-britanicaRegular text-[14px] sm:text-[16px] text-white/85 leading-relaxed pb-4 sm:pb-5 px-4 sm:px-5 pt-0 border-t border-white/10 break-words min-w-0">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqIotSection;
