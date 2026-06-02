const PRICING_ROWS = [
  {
    type: "Simple App",
    features: "Login, profile, 3–4 screens",
    singlePlatform: "$3K–$5K",
    bothPlatforms: "$5K–$8K",
    timeline: "4–6 wks",
  },
  {
    type: "Medium App",
    features: "API, payments, dashboard",
    singlePlatform: "$8K–$15K",
    bothPlatforms: "$12K–$20K",
    timeline: "2–4 mo",
  },
  {
    type: "Complex App",
    features: "AI features, real-time sync",
    singlePlatform: "$25K–$50K",
    bothPlatforms: "$40K–$80K",
    timeline: "3–6 mo",
  },
  {
    type: "Enterprise",
    features: "Multi-tenant, ERP, high security",
    singlePlatform: "$60K+",
    bothPlatforms: "$80K+",
    timeline: "6+ mo",
  },
];

const ADD_ONS = [
  { label: "Push Notifications", cost: "$500–$1,500" },
  { label: "Payment Gateway", cost: "$1K–$3K" },
  { label: "AI Integration", cost: "$5K–$15K" },
  { label: "AR/VR", cost: "$8K–$20K", accent: true },
];

const cellClass =
  "px-3 sm:px-4 py-3 text-center text-white border border-[#444444] font-britanicaRegular";

const AppDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm sm:text-[15px] border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#F74B1C] text-white">
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>App Type</th>
              <th className={`${cellClass} font-britanicaExtraBold`}>Features</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>iOS / Android</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Both Platforms</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr key={row.type} className="bg-black">
                <td className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>{row.type}</td>
                <td className={cellClass}>{row.features}</td>
                <td className={`${cellClass} whitespace-nowrap`}>{row.singlePlatform}</td>
                <td className={`${cellClass} whitespace-nowrap`}>{row.bothPlatforms}</td>
                <td className={`${cellClass} whitespace-nowrap`}>{row.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {ADD_ONS.map((addon) => (
          <span
            key={addon.label}
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular ${
              addon.accent
                ? "border-[#F74B1C] bg-black text-[#F74B1C]"
                : "border-[#444444] bg-black text-white"
            }`}
          >
            <span className="font-britanicaExtraBold">+ {addon.label}</span>
            <span>{addon.cost}</span>
          </span>
        ))}
      </div>

    </div>
  );
};

export default AppDevelopmentCostTable;
