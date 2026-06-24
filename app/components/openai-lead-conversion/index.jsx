"use client";

import { useEffect } from "react";
import { OPENAI_LEAD_EVENT_STORAGE_KEY } from "@/lib/openai-ads";

/** Fire lead_created on thank-you when a form submission stored an event id. */
export default function OpenAiLeadConversion() {
  useEffect(() => {
    const eventId = sessionStorage.getItem(OPENAI_LEAD_EVENT_STORAGE_KEY);
    if (!eventId) return;

    window.oaiq =
      window.oaiq ||
      function () {
        (window.oaiq.q = window.oaiq.q || []).push(arguments);
      };

    window.oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: eventId });
    sessionStorage.removeItem(OPENAI_LEAD_EVENT_STORAGE_KEY);
  }, []);

  return null;
}
