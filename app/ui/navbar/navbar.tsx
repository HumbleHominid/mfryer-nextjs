'use client';

import NavBadge from "@/app/ui/navbar/nav-badge";
import NavMail from "@/app/ui/navbar/nav-mail";
import { useState } from "react";
import clsx from "clsx";
import NavLink from "@/app/ui/navbar/nav-link";
import NavExpansionWidget from "@/app/ui/navbar/nav-expansion-widget";

export default function Navbar() {
	const [ isNavExpanded, setNavExpanded ] = useState(false);

	const routeLinks = [
		{ href: "/", routeName: "Home", text: "Back to home."},
		{ href: "/about", routeName: "About", text: "More about me." }
	];

	return (
		<div className="sticky top-0 h-20">
			{/* Top-Level Nav */}
			<div className="flex justify-between items-center p-4">
				<div className="flex gap-8 items-center">
					<NavBadge />
					{/* Divider */}
					<div className="w-0.5 h-12 bg-slate-200" />
					{/* Menu Toggle */}
					<NavExpansionWidget
						isNavExpanded={isNavExpanded}
						clickCallback={() => setNavExpanded(!isNavExpanded)}
					/>
				</div>
				<div>
					<NavMail />
				</div>
			</div>
			{/* Sub-Level Nav */}
			{/* Sub-Menu Mask */}
			<div
				className={clsx(
					"absolute w-full top-0 bg-blue-200 -z-20 transition-all duration-1000 ease-in-out",
					{
						"h-lvh opacity-100" : isNavExpanded,
						"h-0 opacity-0 delay-700" : !isNavExpanded,
					}
				)}
			/>
			{/* Sub-Menu Components */}
			<div className="flex flex-col gap-16 m-20">
				{/* Socials */}
				{/* Page Links */}
				{
						routeLinks.map((link, index, arr) => {
							return (
								<NavLink
									key={link.href}
									data={link}
									index={index}
									isNavExpanded={isNavExpanded}
									routeClickCallback={() => setNavExpanded(false)}
								/>
							)
						})
				}
			</div>
		</div>
	)
}