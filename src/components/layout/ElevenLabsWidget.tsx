"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  attachBannerScrubber,
  createConvaiElement,
  ELEVENLABS_SCRIPT,
  waitForConvaiCustomElement,
} from "@/lib/elevenlabs-widget";

const WIDGET_ID = "tsh-elevenlabs-convai";

function mountWidget() {
  if (document.getElementById(WIDGET_ID)) return;

  const widget = createConvaiElement(WIDGET_ID);
  document.body.appendChild(widget);
  attachBannerScrubber(widget);
}

export function ElevenLabsWidget() {
  useEffect(() => {
    waitForConvaiCustomElement().then(mountWidget);
  }, []);

  return (
    <Script
      src={ELEVENLABS_SCRIPT}
      strategy="lazyOnload"
      onReady={mountWidget}
    />
  );
}
