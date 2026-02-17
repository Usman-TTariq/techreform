import Image from "next/image";
import Button from "../common/button";

const GeneralHeroSection = ({firstWord, secondWord, thirdWord, forthWord, fifthWord, para, para2, para3, buttonText}) => {
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
              <span className="text-white">{firstWord} </span>
              <span className="text-[#F74B1C]">{secondWord} </span>
              <span className="text-white">{thirdWord}</span>
              <br />
              <span className="text-white">{forthWord} </span>
              <span className="text-[#F74B1C]">{fifthWord}</span>
            </div>
          </div>
          <div className="col-span-8 col-start-3 text-center ">
            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              {para} <br />
              {para2} <br />
              {para3}
            </div>
            <div className="pt-[30px] flex justify-center">
              <Button text={buttonText} icon={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeroSection;
