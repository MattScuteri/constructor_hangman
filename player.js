const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');

function Player(wordLetters, guessedLetters, matchedLetters, totalGuesses) {
	this.wordLetters = [];
	this.guessedLetters = [];
	this.matchedLetters = [];
	this.totalGuesses = 15;
	this.startGame = function() {
		this.wordLetters = [];
		this.guessedLetters = [];
		this.matchedLetters = [];
		this.totalGuesses = 15;

		let prompt = inquirer.prompt([
		{
			name: "userLetter",
			message: "Select a letter!",
			type: "input",

		}]).then(function(response) {
			response.guesses();
		})
	
	};
	this.addMatchLetters = function(userLetter) {
		for (let i = 0; i < this.wordLength.length; i++) {
			if ((userLetter === this.wordLength[i]) && (this.matchedLetters.indexOf(userLetter) === -1)) {
				this.matchedLetters.push(userLetter)
				console.log(this.matchedLetters);
			};
		};
	};
	this.wordView = function(userLetter) {
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
};

const userLetter = new Player();

userLetter.startGame();

module.exports = Player;