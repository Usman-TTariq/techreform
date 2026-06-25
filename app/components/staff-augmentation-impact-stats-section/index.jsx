import ImpactStatsColumns from "../impact-stats-columns";

const STAFF_AUG_IMPACT_COLUMNS = [
  {
    metric: "48hr",
    metricTone: "default",
    title: "3 Profiles Delivered",
    description:
      "Tell us your role — 3 vetted, pre-screened developer profiles sent within 48 hours. Guaranteed SLA.",
    tags: [
      { label: "Vetted Developers", highlighted: true },
      { label: "50+ Active Roles", highlighted: false },
    ],
  },
  {
    metric: "60%",
    metricTone: "positive",
    title: "Lower Cost vs In-house",
    description:
      "No recruitment fees, benefits, office space, or equipment costs. Pay only for productive hours.",
    tags: [
      { label: "vs In-house Hiring", highlighted: false },
      { label: "No Overhead", highlighted: true },
    ],
  },
  {
    metric: "98%",
    metricTone: "default",
    title: "Client Retention Rate",
    description:
      "Long-term partnerships — 98% of clients renew or expand their augmented team after the first 3 months.",
    tags: [
      { label: "NDA Protected", highlighted: true },
      { label: "Time Zone Match", highlighted: false },
    ],
  },
];

const StaffAugmentationImpactStatsSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[100px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <ImpactStatsColumns columns={STAFF_AUG_IMPACT_COLUMNS} />
      </div>
    </section>
  );
};

export default StaffAugmentationImpactStatsSection;
