import { GameObject, Position } from "@/app/lib/game/types";
import { BORDER_SIZE, GRID_SIZE } from "@/app/lib/game/consts";

export default class Snake implements GameObject {
	segments: Array<Position>;

	// Starting pos
	constructor(pos: Position) {
		this.segments = [];
		const {x, y} = pos;

		// Create a snake that is three segments long
		for (let i = 0; i < 3; ++i) this.segments.push({ x: x, y: y+i });
	}

	tick() { }

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