import CapsuleLabel from "../common/capsule-label";
import BudgetPricingGrid from "../developing-ar-software/budget-pricing-grid";

const VR_BUDGET_ITEMS = [
  {
    title: (
      <>
        VR-Powered Virtual <br /> Training App
      </>
    ),
    price: "From $35,000 - $55,000",
    timeline: "~ 3-4 months",
  },
  {
    title: (
      <>
        VR Software For <br /> Product Simulation & Prototyping
      </>
    ),
    price: "From $45,000 - $90,000",
    timeline: "~ 4-6 months",
  },
  {
    title: (
      <>
        VR Virtual Showroom <br /> & Experience App
      </>
    ),
    price: "From $90,000 - $200,000",
    timeline: "~ 6-12 months",
  },
  {
    title: (
      <>
        VR Software For Medical <br /> & Healthcare Training
      </>
    ),
    price: "From $120,000+",
    timeline: "~ 6-12 months",
  },
];

const DevelopingVRSoftware = () => {
  return (
    <div className="relative pb-[100px] max-sm:pb-[20px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="DEVELOPING" secondWord="VR" thirdWord="SOFTWARE" />
            </div>
            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Budget & Time </span>
              <span className="text-[#F74B1C]">Needed To</span>
              <br />
              <span className="text-[#F74B1C]">Develop </span>
              <span className="text-white">VR Software</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
              Our VR consulting services help businesses plan and build impactful virtual experiences
              with the right type of approach, strategy, and technology, while our simplified VR
              development for startups turns innovative ideas into scalable VR products ready for
              real users. So, choose advanced VR development with simpler application pricing.
            </div>
          </div>
        </div>
        <BudgetPricingGrid items={VR_BUDGET_ITEMS} />
      </div>
    </div>
  );
};

export default DevelopingVRSoftware;
