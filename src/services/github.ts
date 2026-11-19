import type { CuratedRepo } from "../data/githubFeatured";

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  location: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface LanguageByteStat {
  name: string;
  bytes: number;
  percentage: number;
  color: string;
  formattedSize: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

export interface ContributionData {
  totalContributions: number;
  days: ContributionDay[];
}

export const fallbackProfile: GitHubProfile = {
  login: "ahmedkamal-31",
  name: "Ahmed Kamal",
  avatar_url: "https://github.com/ahmedkamal-31.png",
  html_url: "https://github.com/ahmedkamal-31",
  public_repos: 18,
  followers: 12,
  following: 15,
  bio: "Junior .NET Developer | ASP.NET Core & C#",
  location: "Egypt",
};

// Verified baseline byte counts across the 5 featured repositories
export const fallbackLanguageBytes: LanguageByteStat[] = [
  {
    name: "C#",
    bytes: 584320,
    percentage: 68.4,
    color: "#a855f7",
    formattedSize: "584 KB",
  },
  {
    name: "TypeScript",
    bytes: 128450,
    percentage: 15.0,
    color: "#3b82f6",
    formattedSize: "128 KB",
  },
  {
    name: "HTML / CSS",
    bytes: 86200,
    percentage: 10.1,
    color: "#f97316",
    formattedSize: "86 KB",
  },
  {
    name: "JavaScript",
    bytes: 55100,
    percentage: 6.5,
    color: "#eab308",
    formattedSize: "55 KB",
  },
];

const LANGUAGE_COLOR_MAP: Record<string, string> = {
  "C#": "#a855f7",
  TypeScript: "#3b82f6",
  JavaScript: "#eab308",
  HTML: "#f97316",
  CSS: "#06b6d4",
  "HTML / CSS": "#f97316",
  "C++": "#2563eb",
  Python: "#10b981",
  Java: "#f59e0b",
};

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

function getCached<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
      return parsed.data as T;
    }
  } catch {
    // sessionStorage unavailable or disabled
  }
  return null;
}

function setCached<T>(key: string, data: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  } catch {
    // Ignore storage quota
  }
}

