import Link from "next/link";

/** Split a markdown table row; keeps empty cells (e.g. blank top-left header). */
function splitTableRow(line) {
  const trimmed = line.trim();
  let cells = trimmed.split("|").map((cell) => cell.trim());
  if (trimmed.startsWith("|")) cells = cells.slice(1);
  if (trimmed.endsWith("|")) cells = cells.slice(0, -1);
  return cells;
}

function isSeparatorRow(cells) {
  return cells.length > 0 && cells.every((cell) => cell === "" || /^:?-+:?$/.test(cell));
}

function padRow(cells, columnCount) {
  const row = [...cells];
  while (row.length < columnCount) row.push("");
  return row.slice(0, columnCount);
}

/**
 * Parse markdown table string into rows of cells.
 * First row = header, second = separator (skipped), rest = body.
 */
export function parseMarkdownTable(md) {
  if (!md || typeof md !== "string") return { headers: [], rows: [] };

  const rawLines = md
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (rawLines.length === 0) return { headers: [], rows: [] };

  const parsedLines = rawLines.map(splitTableRow).filter((cells) => !isSeparatorRow(cells));

  if (parsedLines.length === 0) return { headers: [], rows: [] };

  const columnCount = Math.max(...parsedLines.map((row) => row.length));
  const headers = padRow(parsedLines[0], columnCount);
  const rows = parsedLines.slice(1).map((row) => padRow(row, columnCount));

  return { headers, rows };
}

const tableClass = "w-full border-collapse mb-6 text-left text-gray-300 text-[18px] sm:text-[20px]";
const thClass = "font-britanicaBlack text-center text-white border border-white bg-[#f74b1c] px-3 py-2 sm:px-4 sm:py-3";
const tdClass = "border border-white px-3 py-2 text-center text-[18px] sm:px-4 sm:py-3";

/** Renders a markdown table string as HTML table (e.g. when table is a separate Strapi field). */
export function TableFromMarkdown({ markdown, className = "" }) {
  const { headers, rows } = parseMarkdownTable(markdown);
  if (headers.length === 0) return null;
  return (
    <div className={`overflow-x-auto my-6 ${className}`}>
      <table className={tableClass}>
        <thead>
          <tr>
            {headers.map((cell, j) => (
              <th key={j} className={thClass}>
                {cell ? cell : "\u00A0"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className={tdClass}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Renders Strapi rich text blocks (e.g. Desc field).
 * Supports paragraph, heading, list (unordered/ordered), table (markdown), text, and link.
 */
export default function BlogBlocksRenderer({ blocks, className = "" }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  function renderChild(child, key) {
    if (!child) return null;
    if (child.type === "text") {
      return child.text ?? "";
    }
    if (child.type === "link") {
      const href = child.url ?? "#";
      const text = (child.children || []).map((c) => (c.type === "text" ? c.text : "")).join("");
      const isInternal = href.startsWith("/") || /techreforms\.com/.test(href);
      const pathname = href.startsWith("http") ? new URL(href).pathname : href;
      if (isInternal) {
        return (
          <Link key={key} href={pathname} className="text-[#F74B1C] hover:underline">
            {text || pathname}
          </Link>
        );
      }
      return (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-[#F74B1C] hover:underline">
          {text || href}
        </a>
      );
    }
    if (child.children) {
      return child.children.map((c, i) => renderChild(c, i));
    }
    return null;
  }

  function renderBlockContent(block) {
    return (block.children || []).map((child, j) => (
      <span key={j}>{renderChild(child, j)}</span>
    ));
  }

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="mb-4 last:mb-0">
              {renderBlockContent(block)}
            </p>
          );
        }
        if (block.type === "heading") {
          const level = Math.min(6, Math.max(1, block.level ?? 2));
          const Tag = `h${level}`;
          const headingClass =
            level === 1
              ? "font-britanicaBlack text-white text-2xl sm:text-3xl mt-8 mb-3 first:mt-0"
              : level === 2
                ? "font-britanicaBlack text-white text-xl sm:text-2xl mt-6 mb-2"
                : "font-britanicaBlack text-white text-lg sm:text-xl mt-4 mb-2";
          return (
            <Tag key={i} className={headingClass}>
              {renderBlockContent(block)}
            </Tag>
          );
        }
        if (block.type === "list") {
          const isOrdered = block.format === "ordered";
          const ListTag = isOrdered ? "ol" : "ul";
          const listClass = "list-disc pl-6 mb-4 space-y-1 text-gray-300 text-[20px]";
          const orderedClass =
            "list-decimal pl-6 mb-4 space-y-1 text-gray-300 text-[20px] [&_li::marker]:bg-transparent [&_li::marker]:border-0 [&_li::marker]:rounded-none";
          return (
            <ListTag key={i} className={isOrdered ? orderedClass : listClass}>
              {(block.children || []).map((item, j) => {
                if (item.type !== "list-item") return null;
                return (
                  <li key={j}>
                    {(item.children || []).map((c, k) => (
                      <span key={k}>{renderChild(c, k)}</span>
                    ))}
                  </li>
                );
              })}
            </ListTag>
          );
        }
        if (block.type === "table" || block.format === "table") {
          const raw = block.table ?? block.value ?? (block.children?.[0]?.text ?? "");
          const { headers, rows } = parseMarkdownTable(raw);
          if (headers.length === 0) return null;
          return (
            <div key={i} className="overflow-x-auto my-6">
              <table className={tableClass}>
                <thead>
                  <tr>
                    {headers.map((cell, j) => (
                      <th key={j} className={thClass}>
                        {cell ? cell : "\u00A0"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={tdClass}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
