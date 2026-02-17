import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const WhyTechReformsSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[50px] overflow-hidden">
      <Image
        className="absolute -top-[10%] left-0 w-[50%] sm:w-[40%] opacity-60"
        src="/images/bk2.png"
        alt=""
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -top-[10%] right-0 w-[50%] sm:w-[40%] opacity-60"
        src="/images/bk3.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 pt-10 sm:pt-12 md:pt-0">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel
                firstWord="WHY"
                secondWord="CHOOSE"
                thirdWord="US"
              />
            </div>
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
              <span className="text-white">Why Tech </span>
              <span className="text-[#F74B1C]">Reforms? </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
              Game apps that keep players engaged, paying, and returning. We
              shape mechanics, progression, and content updates around your
              audience. Expect smooth play, fair rewards, and store launches
              handled end-to-end today.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 sm:gap-8 pt-8 sm:pt-10 md:pt-[50px]">
          <div className="col-span-12 md:col-span-4 order-1 min-w-0">
            <div className="text-center pb-8 sm:pb-6 md:pb-[40px]">
              <Image
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="text-[20px] leading-tight sm:text-[24px] md:text-[28px] md:leading-[40px] font-britanicaBlack text-white text-center pt-2">
                Strategy Before Execution
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] pt-2 sm:pt-[12px] text-center leading-relaxed">
                We never jump into marketing without a clear plan. Every
                campaign is built on research, audience insights, and a defined
                growth roadmap.
              </div>
            </div>
            <div className="text-center">
              <Image
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="text-[20px] leading-tight sm:text-[24px] md:text-[28px] md:leading-[40px] font-britanicaBlack text-white text-center pt-2">
                Premium Creative Execution
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] pt-2 sm:pt-[12px] text-center leading-relaxed">
                From visuals to messaging, everything we create is designed to
                stand out, capture attention, and drive action in competitive
                markets.
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 order-2 min-w-0 flex items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-none mx-auto">
              <Image
                className="w-full h-auto"
                src="/images/women.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 order-3 min-w-0">
            <div className="text-center pb-8 sm:pb-6 md:pb-[40px]">
              <Image
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="text-[20px] leading-tight sm:text-[24px] md:text-[28px] md:leading-[40px] font-britanicaBlack text-white text-center pt-2">
                Results That Matter
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] pt-2 sm:pt-[12px] text-center leading-relaxed">
                We focus on leads, conversions, and revenue — not vanity
                metrics. Our goal is to deliver measurable impact that moves
                your business forward.
              </div>
            </div>
            <div className="text-center">
              <Image
                className="w-10 h-10 sm:w-[50px] sm:h-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="text-[20px] leading-tight sm:text-[24px] md:text-[28px] md:leading-[40px] font-britanicaBlack text-white text-center pt-2">
                Data-Driven Decisions
              </div>
              <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] pt-2 sm:pt-[12px] text-center leading-relaxed">
                We use real-time data and performance insights to optimize
                campaigns and maximize return on investment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTechReformsSection;
