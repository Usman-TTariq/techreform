const PRICING_ROWS = [
  {
    type: "VR Training App (Basic)",
    platform: "Meta Quest 3",
    features: "Interactive scenarios, branching paths",
    costRange: "$35K–$55K",
    timeline: "3–4 months",
    highlighted: false,
  },
  {
    type: "VR Product Demo / Showroom",
    platform: "Meta Quest + WebVR",
    features: "3D product visualization, hotspots",
    costRange: "$25K–$60K",
    timeline: "2–4 months",
    highlighted: false,
  },
  {
    type: "VR Corporate Training Suite",
    platform: "Meta Quest + PC VR",
    features: "Multi-module, LMS integration, analytics",
    costRange: "$60K–$120K",
    timeline: "4–6 months",
    highlighted: false,
  },
  {
    type: "VR Medical Simulation",
    platform: "PC VR + HoloLens",
    features: "Surgical simulation, anatomy, patient edu",
    costRange: "$120K–$300K",
    timeline: "6–12 months",
    highlighted: false,
  },
  {
    type: "VR Architecture / Real Estate",
    platform: "PC VR + Meta Quest",
    features: "Walkthrough, lighting, material swaps",
    costRange: "$40K–$100K",
    timeline: "3–6 months",
    highlighted: false,
  },
  {
    type: "VR Gaming Experience",
    platform: "PSVR2 + SteamVR",
    features: "Gameplay mechanics, haptics, multiplayer",
    costRange: "$80K–$250K",
    timeline: "6–12 months",
    highlighted: false,
  },
  {
    type: "Enterprise VR (HoloLens)",
    platform: "HoloLens 2",
    features: "Spatial mapping, remote assist, AR/VR",
    costRange: "$100K–$300K",
    timeline: "6–9 months",
    highlighted: false,
  },
];

const ADD_ONS = [
  { label: "3D Environment", cost: "$10K–$50K" },
  { label: "Multiplayer", cost: "$15K–$40K" },
  { label: "LMS Integration", cost: "$8K–$20K" },
  { label: "Multi-language", cost: "$5K–$12K" },
];

const ADD_ON_CLASS =
  "border-[#7724C1]/50 bg-[#7724C1]/30 text-[#C380FE]";

const cellClass =
  "px-2 lg:px-3 xl:px-4 py-2.5 lg:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] lg:text-xs xl:text-sm leading-snug break-words align-top";

const highlightedCellClass = "text-[#C380FE] font-britanicaExtraBold";

const highlightedRowClass = "bg-[#7724C1]/20";

const highlightedCardClass = "border-[#C380FE]/60 bg-[#7724C1]/20";

const VrDevelopmentCostTable = () => {
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
                { label: "Platform / Headset", value: row.platform },
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
                      row.highlighted ? "text-[#C380FE] font-britanicaExtraBold" : "text-white"
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
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[20%]`}>VR App Type</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[14%]`}>Platform / Headset</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[28%]`}>Key Features</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>Cost Range</th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[20%]`}>Timeline</th>
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

export default VrDevelopmentCostTable;
