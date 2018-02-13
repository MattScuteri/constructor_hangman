const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	let selectedWord = Word.passWord();	
	this.wordLength = selectedWord.length;
	this.splitWord = function() {
		this.wordLength = this.wordLength + "";
		select = this.wordLength.split("");
		for (let i = 0; i < select.Length; i++) {
			select[i].push("_ ");
		};
	};
	this.printWord = function() {
		console.log("YOUR WORD: " + this.splitWord());
	}
	console.log(selectedWord);
};

const currentLetter = new Letter;

currentLetter.printWord();

module.exports = Letter;