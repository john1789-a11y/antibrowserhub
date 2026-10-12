import { reviewUpdatedAt } from "@/data/vendorUpdates";
import { updatedGuides, CONTENT_UPDATE_DATE } from "@/data/contentUpdates";
import { getComparisonBySlug } from "@/data/comparisons";
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
    lastModified: new Date(reviewUpdatedAt(slug)),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const comparisonSlugs = getAllComparisonSlugs();
  const comparisonPages = comparisonSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date([reviewUpdatedAt(getComparisonBySlug(slug)!.browserA.slug), reviewUpdatedAt(getComparisonBySlug(slug)!.browserB.slug)].sort().at(-1)!),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const guideSlugs = getAllGuideSlugs();
  const guidePages = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: updatedGuides.includes(slug) ? new Date(CONTENT_UPDATE_DATE) : lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCaseSlugs = getAllUseCaseSlugs();
  const useCasePages = useCaseSlugs.map((slug) => ({
    url: `${baseUrl}/best-for/${slug}`,
    lastModified: new Date(CONTENT_UPDATE_DATE),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
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
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
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
      lastModified: new Date(CONTENT_UPDATE_DATE),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(CONTENT_UPDATE_DATE),
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
