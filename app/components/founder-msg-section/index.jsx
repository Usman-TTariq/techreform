import Image from "next/image";

const FounderMsgSection = () => {
  return (
    <div className="relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-5">
            <div>
              <Image
                className="w-[100%]"
                src="/images/founder-img.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-7 my-auto">
            <div>
              <div className="font-britanicaBlack text-[50px] leading-[52px] font-black">
                <span className="text-white">Message From </span>
                <span className="text-[#F74B1C]">The Founder</span>
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                <strong>Marketing is more than ads and visuals.</strong>
                <br />
                It’s about understanding people — how they think, feel, and make
                decisions.
                <br />
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                <strong>This agency was built with one clear belief:</strong>
                <br />
                every brand has a unique story, and our job is to communicate it
                to the right audience in the right way.
                <br />
              </div>
              <div className="font-britanicaRegular text-[20px] font-regular text-white pt-[22px]">
                <strong>We don’t see clients as projects.</strong>
                <br />
                We see them as long-term growth partners.
                <br />
              </div>
              <div className="font-britanicaRegular text-[30px] font-regular text-[#FF4A00] pt-[22px]">
                Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMsgSection;