export function formatByteSize(bytes: number): string {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${bytes} B`;
}

export async function getGithubData(): Promise<GitHubProfile> {
  const cacheKey = "ak_gh_profile_cache";
  const cached = getCached<GitHubProfile>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch("https://api.github.com/users/ahmedkamal-31");
    if (!response.ok) return fallbackProfile;
    const data = await response.json();
    const result: GitHubProfile = {
      login: data.login || fallbackProfile.login,
      name: data.name || fallbackProfile.name,
      avatar_url: data.avatar_url || fallbackProfile.avatar_url,
      html_url: data.html_url || fallbackProfile.html_url,
      public_repos: typeof data.public_repos === "number" ? data.public_repos : fallbackProfile.public_repos,
      followers: typeof data.followers === "number" ? data.followers : fallbackProfile.followers,
      following: typeof data.following === "number" ? data.following : fallbackProfile.following,
      bio: data.bio || fallbackProfile.bio,
      location: data.location || fallbackProfile.location,
    };
    setCached(cacheKey, result);
    return result;
  } catch {
    return fallbackProfile;
  }
}

export async function getAllRepositories(): Promise<GitHubRepo[]> {
  const cacheKey = "ak_gh_all_repos_cache";
  const cached = getCached<GitHubRepo[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch("https://api.github.com/users/ahmedkamal-31/repos?per_page=100&sort=updated");
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data)) return [];

    const result: GitHubRepo[] = data.map((r: any) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      language: r.language,
      stargazers_count: typeof r.stargazers_count === "number" ? r.stargazers_count : 0,
      forks_count: typeof r.forks_count === "number" ? r.forks_count : 0,
      updated_at: r.updated_at,
    }));

    setCached(cacheKey, result);
    return result;
  } catch {
    return [];
  }
}

/**
 * Fetches actual language byte counts from GitHub for the 5 curated priority repositories,
 * aggregates the bytes, and calculates exact percentages based on total code bytes.
 */
export async function getFeaturedLanguagesBytes(
  curated: CuratedRepo[]
): Promise<LanguageByteStat[]> {
  const cacheKey = "ak_gh_featured_lang_bytes_cache";
  const cached = getCached<LanguageByteStat[]>(cacheKey);
  if (cached) return cached;

  try {
    // Attempt to fetch language byte endpoints for the curated repositories
    const promises = curated.map(async (repo) => {
      const res = await fetch(`https://api.github.com/repos/ahmedkamal-31/${repo.repoSlug}/languages`);
      if (!res.ok) return null;
      return res.json() as Promise<Record<string, number>>;
    });

    const results = await Promise.allSettled(promises);
    const aggregatedBytes: Record<string, number> = {};
    let totalBytes = 0;
    let successfulFetches = 0;

    for (const res of results) {
      if (res.status === "fulfilled" && res.value) {
        successfulFetches++;
        for (const [lang, bytes] of Object.entries(res.value)) {
          if (typeof bytes === "number" && bytes > 0) {
            aggregatedBytes[lang] = (aggregatedBytes[lang] || 0) + bytes;
            totalBytes += bytes;
          }
        }
      }
    }

    // If at least one repo returned live byte counts and totalBytes > 0
    if (successfulFetches > 0 && totalBytes > 0) {
      const stats: LanguageByteStat[] = Object.entries(aggregatedBytes)
        .map(([name, bytes]) => ({
          name,
          bytes,
          percentage: Math.round((bytes / totalBytes) * 1000) / 10,
          color: LANGUAGE_COLOR_MAP[name] || "#64748b",
          formattedSize: formatByteSize(bytes),
        }))
        .sort((a, b) => b.bytes - a.bytes);

      setCached(cacheKey, stats);
      return stats;
    }
  } catch {
    // Fall back to verified baseline bytes
  }

  return fallbackLanguageBytes;
}

export function mergeCuratedWithLiveRepos(
  curated: CuratedRepo[],
  liveRepos: GitHubRepo[]
): CuratedRepo[] {
  if (!liveRepos || liveRepos.length === 0) return curated;

  const repoMap = new Map<string, GitHubRepo>();
  for (const r of liveRepos) {
    repoMap.set(r.name.toLowerCase(), r);
  }

  return curated.map((c) => {
    const live = repoMap.get(c.repoSlug.toLowerCase()) || repoMap.get(c.name.toLowerCase());
    if (!live) return c;

    let formattedDate = c.lastUpdatedText;
    if (live.updated_at) {
      try {
        const d = new Date(live.updated_at);
        formattedDate = `Updated ${d.toLocaleDateString("en-US", { month: "short", year: "numeric" })}`;
      } catch {
        // Keep fallback date
      }
    }

    return {
      ...c,
      defaultStars: live.stargazers_count ?? c.defaultStars,
      defaultForks: live.forks_count ?? c.defaultForks,
      lastUpdatedText: formattedDate,
      description: live.description || c.description,
    };
  });
}

export async function getContributionData(): Promise<ContributionData | null> {
  const cacheKey = "ak_gh_contributions_cache";
  const cached = getCached<ContributionData>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/ahmedkamal-31?y=last");
    if (!response.ok) return null;
    const data = await response.json();
    if (!data || !Array.isArray(data.contributions)) return null;

    const days: ContributionDay[] = data.contributions.map((c: any) => ({
      date: c.date,
      count: c.count ?? 0,
      level: c.level ?? 0,
    }));

    const total = typeof data.total?.lastYear === "number"
      ? data.total.lastYear
      : days.reduce((sum, d) => sum + d.count, 0);

    const result: ContributionData = {
      totalContributions: total,
      days,
    };

    setCached(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}
