const PRICING_ROWS = [
  {
    type: "Basic Custom ERP",
    businessSize: "Startup / SMB",
    modules: "3–5 modules",
    costRange: "$8K–$25K",
    timeline: "6–10 wks",
    highlighted: false,
  },
  {
    type: "Mid-Scale Custom ERP",
    businessSize: "Growing Business",
    modules: "8–15 modules",
    costRange: "$40K–$100K",
    timeline: "3–6 mo",
    highlighted: true,
  },
  {
    type: "SAP / Oracle ERP",
    businessSize: "Enterprise",
    modules: "Full enterprise suite",
    costRange: "$100K–$500K+",
    timeline: "6–18 mo",
    highlighted: false,
  },
];

const ADD_ONS = [
  { label: "CRM Integration", cost: "$5K–$15K" },
  { label: "Mobile ERP App", cost: "$10K–$35K" },
  { label: "BI Dashboard", cost: "$8K–$20K" },
  { label: "Data Migration", cost: "$5K–$25K", accent: true },
];

const cellClass =
  "px-3 sm:px-4 py-3 text-center text-white border border-[#444444] font-britanicaRegular";

const highlightedCellClass = "text-[#F74B1C] font-britanicaExtraBold";

const ErpDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm sm:text-[15px] border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#F74B1C] text-white">
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>ERP Type</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Business Size</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Modules</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Cost Range</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.type}
                className={row.highlighted ? "bg-[#F74B1C]/10" : "bg-black"}
              >
                <td
                  className={`${cellClass} whitespace-nowrap ${
                    row.highlighted ? highlightedCellClass : "font-britanicaExtraBold"
                  }`}
                >
                  {row.type}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.businessSize}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>{row.modules}</td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.costRange}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.timeline}
                </td>
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

export default ErpDevelopmentCostTable;
