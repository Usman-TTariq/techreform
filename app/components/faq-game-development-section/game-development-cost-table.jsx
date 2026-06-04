const PRICING_ROWS = [
  {
    type: "Hyper-Casual Mobile",
    platform: "iOS / Android",
    costRange: "$8K–$20K",
    timeline: "6–10 wks",
    engine: "Unity",
    highlighted: false,
  },
  {
    type: "Mid-Core Mobile RPG",
    platform: "iOS + Android",  
    costRange: "$30K–$80K",
    timeline: "4–6 mo",
    engine: "Unity/UE5",
    highlighted: false,
  },
  {
    type: "PC Indie Game",
    platform: "Steam / Epic",
    costRange: "$40K–$120K",
    timeline: "6–12 mo",
    engine: "Unreal 5",
    highlighted: false,
  },
  {
    type: "Multiplayer Online",
    platform: "Cross-platform",
    costRange: "$80K–$200K+",
    timeline: "8–18 mo",
    engine: "Unity+Photon",
    highlighted: false,
  },
  {
    type: "Console Game",
    platform: "PS5 / Xbox",
    costRange: "$100K+",
    timeline: "12+ mo",
    engine: "Unreal 5",
    highlighted: false,
  },
];

const ADD_ONS = [
  {
    label: "Multiplayer backend",
    cost: "$15K–$40K",
    style: "purple",
  },
  {
    label: "3D Art & Animation",
    cost: "$10K–$50K",
    style: "orange",
  },
  {
    label: "Monetization system",
    cost: "$5K–$15K",
    style: "green",
  },
];

const ADD_ON_STYLES = {
  purple: "border-[#7724C1]/50 bg-[#7724C1]/20 text-[#C380FE]",
  orange: "border-[#EA580C]/50 bg-[#EA580C]/20 text-[#FDBA74]",
  green: "border-[#16A34A]/50 bg-[#16A34A]/20 text-[#B8F5C8]",
};

const cellClass =
  "px-3 sm:px-4 py-3 text-center text-white border border-[#444444] font-britanicaRegular";

const GameDevelopmentCostTable = () => {
  return (
    <div className="mt-2 space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm sm:text-[15px] border-collapse border border-[#444444]">
          <thead>
            <tr className="bg-[#F74B1C] text-white">
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Game Type</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Platform</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Cost Range</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Timeline</th>
              <th className={`${cellClass} font-britanicaExtraBold whitespace-nowrap`}>Engine</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.type}
                className={row.highlighted ? "bg-[#7724C1]/25" : "bg-black"}
              >
                <td
                  className={`${cellClass} font-britanicaExtraBold whitespace-nowrap ${
                    row.highlighted ? "text-[#C380FE]" : ""
                  }`}
                >
                  {row.type}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? "font-britanicaExtraBold text-[#C380FE]" : ""}`}>
                  {row.platform}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? "font-britanicaExtraBold text-[#C380FE]" : ""}`}>
                  {row.costRange}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? "font-britanicaExtraBold text-[#C380FE]" : ""}`}>
                  {row.timeline}
                </td>
                <td className={`${cellClass} whitespace-nowrap ${row.highlighted ? "font-britanicaExtraBold text-[#C380FE]" : ""}`}>
                  {row.engine}
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
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular ${ADD_ON_STYLES[addon.style]}`}
          >
            <span className="font-britanicaExtraBold">+ {addon.label}:</span>
            <span>{addon.cost}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameDevelopmentCostTable;
