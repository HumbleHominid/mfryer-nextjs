'use client'

import Image from "next/image"
import clsx from "clsx";
import { useState } from "react";

export default function NavBadge() {
	const [clicked, setClicked] = useState(false);

	return (
		<div className="relative">
			<Image
				src="/michael.png"
				alt="Michel logo"
				width={48}
				height={48}
				className="rounded-full drop-shadow-lg"
				onClick={() => setClicked(() => true)}
			/>
			<div
				className={clsx(
					"w-12 h-12 bg-blue-400 rounded-full absolute top-0 left-0 -z-10",
					{
						"transform translate-x-3 translate-y-2 ease-in duration-1000" : clicked
					}
				)}
			/>
		</div>
	);
}