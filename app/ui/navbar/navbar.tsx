'use client';

import NavBadge from "@/app/ui/navbar/nav-badge";
import NavMail from "@/app/ui/navbar/nav-mail";
import { useState } from "react";
import clsx from "clsx";
import NavLink from "@/app/ui/navbar/nav-link";
import NavExpansionWidget from "@/app/ui/navbar/nav-expansion-widget";
import NavSocials from "@/app/ui/navbar/nav-socials";

export default function Navbar() {
	const [ isNavExpanded, setNavExpanded ] = useState(false);
	const [ showSubNav, setShowSubNav ] = useState(false);

	let showNavTimeout: NodeJS.Timeout;

	function handleClick(showNav: boolean) {
		if (showNav) {
			if (showNavTimeout) clearTimeout(showNavTimeout);
			setNavExpanded(true);
			setShowSubNav(true);
		}
		else {
			setNavExpanded(false);
			showNavTimeout = setTimeout(() => {setShowSubNav(false);}, 1000);
		}
	}

	const routeLinks = [
		{ href: "/", routeName: "Home", text: "Back to home"},
		{ href: "/about", routeName: "About", text: "More about me" },
		{ href: "/game", routeName: "Game", text: "Totally original game" },
	];

	return (
		<>
			{/* Top-Level Nav */}
			<div className="relative z-50 flex justify-between items-center p-4">
				<div className="flex gap-8 items-center">
					<NavBadge />
					{/* Divider */}
					<div className="w-0.5 h-12 bg-slate-200" />
					{/* Menu Toggle */}
					<NavExpansionWidget
						isNavExpanded={isNavExpanded}
						clickCallback={() => handleClick(!isNavExpanded)}
					/>
				</div>
				<NavMail />
			</div>
			{/* Sub-Level Nav */}
			{/* Sub-Menu Mask */}
			<div
				className={clsx(
					"absolute w-full top-0 bg-blue-200 z-40 transition-all duration-1000 ease-in-out",
						isNavExpanded ? "h-lvh opacity-100" : "h-0 opacity-0 delay-700",
				)}
			/>
			{/* Sub-Menu Components */}
			<div
				className={clsx(
 					"relative z-50 flex flex-col gap-16 m-20 mr-0 overflow-hidden",
					showSubNav ? "h-auto" : "h-0"
				)}
			>
				{/* Socials */}
				<NavSocials isNavExpanded={isNavExpanded} />
				{/* Page Links */}
				{routeLinks.map((link, index) => {
					return (
						<NavLink
							key={link.href}
							data={link}
							index={index}
							isNavExpanded={isNavExpanded}
							routeClickCallback={() => handleClick(false)}
						/>
					)
				})}
			</div>
		</>
	)
}