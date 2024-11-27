import GameCanvas from "@/app/ui/game/game-canvas";

/**
 * This game is snake. We will have high scores saved in both local storage
 * and also have a postgreSQL database set up so save global
 * scores. Global high scores can use mac address.
 */
export default function Page() {

	return (
		<>
			<h1 className="text-6xl mb-6">Snake Game - WIP</h1>
			<div className="flex justify-center w-full bg-gradient-to-r from-transparent via-slate-900 to-transparent">
				<div>
					<GameCanvas />
				</div>
			</div>
			<p className="mt-4">
				Use arrow keys to move the snake. Refresh the page to try again! Good luck!
			</p>
		</>
	);
}