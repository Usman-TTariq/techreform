/** Open Zendesk Web Widget (messaging or classic). */
export function openZendesk() {
  if (typeof window === "undefined") return;

  const openWidget = () => {
    if (typeof window.zE !== "function") return;

    try {
      window.zE("messenger", "open");
    } catch {
      try {
        window.zE("webWidget", "open");
      } catch {
        /* widget API unavailable */
      }
    }
  };

  if (typeof window.zE === "function") {
    window.zE(openWidget);
  }
}
