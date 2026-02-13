import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const WhyTechReformsSection = () => {
  return (
    <div className="relative pb-[50px]">
      <Image
        className="absolute -top-[10%] left-[0px] w-[40%]"
        src="/images/bk2.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -top-[10%] right-[0px] w-[40%]"
        src="/images/bk3.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-[22px]">
              <CapsuleLabel
                firstWord="WHY"
                secondWord="CHOOSE"
                thirdWord="US"
              />
            </div>
            <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
              <span className="text-white">Why Tech </span>
              <span className="text-[#F74B1C]">Reforms? </span>
            </div>
          </div>
          <div className="col-span-8 col-start-3 text-center">
            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              Game apps that keep players engaged, paying, and returning. We
              shape mechanics, progression, and content updates around your
              audience. Expect smooth play, fair rewards, and store launches
              handled end-to-end today.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 pt-[50px]">
          <div className="col-span-4">
            <div className="text-center pb-[40px]">
              <Image
                className="w-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-[28px] max-2xl:text-[24px] font-britanicaBlack leading-[40px] text-white text-center">
                Strategy Before Execution
              </div>
              <div className=" font-britanicaRegular text-[#fff] text-[16px] max-2xl:text-[18px] pt-[12px] text-center">
                We never jump into marketing without a clear plan. Every
                campaign is built on research, audience insights, and a defined
                growth roadmap.
              </div>
            </div>
            <div className="text-center">
              <Image
                className="w-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-[28px] max-2xl:text-[24px] font-britanicaBlack leading-[40px] text-white text-center">
                Premium Creative Execution
              </div>
              <div className=" font-britanicaRegular text-[#fff] text-[16px] max-2xl:text-[18px] pt-[12px] text-center">
                From visuals to messaging, everything we create is designed to
                stand out, capture attention, and drive action in competitive
                markets.
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <Image
                className="w-full m-auto"
                src="/images/women.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-center pb-[40px]">
              <Image
                className="w-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-[28px] max-2xl:text-[24px] font-britanicaBlack leading-[40px] text-white text-center">
                Results That Matter
              </div>
              <div className=" font-britanicaRegular text-[#fff] text-[16px] max-2xl:text-[18px] pt-[12px] text-center">
                We focus on leads, conversions, and revenue — not vanity
                metrics. Our goal is to deliver measurable impact that moves
                your business forward.
              </div>
            </div>
            <div className="text-center">
              <Image
                className="w-[50px] m-auto"
                src="/images/bulb-icon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-[28px] max-2xl:text-[24px] font-britanicaBlack leading-[40px] text-white text-center">
                Data-Driven Decisions
              </div>
              <div className=" font-britanicaRegular text-[#fff] text-[16px] max-2xl:text-[18px] pt-[12px] text-center">
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
