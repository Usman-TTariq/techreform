import Image from "next/image";
import Button from "../common/button";

const GeneralHeroSection = () => {
  return (
    <div className="relative h-[80vh]">
      <Image
        className="absolute -top-[10%] right-[100px] w-[35%]"
        src="/images/frame.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -bottom-[15%] left-[0px] w-[30%]"
        src="/images/frame2.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-12 pt-[100px]">
          <div className="col-span-12 text-center">
            <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
              <span className="text-white">We </span>
              <span className="text-[#F74B1C]">Create Marketing </span>
              <span className="text-white">That</span>
              <br />
              <span className="text-white">Drives Real </span>
              <span className="text-[#F74B1C]">Growth</span>
            </div>
          </div>
          <div className="col-span-8 col-start-3 text-center ">
            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              We don’t just run campaigns — we build brands, tell powerful
              stories, and deliver measurable results. By combining strategy,
              creativity, and data, we help businesses stand out, connect with
              their audience, and grow with confidence.
            </div>
            <div className="pt-[30px] flex justify-center">
              <Button text="Schedule a Free Consultation" icon={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeroSection;
