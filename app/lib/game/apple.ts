import { GameObject, Position } from "@/app/lib/game/types";
import { BORDER_SIZE, GRID_SIZE } from "@/app/lib/game/consts";

export default class Apple implements GameObject {
	pos: Position;

	constructor(pos: Position) {
		this.pos = pos;
	}

	tick() { }

	render(ctx: CanvasRenderingContext2D) {
		ctx.save();
		ctx.fillStyle = '#f00';

		const borderSize = BORDER_SIZE;
		let { x, y } = this.pos;
		x *= GRID_SIZE;
		y *= GRID_SIZE;

		ctx.fillRect(
			x+borderSize,
			y+borderSize,
			GRID_SIZE-(2*borderSize),
			GRID_SIZE-(2*borderSize)
		);

		ctx.restore();
	}
}