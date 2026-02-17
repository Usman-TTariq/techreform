import Image from "next/image";
import Button from "../common/button";
import CapsuleLabel from "../common/capsule-label";

const OurValuesSection = () => {
  const values = [
    {
      title: "People-Driven Marketing",
      desc: "Development isn’t just about logistics; it's about delivering efficiency that is accessible as well. Tech Reforms simplifies usability through modern design and seamless innovation.",
    },
    {
      title: "Performance Mindset",
      desc: "Every phase of the development and design process is done with intent in mind. We value what the user requires, whether it’s efficiency, an awe-inspiring visual, or smooth gameplay.",
    },
    {
      title: "Long-Term Partnerships",
      desc: "We don’t chase quick wins. We build lasting relationships that support sustainable brand growth.",
    },
  ];
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-[60px]">
      <Image
        className="absolute -top-[20%] left-0 w-[50%] sm:w-[40%] md:w-[35%] opacity-60"
        src="/images/bk1.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="container relative px-4 sm:px-4">
        <div className="grid grid-cols-12 pt-12 sm:pt-16 md:pt-[100px]">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel
                firstWord="WHAT"
                secondWord="WE"
                thirdWord="BELIEVE"
              />
            </div>
            <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[38px] md:text-[50px] md:leading-[52px] font-black">
              <span className="text-white">Our </span>
              <span className="text-[#F74B1C]">Values </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="font-britanicaRegular text-[15px] sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px] max-w-full">
              We believe great marketing is built on three main aspects: clarity, purpose, and performance. At Tech Reform, we believe that every brand has the potential to grow and achieve real success through simplified, user-centric technology.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-3 pt-8 sm:pt-12 md:pt-[52px]">
          {values.map((value, index) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 h-full min-w-0" key={index}>
              <div className="bg-[#0000004a] h-full flex flex-col justify-between py-5 sm:py-5 md:py-[20px] px-4 sm:px-5 md:px-6 border rounded-xl border-[#ffffff6b]">
                <div className="text-[22px] leading-tight sm:text-[26px] md:text-[32px] md:leading-[40px] font-britanicaBlack text-white break-words">
                  {value?.title}
                </div>
                <div className="font-britanicaRegular text-[#fff] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] pt-3 sm:pt-[12px] leading-relaxed">
                  {value?.desc}
                </div>
                <div className="pt-5 sm:pt-6 md:pt-[32px]">
                  <Button text="Learn More" icon={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;
