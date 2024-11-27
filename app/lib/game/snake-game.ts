import Starfield from "@/app/lib/game/starfield";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	starfield: Starfield;

	constructor(width: number, height: number, ) {
		this.width = width;
		this.height = height;
		this.starfield = new Starfield(width, height);
	}

	tick() {
		this.starfield.tick();
	}

	render(ctx: CanvasRenderingContext2D) {
		const width = ctx.canvas.width;
		const height = ctx.canvas.height;

		// Draw background
		ctx.clearRect(0, 0, width, height);

		// Draw a dark screen
		ctx.fillStyle = '#1c1c1c';
		ctx.fillRect(0, 0, width, height);

		// Draw stars
		this.starfield.render(ctx);

		ctx.restore();
	}
}