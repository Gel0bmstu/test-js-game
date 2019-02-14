imporn { Screen } from "./js/screen"; 

export class Game {
	constructor() {
		this.screen = new Screen(300,300);
	}

	frame(time) {
		requestAnimationFrame(time => this.frame(time));
	}

	run () {
		requestAnimationFrame(time => this.frame(time));
	}
}