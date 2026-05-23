"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "./I18nProvider";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const labelMap: Record<string, Record<string, string>> = {
  reviews: { en: "Reviews", zh: "评测", ru: "Обзоры", ja: "レビュー", fr: "Avis", de: "Bewertungen" },
  compare: { en: "Compare", zh: "对比", ru: "Сравнение", ja: "比較", fr: "Comparer", de: "Vergleichen" },
  guides: { en: "Guides", zh: "教程", ru: "Руководства", ja: "ガイド", fr: "Guides", de: "Anleitungen" },
  about: { en: "About", zh: "关于", ru: "О нас", ja: "概要", fr: "À propos", de: "Über uns" },
  blog: { en: "Blog", zh: "博客", ru: "Блог", ja: "ブログ", fr: "Blog", de: "Blog" },
  deals: { en: "Deals", zh: "优惠", ru: "Скидки", ja: "セール", fr: "Offres", de: "Angebote" },
};

export default function Breadcrumb({ customItems }: { customItems?: BreadcrumbItem[] }) {
  const pathname = usePathname();
  const { locale } = useI18n();

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items: BreadcrumbItem[] = customItems || segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const label = labelMap[seg]?.[locale] || labelMap[seg]?.en || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return { label, href };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://antibrowserhub.com" },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        item: `https://antibrowserhub.com${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((item, idx) => (
            <li key={item.href}>
              <span className="breadcrumb-sep">/</span>
              {idx === items.length - 1 ? (
                <span className="breadcrumb-current">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
