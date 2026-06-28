export interface RatingCriterion {
  key: string;
  label: string;
  weight: number;
  description: string;
}

export interface TestTool {
  name: string;
  purpose: string;
}

export const ratingMethodology = {
  lastUpdated: "2026-06-27",
  reviewCycle: "Quarterly for major browser releases and pricing changes",
  criteria: [
    {
      key: "fingerprint",
      label: "Fingerprint Quality",
      weight: 30,
      description:
        "Canvas, WebGL, WebRTC, font, audio, timezone, language, and automation marker consistency.",
    },
    {
      key: "automation",
      label: "Automation & API",
      weight: 20,
      description:
        "Local API, REST API, Playwright, Selenium, Puppeteer, no-code RPA, and developer workflow support.",
    },
    {
      key: "pricing",
      label: "Pricing & Value",
      weight: 20,
      description:
        "Free plan availability, entry pricing, per-profile economics, annual discounts, and team scaling cost.",
    },
    {
      key: "team",
      label: "Team Operations",
      weight: 15,
      description:
        "Role-based access, profile sharing, activity logs, permission revocation, and bulk management.",
    },
    {
      key: "usability",
      label: "Usability & Support",
      weight: 15,
      description:
        "Setup friction, UI clarity, documentation quality, support channels, platform availability, and reliability.",
    },
  ] satisfies RatingCriterion[],
  tools: [
    {
      name: "CreepJS",
      purpose: "Browser fingerprint consistency, uniqueness, and headless or automation signals.",
    },
    {
      name: "BrowserLeaks",
      purpose: "Canvas, WebGL, WebRTC, fonts, audio, IP, timezone, and client hints inspection.",
    },
    {
      name: "Pixelscan",
      purpose: "Fingerprint and proxy consistency checks for anti-detection browser profiles.",
    },
    {
      name: "Vendor documentation",
      purpose: "API support, pricing, platform support, security claims, and feature availability.",
    },
  ] satisfies TestTool[],
  disclosure:
    "Some reviewed products have affiliate links. Affiliate relationships do not change the rating criteria, weights, or inclusion rules.",
};

