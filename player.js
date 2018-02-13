const inquirer = require('inquirer');

function Player(wordLetters, guessedLetters, matchedLetters, totalGuesses) {
	this.wordLetters = [];
	this.guessedLetters = [];
	this.matchedLetters = [];
	this.totalGuesses = 7;
}

module.exports = Player;