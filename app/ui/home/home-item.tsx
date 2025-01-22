'use client';

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function HomeItem({
	children,
} : {
	children: React.ReactNode;
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
				"mb-8 p-8 transition-all duration-300 ease-in-out",
				{
					"opacity-100 translate-y-0" : show,
					"opacity-0 translate-y-32" : !show,
				}
			)}
		>
			{children}
		</div>
	);
}