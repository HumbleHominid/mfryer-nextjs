export type Position = {
	x: number;
	y: number;
};

export interface Tickable {
	tick(): void;
};

export interface Renderable {
	render(ctx: CanvasRenderingContext2D): void;
};

export type GameObject = Tickable & Renderable;