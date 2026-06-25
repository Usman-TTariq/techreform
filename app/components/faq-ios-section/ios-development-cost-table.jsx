const PRICING_ROWS = [
  {
    type: "Simple iOS App",
    features: "Login, profile, 3–4 screens",
    techStack: "Swift + Firebase",
    costRange: "$5K–$12K",
    timeline: "4–6 wks",
    highlighted: false,
  },
  {
    type: "Medium iOS App",
    features: "API, payments, dashboard",
    techStack: "Swift + Node.js",
    costRange: "$12K–$30K",
    timeline: "8–14 wks",
    highlighted: false,
  },
  {
    type: "Complex iOS App",
    features: "AI/ML, real-time, custom backend",
    techStack: "Swift + Core ML",
    costRange: "$30K–$80K",
    timeline: "3–6 mo",
    highlighted: false,
  },
  {
    type: "Enterprise iOS App",
    features: "Multi-tenant, ERP integration",
    techStack: "Swift + AWS",
    costRange: "$60K–$150K",
    timeline: "4–8 mo",
    highlighted: false,
  },
  {
    type: "iOS + Apple Watch",
    features: "WatchKit, health data, sensors",
    techStack: "Swift + HealthKit",
    costRange: "+$8K–$20K",
    timeline: "+4–8 wks",
    highlighted: false,
  },
  {
    type: "AR iOS App",
    features: "ARKit, 3D overlay, LiDAR",
    techStack: "Swift + ARKit 6",
    costRange: "$25K–$80K",
    timeline: "3–5 mo",
    highlighted: false,
  },
];

const ADD_ONS = [
  {
    label: "Push Notifications",
    cost: "$500–$1.5K",
    className: "border-[#60A5FA]/50 bg-[#60A5FA]/15 text-[#93C5FD]",
  },
  {
    label: "Payment Gateway",
    cost: "$1K–$3K",
    className: "border-[#16A34A]/50 bg-[#16A34A]/15 text-[#66BB6A]",
  },
  {
    label: "Core ML AI",
    cost: "$5K–$15K",
    className: "border-[#F74B1C]/50 bg-[#F74B1C]/15 text-[#F74B1C]",
  },
  {
    label: "Apple Watch",
    cost: "$8K–$20K",
    className: "border-[#60A5FA]/50 bg-[#60A5FA]/15 text-[#93C5FD]",
  },
];

const cellClass =
  "px-2 lg:px-3 xl:px-4 py-2.5 lg:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] lg:text-xs xl:text-sm leading-snug break-words align-top";

const highlightedCellClass = "text-[#C380FE] font-britanicaExtraBold";

const highlightedRowClass = "bg-[#7724C1]/20";

const highlightedCardClass = "border-[#C380FE]/60 bg-[#7724C1]/20";

const IosDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4 max-w-full overflow-hidden">
      <div className="lg:hidden space-y-3">
        {PRICING_ROWS.map((row) => (
          <div
            key={row.type}
            className={`rounded-lg border p-4 ${
              row.highlighted ? highlightedCardClass : "border-[#444444] bg-black"
            }`}
          >
            <h4
              className={`font-britanicaExtraBold text-base sm:text-[17px] pb-3 border-b border-white/10 ${
                row.highlighted ? "text-[#C380FE]" : "text-white"
              }`}
            >
              {row.type}
            </h4>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-3">
              {[
                { label: "Features", value: row.features },
                { label: "Tech Stack", value: row.techStack },
                { label: "Cost Range", value: row.costRange },
                { label: "Timeline", value: row.timeline },
              ].map(({ label, value }) => (
                <div key={label} className="min-w-0">
                  <dt className="font-britanicaRegular text-[11px] sm:text-xs text-white/50 uppercase tracking-wide">
                    {label}
                  </dt>
                  <dd
                    className={`font-britanicaRegular text-sm sm:text-[15px] pt-0.5 break-words ${
                      row.highlighted ? highlightedCellClass : "text-white"
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

      <div className="hidden lg:block max-w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#7724C1] text-white">
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>
                App Type
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[24%]`}>
                Features
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>
                Tech Stack
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>
                Cost Range
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[22%]`}>
                Timeline
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.type}
                className={row.highlighted ? highlightedRowClass : "bg-black"}
              >
                <td
                  className={`${cellClass} ${
                    row.highlighted ? highlightedCellClass : "font-britanicaExtraBold"
                  }`}
                >
                  {row.type}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.features}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.techStack}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.costRange}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
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
            className={`inline-flex flex-wrap items-center gap-1 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular max-w-full ${addon.className}`}
          >
            <span className="font-britanicaExtraBold">{addon.label}</span>
            <span>{addon.cost}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IosDevelopmentCostTable;
