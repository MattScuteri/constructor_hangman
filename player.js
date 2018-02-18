const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');

//build player constructor and put inquirer prompt after, calling functions that way

function Player(wordLetters, guessedLetters, matchedLetters, totalGuesses) {
	this.startGame = function(response) {
		this.wordLetters = [];
		this.guessedLetters = [];
		this.matchedLetters = [];
		this.totalGuesses = 15;
		addMatchLetters(response);

	this.addMatchLetters = function(response) {
		for (let i = 0; i < this.wordLength.length; i++) {
			if ((userLetter === this.wordLength[i]) && (this.matchedLetters.indexOf(userLetter) === -1)) {
				this.matchedLetters.push(userLetter)
				console.log(this.matchedLetters);
				wordView(response);
			};
		};
	};
	this.wordView = function(response) {
		let blankArray = "";
		for (let i = 0; i < this.wordLength.length; i++) {
			if(this.matchedLetters.indexOf(this.wordLength[i]) !== -1) {
				blankArray += this.wordLength[i];
				console.log(blankArray);
				updateWins(response);
			};
		};
	};
	this.updateWins = function(response) {
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

	}
	
};

let prompt = inquirer.prompt([
	{
		name: "userLetter",
		message: "Select a letter!",
		type: "input",

	}]).then(function(response) {
		const userLetter = response;

		console.log(userLetter);

		for (let i = 0; i < userLetter.length; i++) {
			userLetter[i].startGame();
			userLetter[i].matchedLetters();
			userLetter[i].wordView();
			userLetter[i].updateWins();
		}
		
	})

module.exports = Player;