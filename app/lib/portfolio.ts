import { unstable_cache } from "next/cache";

export type Repo = {
  title: string;
  description: string | null;
  link: string;
  pinned: boolean;
  lastUpdated: Date;
  language: string | null;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  private: boolean;
  updated_at: string;
  language: string | null;
};

const favoriteRepos = [
  "toi-triage",
  "battleship_rl",
  "urban-mobility-risk-analysis",
  "arcadia-website",
  "mfryer-nextjs",
  // "entity-component-system",
  // "snake-nextjs",
];

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/HumbleHominid/repos?per_page=100",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: unknown = await res.json();
  const repos: Repo[] = (Array.isArray(data) ? (data as GitHubRepo[]) : [])
    .filter((repo) => !repo.private)
    .map((repo) => ({
      title: repo.name,
      description: repo.description,
      link: repo.html_url,
      pinned: favoriteRepos.includes(repo.name),
      lastUpdated: new Date(repo.updated_at),
      language: repo.language,
    }));

  repos.sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return a.pinned ? -1 : 1;
    }
    return b.lastUpdated.getTime() - a.lastUpdated.getTime();
  });

  return repos;
}

export const getRepos = unstable_cache(fetchRepos, ["repos"], {
  revalidate: 7 * 24 * 60 * 60,
  tags: ["repos"],
});
