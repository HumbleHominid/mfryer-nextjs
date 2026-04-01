import { Metadata } from "next";
import PortfolioItem from "@/app/ui/portfolio/portfolio-items";
import SlideInItem from "@/app/ui/slide-in-item";
import { getRepos } from "@/app/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function Page() {
  const repos = await getRepos();

  return (
    <main className="flex w-full flex-col">
      <h1 className="mb-10 text-8xl font-thin md:text-9xl">Portfolio</h1>
      <div className="flex w-full flex-col divide-y divide-slate-400 self-center md:w-9/12 xl:w-1/2">
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
