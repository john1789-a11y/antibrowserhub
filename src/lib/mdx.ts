import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ReviewMeta, GuideMeta } from "@/types";

const contentDir = path.join(process.cwd(), "content");

export function getReviewSlugs(): string[] {
  const reviewsDir = path.join(contentDir, "reviews");
  if (!fs.existsSync(reviewsDir)) return [];
  return fs
    .readdirSync(reviewsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getReviewBySlug(slug: string): {
  meta: ReviewMeta;
  content: string;
} | null {
  const filePath = path.join(contentDir, "reviews", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title || "",
      slug,
      browser: data.browser || "",
      date: data.date || "",
      author: data.author || "AntiBrowserHub Team",
      excerpt: data.excerpt || "",
      rating: data.rating || 0,
      readingTime: data.readingTime || "5 min read",
      coverImage: data.coverImage,
    },
    content,
  };
}

export function getAllReviews(): ReviewMeta[] {
  const slugs = getReviewSlugs();
  return slugs
    .map((slug) => {
      const review = getReviewBySlug(slug);
      return review?.meta;
    })
    .filter((meta): meta is ReviewMeta => meta !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getGuideSlugs(): string[] {
  const guidesDir = path.join(contentDir, "guides");
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string): {
  meta: GuideMeta;
  content: string;
} | null {
  const filePath = path.join(contentDir, "guides", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title || "",
      slug,
      date: data.date || "",
      author: data.author || "AntiBrowserHub Team",
      excerpt: data.excerpt || "",
      category: data.category || "General",
      readingTime: data.readingTime || "5 min read",
    },
    content,
  };
}

export function getAllGuides(): GuideMeta[] {
  const slugs = getGuideSlugs();
  return slugs
    .map((slug) => {
      const guide = getGuideBySlug(slug);
      return guide?.meta;
    })
    .filter((meta): meta is GuideMeta => meta !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
