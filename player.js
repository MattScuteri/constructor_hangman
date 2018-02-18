const inquirer = require('inquirer');
const Letter = require('./letter.js');
const Word = require('./word.js');

//build player constructor and put inquirer prompt after, calling functions that way

function Player(wordLetters, guessedLetters, matchedLetters, totalGuesses) {
	this.wordLetters = [];
	this.guessedLetters = [];
	this.matchedLetters = [];
	this.totalGuesses = 15;
};

module.exports = Player;