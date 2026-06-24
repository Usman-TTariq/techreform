import CapsuleLabel from "../common/capsule-label";
import BudgetPricingGrid from "./budget-pricing-grid";

const AR_BUDGET_ITEMS = [
  {
    title: (
      <>
        AR-Powered Try-On <br /> Ecommerce App
      </>
    ),
    price: "From $25,000 - $40,000",
    timeline: "~ 3 months",
  },
  {
    title: (
      <>
        AR-Powered Training <br /> App
      </>
    ),
    price: "From $30,000",
    timeline: "~ 3 months",
  },
  {
    title: (
      <>
        AR Software For <br /> Maintenance & Repair
      </>
    ),
    price: "From $70,000 - $150,000",
    timeline: "~ 3-6 months",
  },
  {
    title: (
      <>
        AR Software For <br /> Manufacturing Process
      </>
    ),
    price: "From $100,000",
    timeline: "~ 3-6 months",
  },
];

const DevelopingARSoftware = () => {
  return (
    <div className="relative pb-[100px] max-sm:pb-[20px]">
      <div className="container px-4 sm:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="DEVELOPING" secondWord="AR" thirdWord="SOFTWARE" />
            </div>
            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
              <span className="text-white">Budget & Time </span>
              <span className="text-[#F74B1C]">Needed To</span>
              <br />
              <span className="text-[#F74B1C]">Develop </span>
              <span className="text-white">AR Software</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
              All AR applications aren&apos;t similar; they vary in complexity depending on their
              features, functionality, and the amount of 3D or graphical content involved. If
              you&apos;re planning to hire AR developers, the cost of AR app development typically
              ranges from $25,000 to $150,000. So, choose advanced AR solutions with simpler
              application pricing.
            </div>
          </div>
        </div>
        <BudgetPricingGrid items={AR_BUDGET_ITEMS} />
      </div>
    </div>
  );
};

export default DevelopingARSoftware;
