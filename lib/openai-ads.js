const DEFAULT_PIXEL_ID = "CuKsAmXgngqY2poyTw9VDE";

export const OPENAI_ADS_PIXEL_ID =
  process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID?.trim() ||
  process.env.OPENAI_ADS_PIXEL_ID?.trim() ||
  DEFAULT_PIXEL_ID;

export const OPENAI_LEAD_EVENT_STORAGE_KEY = "openai_lead_event_id";

/** @returns {string} */
export function createLeadEventId() {
  return crypto.randomUUID();
}

/**
 * Send lead_created to OpenAI Conversions API (server-side).
 * @param {{ eventId: string, sourceUrl?: string }} params
 */
export async function sendOpenAiLeadCreatedEvent({ eventId, sourceUrl }) {
  const apiKey = process.env.OPENAI_ADS_CONVERSIONS_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, reason: "missing_api_key" };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://techreforms.com";

  try {
    const response = await fetch(
      `https://bzr.openai.com/v1/events?pid=${encodeURIComponent(OPENAI_ADS_PIXEL_ID)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          validate_only: false,
          events: [
            {
              id: eventId,
              type: "lead_created",
              timestamp_ms: Date.now(),
              source_url: sourceUrl || `${siteUrl}/thank-you`,
              action_source: "web",
              data: { type: "customer_action" },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error("OpenAI Conversions API error:", response.status, body);
      return { sent: false, reason: "api_error", status: response.status };
    }

    return { sent: true };
  } catch (error) {
    console.error("OpenAI Conversions API request failed:", error);
    return { sent: false, reason: "request_failed" };
  }
}
