"use client";
import { useEffect } from "react";
import { readAttribution } from "@/lib/attribution";

export default function AttributionCapture() {
  useEffect(() => { readAttribution(window.location.pathname, window.location.search); }, []);
  return null;
}
