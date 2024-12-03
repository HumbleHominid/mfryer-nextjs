import Starfield from "@/app/lib/game/starfield";
import { GameState, Position, Renderable, Tickable, UI } from "@/app/lib/game/types";
import Snake from "@/app/lib/game/snake";
import { CANVAS_COLOR, GRID_SIZE } from "@/app/lib/game/consts";
import AppleSpawner from "@/app/lib/game/apple-spawner";
import Apple from "@/app/lib/game/apple";
import StateHandler from "@/app/lib/game/state-handler";
import UIFactory from "@/app/lib/game/ui/ui-factory";
import UIGame from "@/app/lib/game/ui/screens/game";
import UIGameOver from "@/app/lib/game/ui/screens/game-over";

/**
 * The actual snake game
 */
export default class SnakeGame {
	width: number;
	height: number;

	starfield: Starfield;
	// Game Objects
	snake: Snake = new Snake(new Position(0, 0), () => {}, () => {}, () => {} );
	apple: Apple = new Apple(new Position(0, 0));
	appleSpawner: AppleSpawner = new AppleSpawner();

	ui: UI | null = null;

	ticking: Set<Tickable> = new Set<Tickable>();
	rendering: Set<Renderable> = new Set<Renderable>();

	_score: number = 0;

	stateHandler: StateHandler = new StateHandler();
	get isGameOver() { return this.stateHandler.state === GameState.GAMEOVER; }

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		/**
		 * Since we are using a component array, it's very important that we push things
		 * into the array in the correct order otherwise stuff will render on the
		 * wrong z-level in the canvas and it look bad
		 */
		const starfield = new Starfield(this.width, this.height);
		this.starfield = starfield;
		this.ticking.add(starfield);
		this.rendering.add(starfield);

		// Bind UI
		this.stateHandler.bindOnStateChange(this.handleStateChange.bind(this));
		this.handleStateChange(this.stateHandler.state, GameState.TITLE); // HACK
	}

	handleStateChange(newState: GameState, oldState: GameState) {
		// Cleanup old UI
		if (this.ui) {
			// Remove the old ui from the rendering list if it's there
			if (this.rendering.has(this.ui)) this.rendering.delete(this.ui);
		}

		// Cleanup stuff from the old state if we have to
		switch (oldState) {
			case GameState.PLAYING:
				this.unbindPlayerInput();
				break;
		}

		// Create new UI and update the references
		const newUI = UIFactory.makeUI(newState, this.stateHandler);

		// Any additional setup we need to do here that can't be done in the factory for whatever reason
		switch (this.stateHandler.state) {
			case GameState.PLAYING:
				// If we have dangling references in the render pipeline, remove them
				[this.snake, this.apple].forEach((item) => {
					if (this.rendering.has(item)) this.rendering.delete(item);
				});
				// Set up the UI
				const gameUI = newUI as UIGame;
				gameUI.bindScoreGetter(() => this.score);
				// Set up the game
				if (oldState !== GameState.PAUSED) {
					this._score = 0;
					// initialize the apple spawner
					const appleSpawner = new AppleSpawner();
					this.appleSpawner = appleSpawner;
					// Player
					const playerX = Math.floor(this.width/GRID_SIZE/2);
					const playerY = Math.floor(this.height/GRID_SIZE/2);
					const snake = new Snake(
						new Position(playerX, playerY),
						appleSpawner.invalidateSpawn.bind(appleSpawner),
						appleSpawner.validateSpawn.bind(appleSpawner),
						() => this.stateHandler.setState(GameState.GAMEOVER)
					);
					this.snake = snake;
					this.ticking.add(snake);
					this.rendering.add(snake);

					// Apple
					const apple = appleSpawner.spawnApple();
					this.apple = apple;
					this.rendering.add(apple);
				}

				this.bindPlayerInput();
				break;
			case GameState.GAMEOVER:
				// Stop ticking the snake so it "freezes" on screen. keep the stars ticking
				if (this.ticking.has(this.snake)) this.ticking.delete(this.snake);
				const GameOverUI = newUI as UIGameOver;
				GameOverUI.bindScoreGetter(() => this.score);
				break;
		}

		this.ui = newUI;
		this.rendering.add(newUI);
	}

	get score() { return this._score; }

	getScore() { return this.score; }

	handleGameover() {
		this.ticking.delete(this.snake);
	}

	bindPlayerInput() { this.snake.bindInput(); }

	unbindPlayerInput() { this.snake.unbindInput(); }

	handleClick(e: MouseEvent) {
		this.ui?.handleClick(e);
	}

	tick() {
		this.ticking.forEach((tickable) => tickable.tick());

		/**
		 * Player eating apple logic. Only do this if we are running the game
		 */
		if (this.stateHandler.state === GameState.PLAYING) {
			if (this.snake.head?.equals(this.apple.pos)) {
				this.snake.eatApple();
				this._score += 1;
				// Do something with the score
				// Spawn a new apple
				this.rendering.delete(this.apple);
				this.apple = this.appleSpawner.spawnApple();
				this.rendering.add(this.apple);
			}
		}
	}

	render(ctx: CanvasRenderingContext2D) {
		const width = ctx.canvas.width;
		const height = ctx.canvas.height;

		// Draw background
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = CANVAS_COLOR;
		ctx.fillRect(0, 0, width, height);

		// Render all our components
		this.rendering.forEach((rendering) => rendering.render(ctx));

		ctx.restore();
	}
}