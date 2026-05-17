export interface Browser {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  logo: string;
  website: string;
  affiliateUrl: string;
  rating: {
    overall: number;
    fingerprint: number;
    performance: number;
    usability: number;
    pricing: number;
    support: number;
  };
  pricing: {
    free: boolean;
    freeProfiles: number;
    startingPrice: string;
    plans: PricingPlan[];
  };
  features: string[];
  pros: string[];
  cons: string[];
  platforms: ("windows" | "macos" | "linux" | "android" | "ios")[];
  hasAPI: boolean;
  hasTeamFeatures: boolean;
  hasCookieImport: boolean;
  automationSupport: string[];
  foundedYear: number;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  profiles: string;
  features: string[];
}

export interface ReviewMeta {
  title: string;
  slug: string;
  browser: string;
  date: string;
  author: string;
  excerpt: string;
  rating: number;
  readingTime: string;
  coverImage?: string;
}

export interface GuideMeta {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  readingTime: string;
}
