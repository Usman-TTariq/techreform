import Image from "next/image";

const ReviewSections = () => {
  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-[120px] px-4 sm:px-4">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src="/images/reviewEllipse.png"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
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
            <div>
              <Image
                className="w-[40%] m-auto transition-all duration-300 group-hover:brightness-[15]"
                src="/images/clutch-logo.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 sm:pt-[10px]">
              <Image
                className="w-[80px] sm:w-[100px] transition-all duration-300 group-hover:brightness-[2]"
                src="/images/stars.png"
                alt=""
                width={1000}
                height={1000}
              />
              <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] transition-all duration-300 group-hover:text-white">
                20K reviews
              </div>
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
              3+ Years
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Proven Track Record
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
              1.5k+
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Projects We’ve Done
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
          <div className="group relative h-full bg-white rounded-2xl py-10 sm:py-12 md:py-16 lg:py-[80px] px-5 sm:px-6 md:px-[30px] rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] hover:bg-[#7724C1] transition-all duration-300">
            <Image
              className="w-[120px] absolute -top-[55px] left-[50%] translate-x-[-50%] opacity-0 transition-all duration-300 group-hover:opacity-100"
              src="/images/hover-logo.png"
              alt=""
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
              3 Mins
            </div>
            <div className="font-britanicaRegular text-[#373636] text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] text-center transition-all duration-300 group-hover:text-white">
              Average Answer Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSections;
