import Starfield from "@/app/lib/game/starfield";
import { GameObject, Position } from "@/app/lib/game/types";
import Snake from "@/app/lib/game/snake";
import { GRID_SIZE } from "@/app/lib/game/consts";
import AppleSpawner from "@/app/lib/game/apple-spawner";
import Apple from "@/app/lib/game/apple";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	starfield: Starfield;
	snake: Snake;
	apple: Apple;
	// Apple spawner
	appleSpawner: AppleSpawner;

	score: number = 0;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		/**
		 * Since we are using a component array, it's very important that we push things
		 * into the array in the correct order otherwise stuff will render on the
		 * wrong z-level in the canvas and it look bad
		 */
		const starfield = new Starfield(width, height);
		this.starfield = starfield;
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
		this.apple = apple;
	}

	bindPlayerInput() { this.snake.bindInput(); }

	unbindPlayerInput() { this.snake.unbindInput(); }

	tick() {
		this.starfield.tick();
		this.snake.tick();

		// After we tick everything do some game logic
		// Check if the player is on an apple
		if (this.snake.head?.equals(this.apple.pos)) {
			this.snake.eatApple();
			this.score += 1;
			// Do something with the score
			// Spawn a new apple
			this.apple = this.appleSpawner.spawnApple();
		}
	}

	render(ctx: CanvasRenderingContext2D) {
		const width = ctx.canvas.width;
		const height = ctx.canvas.height;

		// Draw background
		{
			ctx.clearRect(0, 0, width, height);

			ctx.fillStyle = '#1c1c1c';
			ctx.fillRect(0, 0, width, height);
		}

		// Draw the score
		{
			const gap = 5;
			const fontHeight = 12;

			ctx.font = `${fontHeight}px consolas`;
			ctx.fillStyle = '#eee';
			ctx.textAlign = 'start';
			ctx.textBaseline = 'hanging';
			ctx.fillText(`Score: ${this.score}`, gap, gap);
		}

		// Render all our components
		{
			this.starfield.render(ctx);
			this.apple.render(ctx);
			this.snake.render(ctx);
		}

		ctx.restore();
	}
}