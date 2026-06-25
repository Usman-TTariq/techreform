const PRICING_ROWS = [
  {
    level: "Junior Developer",
    experience: "1–3 years",
    hourlyRate: "$25–$40/hr",
    monthlyRate: "$3,500–$5,500/mo",
    startTime: "1 week",
    highlighted: false,
  },
  {
    level: "Mid-level Developer",
    badge: "Most Hired",
    experience: "3–6 years",
    hourlyRate: "$40–$65/hr",
    monthlyRate: "$6,000–$9,000/mo",
    startTime: "1–2 weeks",
    highlighted: false,
  },
  {
    level: "Senior Developer",
    experience: "6–10 years",
    hourlyRate: "$65–$100/hr",
    monthlyRate: "$9,000–$14,000/mo",
    startTime: "1–2 weeks",
    highlighted: false,
  },
  {
    level: "Tech Lead / Architect",
    experience: "10+ years",
    hourlyRate: "$90–$130/hr",
    monthlyRate: "$12,000–$18,000/mo",
    startTime: "2 weeks",
    highlighted: false,
  },
  {
    level: "UI/UX Designer",
    experience: "3+ years",
    hourlyRate: "$30–$60/hr",
    monthlyRate: "$4,500–$8,000/mo",
    startTime: "1 week",
    highlighted: false,
  },
  {
    level: "DevOps / Cloud Engineer",
    experience: "4+ years",
    hourlyRate: "$55–$90/hr",
    monthlyRate: "$8,000–$13,000/mo",
    startTime: "1–2 weeks",
    highlighted: false,
  },
];

const FOOTER_NOTES = [
  {
    text: "Part-time (20hrs): 50% of monthly rate",
    className: "border-[#7724C1]/50 bg-[#7724C1]/30 text-[#C380FE]",
  },
  {
    text: "Dedicated team (3+ devs): Volume discount available",
    className: "border-[#16A34A]/50 bg-[#16A34A]/15 text-[#66BB6A]",
  },
  {
    text: "All rates include NDA + IP protection",
    className: "border-[#F74B1C]/50 bg-[#F74B1C]/15 text-[#F74B1C]",
  },
];

const cellClass =
  "px-2 lg:px-3 xl:px-4 py-2.5 lg:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] lg:text-xs xl:text-sm leading-snug break-words align-top";

const highlightedCellClass = "text-[#C380FE] font-britanicaExtraBold";

const highlightedRowClass = "bg-[#7724C1]/20";

const highlightedCardClass = "border-[#C380FE]/60 bg-[#7724C1]/20";

const StaffAugmentationRatesTable = () => {
  return (
    <div className="mt-2 space-y-4 max-w-full overflow-hidden">
      <div className="lg:hidden space-y-3">
        {PRICING_ROWS.map((row) => (
          <div
            key={row.level}
            className={`rounded-lg border p-4 ${
              row.highlighted ? highlightedCardClass : "border-[#444444] bg-black"
            }`}
          >
            <h4
              className={`font-britanicaExtraBold text-base sm:text-[17px] pb-3 border-b border-white/10 flex flex-wrap items-center gap-2 ${
                row.highlighted ? "text-[#C380FE]" : "text-white"
              }`}
            >
              {row.level}
              {row.badge && (
                <span className="inline-block rounded-full border border-[#C380FE] bg-[#7724C1]/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-britanicaRegular uppercase tracking-wide text-[#C380FE]">
                  {row.badge}
                </span>
              )}
            </h4>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-3">
              {[
                { label: "Experience", value: row.experience },
                { label: "Hourly Rate", value: row.hourlyRate },
                { label: "Monthly (Full-time)", value: row.monthlyRate },
                { label: "Start Time", value: row.startTime },
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
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[22%]`}>
                Developer Level
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[16%]`}>
                Experience
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[18%]`}>
                Hourly Rate
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[24%]`}>
                Monthly (Full-time)
              </th>
              <th className={`${cellClass} !text-center font-britanicaExtraBold w-[20%]`}>
                Start Time
              </th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row) => (
              <tr
                key={row.level}
                className={row.highlighted ? highlightedRowClass : "bg-black"}
              >
                <td
                  className={`${cellClass} ${
                    row.highlighted ? highlightedCellClass : "font-britanicaExtraBold"
                  }`}
                >
                  <span className="inline-flex flex-wrap items-center gap-2">
                    {row.level}
                    {row.badge && (
                      <span className="inline-block rounded-full border border-[#C380FE] bg-[#7724C1]/30 px-2 py-0.5 text-[10px] font-britanicaRegular uppercase tracking-wide text-[#C380FE]">
                        {row.badge}
                      </span>
                    )}
                  </span>
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.experience}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.hourlyRate}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.monthlyRate}
                </td>
                <td className={`${cellClass} ${row.highlighted ? highlightedCellClass : ""}`}>
                  {row.startTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {FOOTER_NOTES.map((note) => (
          <span
            key={note.text}
            className={`inline-flex max-w-full items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm font-britanicaRegular ${note.className}`}
          >
            {note.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StaffAugmentationRatesTable;
