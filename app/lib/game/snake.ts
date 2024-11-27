import { GameObject, Position } from "@/app/lib/game/types";
import { BORDER_SIZE, GRID_WIDTH, GRID_HEIGHT, GRID_SIZE } from "@/app/lib/game/consts";

export default class Snake implements GameObject {
	segments: Array<Position>;

	// Starting pos
	constructor(pos: Position) {
		this.segments = [];
		const {x, y} = pos;

		// Create a snake that is three segments long
		for (let i = 0; i < 3; ++i) this.segments.push({ x: x, y: y+i });
	}

	tick() {
		// Allowing wrapping for now since it makes my life easier in the short term
		// TODO Create an "input direction" component to handle which way the snake should move.
		// Assume up for now

		// Iterate from the back to the front copying down the next node. Skip head
		for (let i = this.segments.length - 1; i > 0; --i) {
			this.segments[i].x = this.segments[i-1].x;
			this.segments[i].y = this.segments[i-1].y;
		}
		// update the head
		const head = this.segments[0];
		head.y -= 1;

		// Do wrapping
		const gridWidth = (GRID_WIDTH / GRID_SIZE)
		const gridHeight = (GRID_HEIGHT / GRID_SIZE);
		// Do x wrapping
		if (head.x < 0) head.x += gridWidth;
		else if (head.x > gridWidth) head.x -= gridWidth;
		// Do y wrapping
		if (head.y < 0) head.y += gridHeight;
		else if (head.y > gridHeight) head.y -= gridHeight;
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