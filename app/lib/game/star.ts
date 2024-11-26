export default class Star {
	x: number;
	y: number;
	isAlive: boolean = false;
	timeout: NodeJS.Timeout | null = null;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	toString() : string {
		return `${this.x},${this.y}`;
	}

	init() {
		// Minimum time in seconds a star can be on for
		const minTime = 5;
		// Maximum time in seconds a star can be on for
		const maxTime = 10;
		// Time in seconds that this star is alive for
		const displayTime = (minTime + Math.floor(Math.random() * (maxTime - minTime)));

		this.isAlive = true;
		this.timeout = setTimeout(() => {
			this.isAlive = false;
		}, displayTime * 1000);
	}
}