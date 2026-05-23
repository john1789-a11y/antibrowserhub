import { browsers } from "./browsers";
import type { Browser } from "@/types";

export interface ComparisonPair {
  slugA: string;
  slugB: string;
  browserA: Browser;
  browserB: Browser;
  combinedSlug: string; // e.g. "morelogin-vs-adspower"
}

/**
 * Generate all meaningful comparison pairs from the browser list.
 * We generate pairs for the top browsers that users are most likely to compare.
 * Order: alphabetical by combined slug for consistency.
 */
export function getAllComparisonPairs(): ComparisonPair[] {
  const pairs: ComparisonPair[] = [];

  for (let i = 0; i < browsers.length; i++) {
    for (let j = i + 1; j < browsers.length; j++) {
      const a = browsers[i];
      const b = browsers[j];
      // Alphabetical ordering for consistent URLs
      const [browserA, browserB] = a.slug < b.slug ? [a, b] : [b, a];
      pairs.push({
        slugA: browserA.slug,
        slugB: browserB.slug,
        browserA,
        browserB,
        combinedSlug: `${browserA.slug}-vs-${browserB.slug}`,
      });
    }
  }

  return pairs.sort((a, b) => a.combinedSlug.localeCompare(b.combinedSlug));
}

export function getComparisonBySlug(
  combinedSlug: string
): ComparisonPair | undefined {
  return getAllComparisonPairs().find((p) => p.combinedSlug === combinedSlug);
}

export function getAllComparisonSlugs(): string[] {
  return getAllComparisonPairs().map((p) => p.combinedSlug);
}

/**
 * Get a human-readable comparison verdict based on ratings.
 */
export function getComparisonVerdict(a: Browser, b: Browser): string {
  const diff = a.rating.overall - b.rating.overall;
  if (Math.abs(diff) < 0.2) {
    return `${a.name} and ${b.name} are very closely matched overall. Your choice should depend on specific features and pricing that matter most to your use case.`;
  }
  const winner = diff > 0 ? a : b;
  const loser = diff > 0 ? b : a;
  return `${winner.name} edges out ${loser.name} with a higher overall rating (${winner.rating.overall} vs ${loser.rating.overall}). However, ${loser.name} may still be the better choice depending on your specific needs and budget.`;
}

/**
 * Generate comparison rows for the X vs Y table.
 */
export function getComparisonRows(a: Browser, b: Browser) {
  return {
    overview: [
      { label: "Overall Rating", a: `⭐ ${a.rating.overall}/5`, b: `⭐ ${b.rating.overall}/5` },
      { label: "Starting Price", a: a.pricing.startingPrice, b: b.pricing.startingPrice },
      { label: "Free Plan", a: a.pricing.free ? `✓ ${a.pricing.freeProfiles} profiles` : "✗ No", b: b.pricing.free ? `✓ ${b.pricing.freeProfiles} profiles` : "✗ No" },
      { label: "Platforms", a: a.platforms.join(", "), b: b.platforms.join(", ") },
      { label: "Founded", a: String(a.foundedYear), b: String(b.foundedYear) },
    ],
    ratings: [
      { label: "Fingerprint Quality", a: `${a.rating.fingerprint}/5`, b: `${b.rating.fingerprint}/5`, winA: a.rating.fingerprint > b.rating.fingerprint, winB: b.rating.fingerprint > a.rating.fingerprint },
      { label: "Performance", a: `${a.rating.performance}/5`, b: `${b.rating.performance}/5`, winA: a.rating.performance > b.rating.performance, winB: b.rating.performance > a.rating.performance },
      { label: "Usability", a: `${a.rating.usability}/5`, b: `${b.rating.usability}/5`, winA: a.rating.usability > b.rating.usability, winB: b.rating.usability > a.rating.usability },
      { label: "Pricing Value", a: `${a.rating.pricing}/5`, b: `${b.rating.pricing}/5`, winA: a.rating.pricing > b.rating.pricing, winB: b.rating.pricing > a.rating.pricing },
      { label: "Support", a: `${a.rating.support}/5`, b: `${b.rating.support}/5`, winA: a.rating.support > b.rating.support, winB: b.rating.support > a.rating.support },
    ],
    features: [
      { label: "API Access", a: a.hasAPI ? "✓" : "✗", b: b.hasAPI ? "✓" : "✗" },
      { label: "Team Features", a: a.hasTeamFeatures ? "✓" : "✗", b: b.hasTeamFeatures ? "✓" : "✗" },
      { label: "Cookie Import", a: a.hasCookieImport ? "✓" : "✗", b: b.hasCookieImport ? "✓" : "✗" },
      { label: "Automation", a: a.automationSupport.join(", "), b: b.automationSupport.join(", ") },
    ],
  };
}
