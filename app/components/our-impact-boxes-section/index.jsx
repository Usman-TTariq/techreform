import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const OurImpactBoxesSection = () => {
  return (
    <div className="container relative pb-[150px] pt-[50px]">
      <Image
        className="w-[40%] absolute -top-[250px] right-[0%]"
        src="/images/reviewEllipse.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 pb-[30px] justify-center">
          <div className="flex justify-center">
            <CapsuleLabel firstWord="OUR" secondWord="IMPACT" />
          </div>
        </div>
        <div className="col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-[80px] px-[30px] rounded-tl-[120px] hover:bg-[#7724C1] transition-all duration-300">
            <Image
              className="w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hover-logo.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <Image
              className="w-[35%] h-full absolute top-0 right-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hovertext.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <div className="text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-[40px] text-black text-center transition-all duration-300 group-hover:text-white">
              20+ Years
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Years of Experience
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-[80px] px-[30px] hover:bg-[#7724C1] transition-all duration-300">
            <Image
              className="w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hover-logo.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <Image
              className="w-[35%] h-full absolute top-0 right-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hovertext.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <div className="text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-[40px] text-black text-center transition-all duration-300 group-hover:text-white">
              150+
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Inhouse App Experts
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-[80px] px-[30px] hover:bg-[#7724C1] transition-all duration-300">
            <Image
              className="w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hover-logo.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <Image
              className="w-[35%] h-full absolute top-0 right-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hovertext.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <div className="text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-[40px] text-black text-center transition-all duration-300 group-hover:text-white">
              30+
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Industry Verticals
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-[80px] px-[30px] rounded-tr-[120px] hover:bg-[#7724C1] transition-all duration-300">
            <Image
              className="w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hover-logo.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <Image
              className="w-[35%] h-full absolute top-0 right-0 opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-tr-[130px]"
              src="/images/hovertext.png"
              alt="Hero Background"
              width={1000}
              height={1000}
            />
            <div className="text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-[40px] text-black text-center transition-all duration-300 group-hover:text-white">
              350+
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Live Apps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpactBoxesSection;
