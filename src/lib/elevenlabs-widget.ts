export const ELEVENLABS_AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ??
  "agent_3901ksrt8hskf6qazgnv2f4zfph2";

export const ELEVENLABS_SCRIPT =
  "https://unpkg.com/@elevenlabs/convai-widget-embed";

export function hidePoweredByBanner(widget: HTMLElement) {
  const root = widget.shadowRoot;
  if (!root) return false;

  root.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href") ?? "";
    const text = anchor.textContent?.toLowerCase() ?? "";
    if (
      href.includes("elevenlabs") ||
      text.includes("elevenagents") ||
      text.includes("elevenlabs") ||
      text.includes("powered by")
    ) {
      const row =
        anchor.closest('[class*="banner"]') ??
        anchor.closest('[class*="footer"]') ??
        anchor.parentElement;
      if (row instanceof HTMLElement) {
        row.style.setProperty("display", "none", "important");
        row.style.setProperty("visibility", "hidden", "important");
        row.style.setProperty("height", "0", "important");
        row.style.setProperty("overflow", "hidden", "important");
      }
    }
  });

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.textContent?.trim().toLowerCase() ?? "";
    if (text.includes("powered by eleven")) {
      const el = node.parentElement;
      if (el) el.style.setProperty("display", "none", "important");
    }
  }

  return true;
}

export function attachBannerScrubber(widget: HTMLElement) {
  const scrub = () => hidePoweredByBanner(widget);
  const observer = new MutationObserver(scrub);
  observer.observe(widget, { childList: true, subtree: true });
  const interval = window.setInterval(scrub, 400);
  window.setTimeout(() => {
    window.clearInterval(interval);
    observer.disconnect();
  }, 60000);
  scrub();
}

export function createConvaiElement(
  id: string,
  options?: { expanded?: boolean }
) {
  const widget = document.createElement("elevenlabs-convai");
  widget.id = id;
  widget.setAttribute("agent-id", ELEVENLABS_AGENT_ID);
  widget.toggleAttribute("disable-banner", true);
  widget.setAttribute("action-text", "Talk to TechSolutionHub");
  widget.setAttribute("start-call-text", "Start conversation");
  widget.setAttribute("end-call-text", "End call");
  widget.setAttribute("avatar-orb-color-1", "#3B82F6");
  widget.setAttribute("avatar-orb-color-2", "#8B5CF6");
  if (options?.expanded) {
    widget.setAttribute("variant", "expanded");
  }
  return widget;
}

export function waitForConvaiCustomElement(): Promise<void> {
  if (customElements.get("elevenlabs-convai")) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const interval = window.setInterval(() => {
      if (customElements.get("elevenlabs-convai")) {
        window.clearInterval(interval);
        resolve();
      }
    }, 150);
  });
}
