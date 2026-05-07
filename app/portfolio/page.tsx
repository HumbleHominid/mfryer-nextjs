import { Metadata } from "next";
import PortfolioItem from "@/app/ui/portfolio/portfolio-items";
import SlideInItem from "@/app/ui/slide-in-item";
import { getRepos, type Repo } from "@/app/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
};

function estimateHeight(repo: Repo): number {
  const descLen = repo.description?.length ?? 0;
  const descLines = Math.min(2, Math.ceil((descLen || 1) / 60));
  const chevron = descLen > 60 ? 1 : 0;
  const titleBonus = repo.title.length > 20 ? -0.2 : 0;
  return 3 + descLines + chevron + titleBonus;
}

function splitColumns(repos: Repo[]): [Repo[], Repo[]] {
  const left: Repo[] = [];
  const right: Repo[] = [];
  let leftH = 0;
  let rightH = 0;

  for (const repo of repos) {
    const h = estimateHeight(repo);
    if (leftH <= rightH) {
      left.push(repo);
      leftH += h;
    } else {
      right.push(repo);
      rightH += h;
    }
  }

  return [left, right];
}

export default async function Page() {
  const repos = await getRepos();
  const [leftCol, rightCol] = splitColumns(repos);

  return (
    <main className="flex w-full flex-col">
      <h1 className="mb-10 text-8xl font-thin md:text-9xl">Portfolio</h1>

      {/* Mobile: single full-width column */}
      <div className="flex flex-col gap-6 md:hidden">
        {repos.map((item) => (
          <SlideInItem key={item.title}>
            <PortfolioItem data={item} />
          </SlideInItem>
        ))}
      </div>

      {/* md+: two height-balanced flex columns */}
      <div className="hidden gap-6 md:flex">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          {leftCol.map((item) => (
            <SlideInItem key={item.title}>
              <PortfolioItem data={item} />
            </SlideInItem>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          {rightCol.map((item) => (
            <SlideInItem key={item.title}>
              <PortfolioItem data={item} />
            </SlideInItem>
          ))}
        </div>
      </div>
    </main>
  );
}
