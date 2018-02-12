const inquirer = require('inquirer');

function Word(wordInPlay) {
	this.wordInPlay = Math.floor(Math.random()*fiftyStates.length);
};

module.exports = Word;
