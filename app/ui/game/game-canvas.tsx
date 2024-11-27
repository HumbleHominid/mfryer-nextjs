'use client';

import { useEffect, useRef } from "react";
import SnakeGame from "@/app/lib/game/snake-game";
import { GRID_WIDTH, GRID_HEIGHT } from "@/app/lib/game/consts";

export default function GameCanvas() {
	const canvasRef = useRef(null);
	const renderIntervalRef = useRef<NodeJS.Timeout | null>(null); // TODO move to SnakeGame probably
	const gameRef = useRef<SnakeGame | null>(null);

	const getContext = (): CanvasRenderingContext2D | null => {
		if (!canvasRef.current) return null;
		const get2dContext = (el: HTMLCanvasElement) => el.getContext('2d');
		return get2dContext(canvasRef.current);
	}

	const render = () => {
		const ctx = getContext();
		if (!ctx) return;

		gameRef.current?.render(ctx);
	}

	useEffect(() => {
		const ctx = getContext();
		if (!ctx) return;

		// Set up the game
		gameRef.current = new SnakeGame(ctx.canvas.width, ctx.canvas.height);
		// Set up the game tick
		renderIntervalRef.current = setInterval(() => {
			gameRef.current?.tick();
			render();
		}, 50);

		// render immediately
		render();

		// Bind player listeners
		gameRef.current?.bindPlayerInput();

		return () => {
			if (renderIntervalRef.current !== null) clearInterval(renderIntervalRef.current);
			gameRef.current?.unbindPlayerInput();
		}
	}, [renderIntervalRef]);

	return (
		<canvas
			id="snakeGameCanvas"
			className="w-full h-full"
			width={GRID_WIDTH}
			height={GRID_HEIGHT}
			ref={canvasRef}
		/>
	);
}