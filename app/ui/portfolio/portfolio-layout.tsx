"use client";

import PortfolioItem from "@/app/ui/portfolio/portfolio-items";
import SlideInItem from "@/app/ui/slide-in-item";
import { useClientMediaQuery } from "@/app/lib/hooks/use-client-media-query";
import type { Repo } from "@/app/lib/portfolio";

export default function PortfolioLayout({
  repos,
  leftCol,
  rightCol,
}: {
  repos: Repo[];
  leftCol: Repo[];
  rightCol: Repo[];
}) {
  const isMdUp = useClientMediaQuery("(min-width: 768px)");

  if (!isMdUp) {
    return (
      <div className="flex flex-col gap-6">
        {repos.map((item) => (
          <SlideInItem key={item.title}>
            <PortfolioItem data={item} />
          </SlideInItem>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-6">
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
  );
}
