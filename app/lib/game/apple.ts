import { GameObject, Position } from "@/app/lib/game/types";

export default class Apple implements GameObject {
	pos: Position;
	size: number;

	constructor(pos: Position, size: number) {
		this.pos = pos;
		this.size = size;
	}

	tick() { }

	render(ctx: CanvasRenderingContext2D) {
		ctx.save();
		ctx.fillStyle = '#f00';

		const borderSize = 1;
		let { x, y } = this.pos;
		x *= this.size;
		y *= this.size;

		ctx.fillRect(x+borderSize, y+borderSize, this.size-(2*borderSize), this.size-(2*borderSize));

		ctx.restore();
	}
}