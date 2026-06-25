import { Check } from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const MODELS = [
  {
    title: "Dedicated Game Developer",
    price: "$30",
    priceSuffix: "/ hour onwards",
    description:
      "One pre-vetted Unity, Unreal, or mobile game developer working exclusively on your project. Full-time, no context-switching, direct access.",
    features: [
      "160 hrs/month dedicated",
      "Daily standups & build reviews",
      "Engine-specific specialist",
      "2-week trial, no lock-in",
      "NDA signed before kick-off",
    ],
    popular: false,
  },
  {
    title: "Full Game Dev Team",
    price: "Custom",
    priceSuffix: "/ project scope",
    description:
      "Developer + game artist + QA + project manager. A complete production pod that owns the game from first prototype to App Store submission.",
    features: [
      "Lead dev + artist + QA engineer",
      "Sprint-based delivery (2-week)",
      "Game design document included",
      "App Store & Play Store submission",
      "90-day post-launch support",
    ],
    popular: true,
  },
  {
    title: "Staff Augmentation",
    price: "Flexible",
    priceSuffix: "/ monthly billing",
    description:
      "Plug a TechReforms game engineer into your existing studio team. We handle contracts and compliance — you get the developer, fully integrated.",
    features: [
      "Works in your timezone",
      "Uses your tools (Jira, Slack, etc.)",
      "Scale up or down monthly",
      "Background-verified specialists",
      "Instant replacement guarantee",
    ],
    popular: false,
  },
];

const HireGameEngagementModelsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[15%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
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
              <CapsuleLabel firstWord="ENGAGEMENT" secondWord="MODELS" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Hire the Way Your </span>
              <span className="text-[#F74B1C]">Game Project Demands</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Whether you need one specialist or a full game dev squad — pick the model that matches
              your project size and control preferences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {MODELS.map((model) => (
            <div key={model.title} className="col-span-12 lg:col-span-4 flex">
              <div
                className={`relative flex h-full w-full flex-col rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden ${
                  model.popular
                    ? "border-2 border-[#C380FE] bg-[linear-gradient(145deg,_#111B3A_0%,_#12141F_84%)] shadow-[0_0_20px_rgba(195,128,254,0.12)]"
                    : "border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] hover:border-[#C380FE] transition-colors"
                }`}
              >
                {model.popular && (
                  <span className="absolute top-4 right-[-28px] rotate-45 bg-gradient-to-r from-[#7724C1] to-[#A855F7] px-8 py-1 text-[9px] font-britanicaExtraBold tracking-wider text-white">
                    POPULAR
                  </span>
                )}
                <h3 className="font-britanicaBlack text-[19px] sm:text-[20px] text-white leading-tight">
                  {model.title}
                </h3>
                <p className="font-britanicaBlack text-[26px] text-white pt-3">
                  {model.price}
                  <span className="text-[13px] font-britanicaRegular text-white/45 ml-1">
                    {model.priceSuffix}
                  </span>
                </p>
                <p className="font-britanicaRegular text-[14px] text-white/85 pt-3 pb-5 leading-relaxed flex-1">
                  {model.description}
                </p>
                <ul className="space-y-2.5">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 font-britanicaRegular text-[14px] text-white/75"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#66BB6A] mt-0.5" strokeWidth={2.5} aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireGameEngagementModelsSection;
