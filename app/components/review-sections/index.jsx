import Image from "next/image";
import { ikUrl } from "@/app/utils/imagekit";

const CARDS = [
  {
    type: "clutch",
    label: "Clutch reviews",
    rounded: "rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px]",
  },
  {
    type: "stat",
    value: "5+ Years",
    label: "Proven Track Record",
    rounded: "",
  },
  {
    type: "stat",
    value: "350+",
    label: "Projects We've Done",
    rounded: "",
  },
  {
    type: "stat",
    value: "3 Mins",
    label: "Average Answer Time",
    rounded: "rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px]",
  },
];

const ReviewSections = () => {
  return (
    <div className="container relative pb-16 sm:pb-24 md:pb-[100px] lg:pb-[150px] -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-[120px] px-4 sm:px-4 review-section">
      <Image
        className="w-[50%] sm:w-[45%] md:w-[40%] absolute -top-[120px] sm:-top-[180px] md:-top-[250px] right-0 opacity-80"
        src={ikUrl("reviewEllipse.png", 320, 40)}
        alt="Soft gradient ellipse behind customer reviews section"
        width={320}
        height={320}
        quality={40}
        sizes="(max-width: 640px) 50vw, 40vw"
        loading="lazy"
      />
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {CARDS.map((card, index) => (
          <div key={card.label} className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            <input
              type="radio"
              name="review-highlight"
              id={`review-card-${index}`}
              defaultChecked={index === 0}
              className="review-radio sr-only"
            />
            <label
              htmlFor={`review-card-${index}`}
              className={`review-card group relative flex h-full cursor-pointer flex-col rounded-2xl px-5 py-10 transition-colors duration-300 touch-manipulation sm:px-6 sm:py-12 md:px-[30px] md:py-16 lg:py-[80px] ${card.rounded}`}
            >
              <Image
                className="review-accent review-accent-logo absolute -top-[55px] left-[50%] w-[120px] h-auto translate-x-[-50%] transition-opacity duration-300"
                src="/images/hover-logo.png"
                alt={`Tech Reforms logo accent for ${card.label} review card`}
                width={160}
                height={162}
                sizes="120px"
                loading="lazy"
              />
              <Image
                className={`review-accent absolute top-0 right-0 h-auto max-h-full w-[35%] object-contain object-right-top transition-opacity duration-300 ${index === 3 ? "rounded-tr-[130px]" : ""}`}
                src="/images/hovertext.png"
                alt={`Decorative hover highlight for ${card.label}`}
                width={127}
                height={257}
                sizes="35vw"
                loading="lazy"
              />
              {card.type === "clutch" ? (
                <>
                  <div>
                    <Image
                      className="review-clutch-logo m-auto h-auto w-[40%] transition-[filter] duration-300"
                      src="/images/clutch-logo.png"
                      alt="Clutch B2B ratings and reviews platform logo"
                      width={358}
                      height={102}
                      sizes="40vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2 sm:pt-[10px] max-2xl:flex-col">
                    <Image
                      className="review-stars h-auto w-[80px] transition-[filter] duration-300 sm:w-[100px]"
                      src="/images/stars.png"
                      alt="Five star rating graphic"
                      width={360}
                      height={72}
                      sizes="100px"
                      loading="lazy"
                    />
                    <div className="review-caption font-britanicaRegular text-base sm:text-[18px] md:text-[22px] max-2xl:text-[18px] transition-colors duration-300">
                      4.9 reviews
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="review-stat-value text-center font-britanicaBlack text-[36px] leading-tight transition-colors duration-300 sm:text-[40px] md:text-[46px] max-2xl:text-[36px]">
                    {card.value}
                  </div>
                  <div className="review-stat-label text-center font-britanicaRegular text-base transition-colors duration-300 sm:text-[18px] md:text-[22px] max-2xl:text-[18px]">
                    {card.label}
                  </div>
                </>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSections;
