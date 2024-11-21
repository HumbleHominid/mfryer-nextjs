'use client';

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function HomeItem({
	children,
	dir,
} : {
	children: React.ReactNode;
	dir: 'left' | 'right';
}) {
	const ref = useRef(null);
	const [ show, doShow ] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const topPos = (el: HTMLElement) => el.getBoundingClientRect().top;
			const divPos = ref.current ? topPos(ref.current) : 0;

			if (divPos < 0.80 * window.innerHeight) doShow(true);
		}

		onScroll();

		window.addEventListener("scroll", () => onScroll());
		window.removeEventListener("scroll", () => onScroll());
	});

	return (
		<div
		ref={ref}
			className={clsx(
				"my-8 p-8 transition-all duration-700 ease-in-out",
				show ? "opacity-100 translate-x-0" : "opacity-0",
				{
					"-translate-x-lvw" : !show && dir === "left",
					"translate-x-lvw" : !show && dir === "right",
				}
			)}
		>
			{children}
		</div>
	);
}