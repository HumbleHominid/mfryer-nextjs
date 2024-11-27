import Starfield from "@/app/lib/game/starfield";
import { GameObject } from "@/app/lib/game/types";
import Apple from "@/app/lib/game/apple";
import Snake from "@/app/lib/game/snake";
import { GRID_SIZE } from "@/app/lib/game/consts";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	components: Array<GameObject> = [];
	// This is a prop so we can bind/unbind input
	snake: Snake;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		/**
		 * Since we are using a component array, it's very important that we push things
		 * into the array in the correct order otherwise stuff will render on the
		 * wrong z-level in the canvas and it look bad
		 */
		const starfield = new Starfield(width, height);
		this.components.push(starfield);
		// Have to figure out how to make this a grid..
		const applePos = {
			x: Math.floor(Math.random()*(width/GRID_SIZE)),
			y: Math.floor(Math.random()*(height/GRID_SIZE)),
		};
		const apple = new Apple(applePos);
		this.components.push(apple);
		// Player
		const playerX = Math.floor(width/GRID_SIZE/2);
		const playerY = Math.floor(height/GRID_SIZE/2);
		const snake = new Snake({ x: playerX, y: playerY });
		this.snake = snake;
		this.components.push(snake);
	}

	bindPlayerInput() { this.snake.bindInput(); }

	unbindPlayerInput() { this.snake.unbindInput(); }

	tick() {
		this.components.forEach((component) => component.tick());
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