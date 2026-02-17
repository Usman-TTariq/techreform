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
    <div className="relative pb-[60px]">
      <Image
        className="absolute -top-[20%] left-[0px] w-[35%]"
        src="/images/bk1.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="container relative">
        <div className="grid grid-cols-12 pt-[100px]">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-[22px]">
              <CapsuleLabel
                firstWord="WHAT"
                secondWord="WE"
                thirdWord="BELIEVE"
              />
            </div>
            <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
              <span className="text-white">Our </span>
              <span className="text-[#F74B1C]">Values </span>
            </div>
          </div>
          <div className="col-span-8 col-start-3 text-center ">
            <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
              We believe great marketing is built on three main aspects: clarity, purpose, and performance. At Tech Reform, we believe that every brand has the potential to grow and achieve real success through simplified, user-centric technology.

            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 pt-[52px]">
          {values.map((value, index) => (
            <div className="col-span-4 h-full" key={index}>
              <div className="bg-[#0000004a] h-full flex flex-col justify-between py-[20px] px-6 border rounded-xl border-[#ffffff6b]">
                <div className="text-[32px] max-2xl:text-[26px] font-britanicaBlack leading-[40px] text-white">
                  {value?.title}
                </div>
                <div className=" font-britanicaRegular text-[#fff] text-[16px] max-2xl:text-[18px] pt-[12px]">
                  {value?.desc}
                </div>
                <div className="pt-[32px]">
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
