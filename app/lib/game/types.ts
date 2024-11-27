export class Position {
	x: number;
	y: number;
	constructor(x:number, y:number) { this.x = x; this.y = y; }
	toString():string { return `${this.x},${this.y}`; }
};

export interface Tickable {
	tick(): void;
};

export interface Renderable {
	render(ctx: CanvasRenderingContext2D): void;
};

export type GameObject = Tickable & Renderable;