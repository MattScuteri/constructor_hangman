const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = new Word(Word.currentWord);
	this.wordLength = selectedWord.length;
	this.splitWord = function() {
		selectedWord = selectedWord + "";
		select = selectedWord.split("");
		for (let i = 0; i < select.Length; i++) {
			select[i].push("_ ");
		};
	};
	this.printWord = function() {
		console.log("YOUR WORD: " + this.splitWord());
	}
};

const currentLetter = new Letter(Letter);

currentLetter.printWord();

module.exports = Letter;