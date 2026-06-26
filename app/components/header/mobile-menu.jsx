"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Button from "../common/button";
import { DROPDOWN_ITEMS, MEGA_MENU } from "./nav-config";

export default function MobileMenu({ onClose }) {
  const [expandedMobileKey, setExpandedMobileKey] = useState(null);

  return (
    <div className="fixed inset-0 z-50 lg:hidden visible" aria-hidden={false}>
      <div
        className="absolute inset-0 bg-black opacity-90 transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="absolute top-0 right-0 z-10 flex min-h-[100dvh] h-full w-full max-w-[320px] translate-x-0 flex-col bg-[#0a0a0a] shadow-[-8px_0_24px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out">
        <div className="flex flex-shrink-0 items-center justify-between border-b border-white/15 bg-[#0a0a0a] px-5 py-4">
          <span className="font-britanicaExtraBold text-[18px] tracking-tight text-white">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F74B1C] hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex min-h-[260px] flex-1 flex-col overflow-x-hidden overflow-y-auto bg-[#0a0a0a] px-4 py-3">
          <ul className="flex flex-1 flex-col gap-0">
            {DROPDOWN_ITEMS.map(({ key, label, href }) => {
              const mega = MEGA_MENU[key];
              const hasSections = mega?.sections?.length;
              const isExpanded = expandedMobileKey === key;
              return (
                <li key={key} className="list-none border-b border-white/10 last:border-b-0">
                  {hasSections ? (
                    <>
                      <div className="flex min-h-[48px] items-center justify-between gap-2 py-1 pr-1">
                        {href && href !== "#" ? (
                          <Link
                            href={href}
                            onClick={onClose}
                            className="flex min-h-[44px] flex-1 items-center rounded-lg px-3 py-3 font-britanicaRegular text-[15px] font-medium text-white transition-colors hover:bg-white/8 hover:text-[#F74B1C]"
                          >
                            {label}
                          </Link>
                        ) : (
                          <span className="flex-1 px-3 py-3 font-britanicaRegular text-[15px] font-medium text-white">
                            {label}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedMobileKey((k) => (k === key ? null : key))
                          }
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      {isExpanded && mega.sections && (
                        <div className="mx-2 mb-2 space-y-4 rounded-lg bg-[#111] pb-3 pl-3 pr-2 pt-1">
                          {mega.sections.map(({ heading, items }) => (
                            <div key={heading}>
                              <div className="mb-1.5 font-britanicaExtraBold text-[12px] uppercase tracking-wide text-[#F74B1C]">
                                {heading}
                              </div>
                              <ul className="flex flex-col gap-0.5">
                                {items.map(({ label: subLabel, href: subHref }) => (
                                  <li key={subLabel}>
                                    {subHref ? (
                                      <Link
                                        href={subHref}
                                        onClick={onClose}
                                        className="block rounded-md px-2 py-2 font-britanicaRegular text-[14px] text-white/90 transition-colors hover:text-[#F74B1C]"
                                      >
                                        {subLabel}
                                      </Link>
                                    ) : (
                                      <span className="block cursor-not-allowed px-2 py-2 font-britanicaRegular text-[14px] text-white/60">
                                        {subLabel}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="block px-3 py-3.5 font-britanicaRegular text-[15px] text-white/90">
                      {label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className="flex-shrink-0 border-t border-white/15 bg-[#0a0a0a] px-4 pb-4 pt-4"
          style={{
            paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px) + 1rem)",
          }}
        >
          <Button
            icon={true}
            onClick={() => {
              window.location.href = "tel:+15822335015";
            }}
          />
        </div>
        <div
          className="h-[env(safe-area-inset-bottom,0px)] min-h-[8px] flex-shrink-0 bg-[#0a0a0a]"
          aria-hidden
        />
      </div>
    </div>
  );
}
