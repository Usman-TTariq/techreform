import { Check } from "lucide-react";
import CapsuleLabel from "../common/capsule-label";

const COLUMNS = [
  { key: "staffAug", label: "Staff Augmentation", highlighted: false },
  { key: "outsourcing", label: "Project Outsourcing", highlighted: false },
  { key: "inHouse", label: "In-house Hiring", highlighted: false },
];

const COMPARISON_ROWS = [
  {
    factor: "You manage the team?",
    staffAug: "Yes — full control",
    outsourcing: "No — vendor manages",
    inHouse: "Yes",
  },
  {
    factor: "Speed to start",
    staffAug: "1–2 weeks",
    outsourcing: "2–4 weeks",
    inHouse: "2–3 months",
  },
  {
    factor: "Cost",
    staffAug: "Medium — $25–$130/hr",
    outsourcing: "Lower upfront",
    inHouse: "Highest — salary + benefits",
  },
  {
    factor: "Flexibility",
    staffAug: "Scale anytime",
    outsourcing: "Fixed scope",
    inHouse: "Notice period required",
  },
  {
    factor: "IP & code ownership",
    staffAug: "Always yours",
    outsourcing: "Depends on contract",
    inHouse: "Always yours",
  },
  {
    factor: "Cultural integration",
    staffAug: "Works as your team",
    outsourcing: "Separate vendor",
    inHouse: "Full integration",
  },
  {
    factor: "NDA protection",
    staffAug: "Always included",
    outsourcing: "Negotiable",
    inHouse: "Employment contract",
  },
  {
    factor: "Best for",
    staffAug: "Scaling fast, skill gaps, flexibility",
    outsourcing: "Fixed-scope projects",
    inHouse: "Core long-term team",
  },
];

const labelCellClass =
  "px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 text-left text-white/90 border border-[#444444] font-britanicaExtraBold text-[11px] sm:text-xs lg:text-sm leading-snug break-words align-top";

const valueCellClass =
  "px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 text-left text-white border border-[#444444] font-britanicaRegular text-[11px] sm:text-xs lg:text-sm leading-snug break-words align-top";

const highlightedCellClass = "text-[#C380FE] font-britanicaExtraBold";

const StaffAugmentationVsComparisonSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="MODEL" secondWord="COMPARISON" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[30px] md:text-[38px] lg:text-[42px] lg:leading-[52px] font-black break-words">
              <span className="text-white">Staff Augmentation vs Outsourcing vs </span>
              <span className="text-[#F74B1C]">In-house Hiring</span>
            </h2>
            <p className="font-britanicaRegular text-base sm:text-[17px] md:text-[20px] text-white/85 pt-4 sm:pt-[22px] max-w-3xl mx-auto leading-relaxed">
              &ldquo;Staff augmentation vs outsourcing&rdquo; is one of the most searched
              decision-stage queries. Here is a clear side-by-side breakdown so you can choose
              the right model for your team and timeline.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pt-8 sm:pt-10 md:pt-[52px]">
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.factor}
                className="h-full rounded-xl border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] overflow-hidden"
              >
                <div className="border-b border-[#444444] bg-[#7724C1]/30 px-4 py-3 md:px-6">
                  <p className="font-britanicaExtraBold text-sm sm:text-[15px] text-white text-left md:text-center">
                    {row.factor}
                  </p>
                </div>
                <div className="divide-y divide-[#444444]">
                  {COLUMNS.map((col) => {
                    const value = row[col.key];
                    return (
                      <div
                        key={col.key}
                        className={`px-4 py-3 md:px-6 md:text-center ${col.highlighted ? "bg-[#7724C1]/20" : ""}`}
                      >
                        <p
                          className={`font-britanicaExtraBold text-[11px] uppercase tracking-wide pb-1 text-left md:text-center md:flex md:flex-col md:items-center ${
                            col.highlighted ? "text-[#C380FE]" : "text-white/50"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1">
                            {col.label}
                            {col.highlighted && (
                              <Check
                                className="w-3.5 h-3.5 text-[#C380FE]"
                                strokeWidth={3}
                                aria-hidden
                              />
                            )}
                          </span>
                        </p>
                        <p
                          className={`font-britanicaRegular text-sm leading-relaxed break-words text-left md:text-center ${
                            col.highlighted
                              ? "text-[#C380FE] font-britanicaExtraBold"
                              : "text-white/85"
                          }`}
                        >
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block max-w-full overflow-x-auto rounded-xl border border-[#444444]">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-[#7724C1] text-white">
                  <th className={`${labelCellClass} !text-white w-[22%]`}>Factor</th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      className={`${valueCellClass} !text-center font-britanicaExtraBold !text-white w-[26%] ${
                        col.highlighted ? "!bg-[#5a1a94]" : ""
                      }`}
                    >
                      <span className="inline-flex items-center justify-center gap-1.5">
                        {col.label}
                        {col.highlighted && (
                          <Check className="w-4 h-4 shrink-0" strokeWidth={3} aria-hidden />
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.factor} className="bg-black">
                    <td className={labelCellClass}>{row.factor}</td>
                    <td
                      className={`${valueCellClass} ${highlightedCellClass}`}
                    >
                      {row.staffAug}
                    </td>
                    <td className={valueCellClass}>{row.outsourcing}</td>
                    <td className={valueCellClass}>{row.inHouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StaffAugmentationVsComparisonSection;
