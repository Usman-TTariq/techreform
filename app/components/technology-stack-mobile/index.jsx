import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const TechnologyStackMobile = ({
  capsuleFirst = "TECHNOLOGIES",
  capsuleSecond = "WE USE",
  titleAccent = "Technology ",
  titleMain = "Stack",
  subtitle,
  description,
}) => {
  return (
    <div className="relative mb-[140px] max-sm:mb-[50px]">
      <div className="container px-4 sm:px-4">
        <div className="bg-black overflow-hidden rounded-[50px] max-sm:rounded-3xl">
          <div className="grid grid-cols-12 px-[50px] py-[60px] max-sm:px-[20px] max-sm:py-[30px] gap-6 lg:gap-4">
            <div className="col-span-3 max-lg:col-span-12 max-sm:mx-auto max-sm:text-center lg:flex lg:items-start">
              <CapsuleLabel firstWord={capsuleFirst} secondWord={capsuleSecond} />
            </div>
            <div className="col-span-9 max-lg:col-span-12 min-w-0">
              <div className="flex justify-end max-sm:justify-center max-sm:pt-[20px] lg:pt-0">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[55px] lg:leading-[52px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
                  <span className="text-[#F74B1C]">{titleAccent}</span>
                  <span className="text-white">{titleMain}</span>
                </div>
              </div>
              {subtitle && (
                <p className="font-britanicaBlack text-[18px] sm:text-[22px] md:text-[26px] text-white text-right max-sm:text-center leading-tight pb-3 sm:pb-4">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="font-britanicaRegular text-[15px] sm:text-[17px] md:text-[18px] text-white/90 text-right max-sm:text-center leading-relaxed max-w-3xl ml-auto max-sm:mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div>
            <Image
              className="w-full"
              src="/images/techstack.png"
              alt="Technology stack logos and tools used for mobile app development"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackMobile;
