const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLetters, guessedLetters, matchedLetters, totalGuesses, wordLength) {
	this.wordLetters = [];
	this.guessedLetters = [];
	this.matchedLetters = [];
	this.totalGuesses = 7;
	this.wordLength = Word.length;
	this.splitWord = function() {
		Word.split(" ")
		for (let i = 0; i < wordLength; i++) {
			wordLength[i].push("_ ");
		};
	};
};

module.exports = Letter;