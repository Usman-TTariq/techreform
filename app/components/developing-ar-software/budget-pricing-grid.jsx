import BudgetPricingCard from "./budget-pricing-card";

const BudgetPricingGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 xl:gap-x-16 gap-y-10 lg:gap-y-14 pt-10 sm:pt-14 md:pt-16">
      {items.map((item) => (
        <BudgetPricingCard
          key={`${item.price}-${item.timeline}`}
          title={item.title}
          price={item.price}
          timeline={item.timeline}
        />
      ))}
    </div>
  );
};

export default BudgetPricingGrid;
