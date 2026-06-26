import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";
import Image from "next/image";

const CaseStudiesSection = ({
  capsule = { firstWord: "CASE", secondWord: "STUDIES" },
  heading = {
    accent: "Scalable Implementation ",
    line2: "Case Studies Across Industries ",
  },
  primaryImage = "/images/aa1.png",
  secondaryImage = "/images/aa3.png",
  primaryAlt = "Case study dashboard showcase",
  secondaryAlt = "Case study workflow and analytics showcase",
  description = "",
  buttonText = "CASE STUDIES",
  buttonHref,
}) => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[80px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12 justify-between gap-4 items-start">
          <div className="col-span-12 md:col-span-10 min-w-0 order-1">
            <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] lg:text-[50px] md:leading-[42px] font-black pb-4 sm:pb-[26px] text-left break-words">
              {heading.accent ? (
                <span className="text-[#F74B1C]">{heading.accent}</span>
              ) : null}
              {heading.line2 ? (
                <span className="text-white">{heading.line2}</span>
              ) : null}
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 min-w-0 order-2 md:order-2 flex justify-start md:justify-end">
            <CapsuleLabel
              firstWord={capsule.firstWord}
              secondWord={capsule.secondWord}
              thirdWord={capsule.thirdWord}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-0 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-[70px]">
          <div className="col-span-12 md:col-span-6 min-w-0 order-1">
            <div className="h-full flex items-center justify-center">
              <Image
                className="w-full max-w-full h-auto"
                src={primaryImage}
                alt={primaryAlt}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 min-w-0 my-auto order-2">
            <div>
              <Image
                className="w-full max-w-full h-auto"
                src={secondaryImage}
                alt={secondaryAlt}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            {description ? (
              <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] leading-relaxed max-w-full">
                {description}
              </div>
            ) : null}
            <div className="pt-5 sm:pt-[30px]">
              <Button text={buttonText} icon={false} href={buttonHref} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
