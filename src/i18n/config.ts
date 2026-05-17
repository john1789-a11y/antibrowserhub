export const locales = ["en", "zh", "ru", "ja", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ru: "Русский",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  zh: "🇨🇳",
  ru: "🇷🇺",
  ja: "🇯🇵",
  fr: "🇫🇷",
  de: "🇩🇪",
};
