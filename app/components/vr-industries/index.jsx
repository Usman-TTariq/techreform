"use client";

import CapsuleLabel from "../common/capsule-label";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Button from "../common/button";
import Image from "next/image";

const TAG_CLASS =
  "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50";

const industries = [
  {
    title: "Manufacturing & Industrial",
    description:
      "Assembly guidance, equipment maintenance training, safety protocol simulation. 60% faster training vs classroom. Deployed on Meta Quest — no PC needed on factory floor.",
    tags: ["Safety Training", "Assembly", "Meta Quest"],
    image: "/images/ar1.jpeg",
  },
  {
    title: "Healthcare & Medical",
    description:
      "Surgical simulation, anatomy training, patient education, and PTSD therapy. Risk-free, repeatable medical scenarios built on PC VR and HoloLens 2.",
    tags: ["Surgical Sim", "Anatomy", "HoloLens"],
    image: "/images/ar2.jpeg",
  },
  {
    title: "Automotive",
    description:
      "Virtual showrooms, design review, and sales configurators. Customers see their exact vehicle spec in photorealistic VR before production. Built on Unreal Engine 5.",
    tags: ["Virtual Showroom", "Configurator", "Unreal 5"],
    image: "/images/ar3.jpeg",
  },
  {
    title: "Real Estate & Architecture",
    description:
      "Virtual property walkthroughs, off-plan sales tours, and interior customization before construction. Sell properties before they're built — Meta Quest deployable.",
    tags: ["Walkthroughs", "Off-plan Sales", "Meta Quest"],
    image: "/images/ar4.jpeg",
  },
  {
    title: "Education & Training",
    description:
      "Immersive classrooms, skill-based simulations, and corporate onboarding. SCORM and xAPI ready for LMS integration — measurable learning outcomes.",
    tags: ["LMS Ready", "SCORM", "xAPI"],
    image: "/images/ar2.jpeg",
  },
  {
    title: "Gaming & Entertainment",
    description:
      "Immersive VR game environments, multiplayer experiences, and interactive entertainment. PSVR2, SteamVR, and Meta Quest — full platform coverage.",
    tags: ["PSVR2", "SteamVR", "Multiplayer"],
    image: "/images/ar3.jpeg",
  },
];

const VRIndustries = () => {
  return (
    <div className="relative pt-[100px] max-sm:pt-[40px] pb-[50px] max-sm:pb-[30px]">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-12 justify-between gap-4">
            <div className="col-span-8 max-lg:col-span-12">
              <div className="flex justify-start max-sm:justify-center">
                <div className="font-britanicaBlack text-[28px] leading-tight sm:text-[36px] md:text-[44px] lg:text-[45px] 2xl:text-[55px] lg:leading-[62px] font-black pb-4 sm:pb-[26px] text-left max-sm:text-center">
                  <span className="text-[#F74B1C]">Industries </span>
                  <span className="text-white">Where We Achieve</span>
                  <br />
                  <span className="text-white">The </span>
                  <span className="text-[#F74B1C]">Highest Impact </span>
                  <span className="text-white">With VR</span>
                </div>
              </div>
            </div>
            <div className="col-span-4 max-lg:col-span-12">
              <div className="flex justify-start max-sm:justify-center">
                <CapsuleLabel firstWord="OUR" secondWord="INDUSTRIES" />
              </div>
              <div className="font-britanicaRegular pt-[20px] text-[18px] font-regular text-white text-left max-sm:text-center">
                From factory floor safety training to surgical simulation and virtual showrooms —
                we build VR experiences tailored to your industry&apos;s specific use cases.
              </div>
            </div>
          </div>
          <div className="pt-[40px] max-sm:pt-[10px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={15}
              slidesPerView={1}
              navigation
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {industries.map((industry) => (
                <SwiperSlide key={industry.title}>
                  <div className="rounded-xl h-full max-2xl:min-h-[600px] max-sm:min-h-[400px] bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[20px]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="pb-[10px]">
                        <Image
                          className="w-full rounded-2xl"
                          src={industry.image}
                          alt={`${industry.title} industry visual`}
                          width={1000}
                          height={1000}
                        />
                        <div className="flex justify-center -mt-[30px]">
                          <Image
                            className="w-[85px] h-[85px]"
                            src="/images/globe-icon.png"
                            alt=""
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                      <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-left max-sm:text-center pb-1 sm:pb-[5px]">
                        {industry.title}
                      </div>
                      <div className="font-britanicaRegular text-[16px] font-regular text-white text-left max-sm:text-center">
                        {industry.description}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {industry.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-britanicaRegular ${TAG_CLASS}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-[30px] flex justify-start max-sm:justify-center">
                        <Button text="Learn More" icon={false} onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRIndustries;
