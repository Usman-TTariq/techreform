"use client";

const TAG_HIGHLIGHT_CLASS =
  "bg-[linear-gradient(90deg,rgba(245,133,226,0.42)_0%,rgba(147,64,255,0.52)_50%,rgba(147,61,132,1)_100%)] text-white shadow-[0_0_12px_rgba(119,36,193,0.35)] border border-[#7724C1]/40";

const TAG_DEFAULT_CLASS = "bg-[#474747] text-white border border-white/10";

const METRIC_CLASS = {
  default: "text-white/20",
  positive: "text-emerald-400/30",
  negative: "text-red-400/30",
};

const TAG_LAYOUTS = [
  [
    "left-0 top-0 -rotate-2",
    "right-0 top-6 sm:top-8 rotate-3",
    "left-[8%] top-14 sm:top-16 -rotate-1",
  ],
  [
    "left-0 top-0 rotate-1",
    "left-[22%] top-10 sm:top-12 -rotate-2",
    "right-0 top-5 sm:top-6 rotate-2",
  ],
  [
    "left-0 top-0 -rotate-1",
    "right-0 top-8 sm:top-10 rotate-3",
    "left-[10%] top-16 sm:top-[72px] -rotate-2",
  ],
];

const ImpactStatsColumns = ({ columns }) => {
  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
      {columns.map((column, columnIndex) => (
        <div
          key={column.title}
          className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0"
        >
          <div className="relative mx-auto w-[90%] max-w-[200px] sm:max-w-none min-h-[300px] sm:min-h-[340px] md:min-h-[360px]">
            <div className="absolute inset-x-0 top-[72px] sm:top-[84px] md:top-[96px] flex justify-center pointer-events-none select-none z-0">
              <span
                className={`font-britanicaBlack text-[72px] sm:text-[88px] md:text-[104px] lg:text-[118px] leading-none whitespace-nowrap ${
                  METRIC_CLASS[column.metricTone ?? "default"]
                }`}
              >
                {column.metric}
              </span>
            </div>

            <div className="absolute inset-x-0 top-0 z-10 min-h-[160px] sm:min-h-[180px]">
              {column.tags.map((tag, tagIndex) => (
                <span
                  key={tag.label}
                  className={`absolute inline-flex w-fit max-w-[90%] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px] font-britanicaRegular whitespace-nowrap ${
                    TAG_LAYOUTS[columnIndex]?.[tagIndex] ?? "left-0 top-0"
                  } ${tag.highlighted ? TAG_HIGHLIGHT_CLASS : TAG_DEFAULT_CLASS}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 pt-4">
              <h3 className="font-britanicaBlack text-[16px] sm:text-[18px] md:text-[22px] font-bold text-white leading-tight">
                {column.title}
              </h3>
              <p className="pt-2 font-britanicaRegular text-[12px] sm:text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                {column.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactStatsColumns;
