import { Position, UI, ClickHandler } from "@/app/lib/game/types";
import { drawText } from "@/app/lib/game/ui/ui-helpers";
import { CANVAS_COLOR, DEFAULT_TEXT_COLOR, GRID_HEIGHT, GRID_WIDTH } from "@/app/lib/game/consts";
import Buttons from "@/app/lib/game/ui/buttons";

export type ScoreGetterHandler = () => number;

export default class UIGameOver implements UI {
	scoreGetter: ScoreGetterHandler = () => 0;

	buttons: Buttons = new Buttons();
	onPlayAgainClicked: Set<ClickHandler> = new Set<ClickHandler>;

	constructor() {
		// Make play again button
		{
			const buttonHeight = 50;
			const buttonScale = 0.75;
			this.buttons.add({
					width: 150,
					height: buttonHeight,
					scale: buttonScale,
					center: new Position(GRID_WIDTH / 2, GRID_HEIGHT - (buttonHeight * buttonScale) ),
					text: 'PLAY AGAIN'
				},
				() => this.onPlayAgainClicked.forEach((callback) => callback(), this)
			);
		}
	}

	bindScoreGetter(scoreGetter: ScoreGetterHandler) {
		this.scoreGetter = scoreGetter;
	}

	get score() { return this.scoreGetter(); }

	handleClick(e: MouseEvent) { this.buttons.handleClick(e); }

	bindOnPlayAgainClick(e: ClickHandler) {
		if (!this.onPlayAgainClicked.has(e)) this.onPlayAgainClicked.add(e);
	}

	unbindOnPlayAgainClick(e: ClickHandler) {
		if (this.onPlayAgainClicked.has(e)) this.onPlayAgainClicked.delete(e);
	}

	render(ctx: CanvasRenderingContext2D) {
		const gap = 15;
		const headingSize = 60;
		const subHeadingSize = 20;
		const centerX = Math.floor(ctx.canvas.width / 2);

		// Large Title
		{
			const gameoverText = 'Game Over';
			// shadow text
			drawText(ctx, {
				color: CANVAS_COLOR,
				text: gameoverText,
				pos: new Position(centerX + 3, gap + 3),
				fontHeight: headingSize,
				align: 'center'
			});

			// main text
			drawText(ctx, {
				color: DEFAULT_TEXT_COLOR,
				text: gameoverText,
				pos: new Position(centerX, gap),
				fontHeight: headingSize,
				align: 'center'
			});
		}

		// Score
		{
			const scoreText = `Final Score: ${this.score}`;
			// shadow text
			drawText(ctx, {
				color: CANVAS_COLOR,
				text: scoreText,
				pos: new Position(centerX + 2, headingSize + gap + 2),
				fontHeight: subHeadingSize,
				align: 'center'
			});

			// main text
			drawText(ctx, {
				color: DEFAULT_TEXT_COLOR,
				text: scoreText,
				pos: new Position(centerX, headingSize + gap),
				fontHeight: subHeadingSize,
				align: 'center'
			});
		}

		// buttons
		this.buttons.render(ctx);
	}
}