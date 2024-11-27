'use client';

import { GameObject, Position } from "@/app/lib/game/types";
import { BORDER_SIZE, GRID_WIDTH, GRID_HEIGHT, GRID_SIZE } from "@/app/lib/game/consts";

// Valid input keys. These are KeyboardEvent.code values
enum InputMap {
	Up ="ArrowUp",
	Down = "ArrowDown",
	Right = "ArrowRight",
	Left = "ArrowLeft"
};

// For O(1) indexing
const inputSet = new Set<string>([
	InputMap.Up,
	InputMap.Down,
	InputMap.Left,
	InputMap.Right
]);

// For checking opposites
const opposites = new Map<string, string>([
	[InputMap.Up, InputMap.Down],
	[InputMap.Down, InputMap.Up],
	[InputMap.Left, InputMap.Right],
	[InputMap.Right, InputMap.Left],
]);

export default class Snake implements GameObject {
	segments: Array<Position> = [];
	// Looks bad but this is the code from the key event
	inputState: string = "ArrowUp";

	// Starting pos
	constructor(pos: Position) {
		const {x, y} = pos;

		// Create a snake that is three segments long
		for (let i = 0; i < 3; ++i) this.segments.push({ x: x, y: y+i });
	}

	handleInput(keyCode: string) {
		// Make sure this is a valid key
		if (inputSet.has(keyCode)) {
			// Make sure they player isn't trying to do a 180
			if (keyCode !== opposites.get(this.inputState)) {
				this.inputState = keyCode;
			}
		}
	}

	bindInput() {
		document.addEventListener("keydown", (e) => this.handleInput(e.code));
	}

	unbindInput() {
		document.removeEventListener("keydown", (e) => this.handleInput(e.code));
	}

	tick() {
		// Iterate from the back to the front copying down the next node. Skip head
		for (let i = this.segments.length - 1; i > 0; --i) {
			this.segments[i].x = this.segments[i-1].x;
			this.segments[i].y = this.segments[i-1].y;
		}
		// update the head and handle wrapping
		// TODO if you hit the wall you should die but implementing wrapping is easier for now
		const head = this.segments[0];
		const gridWidth = (GRID_WIDTH / GRID_SIZE)
		const gridHeight = (GRID_HEIGHT / GRID_SIZE);

		switch (this.inputState) {
			case InputMap.Up:
				head.y -= 1;
				if (head.y < 0) head.y += gridHeight;
				break;
			case InputMap.Down:
				head.y += 1;
				if (head.y >= gridHeight) head.y -= gridHeight;
				break;
			case InputMap.Left:
				head.x -= 1;
				if (head.x < 0) head.x += gridWidth;
				break;
			case InputMap.Right:
				head.x += 1;
				if (head.x >= gridWidth) head.x -= gridWidth;
				break;
		}
	}

	render(ctx: CanvasRenderingContext2D) {
		ctx.save();
		ctx.fillStyle = '#fff';

		this.segments.forEach((segment) => {
			const { x, y } = segment;
			ctx.fillRect(
				x*GRID_SIZE,
				y*GRID_SIZE,
				GRID_SIZE-BORDER_SIZE,
				GRID_SIZE-BORDER_SIZE
			);
		});

		ctx.restore();
	}
}