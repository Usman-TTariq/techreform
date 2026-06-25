const BADGE_STYLES = {
  green: "bg-[#16A34A]/20 text-[#B8F5C8] border border-[#16A34A]/40",
  yellow: "bg-[#EA580C]/20 text-[#FDBA74] border border-[#EA580C]/40",
  purple: "bg-[#7724C1]/30 text-[#C380FE] border border-[#7724C1]/50",
};

const PRICING_ROWS = [
  {
    type: "Unity Developer",
    seniority: "Mid-Level",
    hourlyRate: "$30–$50/hr",
    monthlyRate: "$4,800–$8,000",
    bestFor: "Mobile / Casual",
    badgeStyle: "green",
  },
  {
    type: "Unity Developer",
    seniority: "Senior",
    hourlyRate: "$50–$80/hr",
    monthlyRate: "$8,000–$12,800",
    bestFor: "Mid-Core / AR-VR",
    badgeStyle: "green",
  },
  {
    type: "Unreal Engine Dev",
    seniority: "Senior",
    hourlyRate: "$60–$100/hr",
    monthlyRate: "$9,600–$16,000",
    bestFor: "AAA / Console / PC",
    badgeStyle: "yellow",
  },
  {
    type: "Mobile Game Dev",
    seniority: "Mid–Senior",
    hourlyRate: "$35–$65/hr",
    monthlyRate: "$5,600–$10,400",
    bestFor: "iOS & Android",
    badgeStyle: "green",
  },
  {
    type: "Multiplayer Engineer",
    seniority: "Senior",
    hourlyRate: "$55–$90/hr",
    monthlyRate: "$8,800–$14,400",
    bestFor: "Real-Time / Live Ops",
    badgeStyle: "purple",
  },
  {
    type: "AR/VR Specialist",
    seniority: "Senior",
    hourlyRate: "$70–$120/hr",
    monthlyRate: "$11,200–$19,200",
    bestFor: "Quest / Vision Pro",
    badgeStyle: "purple",
  },
  {
    type: "Full Game Dev Team",
    seniority: "Mixed",
    hourlyRate: "Custom",
    monthlyRate: "$15,000–$40,000",
    bestFor: "Full-Cycle Delivery",
    badgeStyle: "yellow",
  },
];

const cellClass =
  "px-2 lg:px-4 py-2.5 lg:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] lg:text-sm leading-snug break-words align-top";

const HireGameRatesTable = () => {
  return (
    <div className="mt-2 space-y-4 max-w-full overflow-hidden">
      <div className="lg:hidden space-y-3">
        {PRICING_ROWS.map((row, index) => (
          <div key={`${row.type}-${index}`} className="rounded-lg border border-[#444444] bg-black p-4">
            <h4 className="font-britanicaExtraBold text-base text-white pb-3 border-b border-white/10">
              {row.type}
            </h4>
            <dl className="grid grid-cols-2 gap-3 pt-3 text-[13px]">
              <div><dt className="text-white/50">Seniority</dt><dd className="text-white">{row.seniority}</dd></div>
              <div><dt className="text-white/50">Hourly</dt><dd className="text-[#C380FE] font-britanicaExtraBold">{row.hourlyRate}</dd></div>
              <div><dt className="text-white/50">Monthly</dt><dd className="text-white">{row.monthlyRate}</dd></div>
              <div>
                <dt className="text-white/50">Best For</dt>
                <dd>
                  <span className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-britanicaExtraBold ${BADGE_STYLES[row.badgeStyle]}`}>
                    {row.bestFor}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden lg:block overflow-x-auto rounded-xl border border-[#444444]">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-[#181A28]">
              <th className={`${cellClass} font-britanicaExtraBold uppercase tracking-wide text-white/55`}>Developer Type</th>
              <th className={`${cellClass} font-britanicaExtraBold uppercase tracking-wide text-white/55`}>Seniority</th>
              <th className={`${cellClass} font-britanicaExtraBold uppercase tracking-wide text-white/55`}>Hourly Rate</th>
              <th className={`${cellClass} font-britanicaExtraBold uppercase tracking-wide text-white/55`}>Monthly (Full-Time)</th>
              <th className={`${cellClass} font-britanicaExtraBold uppercase tracking-wide text-white/55`}>Best For</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_ROWS.map((row, index) => (
              <tr key={`${row.type}-${index}`} className="bg-black hover:bg-[#12141F]">
                <td className={`${cellClass} font-britanicaExtraBold text-white`}>{row.type}</td>
                <td className={cellClass}>{row.seniority}</td>
                <td className={`${cellClass} text-[#C380FE] font-britanicaExtraBold`}>{row.hourlyRate}</td>
                <td className={cellClass}>{row.monthlyRate}</td>
                <td className={cellClass}>
                  <span className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-britanicaExtraBold ${BADGE_STYLES[row.badgeStyle]}`}>
                    {row.bestFor}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-britanicaRegular text-[13px] text-white/45 pt-2">
        * Rates are indicative. Exact pricing depends on project scope, timezone requirements, and team composition. Request a custom quote for your specific needs.
      </p>
    </div>
  );
};

export default HireGameRatesTable;
