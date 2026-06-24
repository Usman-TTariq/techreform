const PRICING_ROWS = [
  {
    type: "AR Try-On (Fashion/Beauty)",
    platform: "iOS + Android",
    features: "Face/body tracking, 3D overlay",
    costRange: "$25K–$45K",
    timeline: "3–4 months",
    highlighted: false,
  },
  {
    type: "AR Product Visualizer",
    platform: "iOS + Android",
    features: "3D model placement, room scanning",
    costRange: "$30K–$60K",
    timeline: "3–5 months",
    highlighted: false,
  },
  {
    type: "AR Training App",
    platform: "iOS + Android + HoloLens",
    features: "Step-by-step overlay, object recognition",
    costRange: "$40K–$80K",
    timeline: "4–6 months",
    highlighted: false,
  },
  {
    type: "WebAR Campaign",
    platform: "Browser (no app)",
    features: "Marker-based, social sharing",
    costRange: "$15K–$35K",
    timeline: "6–10 weeks",
    highlighted: false,
  },
  {
    type: "AR Navigation App",
    platform: "iOS + Android",
    features: "GPS, real-time overlay, mapping",
    costRange: "$50K–$100K",
    timeline: "4–6 months",
    highlighted: false,
  },
  {
    type: "Enterprise AR (HoloLens)",
    platform: "HoloLens 2 / Vision Pro",
    features: "Spatial mapping, voice, gestures",
    costRange: "$80K–$200K",
    timeline: "5–9 months",
    highlighted: false,
  },
  {
    type: "AR Manufacturing / MRO",
    platform: "HoloLens + Mobile",
    features: "Assembly guidance, diagnostics",
    costRange: "$100K–$250K",
    timeline: "6–12 months",
    highlighted: false,
  },
];

const ADD_ONS = [
  { label: "3D Asset Creation", cost: "$5K–$30K" },
  { label: "Backend & CMS", cost: "$8K–$20K" },
  { label: "Multi-language", cost: "$3K–$8K" },
];

const ADD_ON_CLASS =
  "border-[#F74B1C]/50 bg-[#F74B1C]/20 text-[#FFB74D]";

const cellClass =
  "px-2 lg:px-3 xl:px-4 py-2.5 lg:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] lg:text-xs xl:text-sm leading-snug break-words align-top";

const highlightedCellClass = "text-[#F74B1C] font-britanicaExtraBold";

const ArDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4 max-w-full overflow-hidden">
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
                { label: "Platform", value: row.platform },
                { label: "Key Features", value: row.features },
                { label: "Cost Range", value: row.costRange },
                { label: "Timeline", value: row.timeline },
              ].map(({ label, value }) => (
                <div key={label} className="min-w-0 sm:col-span-2 sm:last:col-span-1">
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

      <div className="hidden lg:block max-w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#F74B1C] text-white">
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[20%]`}>AR App Type</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[14%]`}>Platform</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[28%]`}>Key Features</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>Cost Range</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[20%]`}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.type}
                className={row.highlighted ? "bg-[#F74B1C]/10" : "bg-black"}
              >
                <td
                  className={`${cellClass} ${
                    row.highlighted ? highlightedCellClass : "font-britanicaExtraBold"
                  }`}
                >
                  {row.type}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.platform}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.features}
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
            className={`inline-flex flex-wrap items-center gap-1 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular max-w-full ${ADD_ON_CLASS}`}
          >
            <span className="font-britanicaExtraBold">+ {addon.label}</span>
            <span>{addon.cost}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ArDevelopmentCostTable;
