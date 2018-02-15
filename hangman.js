const inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require("./letter.js");
const Player = require("./player.js");

let prompt = inquirer.prompt([
	{
		name: "userLetter",
		message: "Select a letter!",
		type: "input",
	}
	]).then(function(response) {

	});