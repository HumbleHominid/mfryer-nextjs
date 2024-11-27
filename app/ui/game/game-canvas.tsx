'use client';

import { useEffect, useRef } from "react";
import SnakeGame from "@/app/lib/game/snake-game";

export default function GameCanvas() {
	const canvasRef = useRef(null);
	const renderIntervalRef = useRef<NodeJS.Timeout | null>(null); // TODO move to SnakeGame probably
	const gameRef = useRef<SnakeGame | null>(null);

	useEffect(() => {
		const getContext = (): CanvasRenderingContext2D | null => {
			if (!canvasRef.current) return null;
			const get2dContext = (el: HTMLCanvasElement) => el.getContext('2d');
			return get2dContext(canvasRef.current);
		}

		const ctx = getContext();
		if (!ctx) return;

		const render = () => {
			const ctx = getContext();
			if (!ctx) return;

			gameRef.current?.render(ctx);
		}

		gameRef.current = new SnakeGame(ctx.canvas.width, ctx.canvas.height);
		renderIntervalRef.current = setInterval(() => render(), 50);

		// render immediately as well
		render();

		return () => {
			if (renderIntervalRef.current !== null) clearInterval(renderIntervalRef.current);
		}
	}, [renderIntervalRef]);

	return (
		<canvas
			id="snakeGameCanvas"
			className="w-full h-full"
			width="400"
			height="300"
			ref={canvasRef}
		/>
	);
}