import { unstable_cache } from "next/cache";

export type Repo = {
  title: string;
  description: string | null;
  link: string;
  pinned: boolean;
  lastUpdated: Date;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  private: boolean;
  updated_at: string;
};

const favoriteRepos = [
  "arcadia-website",
  "mfryer-nextjs",
  "entity-component-system",
  "snake-nextjs",
];

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch("https://api.github.com/users/HumbleHominid/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: GitHubRepo[] = await res.json();
  const repos: Repo[] = data
    .filter((repo) => !repo.private)
    .map((repo) => ({
      title: repo.name,
      description: repo.description,
      link: repo.html_url,
      pinned: favoriteRepos.includes(repo.name),
      lastUpdated: new Date(repo.updated_at),
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
