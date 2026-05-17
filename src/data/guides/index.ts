import type { Locale } from "@/i18n/config";
import { zhGuides } from "./zh";
import { ruGuides } from "./ru";
import { jaGuides } from "./ja";
import { frGuides } from "./fr";
import { deGuides } from "./de";

// Guide content translations by locale
// English content is the default from guides.ts
const guideTranslations: Partial<Record<Locale, Record<string, string>>> = {
  zh: zhGuides,
  ru: ruGuides,
  ja: jaGuides,
  fr: frGuides,
  de: deGuides,
};

export function getTranslatedGuideContent(
  slug: string,
  locale: Locale,
  defaultContent: string
): string {
  if (locale === "en") return defaultContent;
  return guideTranslations[locale]?.[slug] || defaultContent;
}
