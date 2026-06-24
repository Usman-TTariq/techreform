import ShopCartIcon from "./svg/shop-cart-icon";

const BudgetPricingCard = ({ title, price, timeline }) => {
  return (
    <div className="min-w-0">
      <div className="w-full h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="flex items-start gap-4 sm:gap-5 lg:gap-6 pt-6 sm:pt-8">
        <ShopCartIcon className="w-10 h-10 sm:w-[45px] shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="font-britanicaRegular text-base sm:text-[18px] lg:text-[22px] xl:text-[26px] font-semibold text-white leading-snug">
            {title}
          </div>
          <div className="font-britanicaRegular text-base sm:text-[18px] lg:text-[22px] xl:text-[26px] font-semibold text-white pt-3 sm:pt-4">
            {price}
          </div>
          <div className="font-britanicaRegular text-base sm:text-[18px] lg:text-[22px] xl:text-[26px] font-semibold text-[#FF5A2D] pt-3 sm:pt-4">
            {timeline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPricingCard;
