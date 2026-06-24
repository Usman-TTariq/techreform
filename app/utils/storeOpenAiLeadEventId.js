import { OPENAI_LEAD_EVENT_STORAGE_KEY } from "@/lib/openai-ads";

/** Persist server event id for browser conversion on thank-you page. */
export function storeOpenAiLeadEventId(leadEventId) {
  if (typeof window === "undefined" || !leadEventId) return;
  sessionStorage.setItem(OPENAI_LEAD_EVENT_STORAGE_KEY, leadEventId);
}
