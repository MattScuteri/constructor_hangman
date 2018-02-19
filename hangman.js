const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require("./letter.js");
const Player = require("./player.js");

function startGame() {
	let prompt = inquirer.prompt([
		{
			name: "letterInput",
			message: "Select a letter!",
			type: "input"

		}]).then(function(response) {
			console.log(response)

			const userLetter = response['letterAnswer'];

			console.log(userLetter)

			for (let i = 0; i < userLetter.length; i++) {
				addMatchLetters(userLetter[i]);
				wordView(userLetter[i]);
				updateWins(userLetter[i]);
			};
		})
};

function addMatchLetters() {
	for (let i = 0; i < this.wordLength.length; i++) {
		if ((response === this.wordLength[i]) && (this.matchedLetters.indexOf(response) === -1)) {
			this.matchedLetters.push(response)
			console.log(this.matchedLetters);
			wordView();
		};
	};
};
	
function wordView() {
	let blankArray = "";
	for (let i = 0; i < this.wordLength.length; i++) {
		if(this.matchedLetters.indexOf(this.wordLength[i]) !== -1) {
			blankArray += this.wordLength[i];
			console.log(blankArray);
			updateWins();
		};
	};
};

function updateWins() {
	let win;
		if (this.matchedLetters.length === 0) {
			win = false;
		} else {
			win = true;
		};
		for (let i = 0; i < this.wordLength.length; i++) {
			if (this.matchedLetters.indexOf(this.wordLength[i]) === -1) {
				win = false
		};
		};
		if (win) {
			this.wins = this.wins +1;
			console.log("WINS: " + this.wins);
		}
};

startGame();