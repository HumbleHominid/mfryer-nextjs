import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export type NavLinkData = {
	href: string;
	routeName: string;
	text: string;
}

export default function NavLink({
	data,
	index,
	isNavExpanded,
	routeClickCallback,
} : {
	data: NavLinkData;
	index: number;
	isNavExpanded: boolean;
	routeClickCallback: () => void;
}) {
	const [ isHovered, setIsHovered ] = useState(false);

	return (
		<div
			style={{transitionDelay: `${200*(index+1)}ms`}}
			className={clsx(
				"flex items-baseline gap-4 transition-all ease-in-out duration-1000",
				isNavExpanded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
				isHovered ? "gap-6" : "gap-4",
			)}
		>
			{/* Route Name */}
			<Link
				href={data.href}
				onClick={() => routeClickCallback()}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span className="font-extrabold text-3xl md:text-5xl transition-colors text-purple-950 hover:text-white filter hover:drop-shadow-md">
					{data.routeName}
				</span>
			</Link>
			{/* Dash */}
			<div className="w-4 md:w-8 h-0.5 bg-slate-500 self-center translate translate-y-1" />
			{/* Extra Text */}
			<span className="font-extralight text-xl md:text-3xl text-purple-600 md:self-end">
				{data.text}
				{/* Neato big period */}
				<span className="font-light text-4xl text-black">.</span>
			</span>
		</div>
	);
}