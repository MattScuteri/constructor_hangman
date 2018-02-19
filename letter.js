const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = new Word (this.currentWord);	
	let blankArray = [];
	this.splitWord = function() {
		let wordLength = selectedWord.currentWord.split("");
		console.log(wordLength)
	};
};

const currentLetter = new Letter();

currentLetter.splitWord();

module.exports = Letter;