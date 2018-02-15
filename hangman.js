const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require("./letter.js");
// const Player = require("./player.js");

let prompt = inquirer.prompt([
	{
		name: "userLetter",
		message: "Select a letter!",
		type: "input",
	}
	]).then(function(response) {
		this.wordLetters = [];
		this.guessedLetters = [];
		this.matchedLetters = [];
		this.totalGuesses = 15;
		this.startGame = function() {
			this.wordLetters = [];
			this.guessedLetters = [];
			this.matchedLetters = [];
			this.totalGuesses = 15;
		};
		this.guesses = function(response) {
			if ((this.guessedLetters.indexOf(response) === -1) && (this.wordLetters.indexOf(response) === -1)) {
				this.guessedLetters.push(response)
				this.totalGuesses--;
				console.log(response + ", ");
			}
		};
		this.addMatchLetters = function(response) {
			for (let i = 0; i < this.wordLength.length; i++) {
				if ((response === this.wordLength[i]) && (this.matchedLetters.indexOf(response) === -1)) {
					this.matchedLetters.push(response)
					console.log(this.matchedLetters);
				};
			};
		};
		this.wordView = function(response) {
			let blankArray = "";
			for (let i = 0; i < this.wordLength.length; i++) {
				if(this.matchedLetters.indexOf(this.wordLength[i]) !== -1) {
					blankArray += this.wordLength[i];
					console.log(blankArray);
				};
			};
		};
		this.updateWins = function() {
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
});

	userLetter.startGame();
	userLetter.guesses();
	userLetter.addMatchLetters();
	userLetter.wordView();
	userLetter.updateWins();
