const inquirer = require('inquirer');
const Word = require('./word.js');

function Letter(wordLength) {
	this.wordLength = Word.length;
	this.splitWord = function() {
		Word.split(" ")
		for (let i = 0; i < wordLength; i++) {
			wordLength[i].push("_ ");
		};
	};
	this.printWord = function() {
		console.log("YOUR WORD" + splitWord());
	}
};

module.exports = Letter;