import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const CARD_IMAGE_ASPECT = "aspect-[649/207]";

const AI_FEATURES = [
  {
    title: "LLM Integration",
    desc: "OpenAI, Claude, Gemini APIs. In-app AI assistants, content generation, smart search.",
    image: "/images/llm-integration.webp",
    width: 2036,
    height: 1024,
    imageFit:"banner",
  },
  {
    title: "On-Device AI",
    desc: "Core ML, TensorFlow Lite. Runs offline. Healthcare & finance privacy-safe.",
    image: "/images/on-device-ai.webp",
    width: 2036,
    height: 1024,
    imageFit: "banner",
  },
  {
    title: "RAG Systems",
    desc: "Retrieval-augmented generation for knowledge-base apps and enterprise chatbots.",
    image: "/images/rag-systems.webp",
    width: 2036,
    height: 1024,
    imageFit: "banner",
  },
  {
    title: "Predictive Analytics",
    desc: "User behavior modeling, churn prediction, demand forecasting in logistics apps.",
    image: "/images/predictive-analysis.webp",
    width: 2036,
    height: 1024,
    imageFit: "banner",
  },
];

const AppIntegrationMobile = () => {
  return (
    <div id="ai-native-mobile" className="relative pb-[150px] max-sm:pb-[50px]">
      <div className="container">
        <div className="grid grid-cols-12 justify-between gap-4">
          <div className="col-span-5 max-lg:col-span-12">
            <div className="max-sm:flex max-sm:justify-center">
              <CapsuleLabel firstWord="AI" secondWord="NATIVE" />
            </div>
            <div className="font-britanicaRegular pt-[18px] text-[14px] sm:text-[18px] font-regular text-white text-left leading-relaxed max-sm:text-center">
              We build mobile apps with AI at the core — from LLM-powered assistants to on-device models that keep sensitive data private.
            </div>
          </div>
          <div className="col-span-7 max-lg:col-span-12 max-sm:mx-auto max-sm:text-center">
            <div className="flex justify-end max-sm:justify-center">
              <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[65px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
                <span className="text-white">AI-Native Mobile App </span>
                <span className="text-[#F74B1C]">Development </span>
                <span className="text-white">in </span>
                <span className="text-[#F74B1C]">2026</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 pt-10">
          {AI_FEATURES.map((feature, index) => (
            <div key={index} className="col-span-12 md:col-span-6">
              <div className="rounded-xl bg-[#3c3c3c52] border border-[#ffffff30] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-4 h-full">
                <div
                  className={`${CARD_IMAGE_ASPECT} relative w-full overflow-hidden rounded-xl ${feature.imageFit === "cover" ? "bg-[#0a0a0a]" : ""}`}
                >
                  {feature.imageFit === "cover" ? (
                    <>
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[38%] bg-gradient-to-r from-[#7724C1]/70 via-[#7724C1]/25 to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[38%] bg-gradient-to-l from-[#7724C1]/70 via-[#7724C1]/25 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          className="h-[92%] w-auto max-w-[44%] object-contain"
                          src={feature.image}
                          alt={`${feature.title} illustration for AI-native mobile app development`}
                          width={feature.width}
                          height={feature.height}
                        />
                      </div>
                    </>
                  ) : (
                    <Image
                      className="h-full w-full object-cover"
                      src={feature.image}
                      alt={`${feature.title} illustration for AI-native mobile app development`}
                      width={feature.width}
                      height={feature.height}
                    />
                  )}
                </div>
                <div className="font-britanicaBlack font-bold text-[16px] pt-6 sm:text-[16px] md:text-[28px] font-regular text-white text-left pb-1 sm:pb-[5px] break-words">
                  {feature.title}
                </div>
                <div className="font-britanicaRegular text-[14px] pb-4 sm:text-[18px] font-regular text-white text-left leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppIntegrationMobile;
