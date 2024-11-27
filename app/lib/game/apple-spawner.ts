import { GRID_SIZE, GRID_WIDTH, GRID_HEIGHT } from "@/app/lib/game/consts";
import Apple from "@/app/lib/game/apple";
import { Position } from "@/app/lib/game/types";

export default class AppleSpawner {
	static validSpawns: Set<string> = new Set<string>();
	private static isInitialized: boolean = false;

	constructor() {
		this.init();
	}

	private init() {
		if (AppleSpawner.isInitialized) return;

		const gridWidth = GRID_WIDTH/GRID_SIZE;
		const gridHeight = GRID_HEIGHT/GRID_SIZE;
		for (let x = 0; x < gridWidth; ++x) {
			for (let y = 0; y <gridHeight; ++y) {
				AppleSpawner.validSpawns.add(`${x},${y}`);
			}
		}

		AppleSpawner.isInitialized = true;
	}

	spawnApple() {
		if (!AppleSpawner.isInitialized) return new Apple(new Position(0, 0));
		// Get a random valid position
		const spawnsArr = Array.from(AppleSpawner.validSpawns);
		const spawn = spawnsArr[Math.floor(Math.random() * spawnsArr.length)];
		const x = parseInt(spawn.split(',')[0]);
		const y = parseInt(spawn.split(',')[1]);

		return new Apple(new Position( x, y ));
	}

	validateSpawn(spawn: Position) {
		if (!AppleSpawner.isInitialized) return;

		const str = spawn.toString();
		if (!AppleSpawner.validSpawns.has(str)) AppleSpawner.validSpawns.add(str);
	}

	invalidateSpawn(spawn: Position) {
		if (!AppleSpawner.isInitialized) return;

		const str = spawn.toString();
		if (AppleSpawner.validSpawns.has(str)) AppleSpawner.validSpawns.delete(str);
	}
}