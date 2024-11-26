'use client';

import { useEffect, useRef, useState } from "react";
import Starfield from "@/app/lib/game/starfield";

export default function GameCanvas({

}: {

}) {
	const ref = useRef(null);
	let renderInterval: NodeJS.Timeout;
	let stars: Starfield | null = null;

	const getContext = (): CanvasRenderingContext2D | null => {
		if (!ref.current) return null;
		const get2dContext = (el: HTMLCanvasElement) => el.getContext('2d');
		return get2dContext(ref.current);
	}

	useEffect(() => {
		const ctx = getContext();
		if (!ctx) return;

		stars = new Starfield(ctx.canvas.width, ctx.canvas.height);
		renderInterval = setInterval(() => render(), 50);

		// render immediately as well
		render();

		return () => {
			clearInterval(renderInterval);
		}
	}, []);

	const render = () => {
		const ctx = getContext();
		if (!ctx) return;

		const width = ctx.canvas.width;
		const height = ctx.canvas.height;

		// Draw background
		ctx.clearRect(0, 0, width, height);

		// Draw a dark screen
		ctx.fillStyle = '#1c1c1c';
		ctx.fillRect(0, 0, width, height);

		// Draw stars
		stars?.render(ctx);

		ctx.restore();
	}

	return (
		<canvas
			id="snakeGameCanvas"
			className="w-full h-full"
			width="400"
			height="300"
			ref={ref}
		/>
	);
}