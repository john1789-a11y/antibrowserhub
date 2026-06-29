import { MetadataRoute } from "next";
import { getAllBrowserSlugs } from "@/data/browsers";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllGuideSlugs } from "@/data/guides";
import { getAllUseCaseSlugs } from "@/data/useCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://antibrowserhub.com";
  // Update this date when content is actually modified
  const lastUpdated = new Date("2026-06-27");

  const browserSlugs = getAllBrowserSlugs();
  const browserPages = browserSlugs.map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const comparisonSlugs = getAllComparisonSlugs();
  const comparisonPages = comparisonSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const guideSlugs = getAllGuideSlugs();
  const guidePages = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCaseSlugs = getAllUseCaseSlugs();
  const useCasePages = useCaseSlugs.map((slug) => ({
    url: `${baseUrl}/best-for/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/proxies`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-for`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/fingerprint-check`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/webrtc-leak-test`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/ip-checker`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/user-agent-parser`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/http-headers`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...browserPages,
    ...comparisonPages,
    ...guidePages,
    ...useCasePages,
  ];
}
