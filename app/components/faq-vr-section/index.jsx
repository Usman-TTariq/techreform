"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import VrDevelopmentCostTable from "./vr-development-cost-table";

const FaqLink = ({ href, children }) => (
  <Link href={href} className="text-[#F74B1C] hover:underline">
    {children}
  </Link>
);

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does VR app development cost in 2026?",
    answer: (
      <>
        <p>
          $25K–$300K+ depending on app type, headset platform, and feature complexity. See our
          full cost breakdown below — with headset-specific pricing most agencies don&apos;t publish.
        </p>
        <VrDevelopmentCostTable />
      </>
    ),
  },
  {
    id: 2,
    question: "How long does it take to build a VR app?",
    answer: (
      <>
        Basic Meta Quest training apps take 3–4 months. Product demos and showrooms run 2–4 months.
        Corporate training suites with LMS integration take 4–6 months. Medical simulations and
        gaming experiences typically need 6–12 months depending on 3D asset volume and multiplayer
        requirements.
      </>
    ),
  },
  {
    id: 3,
    question: "Should I choose standalone, PC VR, or console VR?",
    answer: (
      <>
        Standalone (Meta Quest 3) is best for mobile workforces with no PC infrastructure. PC VR
        (HTC Vive / Valve Index) delivers maximum visual fidelity for simulation and architecture.
        Console VR (PSVR2) suits gaming and entertainment for existing PS5 users. See our platform
        comparison section above on this page for a full side-by-side breakdown.
      </>
    ),
  },
  {
    id: 4,
    question: "Can you build VR for Meta Quest without a PC?",
    answer: (
      <>
        Yes. We build standalone Quest apps using Meta SDK and Unity XR — no PC tether required.
        Ideal for safety training, retail demos, and enterprise rollout across multiple sites.
        Employees simply put on the headset and start — no IT setup or gaming PCs needed.
      </>
    ),
  },
  {
    id: 5,
    question: "What industries benefit most from VR apps?",
    answer: (
      <>
        Manufacturing and construction (safety training), healthcare (surgical simulation),
        real estate (property walkthroughs), automotive (virtual showrooms), and education
        (immersive learning) see the strongest ROI. We&apos;ve delivered VR experiences across all
        of these verticals.
      </>
    ),
  },
  {
    id: 6,
    question: "Do you provide 3D environments and LMS integration?",
    answer: (
      <>
        Yes. We handle custom 3D environment creation, multiplayer networking, LMS integration
        (SCORM/xAPI), and multi-language localization. 3D environments add $10K–$50K, LMS
        integration adds $8K–$20K, and multiplayer adds $15K–$40K — all listed in our cost
        breakdown above.
      </>
    ),
  },
  {
    id: 7,
    question: "How do I get started with Tech Reforms?",
    answer: (
      <>
        Fill out the <FaqLink href="#contact">contact form</FaqLink> or call{" "}
        <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">
          (582) 233-5015
        </a>
        . We schedule a discovery call, review your VR use case and target headsets, and prepare a
        detailed proposal — no commitment needed to start the conversation.
      </>
    ),
  },
];

const FaqVrSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="relative py-[60px] bg-[#0E0E0E] overflow-x-hidden">
      <div className="container min-w-0 max-w-full px-4 sm:px-4 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-8 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[36px] md:text-[42px] leading-[1.15] font-black pt-4">
              <span className="text-white">Frequently Asked </span>
              <br />
              <span className="text-[#F74B1C]">Questions</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 min-w-0 max-sm:pt-4">
            <div className="flex flex-col gap-3 min-w-0">
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
                      className="w-full min-w-0 cursor-pointer flex items-center justify-between gap-4 py-4 px-5 text-left"
                    >
                      <span className="font-britanicaExtraBold text-[17px] text-white pr-4 min-w-0 break-words">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="font-britanicaRegular text-[16px] text-white/85 leading-relaxed pb-5 px-5 pt-0 border-t border-white/10 break-words min-w-0 max-w-full overflow-x-hidden">
                          {typeof item.answer === "string" ? (
                            <span className="whitespace-pre-line">{item.answer}</span>
                          ) : (
                            item.answer
                          )}
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

export default FaqVrSection;
