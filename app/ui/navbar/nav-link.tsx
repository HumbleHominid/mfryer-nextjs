import Link from "next/link";
import clsx from "clsx";

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
	routeClickCallback: Function;
}) {
	return (
		<div
			className={clsx(
				`flex items-baseline gap-4 transition-all ease-in-out delay-${200*(index+1)}`,
				{
					"translate-x-0 opacity-100 duration-1000" : isNavExpanded,
					"translate-x-full opacity-0 duration-1000" : !isNavExpanded,
				},
			)}
		>
			{/* Route Name */}
			<Link
				href={data.href}
				onClick={() => routeClickCallback()}
			>
				<span className="font-extrabold text-5xl text-purple-950 hover:text-white transition-colors">
					{data.routeName}
				</span>
			</Link>
			{/* Dash */}
			<div className="w-8 h-0.5 bg-slate-500 self-center translate translate-y-1" />
			{/* Extra Text */}
			<span className="font-extralight text-3xl text-purple-600 self-end">
				{data.text}
			</span>
		</div>
	);
}