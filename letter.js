const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = new Word (this.currentWord);	
	this.blankArray = [];
	this.letterArray = [];
}

Letter.prototype.splitWord = function() {
	for (let i = 0; i < this.selectedWord.length; i++) {
		this.blankArray[i] = "_ "
	}
}

const currentLetter = new Letter();

currentLetter.splitWord();

module.exports = Letter;