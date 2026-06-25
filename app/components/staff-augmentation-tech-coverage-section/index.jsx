import { Check } from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TECH_COLUMNS = [
  {
    title: "MOBILE",
    items: [
      "Flutter + Dart",
      "React Native",
      "Swift / SwiftUI",
      "Kotlin / Jetpack",
      "Expo SDK",
    ],
  },
  {
    title: "BACKEND & API",
    items: [
      "Node.js / Express",
      "Python / Django",
      "Java Spring Boot",
      "Laravel / PHP",
      "Golang",
    ],
  },
  {
    title: "AI & DATA",
    items: [
      "LLM / OpenAI API",
      "RAG Systems",
      "Power BI / Tableau",
      "TensorFlow / PyTorch",
      "Data Engineering",
    ],
  },
  {
    title: "CLOUD & E-COM",
    items: [
      "AWS / Azure / GCP",
      "Docker / Kubernetes",
      "Magento / Shopify",
      "CI/CD Pipelines",
      "PostgreSQL / MongoDB",
    ],
  },
];

const StaffAugmentationTechCoverageSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[20%] left-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />

      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="TECH" secondWord="STACK" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Full-Stack </span>
              <span className="text-[#F74B1C]">Technology Coverage </span>
              <span className="text-white">— All Roles Available</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              &ldquo;Hire full stack developer&rdquo;, &ldquo;hire DevOps engineer&rdquo;, &ldquo;hire LLM
              developer&rdquo; — separate high-volume searches, all covered by our vetted talent pool
              across every major stack.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pt-8 sm:pt-10 md:pt-[52px]">
          <div className="rounded-2xl border border-[#C380FE]/50 bg-[linear-gradient(148deg,_#7724c118_0%,_#161616ee_84%)] p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-0">
              {TECH_COLUMNS.map((column, index) => (
                <div
                  key={column.title}
                  className={`min-w-0 text-left md:text-center lg:text-left px-0 md:px-4 lg:px-6 ${
                    index > 0 ? "max-md:border-t max-md:border-[#444444]/70 max-md:pt-6" : ""
                  } ${index % 2 === 1 ? "md:border-l md:border-[#444444]/70" : ""} ${
                    index >= 2 ? "md:border-t md:border-[#444444]/70 md:pt-6 lg:border-t-0 lg:pt-0" : ""
                  } ${index > 0 ? "lg:border-l lg:border-[#444444]/70" : ""}`}
                >
                  <h3 className="font-britanicaExtraBold text-[12px] sm:text-[13px] tracking-[0.1em] text-[#C380FE] pb-4 sm:pb-5">
                    {column.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-3.5">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 min-w-0 md:justify-center lg:justify-start"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7724C1]/30 border border-[#7724C1]/50">
                          <Check
                            className="h-3 w-3 text-[#C380FE]"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        </span>
                        <span className="font-britanicaRegular text-[14px] sm:text-[15px] text-white/90 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationTechCoverageSection;
