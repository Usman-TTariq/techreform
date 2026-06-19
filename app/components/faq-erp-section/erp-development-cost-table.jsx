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
  "px-2 lg:px-3 xl:px-4 py-2.5 lg:py-3 text-center text-white border border-[#444444] font-britanicaRegular text-xs lg:text-sm xl:text-[15px]";

const highlightedCellClass = "text-[#F74B1C] font-britanicaExtraBold";

const ErpDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4 max-w-full overflow-hidden">
      {/* Mobile & tablet: stacked cards — no horizontal scroll */}
      <div className="lg:hidden space-y-3">
        {PRICING_ROWS.map((row) => (
          <div
            key={row.type}
            className={`rounded-lg border p-4 ${
              row.highlighted
                ? "border-[#F74B1C]/60 bg-[#F74B1C]/10"
                : "border-[#444444] bg-black"
            }`}
          >
            <h4
              className={`font-britanicaExtraBold text-base sm:text-[17px] pb-3 border-b border-white/10 ${
                row.highlighted ? "text-[#F74B1C]" : "text-white"
              }`}
            >
              {row.type}
            </h4>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-3">
              {[
                { label: "Business Size", value: row.businessSize },
                { label: "Modules", value: row.modules },
                { label: "Cost Range", value: row.costRange },
                { label: "Timeline", value: row.timeline },
              ].map(({ label, value }) => (
                <div key={label} className="min-w-0">
                  <dt className="font-britanicaRegular text-[11px] sm:text-xs text-white/50 uppercase tracking-wide">
                    {label}
                  </dt>
                  <dd
                    className={`font-britanicaRegular text-sm sm:text-[15px] pt-0.5 break-words ${
                      row.highlighted ? "text-[#F74B1C] font-britanicaExtraBold" : "text-white"
                    }`}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop: full table */}
      <div className="hidden lg:block max-w-full overflow-x-auto">
        <table className="w-full table-fixed text-sm xl:text-[15px] border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#F74B1C] text-white">
              <th className={`${cellClass} font-britanicaExtraBold w-[22%]`}>ERP Type</th>
              <th className={`${cellClass} font-britanicaExtraBold w-[18%]`}>Business Size</th>
              <th className={`${cellClass} font-britanicaExtraBold w-[22%]`}>Modules</th>
              <th className={`${cellClass} font-britanicaExtraBold w-[18%]`}>Cost Range</th>
              <th className={`${cellClass} font-britanicaExtraBold w-[20%]`}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.type}
                className={row.highlighted ? "bg-[#F74B1C]/10" : "bg-black"}
              >
                <td
                  className={`${cellClass} break-words ${
                    row.highlighted ? highlightedCellClass : "font-britanicaExtraBold"
                  }`}
                >
                  {row.type}
                </td>
                <td className={`${cellClass} break-words ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.businessSize}
                </td>
                <td className={`${cellClass} break-words ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.modules}
                </td>
                <td className={`${cellClass} break-words ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.costRange}
                </td>
                <td className={`${cellClass} break-words ${row.highlighted ? highlightedCellClass : ""}`}>
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
            className={`inline-flex flex-wrap items-center gap-1 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular max-w-full ${
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
