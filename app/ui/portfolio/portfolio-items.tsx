import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

export type Repo = {
  title: string;
  description: string | null;
  link: string;
  pinned: boolean;
  lastUpdated: Date;
};

export default function PortfolioItem({ data }: { data: Repo }) {
  return (
    <div>
      <Link
        href={data.link}
        target="_blank"
        rel="noreferrer noopener"
        className="text-5xl font-light decoration-1 underline-offset-2 hover:underline"
      >
        {data.title}
        <LinkIcon width={24} height={24} className="inline align-top" />
      </Link>
      <p className="mt-4 pl-8 text-2xl font-light leading-6 tracking-wide text-slate-700">
        {data.description}
      </p>
    </div>
  );
}
