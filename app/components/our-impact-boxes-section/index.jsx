import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const OurImpactBoxesSection = () => {
  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] pt-8 sm:pt-10 md:pt-[50px] px-4 sm:px-4">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src="/images/reviewEllipse.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        <div className="col-span-12 pb-6 sm:pb-[30px] flex justify-center">
          <CapsuleLabel firstWord="OUR" secondWord="IMPACT" />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px] hover:bg-[#7724C1] transition-all duration-300">
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
            <div className="text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-black text-center transition-all duration-300 group-hover:text-white">
              20+
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Years of Experience
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] hover:bg-[#7724C1] transition-all duration-300">
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
            <div className="text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-black text-center transition-all duration-300 group-hover:text-white">
              150+
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Inhouse App Experts
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] hover:bg-[#7724C1] transition-all duration-300">
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
            <div className="text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-black text-center transition-all duration-300 group-hover:text-white">
              30+
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Industry Verticals
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] hover:bg-[#7724C1] transition-all duration-300">
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
            <div className="text-[36px] sm:text-[40px] md:text-[46px] max-2xl:text-[36px] font-britanicaBlack leading-tight text-black text-center transition-all duration-300 group-hover:text-white">
              350+
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Live Apps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpactBoxesSection;
