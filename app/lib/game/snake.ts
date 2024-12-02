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

	moveIn: (pos: Position) => void;
	moveOut: (pos: Position) => void;

	handleDies: () => void;

	// Starting pos
	constructor(
		pos: Position,
		moveIn: (pos: Position) => void,
		moveOut: (pos: Position) => void,
		handleDies: () => void
	) {
		const {x, y} = pos;
		this.moveIn = moveIn;
		this.moveOut = moveOut;
		this.handleDies = handleDies;

		// Create a snake that is three segments long
		const initialLength = 3;
		for (let i = 0; i < initialLength; ++i) {
			const segment = new Position(x, y+i);
			// Invalidate the new segment in the apple spawner
			this.moveIn(segment);
			this.segments.push(segment);
		}
	}

	get head() {
		return this.segments.length > 0 ? this.segments[0] : null;
	}

	eatApple() {
		// Duplicate the tail. It will overlap for 1 tick but it will sort itself out
		const tail = this.segments.at(-1);
		if (tail) this.segments.push(new Position(tail.x, tail.y));
	}

	handleInput(keyCode: string) {
		// Make sure this is a valid key and isn't trying to do a 180
		if (inputSet.has(keyCode) && keyCode !== opposites.get(this.inputState)) {
			this.inputState = keyCode;
		}
	}

	bindInput() {
		document.addEventListener("keydown", (e) => this.handleInput(e.code));
	}

	unbindInput() {
		document.removeEventListener("keydown", (e) => this.handleInput(e.code));
	}

	tick() {
		// Before we move, add the last segment back to the apple spawner
		const tail = this.segments.at(-1);
		if (tail) this.moveOut(tail);

		// Make a temp new head first so that we can check it against the rest of our
		// segments while we are updating them
		// TODO if you hit the wall you should die but implementing wrapping is easier for now
		const head = new Position(this.segments[0].x, this.segments[0].y);
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

		// Track if we have looped on ourself at some point
		let didLoop = false;
		// Iterate from the back to the front copying down the next node. Skip head
		for (let i = this.segments.length - 1; i > 0; --i) {
			this.segments[i].x = this.segments[i-1].x;
			this.segments[i].y = this.segments[i-1].y;

			if (head.x === this.segments[i].x && head.y === this.segments[i].y) didLoop = true;
		}

		// Update the head
		this.segments[0] = head;
		this.moveIn(head);

		// Call game over if we should
		if (didLoop) this.handleDies();
	}

	render(ctx: CanvasRenderingContext2D) {
		ctx.save();
		ctx.fillStyle = '#fff';
		const size = GRID_SIZE-(2*BORDER_SIZE);

		this.segments.forEach((segment) => {
			const { x, y } = segment;
			ctx.fillRect(
				x*GRID_SIZE+BORDER_SIZE,
				y*GRID_SIZE+BORDER_SIZE,
				size,
				size
			);
		});

		ctx.restore();
	}
}