'use client';

import { useEffect, useRef } from "react";
import SnakeGame from "@/app/lib/game/snake-game";

export default function GameCanvas() {
	const ref = useRef(null);
	let renderInterval: NodeJS.Timeout;
	let game: SnakeGame | null = null;

	useEffect(() => {
		const getContext = (): CanvasRenderingContext2D | null => {
			if (!ref.current) return null;
			const get2dContext = (el: HTMLCanvasElement) => el.getContext('2d');
			return get2dContext(ref.current);
		}

		const ctx = getContext();
		if (!ctx) return;

		const render = () => {
			const ctx = getContext();
			if (!ctx) return;

			game?.render(ctx);
		}

		game = new SnakeGame(ctx.canvas.width, ctx.canvas.height);
		renderInterval = setInterval(() => render(), 50);

		// render immediately as well
		render();

		return () => {
			clearInterval(renderInterval);
		}
	}, []);

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