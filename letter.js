const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = new Word (this.currentWord);	
	let blankArray = [];
	this.splitWord = function() {
		let wordLength = selectedWord.currentWord.split("");
		for (let i = 0; i < wordLength.length; i++) {
			blankArray.push("_ ");
		};
	};
	this.printWord = function() {
		console.log("YOUR WORD: " + this.splitWord());
	}
	console.log(selectedWord.currentWord);
	console.log(wordLength)
};

const currentLetter = new Letter();

currentLetter.printWord();

module.exports = Letter;