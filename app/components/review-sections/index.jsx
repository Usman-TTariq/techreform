import Image from "next/image";

const ReviewSections = () => {
  return (
    <div className="container relative pb-[150px] -mt-[120px]">
      <Image
        className="w-[40%] absolute -top-[250px] right-[0%]"
        src="/images/reviewEllipse.png"
        alt="Hero Background"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3">
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
            <div>
              <Image
                className="w-[40%] m-auto transition-all duration-300 group-hover:brightness-[15]"
                src="/images/clutch-logo.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex items-center justify-center gap-2 pt-[10px]">
              <Image
                className="w-[100px] transition-all duration-300 group-hover:brightness-[2]"
                src="/images/stars.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] transition-all duration-300 group-hover:text-white">
                20K reviews
              </div>
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
              3+ Years
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Proven Track Record
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
              1.5k+
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Projects We’ve Done
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
              3 Mins
            </div>
            <div className=" font-britanicaRegular text-[#373636] text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Average Answer Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSections;
