"use client";

import { useEffect, useState, useRef } from "react";

// Change the skew of the title based on the mouse position in the screen
export default function Title() {
	const titleRef = useRef<HTMLDivElement | null>(null);
	const [skewAng, setSkewAng] = useState(0);
	const [rotateAng, setRotateAng] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (titleRef.current) {
				const newCursorPos = {
					x: e.clientX,
					y: e.clientY
				};
				// Get the center of the title rect
				const bb = titleRef.current.getBoundingClientRect();
				const centerX = bb.left + bb.width/2;
				const centerY = bb.top + bb.height/2;
				const lerp = (x:number, y:number, t:number):number => {
					return (1-t) * x + t*y;
				}
				// Calculate the rotation relative to cursor x in range [-5, 5]
				const maxRotate = 30;
				if (newCursorPos.x < centerX) {
					setRotateAng(lerp(-maxRotate, 0, newCursorPos.x/centerX))
				}
				else {
					const screenWidth = screen.availWidth;
					setRotateAng(lerp(0, maxRotate, (newCursorPos.x-centerX)/(screenWidth-centerX)))
				}
				// Calculate the skew relative to cursor x and y in range [-10, 10]
				const maxAng = 10;
				if (newCursorPos.y < centerY) {
					const newSkewAng = lerp(-maxAng, 0, newCursorPos.y/centerY);
					setSkewAng(newSkewAng * (rotateAng/maxRotate))
				}
				else {
					const screenHeight = screen.availHeight;
					const newSkewAng = lerp(0, maxAng, (newCursorPos.y-centerY)/(screenHeight-centerY));
					setSkewAng(newSkewAng * (rotateAng/maxRotate))
				}
			}
		}
		addEventListener("mousemove", handleMouseMove);

		return () => {
			removeEventListener("mousemove", handleMouseMove);
		}
	});

	return (
		<div className="transform w-min" style={{transform: `skewY(${skewAng}deg) rotateX(${rotateAng}deg)`}} ref={titleRef}>
			<h1 className="text-7xl sm:text-8xl lg:text-9xl font-thin mb-8">
				<span>Hi, I&apos;m </span>
				<span className="font-semibold text-green-950">Michael</span>
				<span className="font-light text-blue-900">.</span>
			</h1>
			<p className="pl-8 leading-8 tracking-wide text-slate-700 font-light text-xl sm:text-2xl lg:text-4xl">
				I am a Software Engineer from Montana, USA.
			</p>
		</div>
	)
}