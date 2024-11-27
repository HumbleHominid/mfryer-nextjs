import Starfield from "@/app/lib/game/starfield";
import { GameObject } from "./types";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	components: Array<GameObject> = [];

	constructor(width: number, height: number, ) {
		this.width = width;
		this.height = height;
		/**
		 * Since we are using a component array, it's very important that we push things
		 * into the array in the correct order otherwise stuff will render on the
		 * wrong z-level in the canvas and it look bad
		 */
		const starfield = new Starfield(width, height);
		this.components.push(starfield);
	}

	tick(dt:number) {
		this.components.forEach((component) => component.tick(dt));
	}

	render(ctx: CanvasRenderingContext2D) {
		const width = ctx.canvas.width;
		const height = ctx.canvas.height;

		// Draw background
		ctx.clearRect(0, 0, width, height);

		// Draw a dark screen
		ctx.fillStyle = '#1c1c1c';
		ctx.fillRect(0, 0, width, height);

		// Render all our components
		this.components.forEach((component) => component.render(ctx));

		ctx.restore();
	}
}