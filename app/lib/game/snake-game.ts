import Starfield from "@/app/lib/game/starfield";
import { GameObject, Position } from "@/app/lib/game/types";
import Snake from "@/app/lib/game/snake";
import { GRID_SIZE } from "@/app/lib/game/consts";
import AppleSpawner from "@/app/lib/game/apple-spawner";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	components: Array<GameObject> = [];
	// This is a prop so we can bind/unbind input
	snake: Snake;
	// Apple spawner
	appleSpawner: AppleSpawner;

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
		// initialize the apple spawner
		const appleSpawner = new AppleSpawner();
		this.appleSpawner = appleSpawner;
		// Player
		const playerX = Math.floor(width/GRID_SIZE/2);
		const playerY = Math.floor(height/GRID_SIZE/2);
		const snake = new Snake(
			new Position(playerX, playerY),
			appleSpawner.invalidateSpawn,
			appleSpawner.validateSpawn
		);
		this.snake = snake;

		// Apple
		const apple = appleSpawner.spawnApple();
		this.components.push(apple);

		// Want snake to render after apple
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