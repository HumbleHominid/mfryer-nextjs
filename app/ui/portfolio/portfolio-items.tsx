import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

export type PortfolioData = {
	title: string;
	description: string;
	link: string;
}

export default function PortfolioItem({
	data
}:{
	data: PortfolioData;
}) {
	return (
		<div>
			<Link
				href={data.link}
				target="_blank"
				rel="noreferrer noopener"
				className="font-light text-5xl hover:underline underline-offset-2 decoration-1"
			>
				{data.title}<LinkIcon width={24} height={24} className="inline align-top"/>
			</Link>
			<p className="leading-6 tracking-wide font-light text-2xl text-slate-700 pl-8 mt-4">
				{data.description}
			</p>
		</div>
	)
}