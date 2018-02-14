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
		console.log(selectedWord.currentWord);
		console.log(wordLength)
		console.log("YOUR WORD: " + blankArray);
	};
};

const currentLetter = new Letter();

currentLetter.splitWord();

module.exports = Letter;