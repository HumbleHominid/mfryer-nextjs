'use client';

import NavBadge from "@/app/ui/navbar/nav-badge";
import NavMail from "@/app/ui/navbar/nav-mail";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
	const [ isNavExpanded, toggleNaveExpanded ] = useState(false);

	return (
		<div className="w-full sticky top-0 h-20">
			{/* Top-Level Nav */}
			<div className="flex justify-between items-center p-4">
				<div className="flex gap-8 items-center">
					<NavBadge />
					{/* Divider */}
					<div className="w-0.5 h-12 bg-slate-200" />
					{/* Menu Toggle */}
					<div
						className={clsx(
							"flex flex-col w-16 h-4 gap-8 hover:cursor-pointer text-purple-900 font-sans font-semibold leading-4 tracking-wider overflow-hidden"
						)}
						onClick={() => toggleNaveExpanded(!isNavExpanded)}
					>
						<div
							className={clsx(
								"top-0 transition-all duration-150 text-center hover:tracking-megaWide",
								isNavExpanded ? "-translate-y-4" : "translate-y-0"
							)}
						>
							MENU<br/>
							BACK
						</div>
					</div>
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
						"h-0 opacity-0" : !isNavExpanded,
					}
				)}
			/>
			{/* Sub-Menu Components */}
			<div>
				{/* Socials */}
				{/* Page Links */}
			</div>
		</div>
	)
}