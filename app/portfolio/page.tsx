import { Metadata } from "next";
import PortfolioItem, { Repo } from "@/app/ui/portfolio/portfolio-items";
import SlideInItem from "@/app/ui/slide-in-item";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: "Portfolio",
};

const favoriteRepos = [
  "arcadia-website",
  "mfryer-nextjs",
  "entity-component-system",
  "snake-nextjs",
];

async function getRepos() {
  const res = await fetch("https://api.github.com/users/HumbleHominid/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const repos: Repo[] = data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((repo: any) => !repo.private)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((repo: any) => ({
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

export default async function Page() {
  const getCachedRepos = unstable_cache(
    async () => {
      return await getRepos();
    },
    ["repos"],
    { revalidate: 7 * 24 * 60 * 60, tags: ["repos"] }, // 7 days
  );
  const repos = await getCachedRepos();

  return (
    <main className="flex w-full flex-col">
      <h1 className="mb-10 text-8xl font-thin md:text-9xl">Portfolio</h1>
      <div className="flex flex-col divide-y divide-slate-400 self-center md:w-9/12 xl:w-1/2">
        {repos.map((item) => {
          return (
            <SlideInItem key={item.title} className="p-8">
              <PortfolioItem data={item} />
            </SlideInItem>
          );
        })}
      </div>
    </main>
  );
}
