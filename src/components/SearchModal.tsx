"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { browsers } from "@/data/browsers";
import { guides } from "@/data/guides";
import { proxyProviders } from "@/data/proxies";
import { useI18n } from "./I18nProvider";

interface SearchResult {
  type: "browser" | "guide" | "page";
  title: string;
  description: string;
  href: string;
  icon: string;
}

const staticPages: SearchResult[] = [
  { type: "page", title: "Compare All Browsers", description: "Side-by-side feature and pricing comparison", href: "/compare", icon: "⚖️" },
  { type: "page", title: "Guides & Tutorials", description: "Expert guides for antidetect browsers", href: "/guides", icon: "📚" },
  { type: "page", title: "About AntiBrowserHub", description: "Learn about our mission and team", href: "/about", icon: "ℹ️" },
  { type: "page", title: "Review Methodology", description: "How AntiBrowserHub rates and tests antidetect browsers", href: "/methodology", icon: "🧪" },
  { type: "page", title: "Deals & Discounts", description: "Exclusive coupon codes and promotions", href: "/deals", icon: "🏷️" },
  { type: "page", title: "Proxy Providers", description: `${proxyProviders.length} proxy providers for antidetect browsers`, href: "/proxies", icon: "🌐" },
  { type: "page", title: "Fingerprint Checker", description: "Free browser fingerprint analysis tool", href: "/tools/fingerprint-check", icon: "🔍" },
];

function buildSearchIndex(): SearchResult[] {
  const browserResults: SearchResult[] = browsers.map((b) => ({
    type: "browser" as const,
    title: `${b.name} Review`,
    description: b.tagline,
    href: `/reviews/${b.slug}`,
    icon: "🔍",
  }));

  const guideResults: SearchResult[] = guides.map((g) => ({
    type: "guide" as const,
    title: g.title,
    description: g.excerpt,
    href: `/guides/${g.slug}`,
    icon: "📖",
  }));

  // Add X vs Y comparisons for top browsers
  const vsResults: SearchResult[] = [];
  const topBrowsers = browsers.slice(0, 6);
  for (let i = 0; i < topBrowsers.length; i++) {
    for (let j = i + 1; j < topBrowsers.length; j++) {
      const a = topBrowsers[i];
      const b = topBrowsers[j];
      const [s1, s2] = a.slug < b.slug ? [a, b] : [b, a];
      vsResults.push({
        type: "page" as const,
        title: `${a.name} vs ${b.name}`,
        description: `Compare ${a.name} and ${b.name} side by side`,
        href: `/compare/${s1.slug}-vs-${s2.slug}`,
        icon: "⚖️",
      });
    }
  }

  return [...browserResults, ...guideResults, ...vsResults, ...staticPages];
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const { t } = useI18n();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, searchIndex]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setQuery("");
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
      setSelectedIndex(0);
    }, 0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      onClose();
      window.location.href = results[selectedIndex].href;
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="search-overlay" onClick={onClose} />
      <div className="search-modal">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder={t.common.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>
        {results.length > 0 && (
          <div className="search-results">
            {results.map((result, idx) => (
              <Link
                key={result.href}
                href={result.href}
                className={`search-result-item${idx === selectedIndex ? " selected" : ""}`}
                onClick={onClose}
              >
                <span className="search-result-icon">{result.icon}</span>
                <div className="search-result-content">
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-desc">{result.description}</div>
                </div>
                <span className="search-result-type">{result.type}</span>
              </Link>
            ))}
          </div>
        )}
        {query && results.length === 0 && (
          <div className="search-empty">
            {t.common.noResults} — &ldquo;{query}&rdquo;
          </div>
        )}
      </div>
    </>
  );
}
