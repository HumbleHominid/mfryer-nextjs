import { Metadata } from "next";
import PortfolioLayout from "@/app/ui/portfolio/portfolio-layout";
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

      <PortfolioLayout repos={repos} leftCol={leftCol} rightCol={rightCol} />
    </main>
  );
}
