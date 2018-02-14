const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = new Word (this.currentWord);	
	let wordLength = selectedWord.length;
	this.splitWord = function() {
		// wordLength = wordLength + "";
		select = this.wordLength.split("");
		console.log(this);
		for (let i = 0; i < select.length; i++) {
			select[i].push("_ ");
		};
	};
	this.printWord = function() {
		console.log("YOUR WORD: " + this.splitWord());
	}
	console.log(selectedWord.currentWord);
};

const currentLetter = new Letter();

currentLetter.printWord();

module.exports = Letter;