"use client";

import Link from "next/link";
import { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What does a Flutter developer do?",
    answer: (
      <>
        <p>
          A Flutter developer builds cross-platform mobile apps for iOS and Android using Google&apos;s Flutter framework and the Dart programming language. They write a single codebase that runs natively on both platforms — removing the need to hire separate iOS and Android developers.
        </p>
        <p className="pt-3">
          At Tech Reforms, our Flutter developers also handle widget architecture, state management, Firebase integration, REST API connections, and full App Store and Play Store deployment.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "How much does it cost to hire a Flutter developer?",
    answer: (
      <>
        <p>
          The cost depends on experience level, engagement model, and project scope. At Tech Reforms, hiring a dedicated Flutter developer costs significantly less than a local US or UK hire — without compromising on code quality or communication.
        </p>
        <p className="pt-3">
          We offer full-time, part-time, and fixed-scope project pricing. Reach out for a cost breakdown tailored to your Flutter project requirements.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "How quickly can I onboard a Flutter developer?",
    answer: (
      <>
        <p>
          Most clients onboard a Flutter developer within 72 hours of final selection. We maintain a pre-vetted bench of Flutter engineers — so you are not waiting for sourcing and screening after you reach out.
        </p>
        <p className="pt-3">
          After sharing your project requirements, we shortlist 2-3 matched Flutter profiles within 24 hours. You interview, select, and onboard — typically within the same week.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: "Will the Flutter developer work in my time zone?",
    answer: (
      <>
        <p>
          Yes. Our Flutter developers work flexible hours and align with US, UK, UAE, and Australian time zones. We match developers to clients based on time zone overlap — not just technical skills.
        </p>
        <p className="pt-3">
          Most developers maintain a 4-6 hour daily overlap with US Eastern and Pacific time zones, so daily standups, sprint reviews, and real-time collaboration stay friction-free.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: "Is Flutter better than React Native?",
    answer: (
      <>
        <p>
          Both are strong cross-platform frameworks but serve different needs. Flutter compiles directly to native ARM code via Dart, delivering superior UI performance and pixel-perfect consistency across iOS and Android. React Native uses a JavaScript bridge, which can introduce performance overhead in animation-heavy or real-time applications.
        </p>
        <p className="pt-3">
          For high-performance UI and consistent cross-platform rendering, Flutter is generally the stronger technical choice.
        </p>
      </>
    ),
  },
  {
    id: 6,
    question: "What technologies do your Flutter developers work with?",
    answer: (
      <>
        <p>
          Our Flutter developers are proficient in Flutter SDK, Dart, BLoC, Provider, GetX, Riverpod, Firebase, REST and GraphQL APIs, FCM push notifications, and App Store/Play Store deployment.
        </p>
        <p className="pt-3">
          For advanced projects we also cover Flutter Web, Flutter Desktop, CI/CD pipeline setup, automated testing with Flutter Test, and production-scale performance optimization.
        </p>
      </>
    ),
  },
  {
    id: 7,
    question: "Do you sign an NDA before starting a Flutter project?",
    answer: (
      <>
        <p>
          Yes — a signed NDA is standard before any engagement begins. Your app architecture, source code, and product roadmap remain fully confidential throughout and after the project.
        </p>
        <p className="pt-3">
          We also provide IP ownership clauses confirming all code written by our Flutter developers belongs entirely to you — no shared rights, no reuse clauses.
        </p>
      </>
    ),
  },
  {
    id: 8,
    question: "Can I hire a full Flutter development team?",
    answer: (
      <>
        <p>
          Yes. Tech Reforms builds dedicated Flutter teams tailored to your project scope. A typical team includes a lead Flutter developer, UI engineer, QA specialist, and backend integration developer — working as a single delivery unit under your project manager.
        </p>
        <p className="pt-3">
          You can start with one developer and scale the team mid-project without delays or contract renegotiation.
        </p>
      </>
    ),
  },
  {
    id: 9,
    question: "How do I evaluate a Flutter developer before hiring?",
    answer: (
      <>
        <p>
          You control the evaluation entirely. After we shortlist profiles based on your technical requirements, you conduct your own technical interview, code review, and cultural fit assessment before making any commitment.
        </p>
        <p className="pt-3">
          We also offer a trial engagement period so you can assess the developer&apos;s output, communication, and sprint velocity in a real working environment before formalizing the arrangement.
        </p>
      </>
    ),
  },
  {
    id: 10,
    question: "What is the difference between Flutter staff augmentation and a Flutter agency?",
    answer: (
      <>
        <p>
          With Flutter staff augmentation, you hire a dedicated developer who integrates directly into your team — working under your management, following your processes, reporting to you. You keep full control over technical decisions and delivery timelines.
        </p>
        <p className="pt-3">
          A Flutter agency manages the project independently and delivers an output. Tech Reforms works as a staff augmentation partner — your Flutter developer is an extension of your team, not an outsourced vendor in a silo.
        </p>
      </>
    ),
  },
];

const HireFlutterFaqSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-[60px] bg-[#0E0E0E] px-4 sm:px-6 overflow-x-hidden">
      <div className="container max-w-[1200px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-12 gap-6 max-sm:gap-0">
          <div className="col-span-12 lg:col-span-4 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            <CapsuleLabel firstWord="FAQ" secondWord="" />
            <h2 className="font-britanicaBlack text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] font-black pt-3 sm:pt-4 max-sm:text-center">
              <span className="text-white">Flutter Developer </span>
              <span className="text-[#F74B1C]">FAQ</span>
            </h2>
            <p className="font-britanicaRegular text-[14px] sm:text-[15px] text-white/80 pt-3 max-sm:text-center">
              Tech Reforms — Hire Flutter Developers
            </p>
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
                        className={`w-5 h-5 flex-shrink-0 text-[#F74B1C] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
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

export default HireFlutterFaqSection;
