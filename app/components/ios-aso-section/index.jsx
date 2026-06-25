import {
  BarChart3,
  Globe,
  ImageIcon,
  Search,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const ASO_SERVICES = [
  {
    title: "Keyword Optimization",
    description:
      "App Store title, subtitle, and keyword field optimized for maximum search visibility. Research-backed keyword selection.",
    Icon: Search,
  },
  {
    title: "Screenshot & Preview",
    description:
      "Conversion-optimized App Store screenshots for all iPhone and iPad sizes. Preview video scripted and produced.",
    Icon: ImageIcon,
  },
  {
    title: "Ratings & Reviews",
    description:
      "StoreKit 2 in-app review prompts integrated at optimal moments — maximize 5-star ratings without violating Apple guidelines.",
    Icon: Star,
  },
  {
    title: "Conversion Rate",
    description:
      "A/B testing of app icon, screenshots, and description via App Store Connect Product Page Optimization.",
    Icon: BarChart3,
  },
  {
    title: "Localization",
    description:
      "App Store listing localized for target markets — metadata, screenshots, and app content translated for global reach.",
    Icon: Globe,
  },
  {
    title: "Privacy & Compliance",
    description:
      "Privacy nutrition labels, App Tracking Transparency, and data usage disclosures — compliant with Apple guidelines and GDPR.",
    Icon: Shield,
  },
];

const cardClass =
  "group flex h-full flex-col rounded-2xl border-2 border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-7 transition-all duration-200 hover:border-[#C380FE] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const IosAsoSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0 pt-10">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[15%] left-0 opacity-50 sm:opacity-70 pointer-events-none"
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
              <CapsuleLabel firstWord="APP STORE" secondWord="ASO" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">App Store </span>
              <span className="text-[#F74B1C]">Optimization (ASO) </span>
              <span className="text-white">— Included With Every iOS App</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              Buyers searching for iOS app development services also care about App Store
              visibility. We include ASO with every launch — keywords, screenshots, ratings,
              localization, and privacy compliance handled from day one.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 pt-8 sm:pt-10 md:pt-[52px] items-stretch">
          {ASO_SERVICES.map(({ title, description, Icon }) => (
            <div key={title} className="col-span-12 sm:col-span-6 lg:col-span-4 flex min-w-0">
              <article className={cardClass}>
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50 group-hover:bg-[#7724C1]/45 transition-colors">
                  <Icon
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] text-[#C380FE]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <h3 className="font-britanicaBlack text-[18px] sm:text-[20px] md:text-[22px] text-white pt-4 sm:pt-5 pb-2 sm:pb-3 leading-snug group-hover:text-[#F74B1C] transition-colors">
                  {title}
                </h3>
                <p className="font-britanicaRegular flex-1 text-[13px] sm:text-[14px] md:text-[15px] text-white/85 leading-relaxed">
                  {description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosAsoSection;
