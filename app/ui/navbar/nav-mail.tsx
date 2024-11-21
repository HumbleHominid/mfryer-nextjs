'use client'

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Email } from "@/app/lib/ref-links";
import { useState } from "react";
import clsx from "clsx";

export default function NavMail() {
	const [ hasHovered, setHasHovered ] = useState(false);
	const [ isHovered, setIsHovered ] = useState(false);

	return (
		// Display a thing when you hover this
		<div className="relative">
			<Link
				href={`mailto:${Email}`}
				rel="noopener noreferrer"
				onMouseEnter={() => { setHasHovered(() => true); setIsHovered(() => true); }}
				onMouseLeave={() => setIsHovered(() => false)}
			>
				<EnvelopeIcon
					title="Hire me!"
					width={32}
					height={32}
				/>
			</Link>
			<div
				className={clsx(
					"w-7 h-5 bg-blue-300 rounded-md absolute top-2 right-1 -z-10 transform ease-in-out duration-2000",
					{
						"-translate-x-1" : isHovered || hasHovered,
						"translate-y-1" : hasHovered && !isHovered,
						"translate-y-2 animate-pulse" : isHovered,
					}
				)}
			/>
		</div>
	);
}