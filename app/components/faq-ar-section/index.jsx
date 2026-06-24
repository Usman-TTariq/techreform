"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";
import ArDevelopmentCostTable from "./ar-development-cost-table";

const FaqLink = ({ href, children }) => (
  <Link href={href} className="text-[#F74B1C] hover:underline">
    {children}
  </Link>
);

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How much does AR app development cost in 2026?",
    answer: (
      <>
        <p>
          $15K–$250K+ depending on app type, platform, and feature complexity. See our full cost
          breakdown below.
        </p>
        <ArDevelopmentCostTable />
      </>
    ),
  },
  {
    id: 2,
    question: "How long does it take to build an AR app?",
    answer: (
      <>
        WebAR campaigns typically take 6–10 weeks. Mobile AR apps (try-on, product visualizers)
        run 3–5 months. Enterprise HoloLens or Vision Pro projects take 5–12 months depending on
        spatial mapping, backend integration, and 3D asset volume.
      </>
    ),
  },
  {
    id: 3,
    question: "Should I choose ARKit, ARCore, or Vuforia?",
    answer: (
      <>
        ARKit is best for iOS-first apps with face tracking and LiDAR. ARCore covers the widest
        Android device reach. Vuforia is the right choice for enterprise marker tracking,
        cross-platform deployment, and HoloLens. We recommend the stack after reviewing your
        target devices and use case — see our framework comparison above on this page.
      </>
    ),
  },
  {
    id: 4,
    question: "Can you build WebAR without an app download?",
    answer: (
      <>
        Yes. We build browser-based WebAR using 8th Wall and similar frameworks — ideal for
        marketing campaigns, product launches, and e-commerce where frictionless access matters.
        Users scan a QR code or open a link and see AR directly in the browser.
      </>
    ),
  },
  {
    id: 5,
    question: "What industries benefit most from AR apps?",
    answer: (
      <>
        Retail and fashion (virtual try-on), real estate (furnished walkthroughs), manufacturing
        (assembly training), healthcare (surgical guidance), and marketing (WebAR campaigns) see
        the strongest ROI. We&apos;ve delivered AR products across all of these verticals.
      </>
    ),
  },
  {
    id: 6,
    question: "Do you provide 3D asset creation and backend integration?",
    answer: (
      <>
        Yes. We handle 3D model creation (Blender, Maya), CMS for content updates, analytics
        dashboards, and API integrations. 3D assets typically add $5K–$30K and backend/CMS adds
        $8K–$20K depending on scope — both are listed in our cost breakdown above.
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
        . We schedule a discovery call, review your AR use case and target devices, and prepare a
        detailed proposal — no commitment needed to start the conversation.
      </>
    ),
  },
];

const FaqArSection = () => {
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

export default FaqArSection;
