import Image from "next/image";
import Button from "../common/button";

const GeneralHeroSection = ({ firstWord, secondWord, thirdWord, forthWord, fifthWord, para, para2, para3, buttonText }) => {
  return (
    <div className="relative w-full min-w-0 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] pb-8 sm:pb-12 md:pb-0 overflow-hidden">
      <Image
        className="absolute -top-[10%] right-4 w-[28%] sm:w-[32%] md:right-12 md:w-[35%] lg:right-[100px] hidden sm:block"
        src="/images/frame.png"
        alt=""
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -bottom-[15%] left-0 w-[28%] sm:w-[30%] hidden sm:block"
        src="/images/frame2.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12 pt-8 sm:pt-[80px] md:pt-[100px]">
          <div className="col-span-12 text-center min-w-0">
            <div className="font-britanicaBlack text-[22px] leading-[1.25] sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[52px] font-black break-words">
              <span className="text-white">{firstWord} </span>
              <span className="text-[#F74B1C]">{secondWord} </span>
              <span className="text-white">{thirdWord}</span>
              <br />
              <span className="text-white">{forthWord} </span>
              <span className="text-[#F74B1C]">{fifthWord}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center min-w-0">
            <div className="font-britanicaRegular text-[14px] sm:text-[17px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full sm:max-w-3xl mx-auto leading-relaxed">
              {para && <>{para} <br /></>}
              {para2 && <>{para2} <br /></>}
              {para3}
            </div>
            <div className="pt-5 sm:pt-[30px] flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0">
                <Button text={buttonText} icon={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeroSection;
