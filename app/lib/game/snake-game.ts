import Starfield from "@/app/lib/game/starfield";
import { GameObject, Position, Renderable, Tickable } from "@/app/lib/game/types";
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

	ticking: Set<Tickable> = new Set<Tickable>();
	rendering: Set<Renderable> = new Set<Renderable>();

	score: number = 0;

	// TODO make state
	isGameOver: boolean = false;

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
		this.ticking.add(starfield);
		this.rendering.add(starfield);
		// initialize the apple spawner
		const appleSpawner = new AppleSpawner();
		this.appleSpawner = appleSpawner;
		// Player
		const playerX = Math.floor(width/GRID_SIZE/2);
		const playerY = Math.floor(height/GRID_SIZE/2);
		const snake = new Snake(
			new Position(playerX, playerY),
			appleSpawner.invalidateSpawn,
			appleSpawner.validateSpawn,
			this.handleGameover.bind(this)
		);
		this.snake = snake;
		this.ticking.add(snake);
		this.rendering.add(snake);

		// Apple
		const apple = appleSpawner.spawnApple();
		this.apple = apple;
		this.rendering.add(apple);
	}

	handleGameover() {
		this.ticking.delete(this.snake);
		this.isGameOver = true;
	}

	bindPlayerInput() { this.snake.bindInput(); }

	unbindPlayerInput() { this.snake.unbindInput(); }

	tick() {
		this.ticking.forEach((tickable) => tickable.tick());

		// After we tick everything do some game logic
		// Check if the player is on an apple
		if (this.snake.head?.equals(this.apple.pos)) {
			this.snake.eatApple();
			this.score += 1;
			// Do something with the score
			// Spawn a new apple
			this.rendering.delete(this.apple);
			this.apple = this.appleSpawner.spawnApple();
			this.rendering.add(this.apple);
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
			this.rendering.forEach((rendering) => rendering.render(ctx));
		}

		// Render game over screen
		if (this.isGameOver) {
			const centerX = Math.floor(ctx.canvas.width / 2);
			// Heading
			const headingSize = 72;
			const subHeadingSize = 20;
			const gap = 30;
			ctx.font = `${headingSize}px consolas`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'hanging';
			ctx.fillText('Game Over', centerX, gap);

			ctx.font = `${subHeadingSize}px consolas`;
			ctx.fillText(`Final Score: ${this.score}`, centerX, gap + headingSize, 300);
		}

		ctx.restore();
	}
}